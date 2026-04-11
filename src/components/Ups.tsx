import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function Ups() {
  return (
    <div className="absolute top-[93%] left-[62%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="Ups">
        <ModelLabel label="UPS Batteries" />
        <Image
          src="/assets/ups.webp"
          alt="UPS"
          width={250}
          height={250}
          className="relative w-[150px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
