import React from 'react';
import { ArrowDown, Shield, Terminal, CheckCircle2, Eye, Cpu, Activity } from 'lucide-react';

export default function Hero({ onOpenScan }) {
  return (
    <section
      id="hero"
      className="theme-black"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '110px',
        paddingBottom: '60px',
        borderBottom: '2px solid #111212',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Line Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ textAlign: 'center', maxWidth: '1080px' }}>
        {/* Metadata Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#16171A',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              padding: '6px 14px',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
            MUNICIPAL SURVEILLANCE ECOSYSTEM
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#16171A',
              border: '1px solid rgba(240, 199, 94, 0.3)',
              color: '#F0C75E',
              padding: '6px 14px',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            PUNE PARLIAMENTARY CONSTITUENCY
          </div>
        </div>

        {/* Display Typography */}
        <div style={{ marginBottom: '18px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#F0C75E',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            PMC &bull; 2026 EDITION
          </div>

          <h1 className="display-title-hero" style={{ maxWidth: '980px', margin: '0 auto' }}>
            CCTV SURVEILLANCE SYSTEM
            <span style={{ display: 'block', color: '#F0C75E', fontSize: '0.85em', marginTop: '4px' }}>
              (AI BASED)
            </span>
          </h1>
        </div>

        {/* Subtitle & Lead Paragraph */}
        <p
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            margin: '0 auto 16px',
          }}
        >
          Pune Municipal Corporation Surveillance Infrastructure
        </p>

        <p
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '0.96rem',
            lineHeight: 1.65,
            color: 'var(--text-dark-secondary)',
            maxWidth: '740px',
            margin: '0 auto 36px',
          }}
        >
          An enterprise-grade municipal video analytics and physical hardware platform delivering real-time situational awareness, multi-zone security monitoring, and automated event detection across Pune Parliamentary Constituency.
        </p>

        {/* Hero Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '60px',
          }}
        >
          <a href="#glance" className="btn-editorial-primary btn-editorial-gold" style={{ textDecoration: 'none' }}>
            Explore System <ArrowDown size={16} />
          </a>

          <a href="#status" onClick={onOpenScan} className="btn-editorial-primary btn-editorial-dark" style={{ textDecoration: 'none' }}>
            <Terminal size={15} color="#F0C75E" /> Diagnostic Telemetry Scan
          </a>
        </div>

        {/* Bottom Metric Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            maxWidth: '960px',
            margin: '0 auto',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Eye size={18} color="#F0C75E" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>28</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>AI Video Analytics</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Cpu size={18} color="#F0C75E" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>26</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>Hardware Components</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#F0C75E" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>54</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>Total Elements</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Activity size={18} color="#E14F71" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>100%</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>Unbranded Specs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
