import { useState, useEffect, useCallback, useMemo } from 'react'

export interface CartItem {
  itemId: string
  productId: string
  productName: string
  skuId: string
  quantity: number
  price: number
  listPrice?: number
  imageUrl: string
  brand?: string
  category?: string
  seller?: string
  isGift?: boolean
}

export interface Cart {
  cartId: string
  items: CartItem[]
  totalItems: number
  subtotal: number
  discounts: number
  total: number
  currencyCode: string
  updatedAt: Date
}

export interface UseCartReturn {
  cart: Cart | null
  isLoading: boolean
  error: string | null
  addItem: (productId: string, quantity: number, skuId?: string) => Promise<void>
  removeItem: (itemId: string) => Promise<void>
  updateQuantity: (itemId: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  applyCoupon: (couponCode: string) => Promise<boolean>
  removeCoupon: () => Promise<void>
  refreshCart: () => Promise<void>
  isEmpty: boolean
  itemCount: number
  totalValue: number
}

const STORAGE_KEY = 'vtex_cart_data'
const CART_EXPIRY_HOURS = 24

const getStoredCart = (): Cart | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null

    const parsed = JSON.parse(stored)
    const storedAt = new Date(parsed.storedAt)
    const now = new Date()
    const hoursDiff = (now.getTime() - storedAt.getTime()) / (1000 * 60 * 60)

    if (hoursDiff > CART_EXPIRY_HOURS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }

    return parsed.cart
  } catch {
    return null
  }
}

const storeCart = (cart: Cart): void => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cart,
        storedAt: new Date().toISOString(),
      })
    )
  } catch (error) {
    console.error('Error storing cart:', error)
  }
}

const calculateCartTotals = (
  items: CartItem[],
  currencyCode: string
): { totalItems: number; subtotal: number; discounts: number; total: number } => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + (item.listPrice || item.price) * item.quantity, 0)
  const discounts = items.reduce((sum, item) => {
    const itemDiscount = item.listPrice ? (item.listPrice - item.price) * item.quantity : 0
    return sum + itemDiscount
  }, 0)
  const total = subtotal - discounts

  return { totalItems, subtotal, discounts, total }
}

