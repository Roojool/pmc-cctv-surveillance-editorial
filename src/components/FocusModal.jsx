import React, { useEffect } from 'react';
import { X, ShieldCheck, CheckCircle, Tag, ExternalLink } from 'lucide-react';

export default function FocusModal({ item, onClose }) {
  if (!item) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const isHardware = !!item.purpose;
  const itemNumber = String(item.id).padStart(2, '0');
  const codePrefix = isHardware ? `HW-${itemNumber}` : `AN-${itemNumber}`;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '840px',
          maxHeight: '90vh',
          background: '#FFFFFF',
          border: '4px solid #111212',
          boxShadow: '12px 12px 0px #111212',
          borderRadius: '4px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div 
          style={{
            background: '#111212',
            color: '#FFFFFF',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '3px solid #111212'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span 
              style={{
                background: isHardware ? '#F0C75E' : '#E14F71',
                color: isHardware ? '#111212' : '#FFFFFF',
                padding: '3px 8px',
                fontWeight: 'bold',
                fontSize: '0.8rem'
              }}
            >
              {codePrefix}
            </span>
            <span style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#FFFFFF', fontFamily: 'Verdana, sans-serif' }}>
              {item.name}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#242628',
              color: '#FFFFFF',
              border: '2px solid #444749',
              padding: '4px 8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Media Banner */}
        {isHardware ? (
          <div style={{ aspectRatio: '16 / 9', background: '#F0F1F2', borderBottom: '3px solid #111212', maxHeight: '380px' }}>
            <img 
              src={`${import.meta.env.BASE_URL}${item.image}`} 
              alt={item.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ) : (
          <div style={{ aspectRatio: '16 / 9', background: '#111212', borderBottom: '3px solid #111212', maxHeight: '380px' }}>
            <img 
              src={item.thumbnail_url} 
              alt={item.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}

        {/* Body content */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', background: '#FFFFFF' }}>
          
          <div>
            <span style={{ background: '#F0F1F2', border: '1px solid #D2D5D7', padding: '3px 8px', fontSize: '0.72rem', fontWeight: 'bold', color: '#686B6E' }}>
              CATEGORY: {item.category.toUpperCase()}
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#111212', marginTop: '0.5rem', marginBottom: 0 }}>
              Technical Specification & Architectural Role
            </h3>
          </div>

          {/* One-liner */}
          <div style={{ background: '#F7F8F9', borderLeft: '4px solid #111212', padding: '0.85rem 1rem', fontSize: '0.95rem', color: '#111212', lineHeight: 1.55 }}>
            {item.one_liner}
          </div>

          {/* Hardware specifics vs AI specifics */}
          {isHardware ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <strong style={{ fontSize: '0.78rem', color: '#686B6E' }}>PRIMARY PURPOSE:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.9rem', color: '#111212', lineHeight: 1.5 }}>
                  {item.purpose}
                </p>
              </div>

              <div>
                <strong style={{ fontSize: '0.78rem', color: '#686B6E' }}>SYSTEM ROLE IN PMC:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.9rem', color: '#111212', lineHeight: 1.5 }}>
                  {item.system_role}
                </p>
              </div>

              <div style={{ background: '#FFFDF5', border: '1px solid #E2BD55', borderLeft: '4px solid #F0C75E', padding: '0.75rem' }}>
                <strong style={{ fontSize: '0.75rem', color: '#976A00' }}>OPERATIONAL DISTINCTION:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.88rem', color: '#444749', lineHeight: 1.5 }}>
                  {item.distinction}
                </p>
              </div>

              <div style={{ fontSize: '0.75rem', color: '#8C9093', borderTop: '1px solid #E4E7E9', paddingTop: '0.5rem' }}>
                Architecture Source: {item.source} ({item.license})
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <strong style={{ fontSize: '0.78rem', color: '#686B6E' }}>WHAT IT DOES:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.9rem', color: '#111212', lineHeight: 1.5 }}>
                  {item.what_it_does}
                </p>
              </div>

              <div style={{ background: '#FFFDF5', border: '1px solid #E2BD55', borderLeft: '4px solid #F0C75E', padding: '0.75rem' }}>
                <strong style={{ fontSize: '0.75rem', color: '#976A00' }}>OPERATIONAL DISTINCTION:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.88rem', color: '#444749', lineHeight: 1.5 }}>
                  {item.distinction}
                </p>
              </div>

              <div>
                <strong style={{ fontSize: '0.78rem', color: '#686B6E' }}>PRIMARY USE CASE:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.9rem', color: '#111212', lineHeight: 1.5 }}>
                  {item.use_case}
                </p>
              </div>

              {item.compliance_note && (
                <div style={{ background: '#FFF1F4', border: '1px solid #E14F71', padding: '0.75rem', color: '#90122E', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  <strong>Compliance Guardrail:</strong> {item.compliance_note}
                </div>
              )}
            </div>
          )}

          {/* Dismiss button */}
          <button
            onClick={onClose}
            className="btn-editorial-dark"
            style={{ marginTop: '0.5rem', padding: '0.7rem' }}
          >
            CLOSE SPECIFICATION VIEW
          </button>
        </div>
      </div>
    </div>
  );
}
