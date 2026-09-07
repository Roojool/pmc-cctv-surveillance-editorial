import React from 'react';
import { Activity, Shield, Crosshair, Terminal } from 'lucide-react';

export default function LiveDetection() {
  return (
    <section id="live-detection" className="theme-black" style={{ borderTop: '2px solid #111212', borderBottom: '2px solid #111212', padding: '80px 0' }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="section-eyebrow">04 / SURVEILLANCE FEED MONITOR</div>
          <h2 className="section-heading-editorial" style={{ color: '#FFFFFF' }}>
            LIVE VIDEO INTELLIGENCE
          </h2>
          <p className="section-subtitle-editorial" style={{ color: 'var(--text-dark-secondary)', margin: '12px auto 0' }}>
            Real-time neural detection overlays simulating deep-learning target classification and tripwire vector telemetry across live video streams.
          </p>
        </div>

        {/* Frame with Simulated HUD */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1080px',
            margin: '0 auto',
            backgroundColor: '#050608',
            border: '3px solid #FFFFFF',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '12px 12px 0 rgba(240, 199, 94, 0.25)',
          }}
        >
          {/* Top Camera Status Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 18px',
              backgroundColor: '#0E1014',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-dark-secondary)',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="pulse-dot" style={{ width: '8px', height: '8px' }}></span>
              <span style={{ color: '#FFFFFF', fontWeight: 700 }}>CAM-04 &bull; PUNE CHHATRAPATI SHIVAJI ROAD</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span>FPS: 30.0</span>
              <span>LATENCY: 12.4ms</span>
              <span style={{ color: '#F0C75E', fontWeight: 700 }}>AI INFERENCE: ACTIVE</span>
            </div>
          </div>

          {/* Surveillance Visual Canvas */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              background: 'radial-gradient(ellipse at center, #141720 0%, #080A0E 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {/* Background Image of high-tech surveillance node */}
            <img
              src="assets/hardware/vms.jpg"
              alt="Surveillance Feed Visual"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.38,
                filter: 'grayscale(40%) contrast(120%)',
              }}
            />

            {/* Grid Scanlines */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) 2px, transparent 2px, transparent 4px)',
                pointerEvents: 'none',
              }}
            />

            {/* Bounding Box 1: Person Detection */}
            <div
              style={{
                position: 'absolute',
                top: '28%',
                left: '24%',
                width: '18%',
                height: '42%',
                border: '2px solid #00E5FF',
                backgroundColor: 'rgba(0, 229, 255, 0.08)',
                boxShadow: '0 0 12px rgba(0, 229, 255, 0.4)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: '-2px',
                  backgroundColor: '#00E5FF',
                  color: '#000000',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.64rem',
                  fontWeight: 800,
                  padding: '2px 6px',
                  whiteSpace: 'nowrap',
                }}
              >
                PERSON [0.98] #1042
              </div>
              <div style={{ position: 'absolute', bottom: '4px', right: '4px', color: '#00E5FF', fontSize: '0.60rem', fontFamily: 'var(--font-mono)' }}>
                TRACKING
              </div>
            </div>

            {/* Bounding Box 2: Vehicle Detection */}
            <div
              style={{
                position: 'absolute',
                top: '42%',
                right: '22%',
                width: '32%',
                height: '34%',
                border: '2px solid #F0C75E',
                backgroundColor: 'rgba(240, 199, 94, 0.08)',
                boxShadow: '0 0 12px rgba(240, 199, 94, 0.4)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: '-2px',
                  backgroundColor: '#F0C75E',
                  color: '#000000',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.64rem',
                  fontWeight: 800,
                  padding: '2px 6px',
                  whiteSpace: 'nowrap',
                }}
              >
                VEHICLE [0.96] SPEED: 38 KM/H
              </div>
            </div>

            {/* Virtual Tripwire Line */}
            <div
              style={{
                position: 'absolute',
                top: '64%',
                left: '10%',
                right: '10%',
                height: '2px',
                backgroundColor: '#E14F71',
                boxShadow: '0 0 10px #E14F71',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '-18px',
                  color: '#E14F71',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                }}
              >
                VIRTUAL TRIPWIRE &bull; LINE-02
              </span>
            </div>

            {/* Center Crosshair Indicator */}
            <div style={{ position: 'absolute', opacity: 0.5 }}>
              <Crosshair size={42} color="#F0C75E" />
            </div>

            {/* Conceptual Badge Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                backgroundColor: 'rgba(0,0,0,0.85)',
                border: '1px solid rgba(255,255,255,0.25)',
                padding: '6px 12px',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span className="pulse-dot-gold" style={{ width: '6px', height: '6px' }}></span>
              DEMONSTRATION VISUAL &bull; SIMULATED TELEMETRY HUD
            </div>
          </div>

          {/* Bottom Telemetry Metrics Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              padding: '14px 20px',
              backgroundColor: '#0E1014',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
            }}
          >
            <div>
              <span style={{ color: 'var(--text-dark-muted)' }}>STREAM ENCODING: </span>
              <span style={{ color: '#FFFFFF', fontWeight: 700 }}>H.265 / RTSP</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-dark-muted)' }}>MODELS CONCURRENT: </span>
              <span style={{ color: '#F0C75E', fontWeight: 700 }}>06 ACTIVE PIPELINES</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-dark-muted)' }}>TARGETS TRACKED: </span>
              <span style={{ color: '#00E5FF', fontWeight: 700 }}>04 DETECTIONS</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-dark-muted)' }}>ZONE STATUS: </span>
              <span style={{ color: '#10B981', fontWeight: 700 }}>NORMAL &bull; NO BREACH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
