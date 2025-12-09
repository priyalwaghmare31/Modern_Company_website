import React, { useEffect } from 'react';

type ToastProps = {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose?: () => void;
  duration?: number;
};

export default function SimpleToast({ message, type = 'info', onClose, duration = 3500 }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(() => onClose && onClose(), duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  const bg = type === 'success' ? 'bg-[#DFF6E8] text-[#046A38]' : type === 'error' ? 'bg-[#FFEAEA] text-[#8B1E1E]' : 'bg-[#EDF2FF] text-[#1A3A8A]';

  return (
    <div className={`fixed right-6 top-6 z-50 px-5 py-3 rounded-lg shadow-lg ${bg}`} role="status">
      <div className="text-sm font-medium">{message}</div>
    </div>
  );
}
