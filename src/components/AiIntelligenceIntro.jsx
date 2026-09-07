import React from 'react';
import { Eye, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function AiIntelligenceIntro() {
  return (
    <section 
      className="section-black"
      style={{
        padding: '5rem 0 4rem 0',
        borderBottom: '3px solid #111111'
      }}
    >
      <div className="container-editorial">
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span 
            style={{
              backgroundColor: '#E14F71',
              color: '#FFFFFF',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: '800',
              padding: '3px 8px',
              border: '2px solid #111111'
            }}
          >
            SECTION 03
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888890', letterSpacing: '0.08em', fontWeight: '700' }}>
            ARTIFICIAL INTELLIGENCE DOSSIER
          </span>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column */}
          <div>
            <h2 
              className="headline-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
                color: '#FFFFFF',
                lineHeight: 1.0,
                textTransform: 'uppercase',
                margin: '0 0 1.5rem 0'
              }}
            >
              AI VIDEO <br />
              <span style={{ color: '#F0C75E' }}>INTELLIGENCE</span>
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#B0B0B5', lineHeight: 1.6, margin: 0 }}>
              The modern surveillance paradigm shifts from passive video recording to active cognitive interpretation. By executing deep neural network inference on raw optical streams, the PMC surveillance architecture classifies targets in milliseconds, detects boundary anomalies, and alerts operators only when predetermined conditions are met.
            </p>

            <div 
              style={{
                marginTop: '1.75rem',
                padding: '1rem 1.25rem',
                backgroundColor: '#191919',
                borderLeft: '4px solid #E14F71',
                border: '1px solid #333333'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.05em' }}>
                STATUTORY SAFEGUARDS & GOVERNANCE
              </div>
              <div style={{ fontSize: '0.85rem', color: '#B0B0B5', marginTop: '4px', lineHeight: 1.5 }}>
                All facial recognition and biometric matching capabilities are strictly restricted to authorized facilities and law enforcement protocols, fully conforming to national legal privacy mandates.
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Exhibition Highlights */}
          <div 
            style={{
              backgroundColor: '#141414',
              border: '3px solid #2E2E2E',
              boxShadow: '8px 8px 0px #000000',
              padding: '2rem'
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#F0C75E', fontWeight: '800', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              SEVEN OPERATIONAL DISCIPLINES
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.6rem 0', borderBottom: '1px solid #282828' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#E14F71', fontWeight: '700' }}>01</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700' }}>Detection & Biometric Recognition</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.6rem 0', borderBottom: '1px solid #282828' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#E14F71', fontWeight: '700' }}>02</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700' }}>Movement, Virtual Tripwires & Spatial Zones</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.6rem 0', borderBottom: '1px solid #282828' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#E14F71', fontWeight: '700' }}>03</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700' }}>Crowd Density, Tallies & Capacity Limits</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.6rem 0', borderBottom: '1px solid #282828' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#E14F71', fontWeight: '700' }}>04</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700' }}>Object Surveillance, Flow & Unattended Hazards</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.6rem 0', borderBottom: '1px solid #282828' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#E14F71', fontWeight: '700' }}>05</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700' }}>Camera Health, Defocus & Physical Tampering</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.6rem 0', borderBottom: '1px solid #282828' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#E14F71', fontWeight: '700' }}>06</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700' }}>Safety Analytics, Falls & Incident Alarms</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.6rem 0' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#E14F71', fontWeight: '700' }}>07</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700' }}>Target Tracking & Behavioural Event Models</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
