import React, { useState } from 'react';
import HardwareItem from './HardwareItem';
import { hardwareData } from '../data/hardwareData';
import { Filter, Layers } from 'lucide-react';

const HW_CHAPTERS = [
  {
    id: 1,
    chapterNum: "01",
    title: "CAMERAS & OPTICAL SENSORS",
    subtitle: "High-definition fixed, bullet, dome, optical PTZ, automated number plate recognition (ANPR), speed radar, facial recognition, thermal, and 360° panoramic cameras.",
    range: [1, 9]
  },
  {
    id: 2,
    chapterNum: "02",
    title: "COMPUTE & VIDEO MANAGEMENT",
    subtitle: "Network Video Recorders (NVR), central computing server chassis, SAN/NAS storage arrays, carrier-grade VMS platform, and edge AI analytics processors.",
    range: [10, 14]
  },
  {
    id: 3,
    chapterNum: "03",
    title: "NETWORKING & CONNECTIVITY",
    subtitle: "High-power industrial PoE switches, core distribution routing chassis, single-mode fiber infrastructure, point-to-point wireless links, and network routers.",
    range: [15, 18],
    extraItemIds: [22] // Network equipment
  },
  {
    id: 4,
    chapterNum: "04",
    title: "POWER, CONTROL & INFRASTRUCTURE",
    subtitle: "Double-conversion online UPS units, command room video displays, IP66 environmental field racks, and cantilever mounting poles and accessories.",
    range: [19, 21],
    extraItemIds: [23] // Accessories
  },
  {
    id: 5,
    chapterNum: "05",
    title: "SOFTWARE & SECURITY",
    subtitle: "Enterprise management client software, unified system licensing tiers, and perimeter cybersecurity firewalls and intrusion prevention appliances.",
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
    <section 
      id="hardware" 
      className="section-white"
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
                backgroundColor: '#111111',
                color: '#F0C75E',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: '800',
                padding: '3px 8px',
                border: '2px solid #111111'
              }}
            >
              SECTION 05
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#686B6E', letterSpacing: '0.08em', fontWeight: '700' }}>
              MUNICIPAL INFRASTRUCTURE
            </span>
          </div>

          <h2 
            className="headline-display"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
              color: '#111111',
              lineHeight: 1.0,
              textTransform: 'uppercase',
              margin: '0.5rem 0 1.25rem 0'
            }}
          >
            SURVEILLANCE INFRASTRUCTURE <br />
            <span style={{ color: '#E14F71' }}>26 CORE COMPONENTS</span>
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.15rem',
              color: '#4A4A50',
              lineHeight: 1.6,
              margin: 0
            }}
          >
            A curated exhibition of 26 unbranded physical surveillance components engineered for 24/7 reliability across the Pune Parliamentary Constituency. Free of commercial proprietary lock-in, specifying open industrial standards.
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
            backgroundColor: '#FFFFFF',
            border: '3px solid #111111',
            boxShadow: '6px 6px 0px #111111',
            borderRadius: '2px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '0.5rem', color: '#111111', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700' }}>
            <Filter size={15} color="#111111" />
            FILTER:
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
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  padding: '6px 12px',
                  backgroundColor: isActive ? '#111111' : '#F2F2F4',
                  color: isActive ? '#F0C75E' : '#111111',
                  border: '2px solid #111111',
                  boxShadow: isActive ? '3px 3px 0px #111111' : 'none',
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
                    backgroundColor: isActive ? '#F0C75E' : '#FFFFFF',
                    color: '#111111',
                    padding: '1px 5px',
                    fontSize: '0.65rem',
                    borderRadius: '2px',
                    border: '1px solid #111111'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Display: Filtered vs 5 Chapters */}
        {selectedCategory !== "ALL" ? (
          <div>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#111111', fontWeight: '700' }}>
                SHOWING {filteredData.length} HARDWARE UNITS FOR: <span style={{ color: '#E14F71' }}>{selectedCategory.toUpperCase()}</span>
              </div>
              <button
                onClick={() => setSelectedCategory("ALL")}
                style={{ background: 'transparent', border: 'none', color: '#111111', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textDecoration: 'underline' }}
              >
                RESET TO ALL 5 CHAPTERS
              </button>
            </div>

            {filteredData.map((item, idx) => (
              <HardwareItem
                key={item.id}
                item={item}
                index={idx}
                onOpenFocus={onOpenFocus}
              />
            ))}
          </div>
        ) : (
          <div>
            {HW_CHAPTERS.map((chap) => {
              const chapterItems = hardwareData.filter(
                h => (h.id >= chap.range[0] && h.id <= chap.range[1]) || (chap.extraItemIds && chap.extraItemIds.includes(h.id))
              );

              return (
                <div key={chap.id} style={{ marginBottom: '6rem' }}>
                  
                  {/* Chapter Intro Header */}
                  <div 
                    style={{
                      borderBottom: '3px solid #111111',
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
                          backgroundColor: '#111111',
                          color: '#F0C75E',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          fontWeight: '800',
                          padding: '2px 8px'
                        }}
                      >
                        HARDWARE CHAPTER {chap.chapterNum}
                      </span>
                    </div>

                    <h3 
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                        fontWeight: '800',
                        color: '#111111',
                        lineHeight: 1.1,
                        margin: '0.25rem 0'
                      }}
                    >
                      {chap.title}
                    </h3>

                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#55555C', margin: 0, maxWidth: '850px' }}>
                      {chap.subtitle}
                    </p>
                  </div>

                  {/* Chapter Hardware Items */}
                  {chapterItems.map((item, idx) => (
                    <HardwareItem
                      key={item.id}
                      item={item}
                      index={idx}
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
