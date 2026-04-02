import Image from "next/image";
import ModelLabel from "./ModelLabel";

export default function MobilePower() {
  return (
    <div className="absolute top-[63%] left-[-10px] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <div className="relative">
        <ModelLabel label="Mobile Power" />
        <Image
          src="/assets/mobile-power1.webp"
          alt="Mobile Power"
          width={250}
          height={250}
          className="relative w-[210px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
