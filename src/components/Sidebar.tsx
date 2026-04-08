"use client";

import { useSelection } from "./SelectionContext";

const mockDetails: Record<string, { title: string; subtitle: string; desc1: string; desc2: string; desc3: string }> = {
  GasTurbine: { title: "Gas Turbine System", subtitle: "Prime Power Generation", desc1: "Intelligent, **automated load generation** across the grid infrastructure", desc2: "Massive output architecture supporting **45 MW** of sustained load", desc3: "Real-time thermal monitoring maintaining optimal **840 °C** efficiency" },
  GasTurbine2: { title: "Gas Turbine System 2", subtitle: "Prime Power Generation", desc1: "Intelligent, **automated load generation** across the grid infrastructure", desc2: "Massive output architecture supporting **45 MW** of sustained load", desc3: "Real-time thermal monitoring maintaining optimal **840 °C** efficiency" },
  UtilityPower: { title: "Utility Feeder", subtitle: "External Grid Connection", desc1: "Seamless, **high-capacity routing** from local utility authority", desc2: "Scalable connection delivering up to **100 MW** on demand", desc3: "Continuous monitoring for **power quality and compliance**" },
  HvMvTransformer: { title: "HV/MV Transformer", subtitle: "Voltage Step Down", desc1: "High-efficiency **voltage conversion** handling deep load steps", desc2: "Robust architecture converting **80 MW** of throughput", desc3: "Designed for **continuous-duty campus operations**" },
  MvSwitchgear: { title: "MV Switchgear", subtitle: "Main Power Distribution", desc1: "Intelligent, **automated power routing** across MV infrastructure", desc2: "Unified control of **multiple distribution networks**", desc3: "Real-time operational insight with **historical analytics**" },
  MvSwitchgear2: { title: "MV Switchgear 2", subtitle: "Main Power Distribution", desc1: "Intelligent, **automated power routing** across MV infrastructure", desc2: "Unified control of **multiple distribution networks**", desc3: "Real-time operational insight with **historical analytics**" },
  DistributionSwitchgear: { title: "Distribution Switchgear", subtitle: "Secondary Distribution", desc1: "Intelligent, **automated power management** bridging MV and LV layers", desc2: "Unified control of **sub-distribution networks**", desc3: "Real-time operational insight with **historical analytics**" },
  DistributionSwitchgear2: { title: "Distribution Switchgear 2", subtitle: "Secondary Distribution", desc1: "Intelligent, **automated power management** bridging MV and LV layers", desc2: "Unified control of **sub-distribution networks**", desc3: "Real-time operational insight with **historical analytics**" },
  DieselGenerator: { title: "Diesel Generator", subtitle: "Emergency Backup System", desc1: "Rapid-start **failsafe redundancy** for critical operations", desc2: "Scalable architecture supporting **multi-unit synchronization**", desc3: "Designed for **commissioning and emergency phases**" },
  BatteryStorage: { title: "BESS Module", subtitle: "Energy Storage & Buffering", desc1: "Instantaneous, **automated load balancing** and frequency response", desc2: "High-density architecture outputting **+5 MW peak capacity**", desc3: "Seamless integration into **DCIM / BMS ecosystems**" },
  // Default fallbacks for the rest for now to keep code clean, but you can expand this mapping:
  ServerCluster: { title: "Data Center Racks", subtitle: "High-Density Computing", desc1: "Intelligent, **automated processing** across the sever farm", desc2: "Scalable architecture supporting **multi-zonal cooling**", desc3: "Designed for **continuous-duty AI campus operations**" },
  ServerCluster2: { title: "Data Center Racks 2", subtitle: "High-Density Computing", desc1: "Intelligent, **automated processing** across the sever farm", desc2: "Scalable architecture supporting **multi-zonal cooling**", desc3: "Designed for **continuous-duty AI campus operations**" },
};

export default function Sidebar() {
  const { selectedId, setSelectedId } = useSelection();

  const isOpen = selectedId !== null;
  
  // Get data or fallback
  const data = selectedId 
    ? (mockDetails[selectedId] || { 
        title: selectedId, 
        subtitle: "Component Details", 
        desc1: "Intelligent, **automated load management** across MV and LV infrastructure",
        desc2: "Scalable architecture supporting **networked components** across campus",
        desc3: "Seamless integration into **DCIM / BMS ecosystems** for full digital visibility"
      })
    : null;

  // Helper to render bold text matching the reference
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-slate-800">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      {/* Sidebar Panel — responsive for tablet */}
      <div
        className={`absolute right-0 top-0 bottom-0 sidebar-panel bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] text-slate-700 z-50 transform transition-transform duration-500 flex flex-col pointer-events-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header - Dark Blue solid background */}
        <div className="bg-[#2f4266] text-white sidebar-header relative">
          <button 
            onClick={() => setSelectedId(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-1 hover:bg-[#1f2d48] rounded transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 hover:text-white transition-colors">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <h1 className="sidebar-title font-bold tracking-tight mb-1 md:mb-2 pr-8">{data?.title}</h1>
          <p className="sidebar-subtitle font-light text-slate-300 leading-snug pr-8">
            {data?.subtitle}
          </p>
        </div>

        {/* Content Body - Clean White */}
        <div className="sidebar-body flex-1 overflow-y-auto">
          
          <div className="sidebar-content-text leading-relaxed text-slate-600 mb-6 md:mb-8">
            <p>{renderFormattedText(data?.desc1 || "")}</p>
            <p>{renderFormattedText(data?.desc2 || "")}</p>
            <p>{renderFormattedText(data?.desc3 || "")}</p>
            <p>Unified control of mixed fleets (air-cooled and liquid-cooled) across build phases.</p>
            <p>Designed for <strong className="font-bold text-slate-800">commissioning, phased expansion,</strong> and <strong className="font-bold text-slate-800">continuous-duty operations</strong>.</p>
          </div>

          {/* Placeholder for an inner card/graphic like the reference image */}
          <div className="mt-6 md:mt-8 border border-slate-200 rounded-xl p-4 md:p-6 bg-slate-50 shadow-sm flex flex-col items-center justify-center min-h-[120px] md:min-h-[160px]">
             <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2 md:mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-8 md:h-8">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
             </div>
             <p className="font-bold text-slate-700 text-sm md:text-base">Detailed Telemetry Map</p>
             <p className="text-xs md:text-sm text-slate-500 mt-1">Control, Monitor, and Manage Data</p>
          </div>

        </div>
      </div>
    </>
  );
}