export const useCart = (): UseCartReturn => {
  const [cart, setCart] = useState<Cart | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const storedCart = getStoredCart()
    if (storedCart) {
      setCart(storedCart)
    } else {
      const initialCart: Cart = {
        cartId: `cart_${Date.now()}`,
        items: [],
        totalItems: 0,
        subtotal: 0,
        discounts: 0,
        total: 0,
        currencyCode: 'EUR',
        updatedAt: new Date(),
      }
      setCart(initialCart)
      storeCart(initialCart)
    }
  }, [])

  const addItem = useCallback(
    async (productId: string, quantity: number, skuId?: string): Promise<void> => {
      if (!cart) return

      setIsLoading(true)
      setError(null)

      try {
        const existingItem = cart.items.find(
          (item) => item.productId === productId && item.skuId === skuId
        )

        let updatedItems: CartItem[]

        if (existingItem) {
          updatedItems = cart.items.map((item) =>
            item.productId === productId && item.skuId === skuId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        } else {
          const newItem: CartItem = {
            itemId: `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            productId,
            productName: `Producto ${productId}`,
            skuId: skuId || `sku_${productId}`,
            quantity,
            price: 99.99,
            listPrice: 129.99,
            imageUrl: '/placeholder-product.jpg',
            brand: 'Marca ejemplo',
          }
          updatedItems = [...cart.items, newItem]
        }

        const totals = calculateCartTotals(updatedItems, cart.currencyCode)
        const updatedCart: Cart = {
          ...cart,
          items: updatedItems,
          ...totals,
          updatedAt: new Date(),
        }

        setCart(updatedCart)
        storeCart(updatedCart)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al añadir al carrito'
        setError(errorMessage)
        console.error('Error adding item to cart:', err)
      } finally {
        setIsLoading(false)
      }
    },
    [cart]
  )

  const removeItem = useCallback(
    async (itemId: string): Promise<void> => {
      if (!cart) return

      setIsLoading(true)
      setError(null)

      try {
        const updatedItems = cart.items.filter((item) => item.itemId !== itemId)
        const totals = calculateCartTotals(updatedItems, cart.currencyCode)

        const updatedCart: Cart = {
          ...cart,
          items: updatedItems,
          ...totals,
          updatedAt: new Date(),
        }

        setCart(updatedCart)
        storeCart(updatedCart)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al eliminar del carrito'
        setError(errorMessage)
        console.error('Error removing item from cart:', err)
      } finally {
        setIsLoading(false)
      }
    },
    [cart]
  )

  const updateQuantity = useCallback(
    async (itemId: string, quantity: number): Promise<void> => {
      if (!cart || quantity < 1) return

      setIsLoading(true)
      setError(null)

      try {
        const updatedItems = cart.items.map((item) =>
          item.itemId === itemId ? { ...item, quantity } : item
        )
        const totals = calculateCartTotals(updatedItems, cart.currencyCode)

        const updatedCart: Cart = {
          ...cart,
          items: updatedItems,
          ...totals,
          updatedAt: new Date(),
        }

        setCart(updatedCart)
        storeCart(updatedCart)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al actualizar cantidad'
        setError(errorMessage)
        console.error('Error updating item quantity:', err)
      } finally {
        setIsLoading(false)
      }
    },
    [cart]
  )

  const clearCart = useCallback(async (): Promise<void> => {
    if (!cart) return

    setIsLoading(true)
    setError(null)

    try {
      const emptyCart: Cart = {
        cartId: cart.cartId,
        items: [],
        totalItems: 0,
        subtotal: 0,
        discounts: 0,
        total: 0,
        currencyCode: cart.currencyCode,
        updatedAt: new Date(),
      }

      setCart(emptyCart)
      storeCart(emptyCart)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al limpiar el carrito'
      setError(errorMessage)
      console.error('Error clearing cart:', err)
    } finally {
      setIsLoading(false)
    }
  }, [cart])

  const applyCoupon = useCallback(
    async (couponCode: string): Promise<boolean> => {
      if (!cart || !couponCode.trim()) return false

      setIsLoading(true)
      setError(null)

      try {
        const validCoupons: Record<string, number> = {
          'DESCUENTO10': 10,
          'BIENVENIDO20': 20,
          'VIP30': 30,
        }

        const discountPercent = validCoupons[couponCode.toUpperCase()]

        if (!discountPercent) {
          setError('Cupón inválido o expirado')
          return false
        }

        const discountAmount = (cart.subtotal * discountPercent) / 100
        const updatedCart: Cart = {
          ...cart,
          discounts: cart.discounts + discountAmount,
          total: cart.subtotal - (cart.discounts + discountAmount),
          updatedAt: new Date(),
        }

        setCart(updatedCart)
        storeCart(updatedCart)
        return true
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al aplicar cupón'
        setError(errorMessage)
        console.error('Error applying coupon:', err)
        return false
      } finally {
        setIsLoading(false)
      }
    },
    [cart]
  )

  const removeCoupon = useCallback(async (): Promise<void> => {
    if (!cart) return

    setIsLoading(true)
    setError(null)

    try {
      const updatedCart: Cart = {
        ...cart,
        discounts: 0,
        total: cart.subtotal,
        updatedAt: new Date(),
      }

      setCart(updatedCart)
      storeCart(updatedCart)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al eliminar cupón'
      setError(errorMessage)
      console.error('Error removing coupon:', err)
    } finally {
      setIsLoading(false)
    }
  }, [cart])

  const refreshCart = useCallback(async (): Promise<void> => {
    setIsLoading(true)
    setError(null)

    try {
      const storedCart = getStoredCart()
      if (storedCart) {
        setCart(storedCart)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al actualizar el carrito'
      setError(errorMessage)
      console.error('Error refreshing cart:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const isEmpty = useMemo(() => !cart || cart.items.length === 0, [cart])
  const itemCount = useMemo(() => cart?.totalItems || 0, [cart])
  const totalValue = useMemo(() => cart?.total || 0, [cart])

  return {
    cart,
    isLoading,
    error,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyCoupon,
    removeCoupon,
    refreshCart,
    isEmpty,
    itemCount,
    totalValue,
  }
}

export default useCart