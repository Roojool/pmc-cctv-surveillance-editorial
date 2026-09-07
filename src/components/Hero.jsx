import React from 'react';
import { ArrowDown, Monitor, ShieldCheck, Grid } from 'lucide-react';

export default function Hero({ onStartPresentation }) {
  return (
    <header 
      id="hero" 
      className="section-black"
      style={{
        padding: '5rem 0 6rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '3px solid #111111'
      }}
    >
      {/* Background Subtle Graphic Grid lines */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          pointerEvents: 'none',
          opacity: 0.8
        }}
      />

      <div className="container-editorial" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Editorial Index Stamp */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span 
              style={{
                backgroundColor: '#E14F71',
                color: '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: '800',
                padding: '3px 10px',
                border: '2px solid #111111',
                boxShadow: '3px 3px 0px #111111'
              }}
            >
              SECTION 01
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#888890', letterSpacing: '0.08em' }}>
              EXECUTIVE BRIEFING DOSSIER
            </span>
          </div>

          <div 
            style={{
              backgroundColor: '#191919',
              border: '2px solid #333333',
              padding: '4px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#F0C75E',
              fontWeight: '700'
            }}
          >
            VERSION 4.0 // EDITORIAL RELEASE
          </div>
        </div>

        {/* Oversized Editorial Typography Composition */}
        <div style={{ maxWidth: '1200px', marginBottom: '3.5rem' }}>
          
          <div 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#F0C75E',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem'
            }}
          >
            PMC
          </div>

          <h1 
            className="headline-display"
            style={{
              fontSize: 'clamp(2.4rem, 6.5vw, 5.8rem)',
              color: '#FFFFFF',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              margin: '0.25rem 0 1rem 0'
            }}
          >
            CCTV SURVEILLANCE <br />
            <span style={{ color: '#E14F71' }}>SYSTEM</span> (AI BASED)
          </h1>

          <div 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 3vw, 2.4rem)',
              fontWeight: '700',
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              marginTop: '1rem',
              textTransform: 'uppercase'
            }}
          >
            PUNE PARLIAMENTARY CONSTITUENCY
          </div>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
              color: '#B0B0B5',
              maxWidth: '820px',
              lineHeight: 1.6,
              margin: '1.5rem 0 0 0'
            }}
          >
            Pune Municipal Corporation Surveillance Infrastructure. A comprehensive exhibition of 28 deep-neural video analytics and 26 high-durability hardware components engineered for public security, automated incident verification, and municipal resilience.
          </p>
        </div>

        {/* Action Buttons & Minimal Metadata Row */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            borderTop: '2px solid #242424',
            paddingTop: '2.5rem'
          }}
        >
          {/* CTA Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button
              onClick={onStartPresentation}
              className="btn-editorial-primary"
              style={{ padding: '1rem 2rem', fontSize: '0.9rem' }}
            >
              <Monitor size={18} />
              LAUNCH PRESENTATION MODE
            </button>

            <a
              href="#stats"
              className="btn-editorial-dark"
              style={{ padding: '1rem 1.75rem', fontSize: '0.9rem' }}
            >
              <ArrowDown size={18} />
              EXPLORE THE SYSTEM
            </a>
          </div>

          {/* Minimal Metadata Strip */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              backgroundColor: '#141414',
              border: '3px solid #282828',
              boxShadow: '6px 6px 0px #000000',
              padding: '1.5rem 2rem'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888890', letterSpacing: '0.06em' }}>
                AI VIDEO ANALYTICS
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '800', color: '#FFFFFF', marginTop: '4px' }}>
                28 CAPABILITIES
              </div>
              <div style={{ fontSize: '0.8rem', color: '#B0B0B5', marginTop: '2px' }}>
                7 Core Operational Chapters
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888890', letterSpacing: '0.06em' }}>
                HARDWARE INFRASTRUCTURE
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '800', color: '#F0C75E', marginTop: '4px' }}>
                26 COMPONENTS
              </div>
              <div style={{ fontSize: '0.8rem', color: '#B0B0B5', marginTop: '2px' }}>
                5 Physical Engineering Tiers
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888890', letterSpacing: '0.06em' }}>
                TOTAL SPECIFICATION
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '800', color: '#E14F71', marginTop: '4px' }}>
                54 ELEMENTS
              </div>
              <div style={{ fontSize: '0.8rem', color: '#B0B0B5', marginTop: '2px' }}>
                Unbranded Enterprise Standard
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
