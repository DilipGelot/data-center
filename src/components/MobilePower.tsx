import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function MobilePower() {
  return (
    <div className="absolute top-[45%] left-[12%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="MobilePower">
        <ModelLabel label="20 MW Load Bank" />
        <Image
          src="/assets/mobile-power.png"
          alt="Mobile Power"
          width={250}
          height={250}
          className="relative w-[190px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
