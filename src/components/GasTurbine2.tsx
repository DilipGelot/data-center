import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function GasTurbine2() {
  return (
    /* ── POSITION ──────────────────────────────────────────────
       Change top-[XX%] and left-[XX%] to move this turbine.
       Current: right of the first Gas Turbine.
       ───────────────────────────────────────────────────────── */
    <div className="absolute top-[40%] left-[41%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="GasTurbine2">
        <Image
          src="/assets/Gas-turbine.webp"
          alt="Gas Turbine 2"
          width={250}
          height={250}
          className="relative w-[110px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
