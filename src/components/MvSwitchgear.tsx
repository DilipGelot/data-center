import Image from "next/image";
import ModelLabel from "./ModelLabel";

export default function MvSwitchgear() {
  return (
    <div className="absolute top-[55%] left-[15%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <div className="relative">
        <ModelLabel label="MV Switch Gear" />
        <Image
          src="/assets/mv-switchgear.webp"
          alt="MV Switchgear"
          width={250}
          height={250}
          className="relative w-[100px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
