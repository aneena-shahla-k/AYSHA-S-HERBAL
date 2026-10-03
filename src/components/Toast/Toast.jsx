import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Toast.css';

const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="ay-toast">
      <CheckCircle size={18} className="toast-icon" />
      <span>{toastMessage}</span>
    </div>
  );
};

export default Toast;
