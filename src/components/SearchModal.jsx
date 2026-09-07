import React, { useState, useEffect } from 'react';
import { Search, X, Cpu, HardDrive, ArrowRight } from 'lucide-react';
import { analyticsData } from '../data/analyticsData';
import { hardwareData } from '../data/hardwareData';

export default function SearchModal({ isOpen, onClose, onSelectItem }) {
  if (!isOpen) return null;

  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Combine datasets
  const allItems = [
    ...analyticsData.map(a => ({ ...a, type: 'analytics', code: `AN-${String(a.id).padStart(2, '0')}` })),
    ...hardwareData.map(h => ({ ...h, type: 'hardware', code: `HW-${String(h.id).padStart(2, '0')}` }))
  ];

  const filtered = query.trim() === "" 
    ? []
    : allItems.filter(item => {
        const q = query.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.one_liner.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q)
        );
      });

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '3rem 1.5rem 1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '720px',
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
        {/* Search Input Box */}
        <div 
          style={{
            padding: '1.25rem',
            background: '#111212',
            borderBottom: '3px solid #333638',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <Search size={22} color="#E14F71" />
          <input 
            type="text"
            placeholder="Search across 28 AI Analytics & 26 Hardware Components..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '1.1rem',
              fontFamily: 'Verdana, sans-serif',
              outline: 'none'
            }}
          />
          <button
            onClick={onClose}
            style={{ background: '#242628', color: '#B4B7B9', border: '1px solid #444749', padding: '4px 8px', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Body */}
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '1rem' }}>
          {query.trim() === "" ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#8C9093' }}>
              Type any keyword (e.g. <span style={{ color: '#F0C75E' }}>"Thermal"</span>, <span style={{ color: '#F0C75E' }}>"Crowd"</span>, <span style={{ color: '#F0C75E' }}>"Storage"</span>, <span style={{ color: '#F0C75E' }}>"Perimeter"</span>) to search the system.
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#E14F71' }}>
              No matching components found for "{query}".
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filtered.map(item => (
                <div
                  key={`${item.type}-${item.id}`}
                  onClick={() => {
                    onSelectItem(item);
                    onClose();
                  }}
                  style={{
                    background: '#111212',
                    border: '2px solid #333638',
                    padding: '0.85rem 1.25rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    transition: 'border 0.15s ease'
                  }}
                  className="search-item-hover"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span 
                      style={{
                        background: item.type === 'analytics' ? '#E14F71' : '#F0C75E',
                        color: item.type === 'analytics' ? '#FFFFFF' : '#111212',
                        padding: '2px 8px',
                        fontSize: '0.72rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {item.code}
                    </span>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#FFFFFF' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#8C9093' }}>
                        {item.category.toUpperCase()} • {item.one_liner}
                      </div>
                    </div>
                  </div>

                  <ArrowRight size={18} color="#B4B7B9" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div style={{ padding: '0.75rem 1.25rem', background: '#111212', borderTop: '2px solid #333638', fontSize: '0.72rem', color: '#8C9093', display: 'flex', justifyContent: 'space-between' }}>
          <span>Showing {filtered.length} matches</span>
          <span>Press [Esc] to exit</span>
        </div>
      </div>
    </div>
  );
}
