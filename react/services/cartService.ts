import type { CheckoutSession } from '@vtex/api';

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  name: string;
  imageUrl?: string;
  skuId: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  orderFormId?: string;
}

interface AddToCartParams {
  skuId: string;
  quantity: number;
  salesChannel?: string;
}

interface UpdateCartItemParams {
  itemIndex: number;
  quantity: number;
}

/**
 * Interfaz del servicio de carrito.
 * Aplicamos el principio de Dependency Inversion (D de SOLID):
 * dependemos de abstracciones (interfaz) y no de implementaciones concretas.
 * Esto permite cambiar la implementación sin afectar los consumidores del servicio.
 */
export interface ICartService {
  getCart(): Promise<Cart>;
  addItem(params: AddToCartParams): Promise<Cart>;
  updateItem(params: UpdateCartItemParams): Promise<Cart>;
  removeItem(itemIndex: number): Promise<Cart>;
  clearCart(): Promise<void>;
}

/**
 * Implementación del servicio de carrito.
 * Sigue el principio de Responsabilidad Única (S de SOLID):
 * esta clase solo se encarga de la interacción con la API del carrito.
 */
export class CartService implements ICartService {
  private readonly baseUrl: string;
  private readonly headers: Headers;

  constructor() {
    this.baseUrl = '/api/checkout/pub/orderforms';
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
  }

  private async fetchWithAuth<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.headers,
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  private transformToCart(orderForm: any): Cart {
    const items = (orderForm.items || []).map((item: any, index: number) => ({
      id: item.id || `item-${index}`,
      quantity: item.quantity,
      price: item.price / 100,
      name: item.name,
      imageUrl: item.imageUrl,
      skuId: item.skuId,
    }));

    const totalItems = items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0);

    return {
      items,
      totalItems,
      totalPrice,
      orderFormId: orderForm.orderFormId,
    };
  }

  async getCart(): Promise<Cart> {
    const orderFormId = this.getOrderFormId();
    const url = orderFormId 
      ? `${this.baseUrl}/${orderFormId}`
      : `${this.baseUrl}`;
    
    const orderForm = await this.fetchWithAuth<any>(url);
    return this.transformToCart(orderForm);
  }

  async addItem(params: AddToCartParams): Promise<Cart> {
    const orderFormId = this.getOrderFormId();
    const { skuId, quantity, salesChannel = '1' } = params;

    const body = {
      orderItems: [{
        id: parseInt(skuId, 10),
        quantity,
        salesChannel,
      }],
    };

    const url = orderFormId
      ? `${this.baseUrl}/${orderFormId}/items`
      : `${this.baseUrl}/items`;

    const orderForm = await this.fetchWithAuth<any>(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    return this.transformToCart(orderForm);
  }

  async updateItem(params: UpdateCartItemParams): Promise<Cart> {
    const orderFormId = this.getOrderFormId();
    if (!orderFormId) {
      throw new Error('No hay orden activa para actualizar');
    }

    const { itemIndex, quantity } = params;
    const url = `${this.baseUrl}/${orderFormId}/items/${itemIndex}`;

    const orderForm = await this.fetchWithAuth<any>(url, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    });

    return this.transformToCart(orderForm);
  }

  async removeItem(itemIndex: number): Promise<Cart> {
    const orderFormId = this.getOrderFormId();
    if (!orderFormId) {
      throw new Error('No hay orden activa para eliminar items');
    }

    const url = `${this.baseUrl}/${orderFormId}/items/${itemIndex}`;
    const orderForm = await this.fetchWithAuth<any>(url, {
      method: 'DELETE',
    });

    return this.transformToCart(orderForm);
  }

  async clearCart(): Promise<void> {
    const orderFormId = this.getOrderFormId();
    if (!orderFormId) {
      return;
    }

    const url = `${this.baseUrl}/${orderFormId}/items`;
    await this.fetchWithAuth(url, {
      method: 'DELETE',
    });
  }

  private getOrderFormId(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('orderFormId');
  }
}

/**
 * Instancia singleton del servicio.
 * Aplicamos el principio de Inyección de Dependencias para facilitar
 * el testing y cumplir con el principio de Inversión de Dependencias.
 */
export const cartService = new CartService();