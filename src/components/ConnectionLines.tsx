import React from 'react';

export default function ConnectionLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <defs>
        <style>
          {`
            @keyframes flow-power {
              from {
                stroke-dashoffset: 24;
              }
              to {
                stroke-dashoffset: 0;
              }
            }
            .animate-flow {
              animation: flow-power 1s linear infinite;
            }
          `}
        </style>
      </defs>

      {/* 
        Line 1: Utility Tower -> HV-MV Transformer 
        Shifted by +10% to the right.
      */}
      <g>
        <line
          x1="30%"
          y1="22%"
          x2="20%"
          y2="32%"
          stroke="#c084fc"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-30"
        />
        <line
          x1="30%"
          y1="22%"
          x2="20%"
          y2="32%"
          stroke="#9333ea"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]"
        />

        {/* 
          Yellow Line 1: Diesel Generator -> Gas Turbine Tail
          Shifted x by +120
        */}
        <path
          d="M 528 192 L 450 270"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 528 192 L 450 270"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Yellow Line 2: Gas Generator -> Gas Turbine Tail
          Shifted x by +120
        */}
        <path
          d="M 600 232 L 450 285"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 600 232 L 450 285"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Yellow Line 3: Gas Turbine -> BESS (Battery Storage)
          Shifted x by +120
        */}
        <path
          d="M 420 280 L 300 370"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 420 280 L 300 370"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Yellow Line 4: BESS -> MV Switchgear
          Shifted x by +120
        */}
        <path
          d="M 300 380 L 180 450"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 300 380 L 180 450"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Yellow Line 5: HV-MV Transformer -> MV Switchgear
          Shifted x by +120
        */}
        <path
          d="M 200 260 L 140 340 L 180 410"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 200 260 L 140 340 L 180 410"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Yellow Line 6: Mobile Power -> MV Switchgear
          Mobile Power base: x=0, y=520
          Switchgear base (bottom entry): x=180, y=480
        */}
        <path
          d="M 0 520 L 180 480"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 0 520 L 180 480"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Yellow Line 7: Rental Power -> MV Switchgear
          Rental Power base: x=60, y=580
          Switchgear base (bottom entry): x=180, y=480
        */}
        <path
          d="M 60 580 L 180 480"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 60 580 L 180 480"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Yellow Line 8: MV Switchgear -> CCHP
          Switchgear base (Right side): x=220, y=470
          CCHP base: x=240, y=640
        */}
        <path
          d="M 220 470 L 240 640"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 220 470 L 240 640"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Yellow Line 9: CCHP -> LV MV Transformer
          CCHP base: x=240, y=660
          LV MV Transformer base: x=360, y=700
        */}
        <path
          d="M 240 660 L 360 700"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 240 660 L 360 700"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Yellow Line 10: LV MV Transformer -> Load Bank
          LV MV Transformer base: x=360, y=700
          Load Bank base: x=444, y=752
        */}
        <path
          d="M 360 700 L 444 752"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 360 700 L 444 752"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Red Line 11: CCHP -> Distribution Switchgear
          CCHP base: x=240, y=660
          Dist Switchgear base: x=456, y=600
        */}
        <path
          d="M 240 660 L 456 600"
          stroke="#fca5a5"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 240 660 L 456 600"
          stroke="#ef4444"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
        />

        {/* 
          Red Line 12: LV MV Transformer -> Distribution Switchgear
          LVMV base: x=360, y=700
          Dist Switchgear base: x=456, y=600
        */}
        <path
          d="M 360 700 L 456 600"
          stroke="#fca5a5"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 360 700 L 456 600"
          stroke="#ef4444"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
        />

        {/* 
          Blue Line 13: Trunk from Distribution Switchgear to Compressed Air
        */}
        <path
          d="M 460 600 L 640 690 L 1020 500 L 1020 420"
          stroke="#93c5fd"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 460 600 L 640 690 L 1020 500 L 1020 420"
          stroke="#3b82f6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        />

        {/* 
          Blue Line 14: Branch to Dry Cooler
        */}
        <path
          d="M 480 610 L 504 598 L 504 520"
          stroke="#93c5fd"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 480 610 L 504 598 L 504 520"
          stroke="#3b82f6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        />

        {/* 
          Blue Line 15: Branch to Temperature Control
        */}
        <path
          d="M 560 650 L 660 600 L 660 580"
          stroke="#93c5fd"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 560 650 L 660 600 L 660 580"
          stroke="#3b82f6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        />

        {/* 
          Yellow Line 16: Gas Turbine -> MV Switchgear
          Routes cleanly around BESS.
        */}
        <path
          d="M 460 300 L 550 345 L 260 490 L 220 470"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 460 300 L 550 345 L 260 490 L 220 470"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Green Line 17: Distribution Switchgear -> Server Racks
          Trunk routing across to the server layout
        */}
        <path
          d="M 460 580 L 625 497.5 L 780 575"
          stroke="#4ade80"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 460 580 L 625 497.5 L 780 575"
          stroke="#22c55e"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
        />

        {/* Green Line 18: 5 Branches into the Servers */}
        {[
          "M 625 497.5 L 650 485",
          "M 660 515 L 685 502.5",
          "M 695 532.5 L 720 520",
          "M 730 550 L 755 537.5",
          "M 765 567.5 L 790 555",
        ].map((d, i) => (
          <g key={`green-branch-${i}`}>
            <path
              d={d}
              stroke="#4ade80"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="opacity-30"
            />
            <path
              d={d}
              stroke="#22c55e"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="12 12"
              className="animate-flow drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
