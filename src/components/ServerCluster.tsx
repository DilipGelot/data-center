import Image from "next/image";
import ModelLabel from "./ModelLabel";
import InteractiveModel from "./InteractiveModel";

export default function ServerCluster() {
  return (
    <div className="absolute top-[45%] left-[75%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <InteractiveModel id="ServerCluster">
        <ModelLabel label="Air Cooled Rack and Servers" />
        <Image
          src="/assets/servers.webp"
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
