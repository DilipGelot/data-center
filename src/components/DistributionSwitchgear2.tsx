import Image from "next/image";
import InteractiveModel from "./InteractiveModel";

export default function DistributionSwitchgear2() {
  return (
    <div className="absolute top-[79%] left-[49%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-2">
      <InteractiveModel id="DistributionSwitchgear2">
        <Image
          src="/assets/mv-switchgear.webp"
          alt="Distribution Switchgear"
          width={250}
          height={250}
          className="relative w-[100px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
