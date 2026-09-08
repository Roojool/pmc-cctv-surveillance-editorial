import React, { useState, useEffect } from 'react';
import { Search, Monitor, Menu, X, Play } from 'lucide-react';

export default function Navbar({ onOpenSearch, onStartPresentation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#0A0A0A',
        borderBottom: '3px solid #111111',
        boxShadow: scrolled ? '0 4px 0 rgba(0,0,0,0.8)' : 'none',
        transition: 'all 0.2s ease'
      }}
    >
      <div className="container-editorial" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        
        {/* Logo / Brand Stamp */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div 
            style={{
              backgroundColor: '#F0C75E',
              color: '#111111',
              fontFamily: 'var(--font-mono)',
              fontWeight: '800',
              fontSize: '0.85rem',
              padding: '4px 8px',
              border: '2px solid #111111',
              boxShadow: '3px 3px 0px #111111',
              letterSpacing: '0.05em'
            }}
          >
            PMC // 04
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1rem', color: '#FFFFFF', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
              PUNE SURVEILLANCE
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#888890', letterSpacing: '0.06em' }}>
              PARLIAMENTARY CONSTITUENCY
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav-links">
          <a href="#stats" style={{ color: '#B0B0B5', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.04em' }}>
            01 THE SYSTEM
          </a>
          <a href="#introduction" style={{ color: '#B0B0B5', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.04em' }}>
            02 INTRODUCTION
          </a>
          <a href="#analytics" style={{ color: '#B0B0B5', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.04em' }}>
            03 AI ANALYTICS (28)
          </a>
          <a href="#hardware" style={{ color: '#B0B0B5', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.04em' }}>
            04 HARDWARE (26)
          </a>
          <a href="#architecture" style={{ color: '#B0B0B5', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.04em' }}>
            05 ARCHITECTURE
          </a>
        </div>

        {/* Right Actions: Search & Presentation Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            style={{
              backgroundColor: '#191919',
              color: '#B0B0B5',
              border: '2px solid #333333',
              boxShadow: '3px 3px 0px #000000',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: '700',
              padding: '6px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            title="Search all system items (Ctrl+K or /)"
          >
            <Search size={14} color="#F0C75E" />
            <span className="search-text-hide">SEARCH</span>
            <kbd style={{ backgroundColor: '#2B2B2B', color: '#F0C75E', padding: '1px 5px', fontSize: '0.65rem', borderRadius: '2px' }}>/</kbd>
          </button>

          {/* Presentation Mode Button */}
          <button
            onClick={onStartPresentation}
            style={{
              backgroundColor: '#F0C75E',
              color: '#111111',
              border: '2px solid #111111',
              boxShadow: '3px 3px 0px #111111',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: '800',
              padding: '6px 14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              letterSpacing: '0.04em',
              transition: 'transform 0.15s ease'
            }}
            title="Launch Full-Screen Presentation Mode"
          >
            <Monitor size={15} />
            <span>PRESENTATION</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              backgroundColor: '#191919',
              color: '#FFFFFF',
              border: '2px solid #333333',
              padding: '6px',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          style={{
            backgroundColor: '#0A0A0A',
            borderTop: '2px solid #222222',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          <a 
            href="#stats" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#FFFFFF', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: '700' }}
          >
            01 THE SYSTEM AT A GLANCE
          </a>
          <a 
            href="#introduction" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#FFFFFF', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: '700' }}
          >
            02 TECHNICAL INTRODUCTION (11)
          </a>
          <a 
            href="#analytics" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#FFFFFF', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: '700' }}
          >
            03 AI VIDEO ANALYTICS (28)
          </a>
          <a 
            href="#hardware" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#FFFFFF', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: '700' }}
          >
            04 HARDWARE INFRASTRUCTURE (26)
          </a>
          <a 
            href="#architecture" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#FFFFFF', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: '700' }}
          >
            05 SYSTEM ARCHITECTURE
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onStartPresentation();
            }}
            className="btn-editorial-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Monitor size={16} /> ENTER PRESENTATION MODE
          </button>
        </div>
      )}
    </nav>
  );
}
