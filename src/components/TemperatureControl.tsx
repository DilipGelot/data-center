import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function TemperatureControl() {
  return (
    <div className="absolute top-[70%] left-[75%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-2">
      <InteractiveModel id="TemperatureControl">
        <ModelLabel label="Temperature Control" />
        <Image
          src="/assets/temp.webp"
          alt="Temperature Control"
          width={250}
          height={250}
          className="relative w-[90px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
