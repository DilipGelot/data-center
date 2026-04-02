import React from 'react';

export default function IsometricZone() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <g>
        {/* Floor Area - Inner area completely empty without color */}
        <polygon
          points="360,530 860,280 1160,430 660,680"
          fill="none"
          stroke="none"
        />

        {/* Back Left Wall */}
        <polygon
          points="360,530 860,280 860,230 360,480"
          fill="rgba(156, 163, 175, 0.05)"
          stroke="rgba(156, 163, 175, 0.4)"
          strokeWidth="1"
        />

        {/* Back Right Wall */}
        <polygon
          points="860,280 1160,430 1160,380 860,230"
          fill="rgba(156, 163, 175, 0.05)"
          stroke="rgba(156, 163, 175, 0.4)"
          strokeWidth="1"
        />

        {/* Front Left Wall */}
        <polygon
          points="360,530 660,680 660,630 360,480"
          fill="rgba(156, 163, 175, 0.15)"
          stroke="rgba(107, 114, 128, 0.6)"
          strokeWidth="2"
        />

        {/* Front Right Wall */}
        <polygon
          points="660,680 1160,430 1160,380 660,630"
          fill="rgba(156, 163, 175, 0.1)"
          stroke="rgba(107, 114, 128, 0.6)"
          strokeWidth="2"
        />

        {/* Top edge boundary - Empty inside */}
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
