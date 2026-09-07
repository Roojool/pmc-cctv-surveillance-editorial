import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { analyticsData } from '../data/analyticsData';

export default function VideoModal({ activeItem, onClose, onSelectNext, onSelectPrev }) {
  if (!activeItem) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onSelectNext, onSelectPrev]);

  const itemNumber = String(activeItem.id).padStart(2, '0');

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
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
          maxWidth: '1050px',
          backgroundColor: '#141414',
          border: '3px solid #333333',
          boxShadow: '12px 12px 0px #000000',
          borderRadius: '2px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div 
          style={{
            backgroundColor: '#0D0D0D',
            padding: '1rem 1.75rem',
            borderBottom: '3px solid #2B2B2B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span 
              style={{
                backgroundColor: '#E14F71',
                color: '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                padding: '3px 8px',
                fontSize: '0.78rem',
                fontWeight: '800'
              }}
            >
              {itemNumber} / 28
            </span>
            <span style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF', fontWeight: '800', fontSize: '1.25rem' }}>
              {activeItem.name}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              backgroundColor: '#222222',
              color: '#FFFFFF',
              border: '2px solid #444444',
              padding: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Close (Esc)"
          >
            <X size={20} />
          </button>
        </div>

        {/* 16:9 Lazy-loaded YouTube Embed */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', backgroundColor: '#000000' }}>
          <iframe 
            src={`https://www.youtube-nocookie.com/embed/${activeItem.video_id}?autoplay=1&rel=0&modestbranding=1`}
            title={activeItem.name}
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Bottom Details & Controls */}
        <div 
          style={{
            padding: '1.5rem 1.75rem',
            backgroundColor: '#141414',
            borderTop: '2px solid #282828',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', color: '#F0C75E', letterSpacing: '0.05em' }}>
              {activeItem.category.toUpperCase()}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.98rem', color: '#FFFFFF', margin: '0.35rem 0 0 0', lineHeight: 1.55 }}>
              {activeItem.one_liner}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #2A2A2A', paddingTop: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={onSelectPrev}
                className="btn-editorial-dark"
                style={{ padding: '0.5rem 1rem', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <ChevronLeft size={16} /> PREVIOUS
              </button>
              <button
                onClick={onSelectNext}
                className="btn-editorial-pink"
                style={{ padding: '0.5rem 1rem', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                NEXT <ChevronRight size={16} />
              </button>
            </div>

            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#888890' }}>
              ITEM {activeItem.id} OF 28 • USE [←] [→] KEYS
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
