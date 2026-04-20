import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function LiquidCooledLoadBanks() {
  return (
    <div className="absolute top-[96%] left-[46%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-4">
      <InteractiveModel id="LiquidCooledLoadBanks">
        <ModelLabel label="Liquid Cooled Load Banks" />
        <Image
          src="/assets/liquid-cooled-load-bank.webp"
          alt="Liquid Cooled Load Banks"
          width={250}
          height={250}
          className="relative w-[100px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
