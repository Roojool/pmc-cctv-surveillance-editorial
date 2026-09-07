import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { analyticsData } from '../data/analyticsData';
import { hardwareData } from '../data/hardwareData';

export default function PresentationOverview({ isOpen, onClose, onJumpToSlide }) {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10005,
        backgroundColor: 'rgba(0, 0, 0, 0.94)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 3rem'
      }}
      onClick={onClose}
    >
      {/* Header */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '3px solid #333333',
          paddingBottom: '1.5rem',
          marginBottom: '2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#F0C75E', fontWeight: '800' }}>
            PRESENTATION OVERVIEW DIRECTORY
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', margin: '0.25rem 0 0 0' }}>
            SELECT ANY OF THE 54 SYSTEM ITEMS
          </h2>
        </div>

        <button
          onClick={onClose}
          style={{
            backgroundColor: '#222222',
            color: '#FFFFFF',
            border: '2px solid #555555',
            padding: '8px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <X size={16} /> CLOSE OVERVIEW (ESC)
        </button>
      </div>

      {/* Body: Two columns (AI Analytics on Left, Hardware on Right) */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
          gap: '3rem',
          overflowY: 'auto',
          flex: 1,
          paddingRight: '1rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Column: 28 AI Analytics */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '2px solid #E14F71', paddingBottom: '0.5rem' }}>
            <span style={{ backgroundColor: '#E14F71', color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px' }}>
              SECTION 01
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF' }}>
              AI VIDEO ANALYTICS (28 ITEMS)
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {analyticsData.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  onJumpToSlide(idx + 1); // Slide 1 to 28
                  onClose();
                }}
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #282828',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#E14F71', fontWeight: '800' }}>
                    {String(item.id).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', color: '#FFFFFF', fontWeight: '700' }}>
                    {item.name}
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#888890' }}>
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 26 Hardware Components */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '2px solid #F0C75E', paddingBottom: '0.5rem' }}>
            <span style={{ backgroundColor: '#F0C75E', color: '#111111', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px' }}>
              SECTION 02
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF' }}>
              HARDWARE INFRASTRUCTURE (26 ITEMS)
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {hardwareData.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  onJumpToSlide(28 + idx + 1); // Slide 29 to 54
                  onClose();
                }}
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #282828',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#F0C75E', fontWeight: '800' }}>
                    HW-{String(item.id).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', color: '#FFFFFF', fontWeight: '700' }}>
                    {item.name}
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#888890' }}>
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
