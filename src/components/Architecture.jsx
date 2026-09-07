import React, { useState } from 'react';
import ChapterHeader from './ChapterHeader';
import { pipelineStages } from '../data/architectureData';
import { Network, Server, Cpu, Shield, ArrowRight, Activity, Terminal } from 'lucide-react';

export default function Architecture() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage = pipelineStages[activeStepIndex];

  return (
    <section id="architecture" className="theme-black" style={{ padding: '5rem 0', borderTop: '4px solid #111212' }}>
      <div className="editorial-container">
        
        {/* Section Header */}
        <ChapterHeader 
          number="06"
          category="PIPELINE INTEGRATION"
          title="HOW IT ALL CONNECTS"
          subtitle="End-to-end data flow mapping: from optical edge photons through 10GbE fiber, deep neural inference, to command dispatch."
          theme="black"
        />

        {/* Interactive 8-Stage Stepper Bar */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '0.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {pipelineStages.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                style={{
                  background: isActive ? '#E14F71' : '#18191a',
                  color: isActive ? '#FFFFFF' : '#B4B7B9',
                  border: isActive ? '3px solid #FFFFFF' : '3px solid #333638',
                  boxShadow: isActive ? '4px 4px 0px #000000' : 'none',
                  padding: '1rem 0.5rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  borderRadius: '2px',
                  transition: 'all 0.15s ease'
                }}
              >
                <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: isActive ? '#FFFFFF' : '#F0C75E', letterSpacing: '0.05em' }}>
                  STAGE {stage.step}
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: 'bold', lineHeight: 1.2, fontFamily: 'Verdana, sans-serif' }}>
                  {stage.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Focus Card */}
        <div 
          style={{
            background: '#18191a',
            border: '3px solid #333638',
            boxShadow: '8px 8px 0px #000000',
            padding: '2.5rem',
            borderRadius: '4px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Stage Detail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span 
                style={{
                  background: '#E14F71',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  fontWeight: 'bold',
                  fontSize: '0.85rem'
                }}
              >
                STAGE {currentStage.step} // 08
              </span>
              <span 
                style={{
                  background: '#242628',
                  color: '#F0C75E',
                  padding: '4px 10px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  border: '1px solid #444749'
                }}
              >
                {currentStage.category.toUpperCase()}
              </span>
            </div>

            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FFFFFF', margin: 0, lineHeight: 1.2 }}>
              {currentStage.name}
            </h3>

            <p style={{ fontSize: '1.05rem', color: '#D2D5D7', lineHeight: 1.6, margin: 0 }}>
              {currentStage.description}
            </p>

            {/* Architecture specs grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ background: '#111212', border: '2px solid #333638', padding: '1rem' }}>
                <div style={{ fontSize: '0.7rem', color: '#8C9093', fontWeight: 'bold' }}>UNDERLYING TECHNOLOGY</div>
                <div style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 'bold', marginTop: '4px' }}>
                  {currentStage.tech}
                </div>
              </div>

              <div style={{ background: '#111212', border: '2px solid #333638', padding: '1rem' }}>
                <div style={{ fontSize: '0.7rem', color: '#8C9093', fontWeight: 'bold' }}>NODE OPERATIONAL TELEMETRY</div>
                <div style={{ fontSize: '0.88rem', color: '#4ADE80', fontWeight: 'bold', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80' }}></span>
                  {currentStage.status}
                </div>
              </div>
            </div>

            {/* Step navigation buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                className="btn-editorial-dark"
                style={{ opacity: activeStepIndex === 0 ? 0.4 : 1, padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
              >
                PREVIOUS STAGE
              </button>
              <button
                disabled={activeStepIndex === pipelineStages.length - 1}
                onClick={() => setActiveStepIndex(prev => Math.min(pipelineStages.length - 1, prev + 1))}
                className="btn-editorial-pink"
                style={{ opacity: activeStepIndex === pipelineStages.length - 1 ? 0.4 : 1, padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
              >
                NEXT STAGE
              </button>
            </div>
          </div>

          {/* Right Column: Conceptual Architectural Diagram Block */}
          <div 
            style={{
              background: '#111212',
              border: '3px solid #333638',
              boxShadow: '6px 6px 0px #000000',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #333638', paddingBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.78rem', color: '#F0C75E', fontWeight: 'bold', letterSpacing: '0.08em' }}>
                ARCHITECTURE PIPELINE SYNOPSIS
              </span>
              <span style={{ fontSize: '0.72rem', color: '#8C9093' }}>
                DETERMINISTIC LATENCY &lt; 200MS
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#18191a', padding: '0.75rem', border: '1px solid #333638' }}>
                <span style={{ background: '#333638', color: '#FFFFFF', padding: '2px 6px', fontSize: '0.7rem', fontWeight: 'bold' }}>EDGE</span>
                <span style={{ fontSize: '0.85rem', color: '#FFFFFF' }}>Optical Sensors capture 1080p/4K 30fps frames</span>
              </div>

              <div style={{ textAlign: 'center', color: '#E14F71' }}>↓ 10GbE Single-Mode Fiber Backhaul</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#18191a', padding: '0.75rem', border: '1px solid #333638' }}>
                <span style={{ background: '#E14F71', color: '#FFFFFF', padding: '2px 6px', fontSize: '0.7rem', fontWeight: 'bold' }}>CORE</span>
                <span style={{ fontSize: '0.85rem', color: '#FFFFFF' }}>Carrier-Grade VMS & RAID-6 Storage Archiving</span>
              </div>

              <div style={{ textAlign: 'center', color: '#F0C75E' }}>↓ Parallel GPU Neural Decoding</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#18191a', padding: '0.75rem', border: '1px solid #333638' }}>
                <span style={{ background: '#F0C75E', color: '#111212', padding: '2px 6px', fontSize: '0.7rem', fontWeight: 'bold' }}>AI HUB</span>
                <span style={{ fontSize: '0.85rem', color: '#FFFFFF' }}>28 Concurrent AI Analytics with Spatial Zone Correlation</span>
              </div>

              <div style={{ textAlign: 'center', color: '#4ADE80' }}>↓ Instant Alarm Dispatch & Incident Logging</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#18191a', padding: '0.75rem', border: '1px solid #333638' }}>
                <span style={{ background: '#4ADE80', color: '#111212', padding: '2px 6px', fontSize: '0.7rem', fontWeight: 'bold' }}>DISPATCH</span>
                <span style={{ fontSize: '0.85rem', color: '#FFFFFF' }}>Command Console Video Wall & Field Patrol Escalation</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
