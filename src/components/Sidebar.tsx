"use client";

import { useSelection } from "./SelectionContext";
import modelsContentRaw from "../data/modelsContent.json";

// Define the type for the models content
type ModelContent = {
  title: string;
  subtitle: string;
  paragraph: string;
  list?: string[];
  image?: string;
  lists?: {
    subtitle: string;
    items: string[];
  }[];
  images?: string[];
  sections?: {
    title: string;
    subsections: {
      items: string[];
      image?: string;
    }[];
  }[];
};

// Cast the imported raw json to a strongly typed record
const modelsContent = modelsContentRaw as Record<string, ModelContent>;

export default function Sidebar() {
  const { selectedId, setSelectedId } = useSelection();

  const isOpen = selectedId !== null;
  
  // Get data or fallback to a default structure
  const data = selectedId 
    ? (modelsContent[selectedId] || { 
        title: selectedId, 
        subtitle: "Component Details", 
        paragraph: "Intelligent, <b>automated load management</b> across MV and LV infrastructure. Scalable architecture supporting <b>networked components</b> across campus. Seamless integration into <b>DCIM / BMS ecosystems</b> for full digital visibility.",
        list: [
          "Unified control of mixed fleets (air-cooled and liquid-cooled) across build phases.",
          "Designed for <b>commissioning, phased expansion,</b> and <b>continuous-duty operations</b>."
        ]
      })
    : null;

  // Helper to render bold text correctly handling <b> tags
  const renderFormattedText = (text: string) => {
    // split by <b> and </b>
    const parts = text.split(/(<b>.*?<\/b>)/gi);
    return parts.map((part, index) => {
      if (part.toLowerCase().startsWith('<b>') && part.toLowerCase().endsWith('</b>')) {
        return <strong key={index} className="font-bold text-slate-800">{part.slice(3, -4)}</strong>;
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
            {data?.paragraph && <p className="mb-4">{renderFormattedText(data.paragraph)}</p>}
            
            {/* Render legacy single list */}
            {data?.list && data.list.length > 0 && (
              <ul className="list-none space-y-2 mt-4 text-sm md:text-base">
                {data.list.map((item, idx) => (
                  <li key={idx}>{renderFormattedText(item)}</li>
                ))}
              </ul>
            )}

            {/* Render new multiple lists format */}
            {data?.lists && data.lists.map((listGroup, listIdx) => (
              <div key={listIdx} className="mt-6">
                {listGroup.subtitle && (
                  <h3 className="font-bold text-slate-800 mb-2">{renderFormattedText(listGroup.subtitle)}</h3>
                )}
                <ul className="list-none space-y-2 text-sm md:text-base">
                  {listGroup.items.map((item, idx) => (
                    <li key={idx}>{renderFormattedText(item)}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Render deeply nested sections format */}
            {data?.sections && data.sections.map((section, sIdx) => (
              <div key={`sec-${sIdx}`} className="mt-6 md:mt-8">
                {section.title && (
                  <h3 className="font-bold text-slate-800 text-[1.05rem] mb-4">{renderFormattedText(section.title)}</h3>
                )}
                <div className="space-y-4">
                  {section.subsections.map((sub, subIdx) => (
                    <div key={`sub-${subIdx}`} className="border border-slate-200 rounded-xl p-4 md:p-5 bg-white shadow-sm flex flex-col space-y-4">
                      {sub.items && sub.items.length > 0 && (
                        <ul className="list-none space-y-2 text-sm md:text-base">
                          {sub.items.map((item, i) => (
                            <li key={i}>{renderFormattedText(item)}</li>
                          ))}
                        </ul>
                      )}
                      {sub.image && (
                         <div className="flex justify-center mt-3 border border-slate-100 rounded-lg p-1 bg-slate-50">
                           <img src={sub.image} alt={`Subsection ${subIdx}`} className="max-w-full h-auto rounded" />
                         </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Render images if available ONLY if sections are not provided, as they have integrated images typically */}
          {(!data?.sections) && (
            (data?.images && data.images.length > 0) ? (
              <div className="mt-6 md:mt-8 flex flex-col space-y-4">
                {data.images.map((imgSrc, idx) => (
                  <div key={idx} className="flex justify-center border border-slate-200 rounded-xl p-2 bg-slate-50 shadow-sm">
                    <img src={imgSrc} alt={`${data.title} ${idx + 1}`} className="max-w-full h-auto rounded-lg" />
                  </div>
                ))}
              </div>
            ) : data?.image ? (
              <div className="mt-6 md:mt-8 flex justify-center border border-slate-200 rounded-xl p-2 bg-slate-50 shadow-sm">
                <img src={data.image} alt={data.title} className="max-w-full h-auto rounded-lg" />
              </div>
            ) : (
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
            )
          )}

        </div>
      </div>
    </>
  );
}
