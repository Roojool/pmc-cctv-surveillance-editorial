import React, { useState } from 'react';
import { Camera, Network, Server, HardDrive, Cpu, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const ARCHITECTURE_STEPS = [
  {
    step: "01",
    name: "OPTICAL & THERMAL SENSORS",
    category: "Physical Edge",
    summary: "Fixed, bullet, PTZ, ANPR, and thermal cameras continuously capture multi-channel video across municipal roadways and facilities.",
    tech: "1080p / 4K Optical Sensors • Low-light IR • Starlight CMOS",
    role: "Generates the foundational visual and thermal evidence streams."
  },
  {
    step: "02",
    name: "TRANSMISSION NETWORK",
    category: "Connectivity",
    summary: "Industrial PoE switches and 10GbE single-mode fiber backbones aggregate and transport encrypted video payloads to central racks.",
    tech: "802.3bt PoE+ • 10Gbps SFP+ Fiber Rings • Encrypted Backhaul",
    role: "Ensures deterministic low-latency transport without packet loss."
  },
  {
    step: "03",
    name: "NVR & STORAGE TIERS",
    category: "Data Retention",
    summary: "High-density enterprise Network Video Recorders and SAN/NAS storage arrays archive incoming multi-channel streams with RAID redundancy.",
    tech: "RAID 6 Arrays • Redundant SAS Controllers • Hot-Spare Drives",
    role: "Guarantees statutory video retention and continuous forensic integrity."
  },
  {
    step: "04",
    name: "CENTRAL VMS PLATFORM",
    category: "Platform Core",
    summary: "Unified Video Management System coordinates stream ingestion, camera discovery, user authentication, and multi-monitor wall layouts.",
    tech: "Carrier-Grade VMS Cluster • ONVIF Profile S/G/T • REST APIs",
    role: "Acts as the single operational pane of glass for all municipal feeds."
  },
  {
    step: "05",
    name: "AI VIDEO INTELLIGENCE",
    category: "Neural Compute",
    summary: "Deep neural networks execute concurrent inference on video frames to detect faces, recognize vehicles, classify silhouettes, and track anomalies.",
    tech: "High-Throughput GPU Accelerators • Convolutional Neural Nets",
    role: "Extracts real-time cognitive awareness from raw video pixels."
  },
  {
    step: "06",
    name: "ZONE & RULE CORRELATION",
    category: "Analytical Logic",
    summary: "Virtual tripwires, directional vectors, and dwell timers evaluate whether classified targets trigger line-crossing or intrusion alerts.",
    tech: "Spatial Polygon Geometry • Trajectory Vectoring • Dwell Timers",
    role: "Eliminates false alarms from wind, weather, and background motion."
  },
  {
    step: "07",
    name: "COMMAND ROOM CONSOLES",
    category: "Human Oversight",
    summary: "Municipal control room operators monitor ultra-high-definition video walls and receive prioritized incident alerts on dedicated consoles.",
    tech: "Multi-Screen Operator Consoles • High-DPI Video Walls",
    role: "Enables rapid human verification and situational assessment."
  },
  {
    step: "08",
    name: "INCIDENT DISPATCH & AUDIT",
    category: "Operational Action",
    summary: "Automated escalation workflows dispatch field patrol officers, bookmark evidentiary video clips, and log immutable tamper-proof audit trails.",
    tech: "CAD System Interop • Push Notifications • Encrypted Audit Logs",
    role: "Closes the loop from automated detection to coordinated field response."
  }
];

export default function Architecture() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = ARCHITECTURE_STEPS[activeStepIndex];

  return (
    <section 
      id="architecture" 
      className="section-black"
      style={{
        padding: '6rem 0',
        borderBottom: '3px solid #111111'
      }}
    >
      <div className="container-editorial">
        
        {/* Header */}
        <div style={{ maxWidth: '950px', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span 
              style={{
                backgroundColor: '#F0C75E',
                color: '#111111',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: '800',
                padding: '3px 8px',
                border: '2px solid #111111'
              }}
            >
              SECTION 06
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888890', letterSpacing: '0.08em', fontWeight: '700' }}>
              PIPELINE INTEGRATION
            </span>
          </div>

          <h2 
            className="headline-display"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
              color: '#FFFFFF',
              lineHeight: 1.0,
              textTransform: 'uppercase',
              margin: '0.5rem 0 1.25rem 0'
            }}
          >
            HOW IT ALL CONNECTS <br />
            <span style={{ color: '#E14F71' }}>THE MUNICIPAL SURVEILLANCE PIPELINE</span>
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.15rem',
              color: '#B0B0B5',
              lineHeight: 1.6,
              margin: 0
            }}
          >
            An exhibition diagram tracking the sequential journey of surveillance intelligence: from physical photons captured at the optical edge, through gigabit fiber transmission, to deep learning inference and coordinated human dispatch.
          </p>
        </div>

        {/* Exhibition Pipeline Flow Stepper (Not corporate flowchart) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '0.5rem',
            marginBottom: '3rem'
          }}
        >
          {ARCHITECTURE_STEPS.map((s, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                style={{
                  backgroundColor: isActive ? '#E14F71' : '#141414',
                  color: isActive ? '#FFFFFF' : '#B0B0B5',
                  border: isActive ? '3px solid #FFFFFF' : '3px solid #282828',
                  boxShadow: isActive ? '4px 4px 0px #000000' : 'none',
                  padding: '1.25rem 0.75rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  borderRadius: '2px',
                  transition: 'all 0.15s ease'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: '800', color: isActive ? '#FFFFFF' : '#F0C75E' }}>
                  STAGE {s.step}
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: '700', lineHeight: 1.2 }}>
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Exhibition Card */}
        <div 
          style={{
            backgroundColor: '#141414',
            border: '3px solid #2E2E2E',
            boxShadow: '10px 10px 0px #000000',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            borderRadius: '2px'
          }}
        >
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span 
                style={{
                  backgroundColor: '#E14F71',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  padding: '4px 10px'
                }}
              >
                STAGE {activeStep.step} / 08
              </span>
              <span 
                style={{
                  backgroundColor: '#222222',
                  color: '#F0C75E',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '4px 10px',
                  border: '1px solid #3A3A3A'
                }}
              >
                {activeStep.category.toUpperCase()}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.1, margin: 0 }}>
              {activeStep.name}
            </h3>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#D4D4D8', lineHeight: 1.6, margin: 0 }}>
              {activeStep.summary}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ backgroundColor: '#0D0D0D', border: '1px solid #282828', padding: '1rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#888890', fontWeight: '700', letterSpacing: '0.05em' }}>
                  UNDERLYING INDUSTRIAL STANDARD / TECHNOLOGY
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: '700', marginTop: '3px' }}>
                  {activeStep.tech}
                </div>
              </div>

              <div style={{ backgroundColor: '#0D0D0D', border: '1px solid #282828', padding: '1rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#888890', fontWeight: '700', letterSpacing: '0.05em' }}>
                  STRATEGIC ROLE IN SURVEILLANCE
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#F0C75E', fontWeight: '700', marginTop: '3px' }}>
                  {activeStep.role}
                </div>
              </div>
            </div>

            {/* Stepper Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                className="btn-editorial-dark"
                style={{ opacity: activeStepIndex === 0 ? 0.3 : 1, padding: '0.6rem 1.25rem' }}
              >
                ← PREVIOUS STAGE
              </button>
              <button
                disabled={activeStepIndex === ARCHITECTURE_STEPS.length - 1}
                onClick={() => setActiveStepIndex(prev => Math.min(ARCHITECTURE_STEPS.length - 1, prev + 1))}
                className="btn-editorial-pink"
                style={{ opacity: activeStepIndex === ARCHITECTURE_STEPS.length - 1 ? 0.3 : 1, padding: '0.6rem 1.25rem' }}
              >
                NEXT STAGE →
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Schematic Progression */}
          <div 
            style={{
              backgroundColor: '#0D0D0D',
              border: '3px solid #2A2A2A',
              boxShadow: '6px 6px 0px #000000',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #222222', paddingBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '800', color: '#F0C75E' }}>
                ARCHITECTURE PIPELINE SYNOPSIS
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#888890' }}>
                DETERMINISTIC LATENCY
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#141414', padding: '0.75rem 1rem', border: '1px solid #282828' }}>
                <span style={{ backgroundColor: '#2B2B2B', color: '#FFFFFF', padding: '2px 6px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: '700' }}>01 EDGE</span>
                <span style={{ fontSize: '0.88rem', color: '#FFFFFF' }}>Optical Sensors capture 1080p/4K frames</span>
              </div>

              <div style={{ textAlign: 'center', color: '#E14F71', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>↓ 10GbE Fiber Ring Backbone</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#141414', padding: '0.75rem 1rem', border: '1px solid #282828' }}>
                <span style={{ backgroundColor: '#E14F71', color: '#FFFFFF', padding: '2px 6px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: '700' }}>02 CORE</span>
                <span style={{ fontSize: '0.88rem', color: '#FFFFFF' }}>VMS Management & RAID-6 Storage Archival</span>
              </div>

              <div style={{ textAlign: 'center', color: '#F0C75E', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>↓ Neural GPU Parallel Decoding</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#141414', padding: '0.75rem 1rem', border: '1px solid #282828' }}>
                <span style={{ backgroundColor: '#F0C75E', color: '#111111', padding: '2px 6px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: '800' }}>03 AI</span>
                <span style={{ fontSize: '0.88rem', color: '#FFFFFF' }}>28 Video Analytics & Spatial Rule Correlation</span>
              </div>

              <div style={{ textAlign: 'center', color: '#10B981', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>↓ Instant Alarm Verification</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#141414', padding: '0.75rem 1rem', border: '1px solid #282828' }}>
                <span style={{ backgroundColor: '#10B981', color: '#111111', padding: '2px 6px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: '800' }}>04 DISPATCH</span>
                <span style={{ fontSize: '0.88rem', color: '#FFFFFF' }}>Command Room Console & Patrol Escalation</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
