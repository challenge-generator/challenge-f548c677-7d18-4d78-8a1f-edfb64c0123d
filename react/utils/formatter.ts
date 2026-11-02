import { path, defaultTo } from 'ramda';

export interface PriceFormatOptions {
  currency: string;
  locale: string;
  decimals?: number;
}

export interface DateFormatOptions {
  locale: string;
  format?: 'short' | 'long' | 'numeric';
}

export interface TruncateOptions {
  maxLength: number;
  suffix?: string;
}

const DEFAULT_PRICE_OPTIONS: PriceFormatOptions = {
  currency: 'USD',
  locale: 'en-US',
  decimals: 2,
};

const DEFAULT_DATE_OPTIONS: DateFormatOptions = {
  locale: 'en-US',
  format: 'short',
};

export const formatPrice = (
  value: number | string | null | undefined,
  options: Partial<PriceFormatOptions> = {}
): string => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : Number(value);
  
  if (Number.isNaN(numericValue)) {
    return '$0.00';
  }
  
  const mergedOptions = { ...DEFAULT_PRICE_OPTIONS, ...options };
  
  return new Intl.NumberFormat(mergedOptions.locale, {
    style: 'currency',
    currency: mergedOptions.currency,
    minimumFractionDigits: mergedOptions.decimals,
    maximumFractionDigits: mergedOptions.decimals,
  }).format(numericValue);
};

export const formatDate = (
  date: Date | string | number | null | undefined,
  options: Partial<DateFormatOptions> = {}
): string => {
  if (!date) {
    return '';
  }
  
  const dateObject = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
  
  if (Number.isNaN(dateObject.getTime())) {
    return '';
  }
  
  const mergedOptions = { ...DEFAULT_DATE_OPTIONS, ...options };
  const formatOptions: Intl.DateTimeFormatOptions = {};
  
  switch (mergedOptions.format) {
    case 'long':
      formatOptions.year = 'numeric';
      formatOptions.month = 'long';
      formatOptions.day = 'numeric';
      break;
    case 'numeric':
      formatOptions.year = 'numeric';
      formatOptions.month = '2-digit';
      formatOptions.day = '2-digit';
      break;
    default:
      formatOptions.year = 'numeric';
      formatOptions.month = '2-digit';
      formatOptions.day = '2-digit';
  }
  
  return new Intl.DateTimeFormat(mergedOptions.locale, formatOptions).format(dateObject);
};

export const truncateText = (
  text: string | null | undefined,
  options: TruncateOptions
): string => {
  if (!text) {
    return '';
  }
  
  const { maxLength, suffix = '...' } = options;
  
  if (text.length <= maxLength) {
    return text;
  }
  
  const truncatedLength = maxLength - suffix.length;
  return text.substring(0, truncatedLength).trim() + suffix;
};

export const capitalize = (text: string | null | undefined): string => {
  if (!text) {
    return '';
  }
  
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const formatPercentage = (
  value: number | string | null | undefined,
  decimals: number = 1
): string => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : Number(value);
  
  if (Number.isNaN(numericValue)) {
    return '0%';
  }
  
  return `${numericValue.toFixed(decimals)}%`;
};

export const formatQuantity = (quantity: number | string | null | undefined): string => {
  const numericValue = typeof quantity === 'string' ? parseInt(quantity, 10) : Number(quantity);
  
  if (Number.isNaN(numericValue) || numericValue <= 0) {
    return '0';
  }
  
  return numericValue.toLocaleString();
};

export const formatPhoneNumber = (phone: string | null | undefined): string => {
  if (!phone) {
    return '';
  }
  
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
  }
  
  if (cleaned.length === 11) {
    return `+${cleaned.charAt(0)} (${cleaned.substring(1, 4)}) ${cleaned.substring(4, 7)}-${cleaned.substring(7)}`;
  }
  
  return phone;
};

export const formatSku = (sku: string | null | undefined): string => {
  if (!sku) {
    return '';
  }
  
  return sku.toUpperCase().replace(/[^A-Z0-9]/g, '-');
};

export const formatWeight = (weight: number | string | null | undefined, unit: string = 'kg'): string => {
  const numericValue = typeof weight === 'string' ? parseFloat(weight) : Number(weight);
  
  if (Number.isNaN(numericValue)) {
    return `0 ${unit}`;
  }
  
  return `${numericValue.toFixed(2)} ${unit}`;
};

export const parseHtmlEntities = (text: string | null | undefined): string => {
  if (!text) {
    return '';
  }
  
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&nbsp;': ' ',
  };
  
  return text.replace(/&[^;]+;/g, match => entities[match] || match);
};

export const slugify = (text: string | null | undefined): string => {
  if (!text) {
    return '';
  }
  
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const formatInstallments = (
  totalPrice: number,
  installmentCount: number
): string => {
  if (installmentCount <= 0) {
    return formatPrice(totalPrice);
  }
  
  const installmentPrice = totalPrice / installmentCount;
  return `${installmentCount}x de ${formatPrice(installmentPrice)}`;
};

export const formatDiscount = (
  originalPrice: number | string,
  discountedPrice: number | string
): string => {
  const original = typeof originalPrice === 'string' ? parseFloat(originalPrice) : originalPrice;
  const discounted = typeof discountedPrice === 'string' ? parseFloat(discountedPrice) : discountedPrice;
  
  if (original <= 0 || discounted >= original) {
    return '0%';
  }
  
  const discountPercentage = ((original - discounted) / original) * 100;
  return `${discountPercentage.toFixed(0)}% OFF`;
};

export const formatShippingEstimate = (days: number | string | null | undefined): string => {
  const numericDays = typeof days === 'string' ? parseInt(days, 10) : Number(days);
  
  if (Number.isNaN(numericDays) || numericDays <= 0) {
    return 'Envío inmediato';
  }
  
  if (numericDays === 1) {
    return '1 día útil';
  }
  
  return `${numericDays} días úteis`;
};

export const formatStockStatus = (
  quantity: number | string | null | undefined,
  lowStockThreshold: number = 5
): { text: string; isLowStock: boolean; isAvailable: boolean } => {
  const numericQuantity = typeof quantity === 'string' ? parseInt(quantity, 10) : Number(quantity);
  
  if (Number.isNaN(numericQuantity) || numericQuantity <= 0) {
    return { text: 'Agotado', isLowStock: false, isAvailable: false };
  }
  
  const isLowStock = numericQuantity <= lowStockThreshold;
  
  return {
    text: isLowStock ? `¡Últimas ${numericQuantity} unidades!` : 'Disponible',
    isLowStock,
    isAvailable: true,
  };
};

export const formatBreadcrumb = (categories: string[]): string => {
  if (!categories || categories.length === 0) {
    return '';
  }
  
  return categories.join(' > ');
};

export const formatReviewRating = (rating: number | string | null | undefined): string => {
  const numericRating = typeof rating === 'string' ? parseFloat(rating) : Number(rating);
  
  if (Number.isNaN(numericRating)) {
    return '0.0';
  }
  
  return numericRating.toFixed(1);
};

export const formatOrderNumber = (orderId: string | null | undefined): string => {
  if (!orderId) {
    return '';
  }
  
  const cleaned = orderId.replace(/[^0-9]/g, '');
  const padded = cleaned.padStart(8, '0');
  return `#${padded}`;
};

export const sanitizeInput = (input: string | null | undefined): string => {
  if (!input) {
    return '';
  }
  
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
};