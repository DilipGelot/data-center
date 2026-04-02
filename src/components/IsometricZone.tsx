import React from 'react';

export default function IsometricZone() {
  // Zone 1 floor: L(360,530) T(860,280) R(1160,430) B(660,680)
  // Zone 2 floor: L(60,380)  T(560,130) R(860,280)  B(360,530)
  // Shared edge: Zone2.R→Zone2.B = Zone1.T→Zone1.L (same line!)
  // Wall height: 50px

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">

      {/* ════════ Zone 2: Power Generation Bay ════════ */}
      {/* Floor: L(60,380) T(560,130) R(860,280) B(360,530) */}
      {/* Roof:  L(60,330) T(560,80)  R(860,230) B(360,480) */}
      <g>
        {/* Floor */}
        <polygon
          points="60,380 560,130 860,280 360,530"
          fill="none"
          stroke="none"
        />

        {/* Back Left Wall */}
        <polygon
          points="60,380 560,130 560,80 60,330"
          fill="rgba(180, 190, 200, 0.35)"
          stroke="rgba(156, 163, 175, 0.4)"
          strokeWidth="1"
        />

        {/* Back Right Wall */}
        <polygon
          points="560,130 860,280 860,230 560,80"
          fill="rgba(180, 190, 200, 0.35)"
          stroke="rgba(156, 163, 175, 0.4)"
          strokeWidth="1"
        />

        {/* Front Left Wall */}
        <polygon
          points="60,380 360,530 360,480 60,330"
          fill="rgba(180, 190, 200, 0.45)"
          stroke="rgba(107, 114, 128, 0.6)"
          strokeWidth="2"
        />

        {/* Middle Wall — Shared boundary between Zone 2 and Zone 1 */}
        <polygon
          points="360,530 860,280 860,230 360,480"
          fill="rgba(180, 190, 200, 0.40)"
          stroke="rgba(107, 114, 128, 0.6)"
          strokeWidth="2"
        />

        {/* Top edge boundary */}
        <polygon
          points="60,330 560,80 860,230 360,480"
          fill="none"
          stroke="rgba(107, 114, 128, 0.8)"
          strokeWidth="2"
        />
      </g>

      {/* ════════ Zone 1: Main Data Hall ════════ */}
      {/* Floor: L(360,530) T(860,280) R(1160,430) B(660,680) */}
      {/* Roof:  L(360,480) T(860,230) R(1160,380) B(660,630) */}
      <g>
        {/* Floor */}
        <polygon
          points="360,530 860,280 1160,430 660,680"
          fill="none"
          stroke="none"
        />

        {/* Back Left Wall — SHARED with Zone 2, intentionally hidden */}
        {/* (360,530 → 860,280) is the shared boundary — no wall drawn here */}

        {/* Back Right Wall */}
        <polygon
          points="860,280 1160,430 1160,380 860,230"
          fill="rgba(180, 190, 200, 0.35)"
          stroke="rgba(156, 163, 175, 0.4)"
          strokeWidth="1"
        />

        {/* Front Left Wall */}
        <polygon
          points="360,530 660,680 660,630 360,480"
          fill="rgba(180, 190, 200, 0.45)"
          stroke="rgba(107, 114, 128, 0.6)"
          strokeWidth="2"
        />

        {/* Front Right Wall */}
        <polygon
          points="660,680 1160,430 1160,380 660,630"
          fill="rgba(180, 190, 200, 0.40)"
          stroke="rgba(107, 114, 128, 0.6)"
          strokeWidth="2"
        />

        {/* Top edge boundary */}
        <polygon
          points="360,480 860,230 1160,380 660,630"
          fill="none"
          stroke="rgba(107, 114, 128, 0.8)"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
