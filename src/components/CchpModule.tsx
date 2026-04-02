import Image from "next/image";
import ModelLabel from "./ModelLabel";

export default function CchpModule() {
  return (
    <div className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <div className="relative">
        <ModelLabel label="CCHP" />
        <Image
          src="/assets/CCHP.webp"
          alt="CCHP"
          width={250}
          height={250}
          className="relative w-[150px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
