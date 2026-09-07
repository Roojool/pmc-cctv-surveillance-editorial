import React from 'react';
import { Play, ShieldCheck, ArrowRight, Eye } from 'lucide-react';

export default function AnalyticsItem({ item, index, onOpenVideo }) {
  const itemNumber = String(item.id).padStart(2, '0');
  
  // Choose layout variation based on index
  const layoutVariant = index % 5; // 0: A, 1: B, 2: C, 3: D, 4: E

  // Common Media Container
  const renderMediaBox = (aspect = '16 / 9', extraStyles = {}) => (
    <div
      onClick={() => onOpenVideo(item)}
      className="editorial-media-frame"
      style={{
        position: 'relative',
        aspectRatio: aspect,
        backgroundColor: '#000000',
        border: '3px solid #111111',
        boxShadow: '6px 6px 0px #111111',
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '2px',
        ...extraStyles
      }}
      title={`Play demonstration for ${item.name}`}
    >
      <img
        src={item.thumbnail_url}
        alt={`Demonstration of ${item.name}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.3s ease'
        }}
        loading="lazy"
        onError={(e) => {
          if (!e.target.src.includes('hqdefault.jpg')) {
            e.target.src = `https://i.ytimg.com/vi/${item.video_id}/hqdefault.jpg`;
          }
        }}
      />

      {/* Play Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s ease'
        }}
      >
        <div className="media-play-icon">
          <Play size={24} fill="currentColor" style={{ marginLeft: '3px' }} />
        </div>
        <span
          style={{
            marginTop: '10px',
            backgroundColor: '#111111',
            color: '#F0C75E',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: '700',
            padding: '4px 10px',
            border: '2px solid #282828',
            letterSpacing: '0.06em'
          }}
        >
          PLAY DEMONSTRATION →
        </span>
      </div>

      {/* Index Stamp in Media */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#111111',
          color: '#FFFFFF',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          fontWeight: '700',
          padding: '2px 8px',
          border: '1px solid #333333'
        }}
      >
        {itemNumber} / 28
      </div>
    </div>
  );

  // Common Header Pill
  const renderHeaderPill = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: '800',
          fontSize: '0.9rem',
          color: '#F0C75E',
          letterSpacing: '0.04em'
        }}
      >
        [ {itemNumber} / 28 ]
      </span>
      <span
        className="category-badge-pill"
        style={{
          backgroundColor: '#222222',
          color: '#FFFFFF',
          border: '1px solid #3A3A3A'
        }}
      >
        {item.category.toUpperCase()}
      </span>
    </div>
  );

  // Common Distinction Box
  const renderDistinction = () => (
    <div className="editorial-callout-distinction-dark">
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: '800', color: '#F0C75E', letterSpacing: '0.08em', marginBottom: '3px' }}>
        OPERATIONAL DISTINCTION
      </div>
      <div style={{ fontSize: '0.86rem', color: '#D4D4D8', lineHeight: 1.5, margin: 0 }}>
        {item.distinction}
      </div>
    </div>
  );

  // Common Compliance Note
  const renderCompliance = () => item.compliance_note && (
    <div
      style={{
        backgroundColor: 'rgba(225, 79, 113, 0.1)',
        border: '1px solid #E14F71',
        padding: '0.75rem 1rem',
        fontSize: '0.8rem',
        color: '#FFB8C6',
        lineHeight: 1.45,
        display: 'flex',
        gap: '8px',
        alignItems: 'flex-start',
        borderRadius: '2px'
      }}
    >
      <ShieldCheck size={16} color="#E14F71" style={{ flexShrink: 0, marginTop: '2px' }} />
      <div>
        <strong style={{ color: '#FFFFFF' }}>Statutory Safeguard:</strong> {item.compliance_note}
      </div>
    </div>
  );

  // -------------------------------------------------------------
  // LAYOUT A: Text Left (55%) / Media Right (45%)
  // -------------------------------------------------------------
  if (layoutVariant === 0) {
    return (
      <article
        id={`ai-${item.id}`}
        style={{
          backgroundColor: '#141414',
          border: '3px solid #2A2A2A',
          boxShadow: '8px 8px 0px #000000',
          padding: '2.5rem',
          marginBottom: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {renderHeaderPill()}

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.15 }}>
            {item.name}
          </h3>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#FFFFFF', fontWeight: '500', lineHeight: 1.6, margin: 0, borderLeft: '4px solid #F0C75E', paddingLeft: '1rem' }}>
            {item.one_liner}
          </p>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: '700', color: '#888890', letterSpacing: '0.08em', marginBottom: '4px' }}>
              HOW THE ALGORITHM OPERATES
            </div>
            <p style={{ fontSize: '0.9rem', color: '#B0B0B5', lineHeight: 1.55, margin: 0 }}>
              {item.what_it_does}
            </p>
          </div>

          {renderDistinction()}
          {renderCompliance()}
        </div>

        <div>
          {renderMediaBox()}
        </div>
      </article>
    );
  }

  // -------------------------------------------------------------
  // LAYOUT B: Media Left (45%) / Text Right (55%)
  // -------------------------------------------------------------
  if (layoutVariant === 1) {
    return (
      <article
        id={`ai-${item.id}`}
        style={{
          backgroundColor: '#141414',
          border: '3px solid #2A2A2A',
          boxShadow: '8px 8px 0px #000000',
          padding: '2.5rem',
          marginBottom: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}
      >
        <div>
          {renderMediaBox()}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {renderHeaderPill()}

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.15 }}>
            {item.name}
          </h3>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#FFFFFF', fontWeight: '500', lineHeight: 1.6, margin: 0, borderLeft: '4px solid #E14F71', paddingLeft: '1rem' }}>
            {item.one_liner}
          </p>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: '700', color: '#888890', letterSpacing: '0.08em', marginBottom: '4px' }}>
              HOW THE ALGORITHM OPERATES
            </div>
            <p style={{ fontSize: '0.9rem', color: '#B0B0B5', lineHeight: 1.55, margin: 0 }}>
              {item.what_it_does}
            </p>
          </div>

          {renderDistinction()}
          {renderCompliance()}
        </div>
      </article>
    );
  }

  // -------------------------------------------------------------
  // LAYOUT C: Full-Width Exhibition Feature
  // -------------------------------------------------------------
  if (layoutVariant === 2) {
    return (
      <article
        id={`ai-${item.id}`}
        style={{
          backgroundColor: '#181818',
          border: '3px solid #333333',
          boxShadow: '10px 10px 0px #000000',
          padding: '2.5rem',
          marginBottom: '3.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            {renderHeaderPill()}
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.1 }}>
              {item.name}
            </h3>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#F0C75E', border: '1px solid #333333', padding: '4px 10px' }}>
            EXHIBITION FEATURE
          </span>
        </div>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#FFFFFF', lineHeight: 1.6, margin: 0, maxWidth: '900px' }}>
          {item.one_liner}
        </p>

        {/* Hero-sized media frame */}
        <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
          {renderMediaBox('16 / 9', { width: '100%' })}
        </div>

        {/* 2-Column Split below media */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '0.5rem' }}>
          <div style={{ backgroundColor: '#111111', padding: '1.25rem', border: '1px solid #282828' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: '700', color: '#888890', letterSpacing: '0.08em', marginBottom: '6px' }}>
              HOW THE ALGORITHM OPERATES
            </div>
            <p style={{ fontSize: '0.9rem', color: '#B0B0B5', lineHeight: 1.55, margin: 0 }}>
              {item.what_it_does}
            </p>
          </div>

          <div>
            {renderDistinction()}
            {renderCompliance()}
          </div>
        </div>
      </article>
    );
  }

  // -------------------------------------------------------------
  // LAYOUT D: Large Number + Asymmetric Editorial Spread
  // -------------------------------------------------------------
  if (layoutVariant === 3) {
    return (
      <article
        id={`ai-${item.id}`}
        style={{
          backgroundColor: '#141414',
          border: '3px solid #2A2A2A',
          boxShadow: '8px 8px 0px #000000',
          padding: '2.5rem',
          marginBottom: '3rem'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'center', marginBottom: '1.75rem', borderBottom: '2px solid #222222', paddingBottom: '1.5rem' }}>
          <div 
            className="editorial-number-huge" 
            style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', color: '#F0C75E' }}
          >
            {itemNumber}
          </div>
          <div>
            <span className="category-badge-pill" style={{ backgroundColor: '#222222', color: '#FFFFFF', border: '1px solid #3A3A3A', marginBottom: '6px' }}>
              {item.category.toUpperCase()}
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.15, margin: 0 }}>
              {item.name}
            </h3>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#FFFFFF', fontWeight: '500', lineHeight: 1.6, margin: 0, borderLeft: '4px solid #F0C75E', paddingLeft: '1rem' }}>
              {item.one_liner}
            </p>

            <p style={{ fontSize: '0.9rem', color: '#B0B0B5', lineHeight: 1.55, margin: 0 }}>
              {item.what_it_does}
            </p>

            {renderDistinction()}
            {renderCompliance()}
          </div>

          <div>
            {renderMediaBox()}
          </div>
        </div>
      </article>
    );
  }

  // -------------------------------------------------------------
  // LAYOUT E: Wide Header + Framed Media Below
  // -------------------------------------------------------------
  return (
    <article
      id={`ai-${item.id}`}
      style={{
        backgroundColor: '#141414',
        border: '3px solid #2A2A2A',
        boxShadow: '8px 8px 0px #000000',
        padding: '2.5rem',
        marginBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}
    >
      <div style={{ borderBottom: '2px solid #242424', paddingBottom: '1rem' }}>
        {renderHeaderPill()}
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.15, margin: '0.25rem 0 0.5rem 0' }}>
          {item.name}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#B0B0B5', margin: 0, maxWidth: '850px' }}>
          {item.one_liner}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        <div>
          {renderMediaBox()}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: '700', color: '#888890', letterSpacing: '0.08em', marginBottom: '4px' }}>
              HOW THE ALGORITHM OPERATES
            </div>
            <p style={{ fontSize: '0.9rem', color: '#B0B0B5', lineHeight: 1.55, margin: 0 }}>
              {item.what_it_does}
            </p>
          </div>

          {renderDistinction()}
          {renderCompliance()}
        </div>
      </div>
    </article>
  );
}
