import type { Product, SKU } from '@vtex/api';

export interface ProductSummary {
  productId: string;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
  skuId: string;
  brand: string;
  categoryId: string;
}

interface ProductSearchParams {
  query?: string;
  category?: string;
  brand?: string;
  priceRange?: { min: number; max: number };
  page?: number;
  pageSize?: number;
  sortBy?: 'price' | 'name' | 'relevance';
  sortOrder?: 'asc' | 'desc';
}

interface ProductSearchResponse {
  products: ProductSummary[];
  totalResults: number;
  page: number;
  pageSize: number;
}

/**
 * Interfaz del servicio de productos.
 * Define el contrato que debe implementar cualquier proveedor de productos.
 * Cumple con el principio de Segregación de Interfaces (I de SOLID):
 * los consumidores solo dependen de los métodos que utilizan.
 */
export interface IProductService {
  getProductById(productId: string): Promise<Product | null>;
  getProductBySlug(slug: string): Promise<Product | null>;
  searchProducts(params: ProductSearchParams): Promise<ProductSearchResponse>;
  getProductsByCategory(categoryId: string): Promise<Product[]>;
  getProductRecommendations(productId: string): Promise<ProductSummary[]>;
}

/**
 * Implementación del servicio de productos.
 * Aplicamos el principio de Responsabilidad Única (S de SOLID):
 * esta clase solo maneja la lógica de acceso a datos de productos.
 * 
 * El patrón de diseño Strategy se aplica implícitamente: la interfaz
 * IProductService define el contrato, permitiendo diferentes implementaciones.
 */
export class ProductService implements IProductService {
  private readonly baseUrl: string;
  private readonly headers: Headers;
  private readonly defaultPageSize = 12;

  constructor() {
    this.baseUrl = '/api/catalog_system/pub/products';
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
      const errorMessage = `Error en la solicitud: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    }

    return response.json();
  }

  private transformToProductSummary(product: any): ProductSummary {
    const firstSku = product.items?.[0] || {};
    return {
      productId: product.productId,
      productName: product.productName,
      description: product.description,
      price: firstSku.sellers?.[0]?.commertialOffer?.Price || 0,
      imageUrl: firstSku.images?.[0]?.imageUrl || '',
      skuId: firstSku.itemId || '',
      brand: product.brand || '',
      categoryId: product.categoryId || '',
    };
  }

  async getProductById(productId: string): Promise<Product | null> {
    if (!productId) {
      throw new Error('El ID del producto es requerido');
    }

    const url = `${this.baseUrl}/p/${productId}`;
    
    try {
      const product = await this.fetchWithAuth<Product>(url);
      return product;
    } catch (error) {
      console.error(`Error al obtener producto ${productId}:`, error);
      return null;
    }
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    if (!slug) {
      throw new Error('El slug del producto es requerido');
    }

    const url = `${this.baseUrl}/p/${slug}/p`;
    
    try {
      const product = await this.fetchWithAuth<Product>(url);
      return product;
    } catch (error) {
      console.error(`Error al obtener producto con slug ${slug}:`, error);
      return null;
    }
  }

  async searchProducts(params: ProductSearchParams): Promise<ProductSearchResponse> {
    const {
      query,
      category,
      priceRange,
      page = 1,
      pageSize = this.defaultPageSize,
      sortBy = 'relevance',
      sortOrder = 'desc',
    } = params;

    const searchParams = new URLSearchParams();
    
    if (query) searchParams.append('ft', query);
    if (category) searchParams.append('categoryId', category);
    if (priceRange) {
      searchParams.append('priceRange', `${priceRange.min}-${priceRange.max}`);
    }
    searchParams.append('page', page.toString());
    searchParams.append('pageSize', pageSize.toString());
    searchParams.append('sortBy', sortBy);
    searchParams.append('sortOrder', sortOrder);

    const url = `${this.baseUrl}/search?${searchParams.toString()}`;
    const response = await this.fetchWithAuth<any>(url);

    const products = (response.products || []).map((p: any) => this.transformToProductSummary(p));

    return {
      products,
      totalResults: response.totalResults || 0,
      page: response.page || page,
      pageSize: response.pageSize || pageSize,
    };
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    if (!categoryId) {
      throw new Error('El ID de categoría es requerido');
    }

    const url = `${this.baseUrl}/category/${categoryId}`;
    
    try {
      const products = await this.fetchWithAuth<Product[]>(url);
      return products;
    } catch (error) {
      console.error(`Error al obtener productos de categoría ${categoryId}:`, error);
      return [];
    }
  }

  async getProductRecommendations(productId: string): Promise<ProductSummary[]> {
    if (!productId) {
      throw new Error('El ID del producto es requerido');
    }

    const url = `${this.baseUrl}/p/${productId}/recommendations`;
    
    try {
      const recommendations = await this.fetchWithAuth<any[]>(url);
      return recommendations.map((r: any) => this.transformToProductSummary(r));
    } catch (error) {
      console.error(`Error al obtener recomendaciones para ${productId}:`, error);
      return [];
    }
  }
}

/**
 * Instancia singleton del servicio.
 * Facilita la inyección de dependencias y permite mocking en tests.
 */
export const productService = new ProductService();