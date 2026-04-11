"use client";

import React from 'react';
import { useSelection } from './SelectionContext';

// Helper for drawing the line swatch exactly like our connection lines
function LineSwatch({ baseColor, dashColor, shadowColor }: { baseColor: string, dashColor: string, shadowColor: string }) {
  return (
    <svg width="36" height="12" className="flex-shrink-0 overflow-visible mr-3">
      <path 
        d="M2,6 L34,6" 
        stroke={baseColor} 
        strokeWidth="6" 
        strokeLinecap="round" 
        fill="none" 
        className="opacity-30" 
      />
      <path 
        d="M2,6 L34,6" 
        stroke={dashColor} 
        strokeWidth="4" 
        strokeLinecap="round" 
        fill="none" 
        strokeDasharray="8 8" 
        style={{ filter: `drop-shadow(0 0 4px ${shadowColor})` }}
      />
    </svg>
  );
}

export default function Legend() {
  const { selectedId } = useSelection();

  return (
    <div 
      className={`absolute top-4 lg:top-6 z-40 bg-white/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl p-4 md:p-5 border border-slate-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto ${
        selectedId 
          ? 'right-[450px] max-lg:right-[370px] max-md:right-[300px]' 
          : 'right-4 lg:right-6'
      }`}
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 text-xs md:text-[13px] font-bold text-slate-800 tracking-tight">
        
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center">
            <LineSwatch baseColor="#c084fc" dashColor="#9333ea" shadowColor="rgba(147,51,234,0.5)" />
            <span>High Voltage &gt;69kV</span>
          </div>
          <div className="flex items-center">
            <LineSwatch baseColor="#fde047" dashColor="#eab308" shadowColor="rgba(234,179,8,0.5)" />
            <span>Medium Voltage 15-35kV</span>
          </div>
          <div className="flex items-center">
            <LineSwatch baseColor="#fca5a5" dashColor="#ef4444" shadowColor="rgba(239,68,68,0.5)" />
            <span>Low Voltage Power 480V</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          <div className="uppercase tracking-widest text-[#2f4266] font-extrabold text-[11px] md:text-xs mb-[-4px]">CRITICAL LOAD POWER</div>
          <div className="flex items-center">
            <LineSwatch baseColor="#4ade80" dashColor="#22c55e" shadowColor="rgba(34,197,94,0.5)" />
            <span>Data Halls 120/208V</span>
          </div>
          <div className="flex items-center">
            <LineSwatch baseColor="#60a5fa" dashColor="#3b82f6" shadowColor="rgba(59,130,246,0.5)" />
            <span>Cooling 480V</span>
          </div>
        </div>

      </div>
    </div>
  );
}
