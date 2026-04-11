import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function DryCooler() {
  return (
    <div className="absolute top-[70%] left-[88%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="DryCooler">
        <ModelLabel label="Dry Cooler" />
        <Image
          src="/assets/dry-coolers.webp"
          alt="Dry Cooler"
          width={250}
          height={250}
          className="relative w-[200px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
