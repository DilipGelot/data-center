import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function LvMvTransformer() {
  return (
    <div className="absolute top-[77%] left-[28%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-2">
      <InteractiveModel id="LvMvTransformer">
        <ModelLabel label="LV MV Transformer" />
        <Image
          src="/assets/hv-mv-transformer.webp"
          alt="LV MV Transformer"
          width={250}
          height={250}
          className="relative w-[130px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
