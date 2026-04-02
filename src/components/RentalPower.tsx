import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function RentalPower() {
  return (
    <div className="absolute top-[70%] left-[5%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="RentalPower">
        <ModelLabel label="Rental Power" />
        <Image
          src="/assets/rental-power.webp"
          alt="Rental Power"
          width={250}
          height={250}
          className="relative w-[170px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
