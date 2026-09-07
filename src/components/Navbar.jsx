import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Shield, Terminal, Layers, Cpu, Eye } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', icon: Shield },
    { label: 'The System', href: '#glance', icon: Layers },
    { label: 'AI Analytics', href: '#analytics', icon: Eye },
    { label: 'Live Feed', href: '#live-detection', icon: Terminal },
    { label: 'Hardware', href: '#hardware', icon: Cpu },
    { label: 'Architecture', href: '#architecture', icon: Layers },
    { label: 'Status', href: '#status', icon: Terminal },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          backgroundColor: isScrolled ? 'rgba(10, 10, 11, 0.94)' : 'rgba(10, 10, 11, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          transition: 'all 0.25s ease',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-content-width)',
            margin: '0 auto',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {/* Brand Mark */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: '#FFFFFF',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                backgroundColor: '#111214',
                border: '2px solid #F0C75E',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '2px 2px 0 #F0C75E',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '0.85rem', color: '#F0C75E' }}>
                P
              </span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.90rem', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
                PMC SURVEILLANCE
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-dark-muted)', letterSpacing: '0.06em' }}>
                PUNE CONSTITUENCY
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links with Dividers */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '6px',
              overflow: 'hidden',
            }}
            className="desktop-nav-bar"
          >
            {navLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.78)',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    borderRight: idx < navLinks.length - 1 ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F0C75E';
                    e.currentTarget.style.backgroundColor = 'rgba(240, 199, 94, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Icon size={13} />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#F0C75E';
                e.currentTarget.style.color = '#F0C75E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              title="Search AI Capabilities & Hardware (Ctrl+K)"
            >
              <Search size={14} />
              <span className="search-label-text">Search</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  color: 'var(--text-dark-secondary)',
                }}
              >
                ⌘K
              </span>
            </button>

            {/* Version 4.0 Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#111214',
                border: '1.5px solid #F0C75E',
                color: '#F0C75E',
                padding: '4px 10px',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.70rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                boxShadow: '2px 2px 0 #F0C75E',
                whiteSpace: 'nowrap',
              }}
            >
              <span className="pulse-dot-gold" style={{ width: '6px', height: '6px' }}></span>
              VERSION 4.0
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                backgroundColor: '#16171A',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                padding: '8px',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 85,
            backgroundColor: 'rgba(10, 10, 11, 0.98)',
            padding: '90px 24px 36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 18px',
                  backgroundColor: '#16171A',
                  border: '1.5px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.90rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dark-muted)' }}>
            PMC CCTV SURVEILLANCE &bull; VERSION 4.0
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav-bar { display: flex !important; }
        }
        @media (max-width: 959px) {
          .mobile-menu-btn { display: flex !important; }
          .search-label-text { display: none; }
        }
      `}</style>
    </>
  );
}
