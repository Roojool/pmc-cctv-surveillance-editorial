import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AnalyticsSection from './components/AnalyticsSection';
import LiveDetection from './components/LiveDetection';
import HardwareSection from './components/HardwareSection';
import Architecture from './components/Architecture';
import SystemStatus from './components/SystemStatus';
import Footer from './components/Footer';

import VideoModal from './components/VideoModal';
import FocusModal from './components/FocusModal';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';

import { analyticsData } from './data/analyticsData';
import { hardwareData } from './data/hardwareData';

export default function App() {
  const [activeVideoItem, setActiveVideoItem] = useState(null);
  const [activeFocusItem, setActiveFocusItem] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Global key bindings: Ctrl+K / '/' for search; Ctrl+P / Ctrl+S interception
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K or '/'
      if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && !['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase()))) {
        e.preventDefault();
        setIsSearchOpen(true);
      }

      // Print / Save Deterrence
      if (e.ctrlKey && (e.key.toLowerCase() === 'p' || e.key.toLowerCase() === 's')) {
        e.preventDefault();
        setToastMessage("Presentation Mode Active: Document printing and direct script exports are restricted for this briefing.");
        setIsToastVisible(true);
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
    if (item.type === 'analytics') {
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
    <div className="editorial-app-root">
      {/* Top Sticky Navigation */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* 01. Intro Hero (Black) */}
      <Hero />

      {/* 02. The System at a Glance (White) */}
      <Stats />

      {/* 03. AI Video Analytics (Black) */}
      <AnalyticsSection 
        onOpenVideo={(item) => setActiveVideoItem(item)} 
        onOpenFocus={(item) => setActiveFocusItem(item)} 
      />

      {/* 04. Live Video Intelligence HUD (Black) */}
      <LiveDetection />

      {/* 05. Hardware Infrastructure (White) */}
      <HardwareSection 
        onOpenFocus={(item) => setActiveFocusItem(item)} 
      />

      {/* 06. How It All Connects - 8-Stage Pipeline (Black) */}
      <Architecture />

      {/* 07. System Status Terminal (Black) */}
      <SystemStatus />

      {/* 08. System Overview & Summary (White) */}
      <Footer />

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

      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)} 
      />
    </div>
  );
}
