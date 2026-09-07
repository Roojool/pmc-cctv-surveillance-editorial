import React from 'react';
import { ArrowUp, Monitor, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Footer({ onStartPresentation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="summary" 
      className="section-white"
      style={{
        padding: '6rem 0 3rem 0',
        borderTop: '4px solid #111111'
      }}
    >
      <div className="container-editorial">
        
        {/* Main Header / Attribution */}
        <div style={{ borderBottom: '3px solid #111111', paddingBottom: '3rem', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span 
              style={{
                backgroundColor: '#111111',
                color: '#F0C75E',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: '800',
                padding: '3px 8px',
                border: '2px solid #111111'
              }}
            >
              SECTION 07
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#686B6E', letterSpacing: '0.08em', fontWeight: '700' }}>
              OFFICIAL ARCHITECTURAL DOSSIER
            </span>
          </div>

          <h2 
            className="headline-display"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              color: '#111111',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              margin: '0.5rem 0 1.25rem 0'
            }}
          >
            PMC - CCTV SURVEILLANCE SYSTEM (AI BASED) <br />
            <span style={{ color: '#E14F71' }}>PUNE PARLIAMENTARY CONSTITUENCY</span>
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.15rem',
              color: '#4A4A50',
              maxWidth: '900px',
              lineHeight: 1.6,
              margin: 0
            }}
          >
            An exhaustive architectural and artificial intelligence video analytics dossier for municipal surveillance deployment. Incorporating 28 specialized deep neural models and 26 hardware nodes with zero commercial vendor dependencies.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Column 1: System Scope */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: '800', color: '#111111', borderBottom: '2px solid #111111', paddingBottom: '0.5rem', margin: '0 0 1rem 0' }}>
              SYSTEM ARCHITECTURE SCOPE
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#333338' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#111111" />
                <strong>28 AI Video Analytics</strong> (7 Chapters)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#111111" />
                <strong>26 Hardware Infrastructure Nodes</strong> (5 Tiers)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#111111" />
                <strong>54 Total System Elements</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#111111" />
                <strong>8-Stage Sequential Data Pipeline</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#111111" />
                <strong>Strict Statutory Privacy Compliance</strong>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation Registry */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: '800', color: '#111111', borderBottom: '2px solid #111111', paddingBottom: '0.5rem', margin: '0 0 1rem 0' }}>
              SECTION REGISTRY
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
              <a href="#hero" style={{ color: '#111111', textDecoration: 'none', fontWeight: '700' }}>01. COVER / HERO</a>
              <a href="#stats" style={{ color: '#111111', textDecoration: 'none', fontWeight: '700' }}>02. THE SYSTEM AT A GLANCE</a>
              <a href="#analytics" style={{ color: '#111111', textDecoration: 'none', fontWeight: '700' }}>03. AI VIDEO ANALYTICS (28)</a>
              <a href="#hardware" style={{ color: '#111111', textDecoration: 'none', fontWeight: '700' }}>04. HARDWARE INFRASTRUCTURE (26)</a>
              <a href="#architecture" style={{ color: '#111111', textDecoration: 'none', fontWeight: '700' }}>05. HOW IT ALL CONNECTS</a>
            </div>
          </div>

          {/* Column 3: Presentation Action & Top Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: '800', color: '#111111', borderBottom: '2px solid #111111', paddingBottom: '0.5rem', margin: '0 0 1rem 0' }}>
              PRESENTATION CONTROLS
            </h4>
            
            <button
              onClick={onStartPresentation}
              className="btn-editorial-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Monitor size={16} /> LAUNCH PRESENTATION
            </button>

            <button
              onClick={scrollToTop}
              className="btn-editorial-dark"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <ArrowUp size={16} /> RETURN TO TOP
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div 
          style={{
            borderTop: '2px solid #E4E4E6',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: '#686B6E',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            PMC Surveillance Initiative • Pune Parliamentary Constituency • Version 4.0
          </div>
          <div>
            All demonstration feeds embedded for evaluation purposes.
          </div>
        </div>

      </div>
    </footer>
  );
}
