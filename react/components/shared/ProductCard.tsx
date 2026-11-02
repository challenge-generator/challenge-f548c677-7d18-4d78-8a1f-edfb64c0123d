import React, { useState } from 'react'
import { Button } from './Button'

export interface Product {
  productId: string
  productName: string
  brandName: string
  imageUrl: string
  price: number
  listPrice?: number
  currencyCode: string
  availability: 'available' | 'unavailable' | 'low-stock'
  stockQuantity?: number
  slug?: string
}

export interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string, quantity: number) => void
  onQuickView?: (productId: string) => void
  onAddToWishlist?: (productId: string) => void
  showQuickActions?: boolean
  isLoading?: boolean
}

const formatPrice = (price: number, currencyCode: string): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currencyCode,
  }).format(price)
}

const calculateDiscount = (listPrice: number, price: number): number => {
  if (!listPrice || listPrice <= price) return 0
  return Math.round(((listPrice - price) / listPrice) * 100)
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
  onAddToWishlist,
  showQuickActions = true,
  isLoading = false,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const {
    productId,
    productName,
    brandName,
    imageUrl,
    price,
    listPrice,
    currencyCode,
    availability,
    stockQuantity,
    slug,
  } = product

  const hasDiscount = listPrice && listPrice > price
  const discountPercentage = calculateDiscount(listPrice || price, price)
  const isAvailable = availability === 'available'
  const isLowStock = availability === 'low-stock'

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onAddToCart && isAvailable) {
      onAddToCart(productId, quantity)
    }
  }

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onQuickView) {
      onQuickView(productId)
    }
  }

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onAddToWishlist) {
      onAddToWishlist(productId)
    }
  }

  const incrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const getAvailabilityMessage = (): string => {
    if (!isAvailable) return 'Agotado'
    if (isLowStock && stockQuantity) return `Solo quedan ${stockQuantity} unidades`
    return 'Disponible'
  }

  return (
    <article
      className={`product-card relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
        isHovered ? 'shadow-xl transform -translate-y-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Producto: ${productName}`}
    >
      <div className="product-image-container relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={`Imagen de ${productName}`}
          className="product-image w-full h-full object-cover transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          loading="lazy"
        />
        {hasDiscount && (
          <span
            className="discount-badge absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded"
            aria-label={`Descuento del ${discountPercentage}%`}
          >
            -{discountPercentage}%
          </span>
        )}
        {showQuickActions && (
          <div
            className={`quick-actions absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex justify-center gap-2">
              <button
                onClick={handleQuickView}
                className="quick-action-btn bg-white/90 hover:bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium transition-colors"
                aria-label="Vista rápida"
              >
                Vista rápida
              </button>
              <button
                onClick={handleAddToWishlist}
                className="quick-action-btn bg-white/90 hover:bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium transition-colors"
                aria-label="Añadir a favoritos"
              >
                ♡
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="product-info flex flex-col flex-grow p-4">
        {brandName && (
          <span className="product-brand text-xs text-gray-500 uppercase tracking-wide mb-1">
            {brandName}
          </span>
        )}
        <h3 className="product-name text-base font-semibold text-gray-900 mb-2 line-clamp-2">
          {productName}
        </h3>

        <div className="price-container flex items-baseline gap-2 mb-3">
          <span className="current-price text-xl font-bold text-gray-900">
            {formatPrice(price, currencyCode)}
          </span>
          {hasDiscount && (
            <span className="list-price text-sm text-gray-400 line-through">
              {formatPrice(listPrice!, currencyCode)}
            </span>
          )}
        </div>

        <div
          className={`availability-status text-sm mb-3 ${
            isAvailable ? 'text-green-600' : isLowStock ? 'text-orange-600' : 'text-red-600'
          }`}
        >
          {getAvailabilityMessage()}
        </div>

        {isAvailable && (
          <div className="quantity-selector flex items-center gap-2 mb-3">
            <button
              onClick={decrementQuantity}
              className="quantity-btn w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              aria-label="Disminuir cantidad"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="quantity-value w-8 text-center font-medium" aria-live="polite">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="quantity-btn w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>
        )}

        <Button
          variant={isAvailable ? 'primary' : 'secondary'}
          fullWidth
          onClick={handleAddToCart}
          disabled={!isAvailable || isLoading}
          isLoading={isLoading}
          aria-label={`Añadir ${productName} al carrito`}
        >
          {isAvailable ? 'Añadir al carrito' : 'Agotado'}
        </Button>
      </div>
    </article>
  )
}

export default ProductCard