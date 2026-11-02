import { useState, useEffect, useCallback } from 'react';
import type { Product } from '@vtex/api';

interface UseProductOptions {
  productId?: string;
  slug?: string;
  initialData?: Product | null;
}

interface UseProductReturn {
  product: Product | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Hook personalizado para gestionar la lógica de productos.
 * Aplica principios KISS y YAGNI: simplicidad en la implementación
 * y solo las funcionalidades necesarias para el caso de uso.
 */
export const useProduct = (options: UseProductOptions = {}): UseProductReturn => {
  const { productId, slug, initialData = null } = options;
  
  const [product, setProduct] = useState<Product | null>(initialData);
  const [loading, setLoading] = useState<boolean>(!initialData);
  const [error, setError] = useState<Error | null>(null);

  const fetchProduct = useCallback(async () => {
    if (!productId && !slug) {
      setError(new Error('Se requiere productId o slug para obtener el producto'));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const productService = await import('../services/productService');
      const fetchedProduct = productId
        ? await productService.getProductById(productId)
        : await productService.getProductBySlug(slug!);
      
      setProduct(fetchedProduct);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al cargar el producto';
      setError(new Error(errorMessage));
    } finally {
      setLoading(false);
    }
  }, [productId, slug]);

  useEffect(() => {
    if (!initialData) {
      fetchProduct();
    }
  }, [fetchProduct, initialData]);

  const refetch = useCallback(async () => {
    await fetchProduct();
  }, [fetchProduct]);

  return {
    product,
    loading,
    error,
    refetch,
  };
};

/**
 * Hook para obtener productos por categoría.
 * Separa la lógica de negocio en un hook específico para mantener
 * el principio de única responsabilidad (SRP de SOLID).
 */
export const useProductsByCategory = (categoryId: string): UseProductReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const productService = await import('../services/productService');
        const fetchedProducts = await productService.getProductsByCategory(categoryId);
        setProducts(fetchedProducts);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al cargar productos';
        setError(new Error(errorMessage));
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);

  return {
    product: products[0] || null,
    loading,
    error,
    refetch: () => {
      setLoading(true);
      return import('../services/productService')
        .then(service => service.getProductsByCategory(categoryId))
        .then(data => {
          setProducts(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err instanceof Error ? err : new Error('Error'));
          setLoading(false);
        }) as Promise<void>;
    },
  };
};