"use client";

import { ReactNode } from "react";
import { useSelection } from "./SelectionContext";

export default function InteractiveModel({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const { selectedId, setSelectedId } = useSelection();

  const isSelected = selectedId === id;
  const isBlurred = selectedId !== null && selectedId !== id;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedId(isSelected ? null : id);
  };

  return (
    <>
      <style>{`
        @keyframes soft-bounce {
          0%, 100% { transform: translateY(-8px); }
          50% { transform: translateY(0); }
        }
        .animate-soft-bounce {
          animation: soft-bounce 3s infinite ease-in-out;
        }
      `}</style>
      <div
        className={`relative cursor-pointer transition-all duration-300 pointer-events-auto ${
          isSelected ? "scale-[1.10] z-50 animate-soft-bounce" : ""
        } ${isBlurred ? "grayscale pointer-events-none" : ""}`}
        onClick={handleClick}
      >
        <div>{children}</div>
      </div>
    </>
  );
}
