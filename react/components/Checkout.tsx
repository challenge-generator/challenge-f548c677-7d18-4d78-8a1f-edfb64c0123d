import React, { useState, useCallback } from 'react';
import { useCart } from '../hooks/useCart';
import { Button } from './shared/Button';
import { formatCurrency } from '../utils/formatter';

interface ShippingInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

interface CheckoutFormData {
  shipping: ShippingInfo;
  payment: PaymentInfo;
}

type CheckoutStep = 'shipping' | 'payment' | 'review' | 'confirmation';

export const Checkout: React.FC = () => {
  const { items, total, clearCart, isLoading } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [formData, setFormData] = useState<CheckoutFormData>({
    shipping: {
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'México',
    },
    payment: {
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
    },
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});
  const [orderId, setOrderId] = useState<string | null>(null);

  const validateShipping = useCallback((): boolean => {
    const { shipping } = formData;
    const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};

    if (!shipping.address.trim()) {
      newErrors.shipping = 'La dirección es requerida';
    }
    if (!shipping.city.trim()) {
      newErrors.shipping = 'La ciudad es requerida';
    }
    if (!shipping.state.trim()) {
      newErrors.shipping = 'El estado es requerido';
    }
    if (!shipping.zipCode.trim()) {
      newErrors.shipping = 'El código postal es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const validatePayment = useCallback((): boolean => {
    const { payment } = formData;
    const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};

    const cardNumberClean = payment.cardNumber.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cardNumberClean)) {
      newErrors.payment = 'El número de tarjeta debe tener 16 dígitos';
    }
    if (!payment.cardHolder.trim()) {
      newErrors.payment = 'El nombre del titular es requerido';
    }
    if (!/^\d{2}\/\d{2}$/.test(payment.expiryDate)) {
      newErrors.payment = 'La fecha de expiración debe estar en formato MM/AA';
    }
    if (!/^\d{3,4}$/.test(payment.cvv)) {
      newErrors.payment = 'El CVV debe tener 3 o 4 dígitos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback(
    (section: keyof CheckoutFormData, field: string, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));

      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[section];
        return newErrors;
      });
    },
    []
  );

  const handleNextStep = useCallback(() => {
    if (currentStep === 'shipping') {
      if (validateShipping()) {
        setCurrentStep('payment');
      }
    } else if (currentStep === 'payment') {
      if (validatePayment()) {
        setCurrentStep('review');
      }
    } else if (currentStep === 'review') {
      processOrder();
    }
  }, [currentStep, validateShipping, validatePayment]);

  const handlePreviousStep = useCallback(() => {
    if (currentStep === 'payment') {
      setCurrentStep('shipping');
    } else if (currentStep === 'review') {
      setCurrentStep('payment');
    }
  }, [currentStep]);

  const processOrder = useCallback(async () => {
    try {
      const generatedOrderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setOrderId(generatedOrderId);
      clearCart();
      setCurrentStep('confirmation');
    } catch (err) {
      console.error('Error al procesar el pedido:', err);
      setErrors({ payment: 'Error al procesar el pago. Por favor, intente de nuevo.' });
    }
  }, [clearCart]);

  const renderShippingStep = () => (
    <div className="checkout__shipping">
      <h3 className="checkout__step-title">Información de Envío</h3>
      
      <div className="checkout__field">
        <label htmlFor="address">Dirección</label>
        <input
          id="address"
          type="text"
          value={formData.shipping.address}
          onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
          className={errors.shipping ? 'checkout__input-error' : ''}
        />
      </div>

      <div className="checkout__field-group">
        <div className="checkout__field">
          <label htmlFor="city">Ciudad</label>
          <input
            id="city"
            type="text"
            value={formData.shipping.city}
            onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
          />
        </div>

        <div className="checkout__field">
          <label htmlFor="state">Estado</label>
          <input
            id="state"
            type="text"
            value={formData.shipping.state}
            onChange={(e) => handleInputChange('shipping', 'state', e.target.value)}
          />
        </div>
      </div>

      <div className="checkout__field-group">
        <div className="checkout__field">
          <label htmlFor="zipCode">Código Postal</label>
          <input
            id="zipCode"
            type="text"
            value={formData.shipping.zipCode}
            onChange={(e) => handleInputChange('shipping', 'zipCode', e.target.value)}
          />
        </div>

        <div className="checkout__field">
          <label htmlFor="country">País</label>
          <input
            id="country"
            type="text"
            value={formData.shipping.country}
            onChange={(e) => handleInputChange('shipping', 'country', e.target.value)}
            disabled
          />
        </div>
      </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="checkout__payment">
      <h3 className="checkout__step-title">Información de Pago</h3>
      
      <div className="checkout__field">
        <label htmlFor="cardNumber">Número de Tarjeta</label>
        <input
          id="cardNumber"
          type="text"
          value={formData.payment.cardNumber}
          onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
        />
      </div>

      <div className="checkout__field">
        <label htmlFor="cardHolder">Nombre del Titular</label>
        <input
          id="cardHolder"
          type="text"
          value={formData.payment.cardHolder}
          onChange={(e) => handleInputChange('payment', 'cardHolder', e.target.value)}
        />
      </div>

      <div className="checkout__field-group">
        <div className="checkout__field">
          <label htmlFor="expiryDate">Fecha de Expiración</label>
          <input
            id="expiryDate"
            type="text"
            value={formData.payment.expiryDate}
            onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
            placeholder="MM/AA"
            maxLength={5}
          />
        </div>

        <div className="checkout__field">
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="text"
            value={formData.payment.cvv}
            onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
            placeholder="123"
            maxLength={4}
          />
        </div>
      </div>
    </div>
  );

  const renderReviewStep = () => (
    <div className="checkout__review">
      <h3 className="checkout__step-title">Revisión del Pedido</h3>
      
      <div className="checkout__summary-section">
        <h4>Dirección de Envío</h4>
        <p>{formData.shipping.address}</p>
        <p>{formData.shipping.city}, {formData.shipping.state}</p>
        <p>C.P. {formData.shipping.zipCode}, {formData.shipping.country}</p>
      </div>

      <div className="checkout__summary-section">
        <h4>Método de Pago</h4>
        <p>Tarjeta terminada en ****{formData.payment.cardNumber.slice(-4)}</p>
        <p>Titular: {formData.payment.cardHolder}</p>
      </div>

      <div className="checkout__summary-section">
        <h4>Resumen del Pedido</h4>
        <ul className="checkout__items">
          {items.map((item) => (
            <li key={item.product.id} className="checkout__item">
              <span>{item.product.name} x{item.quantity}</span>
              <span>{formatCurrency(item.product.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="checkout__total">
          <span>Total:</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );

  const renderConfirmationStep = () => (
    <div className="checkout__confirmation">
      <div className="checkout__success-icon">✓</div>
      <h3 className="checkout__success-title">¡Pedido Confirmado!</h3>
      <p className="checkout__order-id">
        Tu número de orden es: <strong>{orderId}</strong>
      </p>
      <p className="checkout__success-message">
        Recibirás un correo electrónico con los detalles de tu pedido.
      </p>
      <Button variant="primary" onClick={() => window.location.href = '/'}>
        Volver a la Tienda
      </Button>
    </div>
  );

  const isFirstStep = currentStep === 'shipping';
  const isLastStep = currentStep === 'review';

  return (
    <div className="checkout">
      <h2 className="checkout__title">Checkout</h2>

      <div className="checkout__steps">
        <div className={`checkout__step ${currentStep === 'shipping' ? 'checkout__step--active' : ''}`}>
          1. Envío
        </div>
        <div className={`checkout__step ${currentStep === 'payment' ? 'checkout__step--active' : ''}`}>
          2. Pago
        </div>
        <div className={`checkout__step ${currentStep === 'review' ? 'checkout__step--active' : ''}`}>
          3. Revisión
        </div>
      </div>

      {errors.shipping && (
        <div className="checkout__error" role="alert">
          {errors.shipping}
        </div>
      )}
      {errors.payment && (
        <div className="checkout__error" role="alert">
          {errors.payment}
        </div>
      )}

      <div className="checkout__content">
        {currentStep === 'shipping' && renderShippingStep()}
        {currentStep === 'payment' && renderPaymentStep()}
        {currentStep === 'review' && renderReviewStep()}
        {currentStep === 'confirmation' && renderConfirmationStep()}
      </div>

      {currentStep !== 'confirmation' && (
        <div className="checkout__actions">
          {!isFirstStep && (
            <Button
              variant="secondary"
              onClick={handlePreviousStep}
              disabled={isLoading}
            >
              Atrás
            </Button>
          )}
          <Button
            variant="primary"
            onClick={handleNextStep}
            disabled={isLoading}
          >
            {isLastStep ? 'Confirmar Pedido' : 'Continuar'}
          </Button>
        </div>
      )}
    </div>
  );
};