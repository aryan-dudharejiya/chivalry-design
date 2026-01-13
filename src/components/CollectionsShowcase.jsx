import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SOFA_LINK = "/products?category=sectional-sofas";

const mobileCards = [
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80",
    label: "Handcrafted Comfort",
    title: "Signature Sofa Sets",
  },
  {
    image:
      "https://images.unsplash.com/photo-1675756544970-968f9e3f7ca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZmFzfGVufDB8fDB8fHww",
    label: "Designed for Living",
    title: "Sectional Sofas",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1683134520102-a7b65579c4bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29mYXN8ZW58MHx8MHx8fDA%3D",
    label: "Relaxed Luxury",
    title: "Contemporary Sofas",
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
            Sofa Collections
          </p>

          <h2 className="text-3xl font-light leading-snug md:text-4xl text-text">
            Sofas Crafted for{" "}
            <span className="text-[rgb(var(--color-primary))]">
              Everyday Living
            </span>
          </h2>

          <p className="mt-6 text-sm leading-relaxed md:text-base text-muted">
            From expansive sectional sofas to timeless sofa sets, each piece is
            thoughtfully designed for comfort, proportion, and lasting beauty.
          </p>
        </div>

        {/* ===================== */}
        {/* DESKTOP VIEW */}
        {/* ===================== */}
        <div className="hidden grid-cols-3 gap-8 mb-24 md:grid">
          {mobileCards.map((card) => (
            <DesktopCard key={card.title} {...card} />
          ))}
        </div>

        {/* ===================== */}
        {/* MOBILE CAROUSEL */}
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
        {/* DESKTOP LIFESTYLE SOFAS */}
        {/* ===================== */}
        <div className="hidden grid-cols-2 gap-12 mt-10 md:grid">
          <LargeCard
            image="https://images.unsplash.com/photo-1630585308572-f53438fc684f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXN8ZW58MHx8MHx8fDA%3D"
            label="Made to Order"
            title="Luxury Sectionals"
          />
          <LargeCard
            image="https://images.unsplash.com/photo-1512212621149-107ffe572d2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvZmFzfGVufDB8fDB8fHww"
            label="Comfort First Design"
            title="Modern Sofa Sets"
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
    <Link to={SOFA_LINK} className="block">
      <div className="relative h-[360px] rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <Overlay label={label} title={title} />
      </div>
    </Link>
  );
}

/* ===================== */
/* MOBILE CARD */
/* ===================== */
function MobileCard({ image, label, title }) {
  return (
    <Link to={SOFA_LINK} className="block">
      <div className="relative h-[360px] rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <Overlay label={label} title={title} />
      </div>
    </Link>
  );
}

/* ===================== */
/* LARGE CARD */
/* ===================== */
function LargeCard({ image, label, title }) {
  return (
    <Link to={SOFA_LINK} className="block">
      <div className="relative h-[440px] rounded-3xl overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <Overlay label={label} title={title} large />
      </div>
    </Link>
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
