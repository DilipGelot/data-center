import Image from "next/image";
import ModelLabel from "./ModelLabel";

export default function LoadBank() {
  return (
    <div className="absolute top-[94%] left-[37%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <div className="relative">
        <ModelLabel label="Load Bank" />
        <Image
          src="/assets/load-bank.webp"
          alt="Load Bank"
          width={250}
          height={250}
          className="relative w-[130px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
