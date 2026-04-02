import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function DistributionSwitchgear() {
  return (
    <div className="absolute top-[75%] left-[38%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-2">
      <InteractiveModel id="DistributionSwitchgear">
        <ModelLabel label="Distribution Switchgear" />
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
