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

      <g>
        {/* 
          Purple Line: Utility Power -> HV-MV Transformer
          Direct isometric straight line from tower base to transformer base
        */}
        <path
          d="M 264 180 L 132 252"
          stroke="#c084fc"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 264 180 L 132 252"
          stroke="#9333ea"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]"
        />

        {/* 
          Yellow Line: HV-MV Transformer -> BESS
          Straight isometric line down-right
        */}
        <path
          d="M 132 252 L 252 312"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 132 252 L 252 312"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/*
          Yellow Lines: BESS → MV Switchgear 2
          Isometric L-shape routing out from BESS down-right, then turning up-right to the base of Switchgear 2.
        */}
        <path d="M 300 360 L 386 403 L 430 381" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 300 360 L 386 403 L 430 381" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: Gas Turbine 2 → MV Switchgear
          Straight isometric line down-right connecting to the switchgear base.
        */}
        <path d="M 450 270 L 530 310" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 450 270 L 530 310" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: Gas Generator → MV Switchgear
          Isometric L-shape routing out from the front-right of the generator array, then turning back left to the switchgear base.
        */}
        <path d="M 570 190 L 705 258 L 601 310" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 570 190 L 705 258 L 601 310" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: MV Switchgear 1 → MV Switchgear 2
          Perfect isometric slope (dy/dx = -0.5) connecting the two switchgears.
        */}
        <path d="M 584 310 L 472 366" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 584 310 L 472 366" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />



        {/*
          Yellow Lines: MV Switchgear 2 → CCHP
          Isometric L-shape tracing from Switchgear 2 leftwards, then branching right into CCHP
        */}
        <path d="M 430 380 L 143 524 L 179 542" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 430 380 L 143 524 L 179 542" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: Mobile Power → CCHP Main Bus
          Straight isometric line connecting the truck load bank to the Switchgear-CCHP line
        */}
        <path d="M 176 411 L 272 459" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 176 411 L 272 459" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: Rental Power → CCHP Main Bus
          Straight isometric line connecting the trailer load bank to the Switchgear-CCHP line
        */}
        <path d="M 106 454 L 194 498" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 106 454 L 194 498" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: CCHP → LV MV Transformer
          Straight isometric line out of CCHP descending to the transformer
        */}
        <path d="M 196 538 L 340 610" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 196 538 L 340 610" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: LV MV Transformer → Load Bank
          Isometric zigzag routing out bottom-left, then dropping bottom-right into Load Bank
        */}
        <path d="M 336 626 L 264 662 L 444 752" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 336 626 L 264 662 L 444 752" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Red Lines: LV MV Transformer → Distribution Switchgear
          Straight isometric line going top-right from the transformer
        */}
        <path d="M 336 616 L 420 574" stroke="#fca5a5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 336 616 L 420 574" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />

        {/*
          Red Lines: Distribution Switchgear 1 → Distribution Switchgear 2
          Straight isometric line bridging the switchgear baselines
        */}
        <path d="M 420 574 L 588 658" stroke="#fca5a5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 420 574 L 588 658" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />

        {/*
          Red Lines: Distribution Switchgear 2 → UPS
          Straight isometric line down-right from switchgear to UPS container
        */}
        <path d="M 610 670 L 756 743" stroke="#fca5a5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 610 670 L 756 743" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />

        {/*
          Blue Lines: Distribution Switchgear 2 → Cooling Units
          L-shape trunk: down-right from DS2, then 90° turn going up-right
          with branches to Temperature Control, Compressed Air, and Dry Cooler
        */}
        {/* Main L-shape trunk */}
        <path d="M 610 680 L 660 710 L 1020 530" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 610 680 L 660 710 L 1020 530" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />

        {/* Branch stubs to each cooling component */}
        {[
          "M 780 650 L 840 680",      // Temperature Control branch
          "M 900 590 L 940 640",      // Compressed Air branch
          "M 1020 530 L 1050 560",    // Dry Cooler branch
        ].map((d, i) => (
          <g key={`blue-branch-${i}`}>
            <path d={d} stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
            <path d={d} stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </g>
        ))}

        {/*
          Green Lines: Distribution Switchgear 1 & 2 → Server Racks
          `[` bracket shape connecting DS1 and DS2 on the right,
          then a trunk going up-right to the server cluster area.
        */}

        {/* DS1 stub going right to corner */}
        <path d="M 440 560 L 520 520" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 440 560 L 520 520" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />

        {/* Cross-connect bracket from DS1 trunk corner down-right to DS2 trunk */}
        <path d="M 480 540 L 650 625" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 480 540 L 650 625" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />

        {/* Trunk: From corner going up-right to server racks */}
        <path d="M 520 520 L 900 330" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 520 520 L 900 330" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />

        {/*
          Green Lines: Distribution Switchgear 2 → Data Center Racks (right side)
          Straight line up-right from DS2 alongside the server racks
        */}
        <path d="M 600 650 L 950 475" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 600 650 L 950 475" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />

        {/* End bracket hook entering the rack from the right trunk */}
        <path d="M 950 475 L 910 455" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 950 475 L 910 455" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />

      </g>
    </svg>
  );
}
