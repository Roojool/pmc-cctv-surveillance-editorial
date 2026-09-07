import React, { useState, useEffect } from 'react';
import ChapterHeader from './ChapterHeader';
import { terminalCommands } from '../data/architectureData';
import { Terminal, RefreshCw, CheckCircle, ShieldAlert, Cpu, HardDrive } from 'lucide-react';

export default function SystemStatus() {
  const [activeCommandKey, setActiveCommandKey] = useState("scan");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as IST time
      setCurrentTime(now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false }) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeCmd = terminalCommands[activeCommandKey] || terminalCommands.scan;

  return (
    <section id="status" className="theme-black" style={{ padding: '5rem 0', borderTop: '4px solid #111212' }}>
      <div className="editorial-container">
        
        {/* Header */}
        <ChapterHeader 
          number="07"
          category="DIAGNOSTIC TELEMETRY"
          title="SYSTEM STATUS TERMINAL"
          subtitle="Real-time operational verification across all 28 AI Video Analytics and 26 Hardware Components in the Pune Parliamentary Constituency."
          theme="black"
        />

        {/* Terminal Window Frame */}
        <div 
          style={{
            background: '#0c0d0e',
            border: '3px solid #333638',
            boxShadow: '8px 8px 0px #000000',
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          {/* Terminal Window Header Bar */}
          <div 
            style={{
              background: '#18191a',
              padding: '0.75rem 1.25rem',
              borderBottom: '2px solid #333638',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            {/* Window Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#E14F71' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F0C75E' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#4ADE80' }}></div>
              <span style={{ marginLeft: '12px', fontFamily: 'Verdana, sans-serif', fontSize: '0.8rem', fontWeight: 'bold', color: '#B4B7B9' }}>
                pmc-cctv-core@pune-surveillance-v4 ~ $
              </span>
            </div>

            {/* Live Clock / Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#4ADE80', fontWeight: 'bold' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }}></span>
                TELEMETRY SYNCHRONIZED
              </div>
              <span style={{ color: '#686B6E' }}>|</span>
              <span style={{ fontSize: '0.75rem', color: '#F0C75E', fontFamily: 'Courier New, monospace', fontWeight: 'bold' }}>
                {currentTime}
              </span>
            </div>
          </div>

          {/* Quick Command Selector Pills */}
          <div 
            style={{
              padding: '0.75rem 1.25rem',
              background: '#111212',
              borderBottom: '1px solid #242628',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ fontSize: '0.75rem', color: '#8C9093', fontWeight: 'bold', marginRight: '4px' }}>
              SELECT DIAGNOSTIC:
            </span>

            <button
              onClick={() => setActiveCommandKey("scan")}
              style={{
                background: activeCommandKey === "scan" ? '#E14F71' : '#18191a',
                color: activeCommandKey === "scan" ? '#FFFFFF' : '#B4B7B9',
                border: '1px solid #333638',
                padding: '4px 10px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontFamily: 'Courier New, monospace'
              }}
            >
              $ system --scan
            </button>

            <button
              onClick={() => setActiveCommandKey("analytics")}
              style={{
                background: activeCommandKey === "analytics" ? '#E14F71' : '#18191a',
                color: activeCommandKey === "analytics" ? '#FFFFFF' : '#B4B7B9',
                border: '1px solid #333638',
                padding: '4px 10px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontFamily: 'Courier New, monospace'
              }}
            >
              $ analytics --audit
            </button>

            <button
              onClick={() => setActiveCommandKey("network")}
              style={{
                background: activeCommandKey === "network" ? '#E14F71' : '#18191a',
                color: activeCommandKey === "network" ? '#FFFFFF' : '#B4B7B9',
                border: '1px solid #333638',
                padding: '4px 10px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontFamily: 'Courier New, monospace'
              }}
            >
              $ network --topology
            </button>
          </div>

          {/* Terminal Console Output Body */}
          <div 
            style={{
              padding: '1.75rem',
              fontFamily: 'Courier New, monospace',
              fontSize: '0.88rem',
              lineHeight: 1.7,
              minHeight: '340px',
              background: '#090a0a'
            }}
          >
            {/* Input prompt line */}
            <div style={{ color: '#F0C75E', marginBottom: '1rem', fontWeight: 'bold' }}>
              admin@pmc-core:~$ {activeCmd.command}
            </div>

            {/* Diagnostic Lines */}
            {activeCmd.lines.map((line, idx) => {
              let color = '#D2D5D7';
              if (line.type === 'info') color = '#93C5FD';
              if (line.type === 'success') color = '#4ADE80';
              if (line.type === 'gold') color = '#F0C75E';
              if (line.type === 'muted') color = '#8C9093';

              return (
                <div key={idx} style={{ color, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                  {line.text}
                </div>
              );
            })}

            {/* Blinking Cursor */}
            <div style={{ display: 'inline-block', marginTop: '1rem', color: '#4ADE80' }}>
              admin@pmc-core:~$ <span className="cursor-blink">█</span>
            </div>
          </div>

          {/* Terminal Footer Summary */}
          <div 
            style={{
              background: '#18191a',
              padding: '0.85rem 1.25rem',
              borderTop: '2px solid #333638',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.78rem',
              color: '#B4B7B9',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span>TOTAL NODES: <strong style={{ color: '#FFFFFF' }}>54 / 54</strong></span>
              <span>AI ENGINES: <strong style={{ color: '#E14F71' }}>28 ONLINE</strong></span>
              <span>HARDWARE UNITS: <strong style={{ color: '#F0C75E' }}>26 ONLINE</strong></span>
            </div>
            <div style={{ color: '#4ADE80', fontWeight: 'bold' }}>
              ● ZERO ANOMALIES DETECTED
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
