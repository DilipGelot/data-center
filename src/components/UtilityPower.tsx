import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function UtilityPower() {
  return (
    <div className="absolute top-[15%] left-[22%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="UtilityPower">
        <ModelLabel label="Utility Power" />
        <Image
          src="/assets/utility-power.webp"
          alt="Utility Power"
          width={250}
          height={250}
          className="relative w-[130px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
