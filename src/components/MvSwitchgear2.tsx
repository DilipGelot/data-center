import Image from "next/image";
import InteractiveModel from "./InteractiveModel";

export default function MvSwitchgear2() {
  return (
    /* ── POSITION ──────────────────────────────────────────────
       Change top-[XX%] and left-[XX%] to move this switchgear.
       Current: right of the first MV Switchgear.
       ───────────────────────────────────────────────────────── */
    <div className="absolute top-[45%] left-[38%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="MvSwitchgear2">
        <Image
          src="/assets/mv-switchgear1.webp"
          alt="MV Switchgear 2"
          width={250}
          height={250}
          className="relative w-[105px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
