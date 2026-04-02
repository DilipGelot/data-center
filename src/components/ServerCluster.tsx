import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function ServerCluster() {
  return (
    <div className="absolute top-[55%] left-[65%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="ServerCluster">
        <ModelLabel label="Rack and Servers" />
        <Image
          src="/assets/server.webp"
          alt="Rack and Servers"
          width={250}
          height={250}
          className="relative w-[330px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </InteractiveModel>
    </div>
  );
}
