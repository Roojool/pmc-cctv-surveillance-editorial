import React from 'react';
import { ArrowUp, ShieldCheck, FileText, CheckCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="summary" className="theme-white" style={{ padding: '5rem 0 3rem 0', borderTop: '4px solid #111212' }}>
      <div className="editorial-container">
        
        {/* Main Header / Attribution */}
        <div style={{ borderBottom: '3px solid #111212', paddingBottom: '2.5rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <span style={{ background: '#111212', color: '#F0C75E', padding: '3px 8px', fontSize: '0.75rem', fontWeight: 'bold' }}>
              SECTION 08 // SUMMARY & OFFICIAL SPECIFICATION
            </span>
            <span style={{ color: '#686B6E', fontSize: '0.75rem' }}>|</span>
            <span style={{ fontSize: '0.75rem', color: '#111212', fontWeight: 'bold' }}>
              VERSION 4.0
            </span>
          </div>

          <h2 
            style={{
              fontFamily: 'Verdana, sans-serif',
              fontWeight: '900',
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              color: '#111212',
              lineHeight: 1.2,
              margin: '0.5rem 0 1rem 0'
            }}
          >
            PMC - CCTV SURVEILLANCE SYSTEM (AI BASED) - PUNE Parliamentary Constituency
          </h2>

          <p style={{ fontFamily: 'Verdana, sans-serif', fontSize: '1rem', color: '#444749', maxWidth: '850px', lineHeight: 1.6, margin: 0 }}>
            An exhaustive architectural and artificial intelligence video analytics dossier for municipal surveillance deployment. Incorporates 28 specialized deep neural models and 26 hardware nodes with zero commercial vendor dependencies.
          </p>
        </div>

        {/* 3-Column Editorial Summary Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}
        >
          {/* Column 1: System Scope */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#111212', borderBottom: '2px solid #111212', paddingBottom: '0.5rem', margin: 0 }}>
              SYSTEM ARCHITECTURE SCOPE
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#333638' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#111212" />
                <strong>28 AI Video Analytics</strong> across 7 categories
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#111212" />
                <strong>26 Hardware Infrastructure Nodes</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#111212" />
                <strong>54 Total System Endpoints</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#111212" />
                <strong>8-Stage Sequential Data Pipeline</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#111212" />
                <strong>Strict Statutory Privacy Compliance</strong>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation & Quick Jump */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#111212', borderBottom: '2px solid #111212', paddingBottom: '0.5rem', margin: 0 }}>
              SECTIONS & REGISTRY
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <a href="#hero" style={{ color: '#111212', textDecoration: 'none', fontWeight: 'bold' }}>01. Title & Executive Scope</a>
              <a href="#stats" style={{ color: '#111212', textDecoration: 'none', fontWeight: 'bold' }}>02. The System at a Glance</a>
              <a href="#analytics" style={{ color: '#111212', textDecoration: 'none', fontWeight: 'bold' }}>03. AI Video Analytics (28 Items)</a>
              <a href="#hud" style={{ color: '#111212', textDecoration: 'none', fontWeight: 'bold' }}>04. Live Video Intelligence HUD</a>
              <a href="#hardware" style={{ color: '#111212', textDecoration: 'none', fontWeight: 'bold' }}>05. Hardware Infrastructure (26 Items)</a>
              <a href="#architecture" style={{ color: '#111212', textDecoration: 'none', fontWeight: 'bold' }}>06. How It All Connects</a>
              <a href="#status" style={{ color: '#111212', textDecoration: 'none', fontWeight: 'bold' }}>07. System Status Terminal</a>
            </div>
          </div>

          {/* Column 3: Standards & Disclaimer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#111212', borderBottom: '2px solid #111212', paddingBottom: '0.5rem', margin: 0 }}>
              COMPLIANCE & GOVERNANCE
            </h4>
            <div style={{ background: '#F7F8F9', border: '1px solid #D2D5D7', padding: '1rem', fontSize: '0.82rem', color: '#444749', lineHeight: 1.5 }}>
              All video analytics demonstration feeds are embedded for technical demonstration and educational evaluation. Hardware component representations are generalized, unbranded architectural specifications for public sector procurement evaluation.
            </div>
            
            <button
              onClick={scrollToTop}
              className="btn-editorial-dark"
              style={{
                marginTop: 'auto',
                padding: '0.65rem 1rem',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <ArrowUp size={16} /> RETURN TO TOP
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div 
          style={{
            borderTop: '2px solid #111212',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: '#686B6E',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            PMC Surveillance Initiative • Pune Parliamentary Constituency • Editorial React Edition
          </div>
          <div>
            Strictly Informational • Version 4.0
          </div>
        </div>

      </div>
    </footer>
  );
}
