import React from 'react';
import { introductionData } from '../data/introductionData';
import { ShieldCheck, ArrowRight, Layers, Cpu, Wrench, Users, CheckCircle2, Terminal } from 'lucide-react';

export default function TechnicalIntroduction({ onStartPresentation }) {
  return (
    <section 
      id="introduction" 
      className="section-black"
      style={{
        padding: '6rem 0',
        borderBottom: '3px solid #111111'
      }}
    >
      <div className="container-editorial">
        
        {/* Section Header */}
        <div style={{ maxWidth: '1000px', marginBottom: '4.5rem' }}>
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
              SECTION 03
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888890', letterSpacing: '0.08em', fontWeight: '700' }}>
              TECHNICAL PHILOSOPHY & DOCTRINE
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
            TECHNICAL INTRODUCTION <br />
            <span style={{ color: '#E14F71' }}>11 CORE SURVEILLANCE PRINCIPLES</span>
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
            Establishing the strategic, operational, and architectural principles governing city-wide surveillance deployment across the Pune Parliamentary Constituency. Moving beyond passive hardware installation toward a sustainable, intelligence-driven public safety lifecycle.
          </p>
        </div>

        {/* 11 Editorial Narrative Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {introductionData.map((item, idx) => {
            const isAlternate = idx % 2 === 1;
            const isFeature = idx === 3 || idx === 7 || idx === 10; // Items 4, 8, 11 are feature spreads

            // Split paragraphs in detailedContent
            const paragraphs = item.detailedContent.split('\n\n');

            return (
              <article
                key={item.id}
                id={`intro-${item.id}`}
                style={{
                  backgroundColor: '#141414',
                  border: '3px solid #2A2A2A',
                  boxShadow: '8px 8px 0px #000000',
                  padding: '2.5rem',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  transition: 'border-color 0.2s ease'
                }}
              >
                {/* Top Stamp Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #222222', paddingBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.1rem',
                        fontWeight: '800',
                        color: item.accent
                      }}
                    >
                      [ {item.chapterNum} / 11 ]
                    </span>
                    <span 
                      className="category-badge-pill"
                      style={{
                        backgroundColor: '#222222',
                        color: '#FFFFFF',
                        border: '1px solid #3A3A3A'
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888890' }}>
                    PMC DOCTRINE
                  </span>
                </div>

                {/* Content Grid */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isFeature ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    alignItems: 'start'
                  }}
                >
                  {/* Title & Core Narrative */}
                  <div>
                    <h3 
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: isFeature ? '2.2rem' : '1.85rem',
                        fontWeight: '800',
                        color: '#FFFFFF',
                        lineHeight: 1.15,
                        margin: '0 0 1rem 0'
                      }}
                    >
                      {item.title}
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {paragraphs.map((para, pIdx) => (
                        <p 
                          key={pIdx}
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: pIdx === 0 ? '1.05rem' : '0.98rem',
                            color: pIdx === 0 ? '#FFFFFF' : '#B0B0B5',
                            lineHeight: 1.6,
                            margin: 0,
                            fontWeight: pIdx === 0 ? '500' : '400',
                            borderLeft: pIdx === 0 ? `4px solid ${item.accent}` : 'none',
                            paddingLeft: pIdx === 0 ? '1rem' : 0
                          }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Key Takeaway & Strategic Callout Block */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignSelf: 'stretch', justifyContent: 'center' }}>
                    
                    {/* Key Takeaway Banner */}
                    <div 
                      style={{
                        backgroundColor: '#0D0D0D',
                        border: '2px solid #333333',
                        borderLeft: `6px solid ${item.accent}`,
                        boxShadow: '4px 4px 0px #000000',
                        padding: '1.25rem',
                        borderRadius: '2px'
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: '800', color: item.accent, letterSpacing: '0.08em', marginBottom: '6px' }}>
                        KEY TAKEAWAY
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.3 }}>
                        {item.keyTakeaway}
                      </div>
                    </div>

                    {/* Architectural Pillar Tags for Specific Sections */}
                    {item.id === 4 && (
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ backgroundColor: '#1F1F1F', color: '#F0C75E', border: '1px solid #333333', padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700' }}>
                          BACKWARDS COMPATIBILITY
                        </span>
                        <span style={{ color: '#888890', display: 'flex', alignItems: 'center' }}>+</span>
                        <span style={{ backgroundColor: '#1F1F1F', color: '#E14F71', border: '1px solid #333333', padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700' }}>
                          FUTURE INTEGRATION
                        </span>
                      </div>
                    )}

                    {item.id === 5 && (
                      <div style={{ backgroundColor: '#111111', padding: '0.85rem', border: '1px solid #282828', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#B0B0B5', lineHeight: 1.6 }}>
                        <strong style={{ color: '#F0C75E' }}>CONVERGED ECOSYSTEM:</strong> <br />
                        HARDWARE + SOFTWARE + AI + NETWORKING + CYBERSECURITY + MAINTENANCE
                      </div>
                    )}

                    {item.id === 7 && (
                      <div style={{ backgroundColor: '#111111', padding: '0.85rem', border: '1px solid #282828', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#B0B0B5', lineHeight: 1.5 }}>
                        <strong style={{ color: '#E14F71' }}>POLICE CUSTODY WORKFLOW:</strong> <br />
                        MONITORING → MAINTENANCE → UPGRADES → CYBERSECURITY → OEM → INTEGRATION
                      </div>
                    )}

                    {item.id === 11 && (
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {['BUILD', 'INTEGRATE', 'MAINTAIN', 'UPGRADE', 'EVOLVE'].map(step => (
                          <span key={step} style={{ backgroundColor: '#F0C75E', color: '#111111', padding: '4px 10px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: '800' }}>
                            {step}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
