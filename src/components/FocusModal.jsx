import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

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
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(8px)',
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
          maxWidth: '850px',
          maxHeight: '90vh',
          backgroundColor: '#FFFFFF',
          border: '4px solid #111111',
          boxShadow: '12px 12px 0px #111111',
          borderRadius: '2px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div 
          style={{
            backgroundColor: '#111111',
            color: '#FFFFFF',
            padding: '1rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '3px solid #111111'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span 
              style={{
                backgroundColor: isHardware ? '#F0C75E' : '#E14F71',
                color: isHardware ? '#111111' : '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                padding: '3px 8px',
                fontWeight: '800',
                fontSize: '0.8rem'
              }}
            >
              {codePrefix}
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF' }}>
              {item.name}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              backgroundColor: '#222222',
              color: '#FFFFFF',
              border: '2px solid #444444',
              padding: '4px 8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Media Frame */}
        <div style={{ aspectRatio: '16 / 9', backgroundColor: '#EAEAEB', borderBottom: '3px solid #111111', maxHeight: '380px' }}>
          <img 
            src={isHardware ? `${import.meta.env.BASE_URL}${item.image}` : item.thumbnail_url} 
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Content Body */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', backgroundColor: '#FFFFFF' }}>
          
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', backgroundColor: '#F0F0F2', border: '1px solid #D8D8DC', padding: '3px 8px', fontSize: '0.72rem', fontWeight: '700', color: '#686B6E' }}>
              CATEGORY: {item.category.toUpperCase()}
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800', color: '#111111', marginTop: '0.5rem', marginBottom: 0 }}>
              Technical Specification & Architectural Role
            </h3>
          </div>

          <div style={{ backgroundColor: '#F8F8FA', borderLeft: '4px solid #111111', padding: '1rem', fontSize: '0.98rem', color: '#111111', lineHeight: 1.55 }}>
            {item.one_liner}
          </div>

          {isHardware ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#686B6E' }}>PRIMARY PURPOSE:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.92rem', color: '#111111', lineHeight: 1.5 }}>
                  {item.purpose}
                </p>
              </div>

              <div>
                <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#686B6E' }}>SYSTEM ROLE IN PMC:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.92rem', color: '#111111', lineHeight: 1.5 }}>
                  {item.system_role}
                </p>
              </div>

              <div className="editorial-callout-distinction">
                <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#976A00' }}>OPERATIONAL DISTINCTION:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.88rem', color: '#444749', lineHeight: 1.5 }}>
                  {item.distinction}
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#686B6E' }}>HOW THE ALGORITHM WORKS:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.92rem', color: '#111111', lineHeight: 1.5 }}>
                  {item.what_it_does}
                </p>
              </div>

              <div className="editorial-callout-distinction">
                <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#976A00' }}>OPERATIONAL DISTINCTION:</strong>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.88rem', color: '#444749', lineHeight: 1.5 }}>
                  {item.distinction}
                </p>
              </div>

              {item.compliance_note && (
                <div style={{ backgroundColor: '#FFF1F4', border: '1px solid #E14F71', padding: '0.75rem 1rem', color: '#90122E', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  <strong>Compliance Guardrail:</strong> {item.compliance_note}
                </div>
              )}
            </div>
          )}

          <button
            onClick={onClose}
            className="btn-editorial-dark"
            style={{ marginTop: '0.5rem', padding: '0.75rem' }}
          >
            CLOSE SPECIFICATION VIEW
          </button>
        </div>
      </div>
    </div>
  );
}
