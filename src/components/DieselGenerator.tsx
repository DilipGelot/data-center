import Image from "next/image";
import ModelLabel from "./ModelLabel";

export default function DieselGenerator() {
  return (
    <div className="absolute top-[18%] left-[46%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <div className="relative">
        <ModelLabel label="Diesel Generator" />
        <Image
          src="/assets/Diesel-generator.webp"
          alt="Diesel Generator"
          width={250}
          height={250}
          className="relative w-[130px] h-auto object-contain drop-shadow-2xl -rotate-[5deg]"
          priority
        />
      </div>
    </div>
  );
}
