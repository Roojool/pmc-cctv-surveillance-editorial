import React, { useState } from 'react';
import ChapterHeader from './ChapterHeader';
import HardwareItem from './HardwareItem';
import { hardwareData } from '../data/hardwareData';
import { Filter, Server, Camera, Shield, Cpu, Zap } from 'lucide-react';

const HW_CHAPTERS = [
  {
    id: 1,
    chapterNum: "01",
    title: "FIELD SURVEILLANCE UNITS & OPTICAL EDGE",
    subtitle: "High-definition fixed, bullet, dome, optical PTZ, automated number plate recognition (ANPR), and dual-spectrum thermal cameras.",
    range: [1, 6]
  },
  {
    id: 2,
    chapterNum: "02",
    title: "CENTRAL RECORDING & MANAGEMENT TIERS",
    subtitle: "Enterprise Network Video Recorders, carrier-grade VMS platform, edge AI acceleration nodes, and multi-petabyte SAN/NAS storage.",
    range: [7, 10]
  },
  {
    id: 3,
    chapterNum: "03",
    title: "NETWORK & CONNECTIVITY BACKBONE",
    subtitle: "Industrial 802.3bt PoE switches, core distribution routing chassis, single-mode fiber infrastructure, and wireless PTP links.",
    range: [11, 17]
  },
  {
    id: 4,
    chapterNum: "04",
    title: "POWER, RACKS & FIELD INFRASTRUCTURE",
    subtitle: "Double-conversion online UPS units, IP66 environmental field racks, cantilever surveillance poles, and specialized radar sensors.",
    range: [18, 23]
  },
  {
    id: 5,
    chapterNum: "05",
    title: "COMMAND CENTER CONSOLES & CYBERSECURITY",
    subtitle: "Operator dispatch consoles, enterprise multi-server licensing clusters, and next-generation perimeter firewalls.",
    range: [24, 26]
  }
];

export default function HardwareSection({ onOpenFocus }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", ...Array.from(new Set(hardwareData.map(h => h.category)))];

  const filteredData = selectedCategory === "ALL"
    ? hardwareData
    : hardwareData.filter(h => h.category === selectedCategory);

  return (
    <section id="hardware" className="theme-white" style={{ padding: '5rem 0', borderTop: '4px solid #111212' }}>
      <div className="editorial-container">
        
        {/* Section Header */}
        <ChapterHeader 
          number="05"
          category="MUNICIPAL INFRASTRUCTURE"
          title="HARDWARE SPECIFICATION ARCHITECTURE"
          subtitle="26 unbranded physical surveillance components engineered for continuous municipal-scale reliability across Pune Parliamentary Constituency."
          theme="white"
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
            background: '#FFFFFF',
            border: '3px solid #111212',
            boxShadow: '6px 6px 0px #111212',
            borderRadius: '4px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '0.5rem', color: '#111212', fontSize: '0.8rem', fontWeight: 'bold' }}>
            <Filter size={16} color="#111212" />
            FILTER CATEGORY:
          </div>

          {categories.map((cat) => {
            const count = cat === "ALL" 
              ? hardwareData.length 
              : hardwareData.filter(h => h.category === cat).length;
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
                  background: isActive ? '#111212' : '#F0F1F2',
                  color: isActive ? '#F0C75E' : '#111212',
                  border: '2px solid #111212',
                  boxShadow: isActive ? '3px 3px 0px #111212' : 'none',
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
                    background: isActive ? '#F0C75E' : '#FFFFFF',
                    color: '#111212',
                    padding: '1px 5px',
                    fontSize: '0.68rem',
                    borderRadius: '2px',
                    border: '1px solid #111212'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Direct Grid when filtered */}
        {selectedCategory !== "ALL" ? (
          <div>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '1rem', color: '#111212', fontWeight: 'bold' }}>
                Showing {filteredData.length} hardware components for: <span style={{ color: '#E14F71' }}>{selectedCategory}</span>
              </div>
              <button 
                onClick={() => setSelectedCategory("ALL")}
                style={{ background: 'transparent', border: 'none', color: '#111212', cursor: 'pointer', fontSize: '0.8rem', textDecoration: 'underline' }}
              >
                Reset to All Chapters
              </button>
            </div>
            
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '2rem'
              }}
            >
              {filteredData.map((item) => (
                <HardwareItem 
                  key={item.id} 
                  item={item} 
                  onOpenFocus={onOpenFocus} 
                />
              ))}
            </div>
          </div>
        ) : (
          /* Chapter by Chapter */
          <div>
            {HW_CHAPTERS.map((chap) => {
              const chapterItems = hardwareData.filter(
                h => h.id >= chap.range[0] && h.id <= chap.range[1]
              );

              return (
                <div key={chap.id} style={{ marginBottom: '5rem' }}>
                  {/* Chapter subheader */}
                  <div 
                    style={{
                      borderBottom: '3px solid #111212',
                      paddingBottom: '1rem',
                      marginBottom: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ background: '#111212', color: '#F0C75E', padding: '2px 8px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        HARDWARE CHAPTER {chap.chapterNum}
                      </span>
                      <span style={{ color: '#686B6E', fontSize: '0.8rem', fontWeight: 'bold' }}>
                        ITEMS HW-{String(chap.range[0]).padStart(2, '0')} - HW-{String(chap.range[1]).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.4rem', color: '#111212', fontWeight: 'bold', margin: '0.2rem 0' }}>
                      {chap.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#444749', margin: 0 }}>
                      {chap.subtitle}
                    </p>
                  </div>

                  {/* Grid */}
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                      gap: '2rem'
                    }}
                  >
                    {chapterItems.map((item) => (
                      <HardwareItem 
                        key={item.id} 
                        item={item} 
                        onOpenFocus={onOpenFocus} 
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
