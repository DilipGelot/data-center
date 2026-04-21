import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function ServerCluster2() {
  return (
    <div className="absolute top-[59%] left-[55%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-30">
      <InteractiveModel id="ServerCluster2">
        <ModelLabel label="Liquid Cooled Rack and Servers" />
        <Image
          src="/assets/servers.webp"
          alt="Rack and Servers"
          width={250}
          height={250}
          className="relative w-[320px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
