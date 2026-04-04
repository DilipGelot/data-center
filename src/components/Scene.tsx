"use client";

import { useState, useEffect, useCallback } from "react";
import UtilityPower from "./UtilityPower";
import HvMvTransformer from "./HvMvTransformer";
import DieselGenerator from "./DieselGenerator";
import GasGenerator from "./GasGenerator";
import GasTurbine from "./GasTurbine";
import BatteryStorage from "./BatteryStorage";
import MvSwitchgear from "./MvSwitchgear";
import RentalPower from "./RentalPower";
import MobilePower from "./MobilePower";
import CchpModule from "./CchpModule";
import DistributionSwitchgear from "./DistributionSwitchgear";
import LvMvTransformer from "./LvMvTransformer";
import LoadBank from "./LoadBank";
import DryCooler from "./DryCooler";
import TemperatureControl from "./TemperatureControl";
import CompressedAir from "./CompressedAir";
import ServerCluster from "./ServerCluster";
import IsometricZone from "./IsometricZone";
import ConnectionLines from "./ConnectionLines";
import { SelectionProvider, useSelection } from "./SelectionContext";
import Sidebar from "./Sidebar";
import Trees from "./Trees";

// The canonical design size (desktop)
const CANVAS_W = 1200;
const CANVAS_H = 800;

function useResponsiveScale() {
  const [scale, setScale] = useState(1);
  const [isTablet, setIsTablet] = useState(false);

  const calc = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Fit the canvas inside the viewport with some padding
    const padX = 32; // horizontal breathing room
    const padY = 32; // vertical breathing room
    const scaleX = (vw - padX) / CANVAS_W;
    const scaleY = (vh - padY) / CANVAS_H;
    const s = Math.min(scaleX, scaleY, 1); // never exceed 1 (native size)
    setScale(s);
    setIsTablet(vw < 1100);
  }, []);

  useEffect(() => {
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [calc]);

  return { scale, isTablet };
}

function SceneLayout() {
  const { selectedId } = useSelection();
  const { scale, isTablet } = useResponsiveScale();

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Isometric World Grid Holder — scaled to viewport */}
      <div
        className={`relative shrink-0 transition-transform duration-700 pointer-events-auto ease-[cubic-bezier(0.16,1,0.3,1)]`}
        style={{
          width: `${CANVAS_W}px`,
          height: `${CANVAS_H}px`,
          transform: `scale(${
            selectedId ? scale * 0.72 : scale
          }) translateX(${
            selectedId ? (isTablet ? "30px" : "0px") : "50px"
          })`,
          transformOrigin: "center center",
        }}
      >


        {/* Trees around the perimeter */}
        <Trees />

        {/* 3D Transparent Wall Box */}
        <IsometricZone />

        {/* Connection Lines (Cables) rendered under the models */}
        <ConnectionLines />

        {/* Asset Components go here */}
        <UtilityPower />
        <HvMvTransformer />
        <DieselGenerator />
        <GasGenerator />
        <GasTurbine />
        <BatteryStorage />
        <MvSwitchgear />
        <MobilePower />
        <RentalPower />
        <CchpModule />
        <DistributionSwitchgear />
        <LvMvTransformer />
        <LoadBank />
        <DryCooler />
        <TemperatureControl />
        <CompressedAir />
        <ServerCluster />
      </div>

      {/* Slide-in Details Panel */}
      <Sidebar />
    </div>
  );
}

export default function Scene() {
  return (
    <SelectionProvider>
      <SceneLayout />
    </SelectionProvider>
  );
}
