import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function GasTurbine() {
  return (
    <div className="absolute top-[33%] left-[34%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="GasTurbine">
        <ModelLabel label="Gas Turbine" />
        <Image
          src="/assets/Gas-turbine.webp"
          alt="Gas Turbine"
          width={250}
          height={250}
          className="relative w-[110px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
