const products = [
  {
    name: "L Shape Fabric Sofa for Living Room",
    image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
    tag: "Best Seller",
  },
  {
    name: "Modern 3 Seater Fabric Sofa",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mYXN8ZW58MHx8MHx8fDA%3D",
    tag: "Popular",
  },
  {
    name: "Premium Wooden Sofa Set (3+1+1)",
    image:
      "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvZmFzfGVufDB8fDB8fHww",
    tag: "Best Seller",
  },
  {
    name: "Recliner Sofa for Living Room",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZmFzfGVufDB8fDB8fHww",
    tag: "Trending",
  },
  {
    name: "Sofa Cum Bed for Small Spaces",
    image:
      "https://images.unsplash.com/photo-1675756544970-968f9e3f7ca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZmFzfGVufDB8fDB8fHww",
    tag: "Hot Pick",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-[#F6F2EA] overflow-hidden">
      <div className="px-4 mx-auto mb-10 max-w-7xl">
        <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
          Best Selling Sofas
        </p>
        <h2 className="text-2xl font-medium md:text-3xl text-text">
          Premium Sofas for Modern Living Rooms
        </h2>
        <p className="max-w-xl mt-2 text-sm text-muted">
          Explore our most loved sofas including L shape sofas, fabric sofas,
          recliner sofas and sofa cum beds designed for Indian homes.
        </p>
      </div>

      {/* SCROLL WRAPPER */}
      <div className="relative">
        <div
          className="flex gap-8 w-max animate-scroll hover:[animation-play-state:paused]"
          style={{
            animationDuration: "42s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {[...products, ...products].map((item, index) => (
            <div
              key={index}
              className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white overflow-hidden shadow-sm"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] md:h-[320px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-[3000ms] ease-out hover:scale-[1.05]"
                />

                {/* TAG */}
                <span
                  className="absolute top-4 left-4 text-[10px] tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{
                    background: "rgb(var(--color-primary))",
                    color: "#fff",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* INFO */}
              <div className="p-4">
                <p className="text-sm font-medium leading-snug text-text">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INLINE KEYFRAMES */}
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

          .animate-scroll::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
}
