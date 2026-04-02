import Image from "next/image";
import ModelLabel from "./ModelLabel";

export default function DryCooler() {
  return (
    <div className="absolute top-[63%] left-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <div className="relative">
        <ModelLabel label="Dry Cooler" />
        <Image
          src="/assets/dry-cooler.webp"
          alt="Dry Cooler"
          width={250}
          height={250}
          className="relative w-[130px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
