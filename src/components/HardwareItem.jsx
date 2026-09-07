import React from 'react';
import { Layers, HardDrive, Shield, CheckCircle, ExternalLink, Maximize2 } from 'lucide-react';

export default function HardwareItem({ item, onOpenFocus }) {
  const itemNumber = String(item.id).padStart(2, '0');
  const imageUrl = `${import.meta.env.BASE_URL}${item.image}`;

  return (
    <div 
      id={`hw-${item.id}`}
      style={{
        background: '#FFFFFF',
        border: '3px solid #111212',
        boxShadow: '6px 6px 0px #111212',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease'
      }}
      className="hardware-card-editorial"
    >
      {/* Top Banner Tag */}
      <div 
        style={{
          background: '#111212',
          color: '#FFFFFF',
          padding: '0.65rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '3px solid #111212'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#F0C75E', fontWeight: 'bold', fontSize: '0.85rem' }}>
            HW-{itemNumber}
          </span>
          <span style={{ color: '#686B6E' }}>|</span>
          <span 
            style={{
              background: '#242628',
              color: '#FFFFFF',
              padding: '2px 8px',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '170px',
              display: 'inline-block'
            }}
          >
            {item.category.toUpperCase()}
          </span>
        </div>
        <span style={{ fontSize: '0.68rem', color: '#8C9093', fontWeight: 'bold' }}>
          UNBRANDED SPEC
        </span>
      </div>

      {/* Visual Container (1280x720 16:9) */}
      <div 
        onClick={() => onOpenFocus(item)}
        style={{
          position: 'relative',
          aspectRatio: '16 / 9',
          background: '#F0F1F2',
          borderBottom: '3px solid #111212',
          overflow: 'hidden',
          cursor: 'pointer'
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
            bottom: '8px',
            right: '8px',
            background: 'rgba(17, 18, 18, 0.85)',
            color: '#FFFFFF',
            border: '2px solid #111212',
            padding: '3px 7px',
            fontSize: '0.68rem',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontWeight: 'bold'
          }}
        >
          <Maximize2 size={12} />
          INSPECT
        </div>
      </div>

      {/* Body Content */}
      <div 
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '0.85rem',
          background: '#FFFFFF'
        }}
      >
        {/* Name */}
        <h4 
          style={{
            fontFamily: 'Verdana, sans-serif',
            fontWeight: '700',
            fontSize: '1.25rem',
            color: '#111212',
            margin: 0,
            lineHeight: 1.3
          }}
        >
          {item.name}
        </h4>

        {/* One-liner */}
        <p 
          style={{
            fontFamily: 'Verdana, sans-serif',
            fontSize: '0.88rem',
            color: '#333638',
            lineHeight: 1.5,
            margin: 0,
            fontWeight: '500'
          }}
        >
          {item.one_liner}
        </p>

        {/* Technical Purpose & PMC Role */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
          <div style={{ background: '#F7F8F9', padding: '0.65rem 0.75rem', border: '1px solid #D2D5D7', borderRadius: '2px' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 'bold', color: '#686B6E', letterSpacing: '0.05em' }}>
              PRIMARY PURPOSE:
            </div>
            <div style={{ fontSize: '0.82rem', color: '#111212', lineHeight: 1.45, marginTop: '2px' }}>
              {item.purpose}
            </div>
          </div>

          <div style={{ background: '#F7F8F9', padding: '0.65rem 0.75rem', border: '1px solid #D2D5D7', borderRadius: '2px' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 'bold', color: '#686B6E', letterSpacing: '0.05em' }}>
              ROLE IN PMC SURVEILLANCE:
            </div>
            <div style={{ fontSize: '0.82rem', color: '#111212', lineHeight: 1.45, marginTop: '2px' }}>
              {item.system_role}
            </div>
          </div>

          {/* Distinction Callout */}
          <div 
            style={{
              background: '#FFFDF5',
              border: '1px solid #E2BD55',
              borderLeft: '4px solid #F0C75E',
              padding: '0.65rem 0.75rem',
              borderRadius: '2px'
            }}
          >
            <div style={{ fontSize: '0.68rem', fontWeight: 'bold', color: '#976A00', letterSpacing: '0.05em' }}>
              OPERATIONAL DISTINCTION:
            </div>
            <div style={{ fontSize: '0.82rem', color: '#444749', lineHeight: 1.45, marginTop: '2px' }}>
              {item.distinction}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onOpenFocus(item)}
          className="btn-editorial-dark"
          style={{
            marginTop: '0.75rem',
            padding: '0.6rem 1rem',
            fontSize: '0.78rem',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          VIEW ARCHITECTURE SPECIFICATION
        </button>
      </div>
    </div>
  );
}
