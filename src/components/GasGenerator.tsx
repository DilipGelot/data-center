import Image from "next/image";
import ModelLabel from "./ModelLabel";

export default function GasGenerator() {
  return (
    <div className="absolute top-[23%] left-[52%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <div className="relative">
        <ModelLabel label="Gas Generator" />
        <Image
          src="/assets/Gas-generator.webp"
          alt="Gas Generator"
          width={250}
          height={250}
          className="relative w-[130px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
