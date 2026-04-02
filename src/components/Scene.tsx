"use client";

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

function SceneLayout() {
  const { selectedId } = useSelection();

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Isometric World Grid Holder */}
      <div
        className={`relative w-[1200px] h-[800px] shrink-0 transition-transform duration-700 pointer-events-auto ease-[cubic-bezier(0.16,1,0.3,1)] ${
          selectedId ? "scale-75 -translate-x-32" : "scale-100 translate-x-0"
        }`}
      >
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 bg-[#f8fafc] opacity-50 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            transform: "rotateX(60deg) rotateZ(-45deg)",
            transformOrigin: "center",
          }}
        />

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
