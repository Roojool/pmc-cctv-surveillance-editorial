import React from 'react';

export default function ChapterHeader({ chapterNumber, title, subtitle, count, dark = true }) {
  return (
    <div
      style={{
        margin: '64px 0 32px',
        paddingBottom: '20px',
        borderBottom: dark ? '2px solid rgba(255, 255, 255, 0.14)' : '2px solid #111212',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '16px',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 800,
              backgroundColor: dark ? '#111214' : '#111212',
              color: '#F0C75E',
              padding: '4px 10px',
              borderRadius: '4px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              boxShadow: dark ? '2px 2px 0 rgba(240,199,94,0.3)' : '2px 2px 0 rgba(0,0,0,0.3)',
            }}
          >
            CHAPTER {chapterNumber}
          </span>
          {count && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.70rem',
                color: dark ? 'var(--text-dark-muted)' : 'var(--text-light-muted)',
              }}
            >
              ({count} {count === 1 ? 'CAPABILITY' : 'ITEMS'})
            </span>
          )}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: dark ? '#FFFFFF' : '#111212',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            style={{
              fontSize: '0.88rem',
              color: dark ? 'var(--text-dark-secondary)' : 'var(--text-light-secondary)',
              marginTop: '6px',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
