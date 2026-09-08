import React from 'react';
import { X, ArrowRight, Layers, Monitor, HardDrive, Cpu, Shield } from 'lucide-react';
import { introductionData } from '../data/introductionData';
import { analyticsData } from '../data/analyticsData';
import { hardwareData } from '../data/hardwareData';

export default function PresentationOverview({ isOpen, onClose, onJumpToSlide }) {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10005,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 3rem'
      }}
      onClick={onClose}
    >
      {/* Header */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '3px solid #333333',
          paddingBottom: '1.25rem',
          marginBottom: '1.5rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#F0C75E', fontWeight: '800' }}>
            PRESENTATION DIRECTORY OVERVIEW
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: '800', color: '#FFFFFF', margin: '0.25rem 0 0 0' }}>
            SELECT ANY SLIDE TO JUMP DIRECTLY
          </h2>
        </div>

        <button
          onClick={onClose}
          style={{
            backgroundColor: '#222222',
            color: '#FFFFFF',
            border: '2px solid #555555',
            padding: '8px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <X size={16} /> CLOSE OVERVIEW (ESC)
        </button>
      </div>

      {/* Quick Navigation Anchor Bar */}
      <div 
        style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #222222'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => { onJumpToSlide(0); onClose(); }}
          style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', border: '1px solid #333333', padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}
        >
          00. COVER SLIDE
        </button>
        <button
          onClick={() => { onJumpToSlide(1); onClose(); }}
          style={{ backgroundColor: '#1A1A1A', color: '#F0C75E', border: '1px solid #333333', padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}
        >
          01. TECHNICAL INTRO (11)
        </button>
        <button
          onClick={() => { onJumpToSlide(12); onClose(); }}
          style={{ backgroundColor: '#1A1A1A', color: '#E14F71', border: '1px solid #333333', padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}
        >
          02. AI ANALYTICS (28)
        </button>
        <button
          onClick={() => { onJumpToSlide(40); onClose(); }}
          style={{ backgroundColor: '#1A1A1A', color: '#F0C75E', border: '1px solid #333333', padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}
        >
          03. HARDWARE (26)
        </button>
        <button
          onClick={() => { onJumpToSlide(66); onClose(); }}
          style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', border: '1px solid #333333', padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}
        >
          04. ARCHITECTURE (1)
        </button>
        <button
          onClick={() => { onJumpToSlide(67); onClose(); }}
          style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', border: '1px solid #333333', padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}
        >
          05. SUMMARY (1)
        </button>
      </div>

      {/* 3-Column Scrollable Directory Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          overflowY: 'auto',
          flex: 1,
          paddingRight: '1rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Column 1: Technical Introduction (11 Slides) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '2px solid #F0C75E', paddingBottom: '0.5rem' }}>
            <span style={{ backgroundColor: '#F0C75E', color: '#111111', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px' }}>
              SECTION 01
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '800', color: '#FFFFFF' }}>
              TECHNICAL INTRODUCTION (11)
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {introductionData.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  onJumpToSlide(idx + 1); // Slides 1 to 11
                  onClose();
                }}
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #282828',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#F0C75E', fontWeight: '800' }}>
                    {item.chapterNum}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', color: '#FFFFFF', fontWeight: '700' }}>
                    {item.title}
                  </span>
                </div>
                <ArrowRight size={14} color="#888890" />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: AI Video Analytics (28 Slides) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '2px solid #E14F71', paddingBottom: '0.5rem' }}>
            <span style={{ backgroundColor: '#E14F71', color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px' }}>
              SECTION 02
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '800', color: '#FFFFFF' }}>
              AI VIDEO ANALYTICS (28)
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {analyticsData.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  onJumpToSlide(11 + idx + 1); // Slides 12 to 39
                  onClose();
                }}
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #282828',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#E14F71', fontWeight: '800' }}>
                    {String(item.id).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', color: '#FFFFFF', fontWeight: '700' }}>
                    {item.name}
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#888890' }}>
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Hardware Components (26 Slides) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '2px solid #F0C75E', paddingBottom: '0.5rem' }}>
            <span style={{ backgroundColor: '#F0C75E', color: '#111111', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px' }}>
              SECTION 03
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '800', color: '#FFFFFF' }}>
              HARDWARE INFRASTRUCTURE (26)
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {hardwareData.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  onJumpToSlide(11 + 28 + idx + 1); // Slides 40 to 65
                  onClose();
                }}
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #282828',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#F0C75E', fontWeight: '800' }}>
                    HW-{String(item.id).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', color: '#FFFFFF', fontWeight: '700' }}>
                    {item.name}
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#888890' }}>
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
