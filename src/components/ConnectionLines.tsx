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
          d="M 264 180 L 144 260"
          stroke="#c084fc"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 264 180 L 144 260"
          stroke="#9333ea"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]"
        />

        {/* 
          Yellow Line: HV-MV Transformer -> MV Switch Gear
          Isometric 90° turn: down-left along iso axis, then down-right along iso axis
        */}
        <path
          d="M 138 270 L 30 332 L 150 402"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 138 270 L 30 332 L 150 402"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* 
          Yellow Lines: Gas Turbine 1 → 4 Gas Generators
          Centered T-branch pattern: Straight central trunk from Gas Turbine
          connecting to the exact center of an isometric spine along the generators.
        */}
        {/* Central Trunk: Center of Spine → Turbine */}
        <path
          d="M 554 207 L 408 280"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 554 207 L 408 280"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* Isometric Horizontal Spine converging from generators to center */}
        {[
          "M 509 185 L 554 207",
          "M 599 230 L 554 207",
        ].map((d, i) => (
          <g key={`gen-spine-${i}`}>
            <path d={d} stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
            <path d={d} stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
          </g>
        ))}

        {/* 4 Evenly spaced Branch stubs from each generator to spine */}
        {[
          "M 523 178 L 509 185",
          "M 553 193 L 539 200",
          "M 583 208 L 569 215",
          "M 613 223 L 599 230",
        ].map((d, i) => (
          <g key={`gen-branch-${i}`}>
            <path d={d} stroke="#fde047" strokeWidth="6" strokeLinecap="round" fill="none" className="opacity-30" />
            <path d={d} stroke="#eab308" strokeWidth="4" strokeLinecap="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
          </g>
        ))}

        {/*
          Yellow Lines: Gas Turbine 2 → 5 Diesel Generators
          Centered T-branch pattern: Straight central trunk from Gas Turbine 2
          connecting to the exact center of an isometric spine along the diesel generators.
        */}
        {/* Central Trunk: Center of Spine → Turbine 2 */}
        <path
          d="M 756 194 L 518 313"
          stroke="#fde047"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-30"
        />
        <path
          d="M 756 194 L 518 313"
          stroke="#eab308"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="12 12"
          className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        />

        {/* Isometric Horizontal Spine converging to the center */}
        {[
          "M 696 164 L 756 194",
          "M 816 224 L 756 194",
        ].map((d, i) => (
          <g key={`diesel-spine-${i}`}>
            <path d={d} stroke="#fde047" strokeWidth="6" strokeLinecap="round" fill="none" className="opacity-30" />
            <path d={d} stroke="#eab308" strokeWidth="4" strokeLinecap="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
          </g>
        ))}

        {/* 5 Evenly spaced Branch stubs from each diesel generator to spine */}
        {[
          "M 728 148 L 696 164",
          "M 758 163 L 726 179",
          "M 788 178 L 756 194",
          "M 818 193 L 786 209",
          "M 848 208 L 816 224",
        ].map((d, i) => (
          <g key={`diesel-branch-${i}`}>
            <path d={d} stroke="#fde047" strokeWidth="6" strokeLinecap="round" fill="none" className="opacity-30" />
            <path d={d} stroke="#eab308" strokeWidth="4" strokeLinecap="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
          </g>
        ))}

        {/*
          Yellow Lines: Gas Turbine 1 → BESS
          Isometric line from Bottom-Left face of GT1 down-left to BESS.
        */}
        <path d="M 408 280 L 300 334" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 408 280 L 300 334" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: Gas Turbine 2 → MV Switchgear 2
          Isometric line from Bottom-Left face of GT2 down-left to MV Switchgear 2.
        */}
        <path d="M 518 313 L 240 452" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 518 313 L 240 452" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: BESS → MV Switchgear 1
          Isometric slope (dy/dx = -0.5) connecting BESS downwards to Switchgear 1
        */}
        <path d="M 256 350 L 156 400" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 256 350 L 156 400" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: MV Switchgear 1 → MV Switchgear 2
          Perfect isometric slope (dy/dx = 0.5) connecting the two switchgears.
        */}
        <path d="M 156 400 L 240 442" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 156 400 L 240 442" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: Mobile Power → MV Switchgear 1
          Isometric slope (dy/dx = -0.5) from Mobile load bank to distribution gear
        */}
        <path d="M -10 483 L 156 400" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M -10 483 L 156 400" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: Rental Power → MV Switchgear 2
          Isometric slope (dy/dx = -0.5) from Rental load bank to Switchgear 2
        */}
        <path d="M 60 530 L 240 440" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 60 530 L 240 440" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

        {/*
          Yellow Lines: MV Switchgear 2 → CCHP
          Isometric zigzag tracing neatly beneath the rental load line
        */}
        <path d="M 270 455 L 150 515 L 196 538" stroke="#fde047" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 270 455 L 150 515 L 196 538" stroke="#eab308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />

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
          Green Lines: Distribution Switchgear 1 → Server Cluster 2
        */}
        <path d="M 420 560 L 672 434" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 420 560 L 672 434" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />

        {/*
          Green Lines: Distribution Switchgear 2 → Server Cluster 1
          Starts cleanly from the top-right corner of the switchgear housing and lands perfectly on the bottom structural edge of the server block
        */}
        <path d="M 638 615 L 876 496" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 638 615 L 876 496" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />

        {/*
          Blue Lines: Distribution Switchgear 2 → Cooling Units
          Isometric right-angle turn: Bottom-Right to clear layout, then Top-Right parallel to building wall, with flat isometric 90-degree floor branches.
        */}
        <path d="M 588 632 L 840 758 L 1220 568" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
        <path d="M 588 632 L 840 758 L 1220 568" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />

        {/* Cooling Unit Details (Isometric 90-degree Floor Branches) */}
        {[
          "M 870 743 L 804 710",     // Dry Cooler branch
          "M 1028 664 L 900 600",    // Temp Control branch
          "M 1188 584 L 1080 530",   // Compressed Air branch
        ].map((d, i) => (
          <g key={`blue-branch-${i}`}>
            <path d={d} stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-30" />
            <path d={d} stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="12 12" className="animate-flow drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </g>
        ))}


      </g>
    </svg>
  );
}
