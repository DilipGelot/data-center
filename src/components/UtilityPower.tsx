import Image from "next/image";
import ModelLabel from "./ModelLabel";

export default function UtilityPower() {
  return (
    <div className="absolute top-[15%] left-[30%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <div className="relative">
        <ModelLabel label="Utility Power" />
        <Image
          src="/assets/utility-power.webp"
          alt="Utility Power"
          width={250}
          height={250}
          className="relative w-[130px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
