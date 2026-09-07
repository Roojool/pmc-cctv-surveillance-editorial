import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, ShieldAlert } from 'lucide-react';
import { analyticsData } from '../data/analyticsData';

export default function VideoModal({ activeItem, onClose, onSelectNext, onSelectPrev }) {
  if (!activeItem) return null;

  // Handle escape key
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
          maxWidth: '1000px',
          background: '#18191a',
          border: '3px solid #333638',
          boxShadow: '12px 12px 0px #000000',
          borderRadius: '4px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div 
          style={{
            background: '#111212',
            padding: '1rem 1.5rem',
            borderBottom: '3px solid #333638',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ background: '#E14F71', color: '#FFFFFF', padding: '2px 8px', fontSize: '0.78rem', fontWeight: 'bold' }}>
              AN-{itemNumber}
            </span>
            <span style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.1rem', fontFamily: 'Verdana, sans-serif' }}>
              {activeItem.name}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#242628',
              color: '#FFFFFF',
              border: '2px solid #444749',
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

        {/* 16:9 YouTube Video Embed Container */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#000000' }}>
          <iframe 
            src={`https://www.youtube-nocookie.com/embed/${activeItem.video_id}?autoplay=1&rel=0&modestbranding=1`}
            title={activeItem.name}
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Modal Bottom Metadata & Nav Bar */}
        <div 
          style={{
            padding: '1.25rem 1.5rem',
            background: '#18191a',
            borderTop: '2px solid #333638',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#F0C75E', letterSpacing: '0.05em' }}>
              {activeItem.category.toUpperCase()} // SOURCE: {activeItem.video_author}
            </div>
            <p style={{ fontSize: '0.92rem', color: '#D2D5D7', margin: '0.35rem 0 0 0', lineHeight: 1.5 }}>
              {activeItem.one_liner}
            </p>
          </div>

          {/* Stepper Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #333638', paddingTop: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={onSelectPrev}
                className="btn-editorial-dark"
                style={{ padding: '0.5rem 1rem', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <ChevronLeft size={16} /> PREVIOUS DEMO
              </button>
              <button
                onClick={onSelectNext}
                className="btn-editorial-pink"
                style={{ padding: '0.5rem 1rem', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                NEXT DEMO <ChevronRight size={16} />
              </button>
            </div>

            <span style={{ fontSize: '0.78rem', color: '#8C9093' }}>
              Item {activeItem.id} of 28 • Use [←] [→] keys
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
