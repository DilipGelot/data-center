"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SelectionContextType {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SelectionContext.Provider value={{ selectedId, setSelectedId }}>
      <div 
        className="w-full h-full absolute inset-0 pointer-events-auto" 
        onClick={() => setSelectedId(null)}
      >
        {children}
      </div>
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
}
