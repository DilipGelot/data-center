import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function BatteryStorage() {
  return (
    <div className="absolute top-[45%] left-[25%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="BatteryStorage">
        <ModelLabel label="BESS" />
        <Image
          src="/assets/bess.webp"
          alt="BESS"
          width={250}
          height={250}
          className="relative w-[180px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
