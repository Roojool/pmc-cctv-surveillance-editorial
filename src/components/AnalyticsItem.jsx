import React from 'react';
import { Play, Info, ExternalLink, ShieldCheck, Tag } from 'lucide-react';

export default function AnalyticsItem({ item, index, onOpenVideo, onOpenFocus }) {
  const isAlternate = index % 2 === 1;
  const itemNumber = String(item.id).padStart(2, '0');

  return (
    <div 
      id={`ai-${item.id}`}
      className="editorial-item-card"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        background: '#18191a',
        border: '3px solid #333638',
        boxShadow: '8px 8px 0px #000000',
        padding: '2rem',
        marginBottom: '2.5rem',
        borderRadius: '4px',
        alignItems: 'center'
      }}
    >
      {/* Visual / Video Column */}
      <div 
        style={{ 
          order: isAlternate ? 2 : 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}
      >
        <div 
          onClick={() => onOpenVideo(item)}
          style={{
            position: 'relative',
            aspectRatio: '16 / 9',
            background: '#090a0a',
            border: '3px solid #111212',
            boxShadow: '6px 6px 0px #000000',
            overflow: 'hidden',
            cursor: 'pointer',
            borderRadius: '2px'
          }}
          className="editorial-video-thumb-container"
          title={`Watch demonstration for ${item.name}`}
        >
          <img 
            src={item.thumbnail_url} 
            alt={`Demonstration of ${item.name}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.3s ease, filter 0.3s ease'
            }}
            loading="lazy"
            onError={(e) => {
              // fallback to hqdefault if high-res fails
              if (!e.target.src.includes('hqdefault.jpg')) {
                e.target.src = `https://i.ytimg.com/vi/${item.video_id}/hqdefault.jpg`;
              }
            }}
          />
          
          {/* Subtle Scanline Overlay */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.35) 50%)',
              backgroundSize: '100% 4px',
              pointerEvents: 'none',
              opacity: 0.6
            }} 
          />

          {/* Top Live Badge */}
          <div 
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              background: '#111212',
              color: '#FFFFFF',
              border: '2px solid #333638',
              padding: '2px 8px',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              fontFamily: 'Verdana, sans-serif',
              letterSpacing: '0.08em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E14F71', display: 'inline-block' }}></span>
            FEED #{itemNumber}
          </div>

          {/* Central Play Button */}
          <div 
            className="play-overlay-btn"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.35)',
              transition: 'background 0.2s ease'
            }}
          >
            <div 
              style={{
                width: '64px',
                height: '64px',
                background: '#E14F71',
                color: '#FFFFFF',
                border: '3px solid #111212',
                boxShadow: '4px 4px 0px #111212',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s ease, background 0.2s ease'
              }}
              className="play-badge-circle"
            >
              <Play size={28} fill="#FFFFFF" style={{ marginLeft: '4px' }} />
            </div>
            <span 
              style={{
                marginTop: '10px',
                background: '#111212',
                color: '#F0C75E',
                padding: '4px 10px',
                fontSize: '0.72rem',
                fontWeight: 'bold',
                fontFamily: 'Verdana, sans-serif',
                letterSpacing: '0.06em',
                border: '2px solid #333638'
              }}
            >
              CLICK TO WATCH DEMO
            </span>
          </div>

          {/* Video Duration / Author tag */}
          <div 
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              background: 'rgba(17, 18, 18, 0.9)',
              color: '#B4B7B9',
              border: '1px solid #444749',
              padding: '2px 6px',
              fontSize: '0.68rem',
              fontFamily: 'Verdana, sans-serif'
            }}
          >
            {item.video_author}
          </div>
        </div>

        {/* Action button bar */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={() => onOpenVideo(item)}
            className="btn-editorial-pink"
            style={{
              flex: 1,
              padding: '0.6rem 1rem',
              fontSize: '0.78rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <Play size={15} fill="currentColor" />
            PLAY DEMO VIDEO
          </button>
          
          <button
            onClick={() => onOpenFocus(item)}
            className="btn-editorial-dark"
            style={{
              padding: '0.6rem 1rem',
              fontSize: '0.78rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#242628',
              color: '#FFFFFF'
            }}
            title="Inspect deep architecture & use case"
          >
            <Info size={15} />
            SPEC
          </button>
        </div>
      </div>

      {/* Editorial Text Content Column */}
      <div 
        style={{ 
          order: isAlternate ? 1 : 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {/* Header line: Index & Category */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span 
              style={{
                fontFamily: 'Verdana, sans-serif',
                fontWeight: '900',
                fontSize: '1.1rem',
                color: '#E14F71',
                letterSpacing: '0.05em'
              }}
            >
              AN-{itemNumber}
            </span>
            <span style={{ color: '#686B6E', fontSize: '0.9rem' }}>//</span>
            <span 
              style={{
                background: '#242628',
                color: '#F0C75E',
                border: '1px solid #444749',
                padding: '3px 10px',
                fontSize: '0.72rem',
                fontWeight: 'bold',
                fontFamily: 'Verdana, sans-serif',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '240px',
                display: 'inline-block'
              }}
            >
              {item.category.toUpperCase()}
            </span>
          </div>

          <span style={{ fontSize: '0.72rem', color: '#8C9093', fontFamily: 'Verdana, sans-serif' }}>
            NEURAL PIPELINE ACTIVE
          </span>
        </div>

        {/* Title */}
        <h3 
          style={{
            fontFamily: 'Verdana, sans-serif',
            fontWeight: '700',
            fontSize: '1.45rem',
            color: '#FFFFFF',
            lineHeight: 1.25,
            margin: '0.2rem 0'
          }}
        >
          {item.name}
        </h3>

        {/* One Liner: Primary Takeaway */}
        <div 
          style={{
            fontSize: '0.96rem',
            color: '#FFFFFF',
            lineHeight: 1.6,
            fontWeight: '500',
            fontFamily: 'Verdana, sans-serif',
            background: 'rgba(255,255,255,0.04)',
            padding: '0.85rem 1rem',
            borderLeft: '4px solid #E14F71'
          }}
        >
          {item.one_liner}
        </div>

        {/* Technical Operation & Distinction */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 'bold', color: '#B4B7B9', letterSpacing: '0.08em', marginBottom: '4px' }}>
              HOW THE ALGORITHM WORKS
            </div>
            <p style={{ fontSize: '0.88rem', color: '#D2D5D7', lineHeight: 1.55, margin: 0 }}>
              {item.what_it_does}
            </p>
          </div>

          {/* Key Distinction Box */}
          <div 
            style={{
              background: '#111212',
              border: '2px solid #333638',
              borderLeft: '4px solid #F0C75E',
              padding: '0.75rem 1rem',
              borderRadius: '2px'
            }}
          >
            <div style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#F0C75E', letterSpacing: '0.08em', marginBottom: '3px' }}>
              OPERATIONAL DISTINCTION
            </div>
            <p style={{ fontSize: '0.84rem', color: '#B4B7B9', lineHeight: 1.5, margin: 0 }}>
              {item.distinction}
            </p>
          </div>

          {/* Compliance note if present */}
          {item.compliance_note && (
            <div 
              style={{
                background: 'rgba(225, 79, 113, 0.12)',
                border: '1px solid #E14F71',
                padding: '0.65rem 0.85rem',
                fontSize: '0.78rem',
                color: '#FFB8C6',
                lineHeight: 1.45,
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-start'
              }}
            >
              <ShieldCheck size={16} color="#E14F71" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#FFFFFF' }}>Statutory Privacy & Legal Safeguard:</strong> {item.compliance_note}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
