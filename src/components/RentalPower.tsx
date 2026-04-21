import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function RentalPower() {
  return (
    <div className="absolute top-[53%] left-[7%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="RentalPower">
        <ModelLabel label="Trailer mv load bank" />
        <Image
          src="/assets/rental-power.webp"
          alt="Rental Power"
          width={250}
          height={250}
          className="relative w-[110px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
