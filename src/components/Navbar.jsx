import React, { useState, useEffect } from 'react';
import { Search, Monitor, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenSearch, onStartPresentation }) {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      // Smart hide on downward scroll, reveal on upward scroll
      if (currentScrollY < 60) {
        setVisible(true);
      } else if (currentScrollY > prevScrollY + 6 && currentScrollY > 120) {
        // Scrolling down
        setVisible(false);
      } else if (currentScrollY < prevScrollY - 6) {
        // Scrolling up
        setVisible(true);
      }

      setPrevScrollY(currentScrollY);

      // Detect active section
      const sectionTargets = [
        { id: 'hero', key: 'overview' },
        { id: 'stats', key: 'overview' },
        { id: 'introduction', key: 'introduction' },
        { id: 'analytics', key: 'analytics' },
        { id: 'hardware', key: 'hardware' },
        { id: 'architecture', key: 'architecture' }
      ];

      const scrollPosition = currentScrollY + 140;
      for (let i = sectionTargets.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionTargets[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionTargets[i].key);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Smooth scroll handler with 80px offset
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'THE SYSTEM', targetId: 'stats', key: 'overview', num: '01' },
    { label: 'TECHNICAL INTRODUCTION', targetId: 'introduction', key: 'introduction', num: '02' },
    { label: 'AI ANALYTICS (28)', targetId: 'analytics', key: 'analytics', num: '03' },
    { label: 'HARDWARE (26)', targetId: 'hardware', key: 'hardware', num: '04' },
    { label: 'ARCHITECTURE', targetId: 'architecture', key: 'architecture', num: '05' }
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#0A0A0A',
        borderBottom: '3px solid #141414',
        boxShadow: scrolled ? '0 6px 18px rgba(0,0,0,0.85)' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease',
        willChange: 'transform'
      }}
    >
      <div className="container-editorial" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px', gap: '1rem' }}>
        
        {/* Logo / Brand Stamp (Clean branding without oversized badge) */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.02rem', color: '#FFFFFF', letterSpacing: '-0.01em', lineHeight: 1.15 }}>
              PUNE SURVEILLANCE
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#888890', letterSpacing: '0.06em' }}>
              PARLIAMENTARY CONSTITUENCY
            </span>
          </div>
        </a>

        {/* Desktop / Constrained Horizontal Jump Navigation */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.45rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            whiteSpace: 'nowrap',
            padding: '4px 0.25rem',
            flexShrink: 1,
            minWidth: 0
          }} 
          className="desktop-nav-links"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <a
                key={item.key}
                href={`#${item.targetId}`}
                onClick={(e) => handleNavClick(e, item.targetId)}
                className="nav-jump-btn"
                style={{
                  color: isActive ? '#FFFFFF' : '#A5A5AC',
                  backgroundColor: isActive ? '#222225' : 'transparent',
                  border: isActive ? '1px solid #4D4D55' : '1px solid #202025',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.73rem',
                  fontWeight: isActive ? '800' : '600',
                  letterSpacing: '0.04em',
                  padding: '5px 9px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  flexShrink: 0,
                  transition: 'all 0.15s ease'
                }}
              >
                <span 
                  style={{ 
                    fontSize: '0.66rem', 
                    fontWeight: '800', 
                    color: isActive ? '#111111' : '#F0C75E',
                    backgroundColor: isActive ? '#F0C75E' : '#1A1A1E',
                    padding: '1px 5px',
                    borderRadius: '2px',
                    border: isActive ? '1px solid #F0C75E' : '1px solid #33333A'
                  }}
                >
                  {item.num}
                </span>
                <span>{item.label}</span>
              </a>
            );
          })}
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
          {navItems.map((item) => (
            <a 
              key={item.key}
              href={`#${item.targetId}`}
              onClick={(e) => handleNavClick(e, item.targetId)}
              style={{
                color: activeSection === item.key ? '#F0C75E' : '#FFFFFF',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span style={{ backgroundColor: '#1A1A1E', color: '#F0C75E', padding: '2px 7px', fontSize: '0.72rem', borderRadius: '2px', border: '1px solid #33333A' }}>
                {item.num}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
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
