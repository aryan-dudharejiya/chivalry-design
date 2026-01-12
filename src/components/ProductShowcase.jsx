const products = [
  {
    name: "Oak Coffee Table",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
  },
  {
    name: "Walnut Sideboard",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
  },
  {
    name: "Leather Lounge Chair",
    image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
  },
  {
    name: "Minimal Console",
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
  },
  {
    name: "Accent Armchair",
    image: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-[#F6F2EA] overflow-hidden">
      <div className="px-4 mx-auto mb-10 max-w-7xl">
        <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
          New Arrivals
        </p>
        <h2 className="text-2xl font-medium md:text-3xl text-text">
          Discover Our Furniture
        </h2>
      </div>

      {/* SCROLL WRAPPER */}
      <div className="relative">
        <div
          className="flex gap-8 w-max animate-scroll hover:[animation-play-state:paused]"
          style={{
            animationDuration: "40s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {[...products, ...products].map((item, index) => (
            <div
              key={index}
              className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] md:h-[320px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-[3000ms] hover:scale-[1.04]"
                />
                {/* NEW BADGE */}
                <span
                  className="absolute top-4 right-4 text-[10px] tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{
                    background: "rgb(var(--color-primary))",
                    color: "#fff",
                  }}
                >
                  New
                </span>
              </div>

              {/* INFO */}
              <div className="p-4">
                <p className="text-sm font-medium text-text">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INLINE KEYFRAMES + SCROLLBAR HIDE */}
      <style>
        {`
          .animate-scroll {
            animation-name: scrollX;
          }

          @keyframes scrollX {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          /* Hide scrollbar everywhere */
          .animate-scroll::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
}
