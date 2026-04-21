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

        {/* Back Left Wall — removed */}

        {/* Back Right Wall — removed */}

        {/* Front Left Wall — removed (bottom side) */}

        {/* Middle Wall — Shared boundary between Zone 2 and Zone 1, now extended to cover the longer Zone 1 */}
        <polygon
          points="360,530 894,263 894,213 360,480"
          fill="rgba(150, 162, 175, 0.60)"
          stroke="rgba(90, 100, 115, 0.75)"
          strokeWidth="2"
        />

        {/* Top edge boundary — only middle edge kept */}
        <line
          x1="894" y1="213" x2="360" y2="480"
          stroke="rgba(80, 90, 105, 0.9)"
          strokeWidth="2"
        />
      </g>

      {/* ════════ Zone 1: Main Data Hall ════════ */}
      {/* Floor extended: L(360,530) T(894,263) R(1194,413) B(660,680) */}
      <g>
        {/* Floor */}
        <polygon
          points="360,530 894,263 1194,413 660,680"
          fill="none"
          stroke="none"
        />

        {/* Back Left Wall — SHARED with Zone 2, intentionally hidden */}

        {/* Back Right Wall */}
        <polygon
          points="894,263 1194,413 1194,363 894,213"
          fill="rgba(150, 162, 175, 0.55)"
          stroke="rgba(120, 130, 145, 0.6)"
          strokeWidth="1"
        />

        {/* Front Left Wall — removed (bottom side) */}

        {/* Front Right Wall — restored and extended */}
        <polygon
          points="660,680 1194,413 1194,363 660,630"
          fill="rgba(150, 162, 175, 0.60)"
          stroke="rgba(90, 100, 115, 0.75)"
          strokeWidth="2"
        />

        {/* Top edge boundary — skip front-left bottom edge */}
        <polyline
          points="360,480 894,213 1194,363 660,630"
          fill="none"
          stroke="rgba(80, 90, 105, 0.9)"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
