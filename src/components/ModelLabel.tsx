import React from "react";

interface ModelLabelProps {
  label: string;
}

export default function ModelLabel({ label }: ModelLabelProps) {
  return (
    <div className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none z-10 w-max">
      {/* Label Text — bold with outline shadow for readability at all scales */}
      <span
        className="model-label-text text-black font-extrabold leading-none tracking-wide"
        style={{
          textShadow:
            "1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff, 0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        {label}
      </span>
      {/* Vertical Line */}
      <div className="w-[1.5px] h-5 bg-[#1a1a1a] mt-1 mb-[2px]" />
      {/* Anchor Dot */}
      <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]" />
    </div>
  );
}
