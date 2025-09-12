export default function TimeProgress({ value }: { value: number }) {
  return (
    <div
      className="w-full max-w-md h-3 rounded-full bg-gray-200/80 overflow-hidden"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value * 100)}
    >
      <div
        className="h-full origin-left will-change-transform"
        style={{
          transform: `scaleX(${value})`,
          transformOrigin: "left",
          transition: "transform 60ms linear",
          background:
            "linear-gradient(90deg, #60a5fa 0%, #6366f1 50%, #a78bfa 100%)",
        }}
      />
    </div>
  );
}
