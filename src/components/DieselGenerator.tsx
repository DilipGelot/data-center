import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function DieselGenerator() {
  return (
    <div className="absolute top-[90%] left-[23%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-3">
      <InteractiveModel id="DieselGenerator">
        <ModelLabel label="Diesel Generator" />
        <Image
          src="/assets/diesel-generetor-4.webp"
          alt="Diesel Generator"
          width={250}
          height={250}
          className="relative w-[190px] h-auto object-contain drop-shadow-2xl -rotate-[5deg]"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
