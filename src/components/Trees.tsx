import Image from "next/image";

const treePositions = [
  { top: "3%", left: "50%", size: 45 },
  { top: "10%", left: "80%", size: 40 },
  { top: "88%", left: "85%", size: 42 },
  { top: "85%", left: "12%", size: 44 },
  { top: "45%", left: "3%", size: 40 },
];

export default function Trees() {
  return (
    <>
      {treePositions.map((tree, i) => (
        <div
          key={`tree-${i}`}
          className="absolute pointer-events-none z-0"
          style={{
            top: tree.top,
            left: tree.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/assets/tree.png"
            alt=""
            width={100}
            height={100}
            className="object-contain"
            style={{ width: `${tree.size}px`, height: "auto" }}
          />
        </div>
      ))}
    </>
  );
}
