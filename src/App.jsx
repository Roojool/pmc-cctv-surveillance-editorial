import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TechnicalIntroduction from './components/TechnicalIntroduction';
import AiIntelligenceIntro from './components/AiIntelligenceIntro';
import AnalyticsSection from './components/AnalyticsSection';
import HardwareSection from './components/HardwareSection';
import Architecture from './components/Architecture';
import Footer from './components/Footer';

import VideoModal from './components/VideoModal';
import FocusModal from './components/FocusModal';
import SearchModal from './components/SearchModal';
import PresentationMode from './components/PresentationMode';

import { analyticsData } from './data/analyticsData';
import { hardwareData } from './data/hardwareData';
import { introductionData } from './data/introductionData';

export default function App() {
  const [activeVideoItem, setActiveVideoItem] = useState(null);
  const [activeFocusItem, setActiveFocusItem] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  // Global key bindings: Ctrl+K / '/' for search; Esc to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K or '/'
      if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && !['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase()))) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Video Navigation Handlers
  const handleNextVideo = () => {
    if (!activeVideoItem) return;
    const currentIndex = analyticsData.findIndex(a => a.id === activeVideoItem.id);
    const nextIndex = (currentIndex + 1) % analyticsData.length;
    setActiveVideoItem(analyticsData[nextIndex]);
  };

  const handlePrevVideo = () => {
    if (!activeVideoItem) return;
    const currentIndex = analyticsData.findIndex(a => a.id === activeVideoItem.id);
    const prevIndex = (currentIndex - 1 + analyticsData.length) % analyticsData.length;
    setActiveVideoItem(analyticsData[prevIndex]);
  };

  // Search Select Handler
  const handleSelectItem = (item) => {
    if (item.type === 'introduction') {
      const el = document.getElementById(`intro-${item.id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.type === 'analytics') {
      const el = document.getElementById(`ai-${item.id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setActiveFocusItem(item);
    } else {
      const el = document.getElementById(`hw-${item.id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setActiveFocusItem(item);
    }
  };

  return (
    <div className="editorial-root">
      {/* Top Sticky Minimal Editorial Navigation */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onStartPresentation={() => setIsPresentationOpen(true)}
      />

      {/* 01. Cover / Hero (Black) */}
      <Hero 
        onStartPresentation={() => setIsPresentationOpen(true)}
      />

      {/* 02. The System At A Glance (White) */}
      <Stats 
        onStartPresentation={() => setIsPresentationOpen(true)}
      />

      {/* 03. Technical Introduction (Black) - 11 Core Principles */}
      <TechnicalIntroduction 
        onStartPresentation={() => setIsPresentationOpen(true)}
      />

      {/* 04. AI Video Intelligence Editorial Intro (Black) */}
      <AiIntelligenceIntro />

      {/* 05. AI Analytics Chapters with Varied Layouts (Black) */}
      <AnalyticsSection 
        onOpenVideo={(item) => setActiveVideoItem(item)}
      />

      {/* 06. Hardware Infrastructure with Varied Layouts (White) */}
      <HardwareSection 
        onOpenFocus={(item) => setActiveFocusItem(item)}
      />

      {/* 07. System Architecture: How It All Connects (Black) */}
      <Architecture />

      {/* 08. Executive Overview & Summary (White) */}
      <Footer 
        onStartPresentation={() => setIsPresentationOpen(true)}
      />

      {/* Modals */}
      <VideoModal 
        activeItem={activeVideoItem} 
        onClose={() => setActiveVideoItem(null)} 
        onSelectNext={handleNextVideo} 
        onSelectPrev={handlePrevVideo} 
      />

      <FocusModal 
        item={activeFocusItem} 
        onClose={() => setActiveFocusItem(null)} 
      />

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelectItem={handleSelectItem} 
      />

      {/* Dedicated Presentation Mode */}
      <PresentationMode 
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
      />
    </div>
  );
}
