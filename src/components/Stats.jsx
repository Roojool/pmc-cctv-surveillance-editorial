import React from 'react';
import { Layers, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

export default function Stats({ onStartPresentation }) {
  return (
    <section 
      id="stats" 
      className="section-white"
      style={{
        padding: '6rem 0',
        borderBottom: '3px solid #111111'
      }}
    >
      <div className="container-editorial">
        
        {/* Section Header */}
        <div style={{ maxWidth: '900px', marginBottom: '4rem' }}>
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
              SECTION 02
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#66666E', letterSpacing: '0.08em', fontWeight: '700' }}>
              MUNICIPAL ARCHITECTURE OVERVIEW
            </span>
          </div>

          <h2 
            className="headline-display"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
              color: '#111111',
              lineHeight: 1.0,
              textTransform: 'uppercase',
              margin: '0.5rem 0 1.25rem 0'
            }}
          >
            THE SYSTEM <br />
            <span style={{ color: '#E14F71' }}>AT A GLANCE</span>
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.15rem',
              color: '#4A4A50',
              lineHeight: 1.6,
              margin: 0
            }}
          >
            An integrated surveillance framework combining cutting-edge deep learning video intelligence with ruggedized municipal infrastructure. The platform eliminates vendor lock-in through generalized, unbranded architectural specifications engineered for 24/7 high-throughput operation.
          </p>
        </div>

        {/* 3 Large Physical Metric Cards (AI Hackers Collective Inspired) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}
        >
          {/* Card 1: 28 AI Analytics */}
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              border: '3px solid #111111',
              boxShadow: '8px 8px 0px #111111',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px',
              borderRadius: '2px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: '800', color: '#E14F71', letterSpacing: '0.06em' }}>
                  CATALOGUE TIER 01
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#888890' }}>
                  [ 01 — 28 ]
                </span>
              </div>

              <div 
                className="editorial-number-huge"
                style={{
                  fontSize: 'clamp(4.5rem, 9vw, 7rem)',
                  color: '#111111',
                  margin: '0.5rem 0'
                }}
              >
                28
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800', color: '#111111', marginBottom: '0.5rem' }}>
                AI VIDEO ANALYTICS
              </h3>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: '#55555C', lineHeight: 1.55, margin: 0 }}>
                Comprehensive computer vision algorithms spanning face detection, silhouette segmentation, tripwire crossings, crowd density, unattended hazards, and incident verification.
              </p>
            </div>

            <a 
              href="#analytics" 
              style={{
                marginTop: '2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: '800',
                color: '#111111',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              EXPLORE 28 ANALYTICS <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Card 2: 26 Hardware Components */}
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              border: '3px solid #111111',
              boxShadow: '8px 8px 0px #111111',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px',
              borderRadius: '2px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: '800', color: '#D4A836', letterSpacing: '0.06em' }}>
                  CATALOGUE TIER 02
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#888890' }}>
                  [ 01 — 26 ]
                </span>
              </div>

              <div 
                className="editorial-number-huge"
                style={{
                  fontSize: 'clamp(4.5rem, 9vw, 7rem)',
                  color: '#111111',
                  margin: '0.5rem 0'
                }}
              >
                26
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800', color: '#111111', marginBottom: '0.5rem' }}>
                HARDWARE NODES
              </h3>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: '#55555C', lineHeight: 1.55, margin: 0 }}>
                Enterprise surveillance hardware spanning high-definition optical cameras, distribution switches, 10GbE fiber transceivers, SAN/NAS arrays, UPS units, and cybersecurity appliances.
              </p>
            </div>

            <a 
              href="#hardware" 
              style={{
                marginTop: '2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: '800',
                color: '#111111',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              EXPLORE 26 HARDWARE NODES <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Card 3: 11 Core Principles (Technical Introduction) */}
          <div 
            style={{
              backgroundColor: '#111111',
              color: '#FFFFFF',
              border: '3px solid #111111',
              boxShadow: '8px 8px 0px rgba(0,0,0,0.3)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px',
              borderRadius: '2px',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: '800', color: '#F0C75E', letterSpacing: '0.06em' }}>
                  STRATEGIC FOUNDATION
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#888890' }}>
                  [ 01 — 11 ]
                </span>
              </div>

              <div 
                className="editorial-number-huge"
                style={{
                  fontSize: 'clamp(4.5rem, 9vw, 7rem)',
                  color: '#F0C75E',
                  margin: '0.5rem 0'
                }}
              >
                11
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                CORE PRINCIPLES
              </h3>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: '#B0B0B5', lineHeight: 1.55, margin: 0 }}>
                Foundational operational, architectural, and lifecycle doctrines governing city-wide public surveillance across the Pune Parliamentary Constituency.
              </p>
            </div>

            <a 
              href="#introduction"
              className="btn-editorial-primary"
              style={{ 
                marginTop: '2rem', 
                width: '100%', 
                maxWidth: '100%',
                boxSizing: 'border-box',
                justifyContent: 'center', 
                textDecoration: 'none' 
              }}
            >
              TECHNICAL INTRODUCTION <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
