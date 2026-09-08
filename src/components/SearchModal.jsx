import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { introductionData } from '../data/introductionData';
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

  const allItems = [
    ...introductionData.map(i => ({
      id: i.id,
      name: i.title,
      category: i.tag,
      one_liner: i.presentationContent,
      type: 'introduction',
      code: `INTRO-${i.chapterNum}`
    })),
    ...analyticsData.map(a => ({
      id: a.id,
      name: a.name,
      category: a.category,
      one_liner: a.one_liner,
      type: 'analytics',
      code: `AN-${String(a.id).padStart(2, '0')}`
    })),
    ...hardwareData.map(h => ({
      id: h.id,
      name: h.name,
      category: h.category,
      one_liner: h.one_liner,
      type: 'hardware',
      code: `HW-${String(h.id).padStart(2, '0')}`
    }))
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
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '4rem 1.5rem 1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '750px',
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
        {/* Search Input */}
        <div 
          style={{
            padding: '1.25rem 1.75rem',
            backgroundColor: '#0D0D0D',
            borderBottom: '3px solid #2E2E2E',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <Search size={22} color="#F0C75E" />
          <input 
            type="text"
            placeholder="Search Introduction, 28 AI Analytics, and 26 Hardware items..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '1.15rem',
              fontFamily: 'var(--font-display)',
              outline: 'none'
            }}
          />
          <button
            onClick={onClose}
            style={{ backgroundColor: '#222222', color: '#B0B0B5', border: '1px solid #444444', padding: '4px 8px', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '1rem' }}>
          {query.trim() === "" ? (
            <div style={{ padding: '2.5rem', textAlign: 'center', color: '#888890', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              Type any keyword (e.g. <span style={{ color: '#F0C75E' }}>"Police"</span>, <span style={{ color: '#F0C75E' }}>"Integrator"</span>, <span style={{ color: '#F0C75E' }}>"Thermal"</span>, <span style={{ color: '#F0C75E' }}>"Storage"</span>) to search the system.
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: '2.5rem', textAlign: 'center', color: '#E14F71', fontFamily: 'var(--font-mono)' }}>
              No matching components found for "{query}".
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filtered.map(item => {
                let badgeColor = '#E14F71';
                let textColor = '#FFFFFF';
                if (item.type === 'introduction') {
                  badgeColor = '#F0C75E';
                  textColor = '#111111';
                } else if (item.type === 'hardware') {
                  badgeColor = '#FFFFFF';
                  textColor = '#111111';
                }

                return (
                  <div
                    key={`${item.type}-${item.id}`}
                    onClick={() => {
                      onSelectItem(item);
                      onClose();
                    }}
                    style={{
                      backgroundColor: '#0D0D0D',
                      border: '2px solid #282828',
                      padding: '1rem 1.25rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      transition: 'border-color 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span 
                        style={{
                          backgroundColor: badgeColor,
                          color: textColor,
                          fontFamily: 'var(--font-mono)',
                          padding: '3px 8px',
                          fontSize: '0.72rem',
                          fontWeight: '800'
                        }}
                      >
                        {item.code}
                      </span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '800', color: '#FFFFFF' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#888890', marginTop: '2px' }}>
                          {item.category.toUpperCase()} • {item.one_liner}
                        </div>
                      </div>
                    </div>

                    <ArrowRight size={18} color="#B0B0B5" />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom Footer */}
        <div style={{ padding: '0.75rem 1.5rem', backgroundColor: '#0D0D0D', borderTop: '2px solid #282828', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888890', display: 'flex', justifyContent: 'space-between' }}>
          <span>{filtered.length} MATCHES FOUND</span>
          <span>PRESS [ESC] TO EXIT</span>
        </div>
      </div>
    </div>
  );
}
