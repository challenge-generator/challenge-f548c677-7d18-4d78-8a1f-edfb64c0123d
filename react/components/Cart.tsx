import React, { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import { ProductSummary } from './ProductSummary';
import { Product } from '../hooks/useProduct';
import { formatCurrency } from '../utils/formatter';
import { Button } from './shared/Button';

interface CartProps {
  onCheckout?: () => void;
}

export const Cart: React.FC<CartProps> = ({ onCheckout }) => {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemCount,
    isLoading,
    error,
  } = useCart();

  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsUpdating(true);
    } else {
      const timer = setTimeout(() => setIsUpdating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleAddProduct = (productId: string) => {
    const existingItem = items.find((item) => item.product.id === productId);
    
    if (existingItem) {
      updateQuantity(productId, existingItem.quantity + 1);
    } else {
      addItem({ id: productId } as Product);
    }
  };

  const handleRemoveProduct = (productId: string) => {
    removeItem(productId);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      clearCart();
    }
  };

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    }
  };

  const isEmpty = items.length === 0;

  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__title">Carrito de Compras</h2>
        {!isEmpty && (
          <span className="cart__item-count">
            {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
          </span>
        )}
      </div>

      {error && (
        <div className="cart__error" role="alert">
          <p>Error al procesar el carrito: {error}</p>
          <Button variant="secondary" onClick={() => window.location.reload()}>
            Reintentar
          </Button>
        </div>
      )}

      {isUpdating && (
        <div className="cart__loading">
          <span>Actualizando carrito...</span>
        </div>
      )}

      {isEmpty ? (
        <div className="cart__empty">
          <p className="cart__empty-message">Tu carrito está vacío</p>
          <Button variant="primary" onClick={() => window.history.back()}>
            Continuar Comprando
          </Button>
        </div>
      ) : (
        <>
          <ul className="cart__items">
            {items.map((item) => (
              <li key={item.product.id} className="cart__item">
                <ProductSummary
                  product={item.product}
                  isInCart
                  quantity={item.quantity}
                  onAddToCart={handleAddProduct}
                  onRemoveFromCart={handleRemoveProduct}
                />
                
                <div className="cart__item-controls">
                  <button
                    className="cart__quantity-btn"
                    onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                    disabled={isLoading}
                    aria-label="Disminuir cantidad"
                  >
                    -
                  </button>
                  <span className="cart__quantity">{item.quantity}</span>
                  <button
                    className="cart__quantity-btn"
                    onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                    disabled={isLoading}
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart__summary">
            <div className="cart__subtotal">
              <span>Subtotal:</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <div className="cart__total">
              <span>Total:</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>

          <div className="cart__actions">
            <Button
              variant="secondary"
              onClick={handleClearCart}
              disabled={isLoading}
            >
              Vaciar Carrito
            </Button>
            <Button
              variant="primary"
              onClick={handleCheckout}
              disabled={isLoading}
            >
              Proceder al Pago
            </Button>
          </div>
        </>
      )}
    </div>
  );
};