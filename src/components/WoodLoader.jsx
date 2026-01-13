export default function WoodLoader({ text = "Loading craftsmanship..." }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Wooden bars */}
      <div className="flex gap-2 mb-6">
        <span className="wood-bar animate-wood" />
        <span className="delay-150 wood-bar animate-wood" />
        <span className="delay-300 wood-bar animate-wood" />
      </div>

      {/* Text */}
      <p className="text-sm tracking-wide text-[#6b4f3f] font-medium">{text}</p>
    </div>
  );
}
