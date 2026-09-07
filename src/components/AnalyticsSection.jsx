import React, { useState } from 'react';
import ChapterHeader from './ChapterHeader';
import AnalyticsItem from './AnalyticsItem';
import { analyticsData } from '../data/analyticsData';
import { Filter, Eye, Cpu, CheckCircle } from 'lucide-react';

const CHAPTERS = [
  {
    id: 1,
    chapterNum: "01",
    title: "BIOMETRIC & FACIAL INTELLIGENCE",
    subtitle: "Facial detection pipelines and authorized biometric matching systems for critical infrastructure.",
    range: [1, 2]
  },
  {
    id: 2,
    chapterNum: "02",
    title: "OBJECT & TARGET CLASSIFICATION",
    subtitle: "Deep-learning silhouette isolation and dual-branch categorization between humans and motorized vehicles.",
    range: [3, 5]
  },
  {
    id: 3,
    chapterNum: "03",
    title: "PERIMETER DEFENSE & SPATIAL BOUNDARIES",
    subtitle: "Virtual tripwires, multi-polygon perimeter intrusion sensors, restricted zone buffers, and loitering timers.",
    range: [6, 9]
  },
  {
    id: 4,
    chapterNum: "04",
    title: "CROWD DYNAMICS & DENSITY ANALYSIS",
    subtitle: "Real-time gathering cluster detection, spatial heat density, bi-directional gate tallies, and facility capacity limits.",
    range: [10, 13]
  },
  {
    id: 5,
    chapterNum: "05",
    title: "FLOW, DIRECTION & TRANSIT ANALYSIS",
    subtitle: "Vector trajectory tracking, wrong-way traffic contraflow alerts, and transit corridor surveillance.",
    range: [14, 15]
  },
  {
    id: 6,
    chapterNum: "06",
    title: "PHYSICAL OBJECT SURVEILLANCE & INTEGRITY",
    subtitle: "Unattended hazard detection, missing municipal property alerts, anti-theft triggers, and camera tampering defense.",
    range: [16, 20]
  },
  {
    id: 7,
    chapterNum: "07",
    title: "SITUATIONAL AWARENESS & ANOMALY DETECTION",
    subtitle: "Thermal anomalies, acoustic spikes, PPE safety compliance, slip-and-fall alerts, and proactive threat triage.",
    range: [21, 28]
  }
];

export default function AnalyticsSection({ onOpenVideo, onOpenFocus }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Unique categories
  const categories = ["ALL", ...Array.from(new Set(analyticsData.map(a => a.category)))];

  const filteredData = selectedCategory === "ALL" 
    ? analyticsData 
    : analyticsData.filter(a => a.category === selectedCategory);

  return (
    <section id="analytics" className="theme-black" style={{ padding: '5rem 0', borderTop: '4px solid #111212' }}>
      <div className="editorial-container">
        
        {/* Main Section Banner */}
        <ChapterHeader 
          number="03"
          category="NEURAL VISION ENGINES"
          title="AI VIDEO ANALYTICS SHOWCASE"
          subtitle="28 production-grade computer vision models operating concurrently across Pune Parliamentary Constituency surveillance feeds."
          theme="black"
        />

        {/* Category Filter Pills */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
            padding: '1.25rem',
            background: '#18191a',
            border: '3px solid #333638',
            boxShadow: '6px 6px 0px #000000',
            borderRadius: '4px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '0.5rem', color: '#B4B7B9', fontSize: '0.8rem', fontWeight: 'bold' }}>
            <Filter size={16} color="#E14F71" />
            FILTER CATEGORY:
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
                  fontFamily: 'Verdana, sans-serif',
                  fontSize: '0.74rem',
                  fontWeight: 'bold',
                  padding: '6px 12px',
                  background: isActive ? '#E14F71' : '#111212',
                  color: isActive ? '#FFFFFF' : '#B4B7B9',
                  border: isActive ? '2px solid #FFFFFF' : '2px solid #333638',
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
                    background: isActive ? '#111212' : '#242628',
                    color: isActive ? '#F0C75E' : '#8C9093',
                    padding: '1px 5px',
                    fontSize: '0.68rem',
                    borderRadius: '2px'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* When filtered, show direct items grid */}
        {selectedCategory !== "ALL" ? (
          <div>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 'bold' }}>
                Showing {filteredData.length} analytics for: <span style={{ color: '#E14F71' }}>{selectedCategory}</span>
              </div>
              <button 
                onClick={() => setSelectedCategory("ALL")}
                style={{ background: 'transparent', border: 'none', color: '#F0C75E', cursor: 'pointer', fontSize: '0.8rem', textDecoration: 'underline' }}
              >
                Reset to All Chapters
              </button>
            </div>
            {filteredData.map((item, idx) => (
              <AnalyticsItem 
                key={item.id} 
                item={item} 
                index={idx}
                onOpenVideo={onOpenVideo} 
                onOpenFocus={onOpenFocus} 
              />
            ))}
          </div>
        ) : (
          /* When ALL is selected, present Chapter by Chapter */
          <div>
            {CHAPTERS.map((chap) => {
              const chapterItems = analyticsData.filter(
                a => a.id >= chap.range[0] && a.id <= chap.range[1]
              );

              return (
                <div key={chap.id} style={{ marginBottom: '5rem' }}>
                  {/* Sub-Chapter Divider */}
                  <div 
                    style={{
                      borderBottom: '3px solid #333638',
                      paddingBottom: '1rem',
                      marginBottom: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ background: '#E14F71', color: '#FFFFFF', padding: '2px 8px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        CHAPTER {chap.chapterNum}
                      </span>
                      <span style={{ color: '#8C9093', fontSize: '0.8rem', fontWeight: 'bold' }}>
                        ITEMS {String(chap.range[0]).padStart(2, '0')} - {String(chap.range[1]).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 'bold', margin: '0.2rem 0' }}>
                      {chap.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#B4B7B9', margin: 0 }}>
                      {chap.subtitle}
                    </p>
                  </div>

                  {/* Chapter Items List */}
                  {chapterItems.map((item, idx) => (
                    <AnalyticsItem 
                      key={item.id} 
                      item={item} 
                      index={idx}
                      onOpenVideo={onOpenVideo} 
                      onOpenFocus={onOpenFocus} 
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
