import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function HvMvTransformer() {
  return (
    <div className="absolute top-[27%] left-[11%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="HvMvTransformer">
        <ModelLabel label="HV-MV Transformer" />
        <Image
          src="/assets/hv-mv-transformer.webp"
          alt="HV-MV Transformer"
          width={250}
          height={250}
          className="relative w-[130px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
