import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function GasGenerator() {
  return (
    <div className="absolute top-[20%] left-[43%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="GasGenerator">
        <ModelLabel label="Gas Generator" />
        <Image
          src="/assets/gas-generetor-4.webp"
          alt="Gas Generator"
          width={250}
          height={250}
          className="relative w-[160px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
