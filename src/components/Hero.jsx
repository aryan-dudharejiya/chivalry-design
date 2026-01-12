import herovideo from "../assets/herovideo.mp4";

export default function Hero() {
  return (
    <section className="relative w-full h-screen mt-16 overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src={herovideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            {/* EYEBROW */}
            <p className="text-xs tracking-[0.25em] uppercase text-white/80 mb-4">
              Premium Furniture Manufacturer
            </p>

            {/* HEADING */}
            <h1 className="text-4xl font-light leading-tight text-white md:text-6xl">
              Comfort You Feel <br />
              Quality You Trust
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-sm leading-relaxed md:text-base text-white/85">
              Experience premium comfort and refined craftsmanship with our
              exclusive range of sofas and custom furniture solutions.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/sofas"
                className="inline-block border border-[rgb(var(--color-primary))] px-8 py-3 text-sm tracking-wider uppercase text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary))] hover:text-white transition"
              >
                Explore Sofas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
