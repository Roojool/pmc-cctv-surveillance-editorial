import React from 'react';
import { Layers, Eye, Cpu, ArrowRight } from 'lucide-react';

export default function Stats() {
  return (
    <section id="glance" className="theme-white">
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
          <div className="section-eyebrow" style={{ color: '#111212', backgroundColor: '#F0C75E', padding: '4px 10px', borderRadius: '4px', display: 'inline-block' }}>
            02 / THE ARCHITECTURE
          </div>
          <h2 className="section-heading-editorial" style={{ color: '#111212', marginTop: '12px' }}>
            THE SYSTEM AT A GLANCE
          </h2>
          <p className="section-subtitle-editorial" style={{ color: 'var(--text-light-secondary)', margin: '12px auto 0' }}>
            &ldquo;AI-powered video intelligence supported by a complete, robust surveillance infrastructure.&rdquo;
          </p>
        </div>

        {/* 3 Physical Framed Metric Blocks */}
        <div className="grid-cols-3">
          {/* Card 1: 28 AI Analytics */}
          <div className="framed-card-light">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span className="editorial-tag">CHAPTER 03</span>
                <Eye size={22} color="#111212" />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(3.5rem, 6vw, 4.8rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: '#111212',
                  marginBottom: '10px',
                }}
              >
                28
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#111212',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}
              >
                AI Video Analytics
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  color: 'var(--text-light-secondary)',
                  marginBottom: '24px',
                }}
              >
                Deep-learning neural network computer vision models deployed at edge and server tiers for real-time target classification, tripwire crossings, perimeter protection, and anomalous event recognition.
              </p>
            </div>
            <a
              href="#analytics"
              className="btn-editorial-primary"
              style={{ width: '100%', textDecoration: 'none' }}
            >
              Explore 28 Analytics <ArrowRight size={14} />
            </a>
          </div>

          {/* Card 2: 26 Hardware Components */}
          <div className="framed-card-light">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span className="editorial-tag">CHAPTER 05</span>
                <Cpu size={22} color="#111212" />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(3.5rem, 6vw, 4.8rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: '#111212',
                  marginBottom: '10px',
                }}
              >
                26
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#111212',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}
              >
                Hardware Components
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  color: 'var(--text-light-secondary)',
                  marginBottom: '24px',
                }}
              >
                Physical optical cameras, enterprise recording platforms, high-throughput PoE switching, fiber backbones, power backup, and cybersecurity appliances forming the surveillance backbone.
              </p>
            </div>
            <a
              href="#hardware"
              className="btn-editorial-primary"
              style={{ width: '100%', textDecoration: 'none' }}
            >
              Inspect 26 Components <ArrowRight size={14} />
            </a>
          </div>

          {/* Card 3: 54 Total System Elements */}
          <div className="framed-card-light" style={{ backgroundColor: '#111214', color: '#FFFFFF', borderColor: '#111212' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span className="editorial-tag" style={{ backgroundColor: '#F0C75E', color: '#111212' }}>TOTAL INVENTORY</span>
                <Layers size={22} color="#F0C75E" />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(3.5rem, 6vw, 4.8rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: '#F0C75E',
                  marginBottom: '10px',
                }}
              >
                54
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}
              >
                Total System Elements
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  color: 'var(--text-dark-secondary)',
                  marginBottom: '24px',
                }}
              >
                A unified, end-to-end municipal security ecosystem operating under statutory privacy safeguards, standard operating procedures, and comprehensive data protection governance.
              </p>
            </div>
            <a
              href="#architecture"
              className="btn-editorial-primary btn-editorial-gold"
              style={{ width: '100%', textDecoration: 'none' }}
            >
              View System Pipeline <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
