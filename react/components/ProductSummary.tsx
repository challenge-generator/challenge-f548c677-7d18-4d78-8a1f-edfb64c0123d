import React from 'react';
import { Product } from '../hooks/useProduct';
import { formatCurrency } from '../utils/formatter';
import { Button } from './shared/Button';

interface ProductSummaryProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onRemoveFromCart?: (productId: string) => void;
  isInCart?: boolean;
  quantity?: number;
}

export const ProductSummary: React.FC<ProductSummaryProps> = ({
  product,
  onAddToCart,
  onRemoveFromCart,
  isInCart = false,
  quantity = 0,
}) => {
  const handleAddToCart = () => {
    if (onAddToCart && product.id) {
      onAddToCart(product.id);
    }
  };

  const handleRemoveFromCart = () => {
    if (onRemoveFromCart && product.id) {
      onRemoveFromCart(product.id);
    }
  };

  const totalPrice = product.price * (quantity || 1);

  return (
    <div className="product-summary">
      <div className="product-summary__image-container">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-summary__image"
          />
        ) : (
          <div className="product-summary__image-placeholder">
            <span>Sin imagen</span>
          </div>
        )}
      </div>

      <div className="product-summary__content">
        <h3 className="product-summary__name">{product.name}</h3>
        
        {product.description && (
          <p className="product-summary__description">{product.description}</p>
        )}

        <div className="product-summary__price">
          <span className="product-summary__price-label">Precio:</span>
          <span className="product-summary__price-value">
            {formatCurrency(product.price)}
          </span>
        </div>

        {isInCart && (
          <div className="product-summary__cart-info">
            <span className="product-summary__quantity-label">Cantidad:</span>
            <span className="product-summary__quantity-value">{quantity}</span>
            <span className="product-summary__total-label">Total:</span>
            <span className="product-summary__total-value">
              {formatCurrency(totalPrice)}
            </span>
          </div>
        )}

        <div className="product-summary__actions">
          {isInCart ? (
            <Button
              variant="secondary"
              onClick={handleRemoveFromCart}
              aria-label={`Eliminar ${product.name} del carrito`}
            >
              Quitar
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleAddToCart}
              aria-label={`Agregar ${product.name} al carrito`}
            >
              Agregar al Carrito
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};