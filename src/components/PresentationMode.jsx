import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Grid, Maximize, Play, Monitor, ShieldCheck, ArrowRight } from 'lucide-react';
import { introductionData } from '../data/introductionData';
import { analyticsData } from '../data/analyticsData';
import { hardwareData } from '../data/hardwareData';
import PresentationOverview from './PresentationOverview';

// Slide Sequence:
// Slide 0: COVER / TITLE
// Slides 1 - 11: PMC DOCTRINE / TECHNICAL INTRODUCTION (11 items)
// Slides 12 - 39: AI ANALYTICS (28 items)
// Slides 40 - 65: HARDWARE (26 items)
// Slide 66: ARCHITECTURE (1 item)
// Slide 67: SUMMARY (1 item)
const TOTAL_SLIDES = 68;

export default function PresentationMode({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const y = e.clientY;
    const windowH = window.innerHeight;
    const threshold = 90; // px near top or bottom edge

    setShowTopBar(y <= threshold);
    setShowBottomBar(y >= windowH - threshold);
  };

  // Attempt browser fullscreen API on open
  useEffect(() => {
    try {
      if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } catch (e) {}

    return () => {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOverviewOpen) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
      } else if (e.key === 'Escape') {
        onClose();
      } else if (e.key.toLowerCase() === 'o') {
        setIsOverviewOpen(prev => !prev);
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isOverviewOpen]);

  // Reset playing video when slide changes
  const goToSlide = (index) => {
    setIsPlayingVideo(false);
    setCurrentSlide(Math.max(0, Math.min(TOTAL_SLIDES - 1, index)));
  };

  const handleNext = () => {
    goToSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    goToSlide(currentSlide - 1);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Determine slide type
  const isIntro = currentSlide === 0;
  const isTechnicalIntro = currentSlide >= 1 && currentSlide <= 11;
  const isAnalytics = currentSlide >= 12 && currentSlide <= 39;
  const isHardware = currentSlide >= 40 && currentSlide <= 65;
  const isArchitecture = currentSlide === 66;
  const isSummary = currentSlide === 67;

  const currentIntro = isTechnicalIntro ? introductionData[currentSlide - 1] : null;
  const currentAnalytic = isAnalytics ? analyticsData[currentSlide - 12] : null;
  const currentHardware = isHardware ? hardwareData[currentSlide - 40] : null;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setShowTopBar(false);
        setShowBottomBar(false);
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Top Presentation Bar (Auto-reveals when hovering near top) */}
      <div 
        onMouseEnter={() => setShowTopBar(true)}
        onMouseLeave={() => setShowTopBar(false)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          backgroundColor: 'rgba(13, 13, 13, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '2px solid #222222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1rem, 3vw, 2rem)',
          zIndex: 100,
          transform: showTopBar ? 'translateY(0)' : 'translateY(-100%)',
          opacity: showTopBar ? 1 : 0,
          pointerEvents: showTopBar ? 'auto' : 'none',
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span 
            style={{
              backgroundColor: '#F0C75E',
              color: '#111111',
              fontFamily: 'var(--font-mono)',
              fontWeight: '800',
              fontSize: '0.78rem',
              padding: '3px 8px'
            }}
          >
            PMC // PRESENTATION
          </span>

          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#888890' }}>
            {isIntro && '00 / COVER & TITLE'}
            {isTechnicalIntro && `PMC DOCTRINE // ${String(currentSlide).padStart(2, '0')} OF 11`}
            {isAnalytics && `AI ANALYTICS // ${String(currentSlide - 11).padStart(2, '0')} OF 28`}
            {isHardware && `HARDWARE // ${String(currentSlide - 39).padStart(2, '0')} OF 26`}
            {isArchitecture && 'ARCHITECTURE // 01 OF 01'}
            {isSummary && 'SUMMARY // 01 OF 01'}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <button
            onClick={() => setIsOverviewOpen(true)}
            style={{
              backgroundColor: '#1E1E1E',
              color: '#FFFFFF',
              border: '1px solid #3A3A3A',
              padding: '5px 10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
            title="Open Directory Overview (O)"
          >
            <Grid size={14} color="#F0C75E" /> OVERVIEW [O]
          </button>

          <button
            onClick={toggleFullscreen}
            style={{
              backgroundColor: '#1E1E1E',
              color: '#FFFFFF',
              border: '1px solid #3A3A3A',
              padding: '5px 10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            title="Toggle Fullscreen (F)"
          >
            FULLSCREEN [F]
          </button>

          <button
            onClick={onClose}
            style={{
              backgroundColor: '#E14F71',
              color: '#FFFFFF',
              border: '1px solid #111111',
              padding: '5px 10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            title="Exit Presentation (Esc)"
          >
            <X size={14} /> EXIT [ESC]
          </button>
        </div>
      </div>

      {/* Main Slide Stage (Responsive Viewport with Safe Area) */}
      <div 
        className="slide-fade-transition presentation-stage-viewport"
        key={currentSlide}
      >
        {/* SLIDE 0: INTRO COVER */}
        {isIntro && (
          <div className="presentation-slide-card" style={{ maxWidth: '1000px', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.9rem, 1.5vw, 1.25rem)', color: '#F0C75E', fontWeight: '800', marginBottom: '0.75rem' }}>
              PMC SURVEILLANCE BRIEFING
            </div>
            
            <h1 
              className="headline-display"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)',
                color: '#FFFFFF',
                lineHeight: 0.95,
                margin: '0 0 clamp(1rem, 2vh, 1.5rem) 0'
              }}
            >
              CCTV SURVEILLANCE SYSTEM <br />
              <span style={{ color: '#E14F71' }}>(AI BASED)</span>
            </h1>

            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2.4vw, 1.75rem)', fontWeight: '700', color: '#FFFFFF', marginBottom: 'clamp(1rem, 2vh, 1.5rem)' }}>
              PUNE PARLIAMENTARY CONSTITUENCY
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', color: '#B0B0B5', lineHeight: 1.6, maxWidth: '850px', marginBottom: 'clamp(1.5rem, 3.5vh, 2.5rem)' }}>
              Official technical briefing: 11 Foundational Principles, 28 AI Video Analytics capabilities, and 26 Hardware Components engineered for 24/7 municipal operations.
            </p>

            <button
              onClick={handleNext}
              className="btn-editorial-primary"
              style={{ padding: 'clamp(0.75rem, 1.8vh, 1rem) clamp(1.5rem, 3vw, 2.25rem)', fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)' }}
            >
              BEGIN PRESENTATION (PRESS SPACE OR NEXT) →
            </button>
          </div>
        )}

        {/* SLIDES 1 - 11: TECHNICAL INTRODUCTION (Concise presentationContent layer) */}
        {isTechnicalIntro && currentIntro && (
          <div className="presentation-slide-card" style={{ maxWidth: '1050px', display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2.2vh, 1.75rem)' }}>
            
            {/* Top Index & Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ backgroundColor: '#F0C75E', color: '#111111', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1vw, 0.85rem)', fontWeight: '800', padding: '3px 10px' }}>
                PMC DOCTRINE {currentIntro.chapterNum} / 11
              </span>
              <span className="category-badge-pill" style={{ backgroundColor: '#222222', color: '#FFFFFF', border: '1px solid #333333' }}>
                {currentIntro.tag}
              </span>
            </div>

            {/* Title */}
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.8vw, 3.4rem)', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.08, margin: 0 }}>
              {currentIntro.title}
            </h2>

            {/* Concise Presentation Statement */}
            <div 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.05rem, 1.8vw, 1.55rem)',
                color: '#FFFFFF',
                fontWeight: '500',
                lineHeight: 1.5,
                borderLeft: `4px solid ${currentIntro.accent}`,
                paddingLeft: '1.25rem',
                margin: '0.25rem 0'
              }}
            >
              {currentIntro.presentationContent}
            </div>

            {/* Large Key Takeaway Card */}
            <div 
              style={{
                backgroundColor: '#141414',
                border: '3px solid #282828',
                boxShadow: '6px 6px 0px #000000',
                padding: 'clamp(1.25rem, 2.5vh, 1.75rem)',
                borderRadius: '2px',
                marginTop: '0.5rem'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '800', color: currentIntro.accent, letterSpacing: '0.08em', marginBottom: '6px' }}>
                KEY TAKEAWAY
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.2 }}>
                {currentIntro.keyTakeaway}
              </div>
            </div>

            {/* Strategic Pills for Slide 11 */}
            {currentIntro.id === 11 && (
              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                {['BUILD', 'INTEGRATE', 'MAINTAIN', 'UPGRADE', 'EVOLVE'].map(step => (
                  <span key={step} style={{ backgroundColor: '#F0C75E', color: '#111111', padding: '5px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: '800' }}>
                    {step}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SLIDES 12 - 39: AI ANALYTICS (28 items) */}
        {isAnalytics && currentAnalytic && (
          <div className="presentation-slide-card presentation-two-column">
            {/* Left Info Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.6rem, 1.4vh, 1.15rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#E14F71', color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.72rem, 0.9vw, 0.8rem)', fontWeight: '800', padding: '2px 8px' }}>
                  ANALYTIC {String(currentAnalytic.id).padStart(2, '0')} / 28
                </span>
                <span className="category-badge-pill" style={{ backgroundColor: '#222222', color: '#F0C75E', border: '1px solid #333333' }}>
                  {currentAnalytic.category.toUpperCase()}
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.6rem)', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.1, margin: 0 }}>
                {currentAnalytic.name}
              </h2>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 1.2vw, 1.2rem)', color: '#FFFFFF', fontWeight: '500', lineHeight: 1.5, margin: 0, borderLeft: '3px solid #F0C75E', paddingLeft: '1rem' }}>
                {currentAnalytic.one_liner}
              </p>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: '700', color: '#888890', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  HOW THE ALGORITHM OPERATES
                </div>
                <p style={{ fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)', color: '#B0B0B5', lineHeight: 1.5, margin: 0 }}>
                  {currentAnalytic.what_it_does}
                </p>
              </div>

              <div className="editorial-callout-distinction-dark" style={{ padding: 'clamp(0.6rem, 1.2vh, 0.9rem) 1rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: '800', color: '#F0C75E', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  OPERATIONAL DISTINCTION
                </div>
                <div style={{ fontSize: 'clamp(0.82rem, 0.92vw, 0.9rem)', color: '#D4D4D8', lineHeight: 1.45 }}>
                  {currentAnalytic.distinction}
                </div>
              </div>

              {currentAnalytic.compliance_note && (
                <div style={{ backgroundColor: 'rgba(225, 79, 113, 0.12)', border: '1px solid #E14F71', padding: 'clamp(0.5rem, 1vh, 0.75rem) 1rem', fontSize: 'clamp(0.76rem, 0.88vw, 0.82rem)', color: '#FFB8C6', display: 'flex', gap: '8px' }}>
                  <ShieldCheck size={16} color="#E14F71" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong>Statutory Safeguard:</strong> {currentAnalytic.compliance_note}</div>
                </div>
              )}
            </div>

            {/* Right Media Column */}
            <div>
              <div className="presentation-media-frame">
                {!isPlayingVideo ? (
                  <div 
                    onClick={() => setIsPlayingVideo(true)}
                    style={{ width: '100%', height: '100%', cursor: 'pointer', position: 'relative' }}
                  >
                    <img 
                      src={currentAnalytic.thumbnail_url} 
                      alt={currentAnalytic.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.35)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <div className="media-play-icon" style={{ width: 'clamp(50px, 6vw, 68px)', height: 'clamp(50px, 6vw, 68px)' }}>
                        <Play size={26} fill="currentColor" style={{ marginLeft: '3px' }} />
                      </div>
                      <span 
                        style={{
                          marginTop: '10px',
                          backgroundColor: '#111111',
                          color: '#F0C75E',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          fontWeight: '800',
                          padding: '4px 12px',
                          border: '2px solid #282828'
                        }}
                      >
                        PLAY DEMONSTRATION VIDEO
                      </span>
                    </div>
                  </div>
                ) : (
                  <iframe 
                    src={`https://www.youtube-nocookie.com/embed/${currentAnalytic.video_id}?autoplay=1&rel=0&modestbranding=1`}
                    title={currentAnalytic.name}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* SLIDES 40 - 65: HARDWARE (26 items) */}
        {isHardware && currentHardware && (
          <div className="presentation-slide-card presentation-two-column">
            {/* Left Info Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.6rem, 1.4vh, 1.15rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#F0C75E', color: '#111111', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.72rem, 0.9vw, 0.8rem)', fontWeight: '800', padding: '2px 8px' }}>
                  HARDWARE HW-{String(currentHardware.id).padStart(2, '0')} / 26
                </span>
                <span className="category-badge-pill" style={{ backgroundColor: '#222222', color: '#FFFFFF', border: '1px solid #333333' }}>
                  {currentHardware.category.toUpperCase()}
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.6rem)', fontWeight: '800', color: '#FFFFFF', lineHeight: 1.1, margin: 0 }}>
                {currentHardware.name}
              </h2>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 1.2vw, 1.2rem)', color: '#FFFFFF', fontWeight: '500', lineHeight: 1.5, margin: 0, borderLeft: '3px solid #F0C75E', paddingLeft: '1rem' }}>
                {currentHardware.one_liner}
              </p>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: '700', color: '#888890', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  PRIMARY OPERATIONAL PURPOSE
                </div>
                <p style={{ fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)', color: '#B0B0B5', lineHeight: 1.5, margin: 0 }}>
                  {currentHardware.purpose}
                </p>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: '700', color: '#888890', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  SYSTEM ROLE IN PMC SURVEILLANCE
                </div>
                <p style={{ fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)', color: '#B0B0B5', lineHeight: 1.5, margin: 0 }}>
                  {currentHardware.system_role}
                </p>
              </div>

              <div className="editorial-callout-distinction-dark" style={{ padding: 'clamp(0.6rem, 1.2vh, 0.9rem) 1rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: '800', color: '#F0C75E', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  OPERATIONAL DISTINCTION
                </div>
                <div style={{ fontSize: 'clamp(0.82rem, 0.92vw, 0.9rem)', color: '#D4D4D8', lineHeight: 1.45 }}>
                  {currentHardware.distinction}
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div>
              <div className="presentation-media-frame">
                <img 
                  src={`${import.meta.env.BASE_URL}${currentHardware.image}`} 
                  alt={currentHardware.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 66: ARCHITECTURE */}
        {isArchitecture && (
          <div className="presentation-slide-card" style={{ maxWidth: '1100px', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#F0C75E', fontWeight: '800', marginBottom: '0.5rem' }}>
              PIPELINE ARCHITECTURE
            </div>
            
            <h2 className="headline-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', margin: '0 0 1rem 0' }}>
              HOW IT ALL CONNECTS
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)', color: '#B0B0B5', lineHeight: 1.6, marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)' }}>
              The complete end-to-end municipal surveillance data loop: Optical Sensors → High-Speed Network → Storage & VMS → Deep AI Inference → Operator Video Wall → Automated Police & City Dispatch.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ backgroundColor: '#141414', border: '2px solid #282828', padding: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#E14F71', fontWeight: '800' }}>01 EDGE</span>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginTop: '4px' }}>Optical & Thermal Cameras</div>
              </div>
              <div style={{ backgroundColor: '#141414', border: '2px solid #282828', padding: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#F0C75E', fontWeight: '800' }}>02 BACKBONE</span>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginTop: '4px' }}>10GbE Fiber Switching Ring</div>
              </div>
              <div style={{ backgroundColor: '#141414', border: '2px solid #282828', padding: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#E14F71', fontWeight: '800' }}>03 CORE</span>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginTop: '4px' }}>NVR, SAN/NAS & Unified VMS</div>
              </div>
              <div style={{ backgroundColor: '#141414', border: '2px solid #282828', padding: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#F0C75E', fontWeight: '800' }}>04 INFERENCE</span>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', marginTop: '4px' }}>28 Concurrent AI Analytics</div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 67: SUMMARY */}
        {isSummary && (
          <div className="presentation-slide-card" style={{ maxWidth: '950px', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#F0C75E', fontWeight: '800', marginBottom: '0.5rem' }}>
              BRIEFING CONCLUSION
            </div>
            
            <h2 className="headline-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', margin: '0 0 1rem 0' }}>
              SYSTEM SPECIFICATION COMPLETE
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', color: '#B0B0B5', lineHeight: 1.6, marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)' }}>
              All 11 Technical Introduction Principles, 28 AI Video Analytics capabilities, and 26 Hardware Components for the PMC CCTV Surveillance System in the Pune Parliamentary Constituency have been successfully reviewed.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => goToSlide(0)}
                className="btn-editorial-primary"
                style={{ padding: '0.85rem 1.75rem' }}
              >
                RESTART PRESENTATION
              </button>

              <button
                onClick={onClose}
                className="btn-editorial-dark"
                style={{ padding: '0.85rem 1.75rem' }}
              >
                RETURN TO WEB DOSSIER
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Floating Presentation Navigation Bar (Auto-reveals when hovering near bottom) */}
      <div 
        onMouseEnter={() => setShowBottomBar(true)}
        onMouseLeave={() => setShowBottomBar(false)}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '64px',
          backgroundColor: 'rgba(13, 13, 13, 0.95)',
          backdropFilter: 'blur(8px)',
          borderTop: '2px solid #222222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1rem, 3vw, 2rem)',
          zIndex: 100,
          transform: showBottomBar ? 'translateY(0)' : 'translateY(100%)',
          opacity: showBottomBar ? 1 : 0,
          pointerEvents: showBottomBar ? 'auto' : 'none',
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease'
        }}
      >
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            disabled={currentSlide === 0}
            onClick={handlePrev}
            className="btn-editorial-dark"
            style={{
              opacity: currentSlide === 0 ? 0.3 : 1,
              padding: '0.55rem 1.15rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem'
            }}
          >
            <ChevronLeft size={15} /> PREVIOUS
          </button>

          <button
            disabled={currentSlide === TOTAL_SLIDES - 1}
            onClick={handleNext}
            className="btn-editorial-pink"
            style={{
              opacity: currentSlide === TOTAL_SLIDES - 1 ? 0.3 : 1,
              padding: '0.55rem 1.35rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem'
            }}
          >
            NEXT <ChevronRight size={15} />
          </button>
        </div>

        {/* Progress Bar & Contextual Counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#B0B0B5', fontWeight: '700' }}>
            {isIntro && 'COVER // 00'}
            {isTechnicalIntro && `PMC DOCTRINE // ${String(currentSlide).padStart(2, '0')} / 11`}
            {isAnalytics && `AI ANALYTICS // ${String(currentSlide - 11).padStart(2, '0')} / 28`}
            {isHardware && `HARDWARE // ${String(currentSlide - 39).padStart(2, '0')} / 26`}
            {isArchitecture && 'ARCHITECTURE // 01 / 01'}
            {isSummary && 'SUMMARY // 01 / 01'}
          </span>
          <div style={{ width: '160px', height: '5px', backgroundColor: '#222222', borderRadius: '3px', overflow: 'hidden' }}>
            <div 
              style={{
                width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%`,
                height: '100%',
                backgroundColor: '#F0C75E',
                transition: 'width 0.2s ease'
              }} 
            />
          </div>
        </div>
      </div>

      {/* Directory Overview Modal */}
      <PresentationOverview 
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        onJumpToSlide={(slideIdx) => goToSlide(slideIdx)}
      />
    </div>
  );
}
