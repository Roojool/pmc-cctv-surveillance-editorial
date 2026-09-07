import React, { useState } from 'react';
import AnalyticsItem from './AnalyticsItem';
import { analyticsData } from '../data/analyticsData';
import { Filter, Layers, CheckCircle } from 'lucide-react';

const CHAPTERS = [
  {
    id: 1,
    chapterNum: "01",
    title: "DETECTION & RECOGNITION",
    subtitle: "Real-time facial detection, statutory biometric authentication, human silhouette isolation, and motorized vehicle identification.",
    range: [1, 5]
  },
  {
    id: 2,
    chapterNum: "02",
    title: "MOVEMENT & ZONES",
    subtitle: "Directional virtual tripwires, multi-point polygon intrusion boundaries, restricted facility zones, and loitering dwell timers.",
    range: [6, 9]
  },
  {
    id: 3,
    chapterNum: "03",
    title: "COUNTING & CROWD",
    subtitle: "Pedestrian gathering detection, spatial crowd density heat analysis, bi-directional portal tallies, and transit facility capacity tracking.",
    range: [10, 13]
  },
  {
    id: 4,
    chapterNum: "04",
    title: "OBJECT INTELLIGENCE & FLOW",
    subtitle: "Directional flow vectors, wrong-way contraflow alerts, abandoned hazard detection, missing municipal property alerts, and scene integrity.",
    range: [14, 19]
  },
  {
    id: 5,
    chapterNum: "05",
    title: "CAMERA HEALTH & INTEGRITY",
    subtitle: "Automated tamper alarms, sudden signal loss triage, lens defocus diagnostics, and physical camera obstruction sensors.",
    range: [20, 23]
  },
  {
    id: 6,
    chapterNum: "06",
    title: "PERIMETER DEFENSE & SAFETY",
    subtitle: "Multi-layered physical perimeter surveillance, sudden human fall detection, and industrial fire and smoke alerting.",
    range: [24, 26]
  },
  {
    id: 7,
    chapterNum: "07",
    title: "TRACKING & BEHAVIOUR",
    subtitle: "Multi-camera pedestrian and vehicle trajectory tracking, and automated behavioural anomaly event correlation.",
    range: [27, 28]
  }
];

export default function AnalyticsSection({ onOpenVideo }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", ...Array.from(new Set(analyticsData.map(a => a.category)))];

  const filteredData = selectedCategory === "ALL"
    ? analyticsData
    : analyticsData.filter(a => a.category === selectedCategory);

  return (
    <section 
      id="analytics" 
      className="section-black"
      style={{
        padding: '6rem 0',
        borderBottom: '3px solid #111111'
      }}
    >
      <div className="container-editorial">
        
        {/* Section Header */}
        <div style={{ maxWidth: '950px', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span 
              style={{
                backgroundColor: '#E14F71',
                color: '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: '800',
                padding: '3px 8px',
                border: '2px solid #111111'
              }}
            >
              SECTION 04
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888890', letterSpacing: '0.08em', fontWeight: '700' }}>
              COMPUTER VISION CAPABILITIES
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
            AI VIDEO ANALYTICS <br />
            <span style={{ color: '#F0C75E' }}>28 VIDEO INTELLIGENCE CAPABILITIES</span>
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
            Curated exhibition of 28 deep-learning video analytics models deployed across the Pune Parliamentary Constituency surveillance framework. Every capability is presented with its verified operational demonstration, algorithmic mechanism, and technical distinction.
          </p>
        </div>

        {/* Filter Bar */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
            padding: '1.25rem',
            backgroundColor: '#141414',
            border: '3px solid #282828',
            boxShadow: '6px 6px 0px #000000',
            borderRadius: '2px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '0.5rem', color: '#888890', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700' }}>
            <Filter size={15} color="#F0C75E" />
            FILTER:
          </div>

          {categories.map((cat) => {
            const count = cat === "ALL" 
              ? analyticsData.length 
              : analyticsData.filter(a => a.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  padding: '6px 12px',
                  backgroundColor: isActive ? '#F0C75E' : '#1E1E1E',
                  color: isActive ? '#111111' : '#B0B0B5',
                  border: isActive ? '2px solid #FFFFFF' : '2px solid #333333',
                  boxShadow: isActive ? '3px 3px 0px #000000' : 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{cat.toUpperCase()}</span>
                <span 
                  style={{
                    backgroundColor: isActive ? '#111111' : '#111111',
                    color: isActive ? '#F0C75E' : '#888890',
                    padding: '1px 5px',
                    fontSize: '0.65rem',
                    borderRadius: '2px'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Display: Filtered vs 7 Chapters */}
        {selectedCategory !== "ALL" ? (
          <div>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '700' }}>
                SHOWING {filteredData.length} ANALYTICS FOR: <span style={{ color: '#F0C75E' }}>{selectedCategory.toUpperCase()}</span>
              </div>
              <button
                onClick={() => setSelectedCategory("ALL")}
                style={{ background: 'transparent', border: 'none', color: '#E14F71', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textDecoration: 'underline' }}
              >
                RESET TO ALL 7 CHAPTERS
              </button>
            </div>

            {filteredData.map((item, idx) => (
              <AnalyticsItem
                key={item.id}
                item={item}
                index={idx}
                onOpenVideo={onOpenVideo}
              />
            ))}
          </div>
        ) : (
          <div>
            {CHAPTERS.map((chap) => {
              const chapterItems = analyticsData.filter(
                a => a.id >= chap.range[0] && a.id <= chap.range[1]
              );

              return (
                <div key={chap.id} style={{ marginBottom: '6rem' }}>
                  
                  {/* Chapter Intro Header */}
                  <div 
                    style={{
                      borderBottom: '3px solid #2E2E2E',
                      paddingBottom: '1.25rem',
                      marginBottom: '3rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span 
                        style={{
                          backgroundColor: '#E14F71',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          fontWeight: '800',
                          padding: '2px 8px'
                        }}
                      >
                        CHAPTER {chap.chapterNum}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888890', fontWeight: '700' }}>
                        ITEMS {String(chap.range[0]).padStart(2, '0')} — {String(chap.range[1]).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                        fontWeight: '800',
                        color: '#FFFFFF',
                        lineHeight: 1.1,
                        margin: '0.25rem 0'
                      }}
                    >
                      {chap.title}
                    </h3>

                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#B0B0B5', margin: 0, maxWidth: '850px' }}>
                      {chap.subtitle}
                    </p>
                  </div>

                  {/* Chapter Items with Varied Layouts */}
                  {chapterItems.map((item, idx) => (
                    <AnalyticsItem
                      key={item.id}
                      item={item}
                      index={idx}
                      onOpenVideo={onOpenVideo}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
