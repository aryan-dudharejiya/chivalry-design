import { useEffect, useState } from "react";

const mobileCards = [
  {
    image: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
    label: "350+ Unique Pieces",
    title: "Masterpieces",
  },
  {
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
    label: "999+ New Pieces",
    title: "Collection",
  },
  {
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    label: "490+ New Pieces",
    title: "New Stock",
  },
];

export default function CollectionsFlow() {
  const [index, setIndex] = useState(0);

  // auto change card every 4 seconds (mobile only)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mobileCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 overflow-hidden bg-surface">
      <div className="px-4 mx-auto max-w-7xl">
        {/* ===================== */}
        {/* INTRO */}
        {/* ===================== */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[rgb(var(--color-primary))] mb-4">
            Latest Collection
          </p>

          <h2 className="text-3xl font-light leading-snug md:text-4xl text-text">
            Discover Exclusive{" "}
            <span className="text-[rgb(var(--color-primary))]">
              Furniture Collections
            </span>
          </h2>

          <p className="mt-6 text-sm leading-relaxed md:text-base text-muted">
            Chivalry Design presents curated furniture collections crafted for
            warm, modern luxury living.
          </p>
        </div>

        {/* ===================== */}
        {/* DESKTOP VIEW (UNCHANGED) */}
        {/* ===================== */}
        <div className="hidden grid-cols-3 gap-8 mb-24 md:grid">
          {mobileCards.map((card) => (
            <DesktopCard key={card.title} {...card} />
          ))}
        </div>

        {/* ===================== */}
        {/* MOBILE CAROUSEL (ONLY CHANGE) */}
        {/* ===================== */}
        <div className="md:hidden relative h-[360px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {mobileCards.map((card) => (
              <div key={card.title} className="min-w-full px-1">
                <MobileCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* ===================== */}
        {/* SECTION 2 – LIFESTYLE (DESKTOP ONLY) */}
        {/* ===================== */}
        <div className="hidden grid-cols-2 gap-12 mt-10 md:grid">
          <LargeCard
            image="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
            label="500+ Unique Designs"
            title="Bedroom"
          />
          <LargeCard
            image="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
            label="390+ New Pieces"
            title="Living Room"
          />
        </div>
      </div>
    </section>
  );
}

/* ===================== */
/* DESKTOP CARD */
/* ===================== */
function DesktopCard({ image, label, title }) {
  return (
    <div className="relative h-[360px] rounded-2xl overflow-hidden">
      <img src={image} alt={title} className="object-cover w-full h-full" />
      <Overlay label={label} title={title} />
    </div>
  );
}

/* ===================== */
/* MOBILE CARD */
/* ===================== */
function MobileCard({ image, label, title }) {
  return (
    <div className="relative h-[360px] rounded-2xl overflow-hidden">
      <img src={image} alt={title} className="object-cover w-full h-full" />
      <Overlay label={label} title={title} />
    </div>
  );
}

/* ===================== */
/* LARGE CARD */
/* ===================== */
function LargeCard({ image, label, title }) {
  return (
    <div className="relative h-[440px] rounded-3xl overflow-hidden">
      <img src={image} alt={title} className="object-cover w-full h-full" />
      <Overlay label={label} title={title} large />
    </div>
  );
}

/* ===================== */
/* OVERLAY */
/* ===================== */
function Overlay({ label, title, large }) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-end p-8"
      style={{
        background:
          "linear-gradient(to top, rgba(80,50,30,0.75), rgba(80,50,30,0.35), rgba(80,50,30,0.05))",
      }}
    >
      <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[rgba(255,230,200,0.9)] mb-2">
        {label}
      </p>
      <h3 className={`text-white font-light ${large ? "text-2xl" : "text-xl"}`}>
        {title}
      </h3>
    </div>
  );
}
