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

export default function Scene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Isometric World Grid Holder */}
      <div className="relative w-[1200px] h-[800px] shrink-0">
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 bg-[#f8fafc] opacity-50 transition-transform duration-500"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            transform: "rotateX(60deg) rotateZ(-45deg)",
            transformOrigin: "center",
          }}
        />

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
    </div>
  );
}
