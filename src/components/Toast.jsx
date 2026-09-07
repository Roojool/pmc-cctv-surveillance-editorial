import React, { useEffect } from 'react';
import { AlertCircle, X } from 'lucide-react';

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 10000,
        background: '#111212',
        color: '#FFFFFF',
        border: '3px solid #E14F71',
        boxShadow: '6px 6px 0px #000000',
        padding: '1rem 1.25rem',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        maxWidth: '420px',
        fontFamily: 'Verdana, sans-serif'
      }}
    >
      <AlertCircle size={22} color="#E14F71" style={{ flexShrink: 0 }} />
      <div style={{ fontSize: '0.82rem', lineHeight: 1.45, flex: 1 }}>
        {message}
      </div>
      <button 
        onClick={onClose}
        style={{ background: 'transparent', border: 'none', color: '#B4B7B9', cursor: 'pointer' }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
