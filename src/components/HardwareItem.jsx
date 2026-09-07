import React from 'react';
import { Maximize2, ShieldCheck, HardDrive } from 'lucide-react';

export default function HardwareItem({ item, index, onOpenFocus }) {
  const itemNumber = String(item.id).padStart(2, '0');
  const imageUrl = `${import.meta.env.BASE_URL}${item.image}`;
  const isAlternate = index % 2 === 1;
  const isFeature = index % 4 === 2; // Every 4th item is full-width exhibition feature

  // Common image frame
  const renderImageFrame = (aspect = '16 / 9', extraStyles = {}) => (
    <div
      onClick={() => onOpenFocus(item)}
      style={{
        position: 'relative',
        aspectRatio: aspect,
        backgroundColor: '#EAEAEB',
        border: '3px solid #111111',
        boxShadow: '6px 6px 0px #111111',
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '2px',
        ...extraStyles
      }}
      title={`Inspect ${item.name}`}
    >
      <img
        src={imageUrl}
        alt={item.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.3s ease'
        }}
        loading="lazy"
      />

      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: '#111111',
          color: '#FFFFFF',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          fontWeight: '700',
          padding: '4px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        <Maximize2 size={12} />
        INSPECT SPEC
      </div>

      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#111111',
          color: '#F0C75E',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          fontWeight: '800',
          padding: '3px 8px'
        }}
      >
        HW-{itemNumber}
      </div>
    </div>
  );

  // Common Header Pill
  const renderHeaderPill = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '800', fontSize: '0.88rem', color: '#111111' }}>
        HW-{itemNumber} / 26
      </span>
      <span
        className="category-badge-pill"
        style={{
          backgroundColor: '#111111',
          color: '#F0C75E'
        }}
      >
        {item.category.toUpperCase()}
      </span>
    </div>
  );

  // Common Distinction Callout
  const renderDistinction = () => (
    <div className="editorial-callout-distinction" style={{ marginTop: '0.5rem' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: '800', color: '#976A00', letterSpacing: '0.08em', marginBottom: '2px' }}>
        OPERATIONAL DISTINCTION
      </div>
      <div style={{ fontSize: '0.86rem', color: '#444749', lineHeight: 1.5, margin: 0 }}>
        {item.distinction}
      </div>
    </div>
  );

  // Feature Layout (Full-Width Exhibition)
  if (isFeature) {
    return (
      <article
        id={`hw-${item.id}`}
        style={{
          backgroundColor: '#FFFFFF',
          border: '3px solid #111111',
          boxShadow: '8px 8px 0px #111111',
          padding: '2.5rem',
          marginBottom: '3.5rem',
          borderRadius: '2px'
        }}
      >
        <div style={{ borderBottom: '2px solid #E4E4E6', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
          {renderHeaderPill()}
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: '800', color: '#111111', lineHeight: 1.15, margin: '0.25rem 0' }}>
            {item.name}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#333338', margin: 0, fontWeight: '500' }}>
            {item.one_liner}
          </p>
        </div>

        <div style={{ maxWidth: '950px', width: '100%', margin: '0 auto 2rem auto' }}>
          {renderImageFrame('16 / 9', { width: '100%' })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#F8F8FA', border: '1px solid #D8D8DC', padding: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: '700', color: '#686B6E', letterSpacing: '0.05em' }}>
              PRIMARY PURPOSE
            </div>
            <div style={{ fontSize: '0.88rem', color: '#111111', lineHeight: 1.5, marginTop: '3px' }}>
              {item.purpose}
            </div>
          </div>

          <div style={{ backgroundColor: '#F8F8FA', border: '1px solid #D8D8DC', padding: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: '700', color: '#686B6E', letterSpacing: '0.05em' }}>
              ROLE IN PMC SURVEILLANCE
            </div>
            <div style={{ fontSize: '0.88rem', color: '#111111', lineHeight: 1.5, marginTop: '3px' }}>
              {item.system_role}
            </div>
          </div>

          <div>
            {renderDistinction()}
          </div>
        </div>
      </article>
    );
  }

  // Standard Split Layout (Alternating Left/Right)
  return (
    <article
      id={`hw-${item.id}`}
      style={{
        backgroundColor: '#FFFFFF',
        border: '3px solid #111111',
        boxShadow: '8px 8px 0px #111111',
        padding: '2.5rem',
        marginBottom: '3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        alignItems: 'center',
        borderRadius: '2px'
      }}
    >
      <div style={{ order: isAlternate ? 2 : 1 }}>
        {renderImageFrame()}
      </div>

      <div style={{ order: isAlternate ? 1 : 2, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {renderHeaderPill()}

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: '800', color: '#111111', lineHeight: 1.2, margin: 0 }}>
          {item.name}
        </h3>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#333338', fontWeight: '500', lineHeight: 1.55, margin: 0, borderLeft: '4px solid #111111', paddingLeft: '1rem' }}>
          {item.one_liner}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
          <div style={{ backgroundColor: '#F8F8FA', border: '1px solid #D8D8DC', padding: '0.75rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: '700', color: '#686B6E', letterSpacing: '0.05em' }}>
              PRIMARY PURPOSE:
            </div>
            <div style={{ fontSize: '0.85rem', color: '#111111', lineHeight: 1.45, marginTop: '2px' }}>
              {item.purpose}
            </div>
          </div>

          <div style={{ backgroundColor: '#F8F8FA', border: '1px solid #D8D8DC', padding: '0.75rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: '700', color: '#686B6E', letterSpacing: '0.05em' }}>
              ROLE IN PMC SURVEILLANCE:
            </div>
            <div style={{ fontSize: '0.85rem', color: '#111111', lineHeight: 1.45, marginTop: '2px' }}>
              {item.system_role}
            </div>
          </div>

          {renderDistinction()}
        </div>

        <button
          onClick={() => onOpenFocus(item)}
          className="btn-editorial-dark"
          style={{ marginTop: '0.5rem', alignSelf: 'flex-start', padding: '0.65rem 1.25rem' }}
        >
          VIEW ARCHITECTURE SPECIFICATION
        </button>
      </div>
    </article>
  );
}
