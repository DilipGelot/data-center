import Image from "next/image";

export default function Onsite() {
  return (
    <div className="absolute top-[40%] left-[35%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      <div className="relative">
        <Image
          src="/assets/onsite.webp"
          alt="Onsite Power"
          width={250}
          height={250}
          className="relative w-[200px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
