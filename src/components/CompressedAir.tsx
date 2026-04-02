import Image from "next/image";
import ModelLabel from "./ModelLabel";

export default function CompressedAir() {
  return (
    <div className="absolute top-[48%] left-[85%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <div className="relative">
        <ModelLabel label="Compressed Air" />
        <Image
          src="/assets/compressedAir.webp"
          alt="Compressed Air"
          width={250}
          height={250}
          className="relative w-[110px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
