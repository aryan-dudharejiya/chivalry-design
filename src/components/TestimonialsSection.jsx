import { useEffect, useState } from "react";

const testimonials = [
  {
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    text: "Chivalry Design turned my dream home into reality. Every piece reflects sophistication and unmatched craftsmanship — it’s more than furniture; it’s art.",
    name: "Ananya Mehra",
    role: "Interior Designer",
  },
  {
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    text: "The comfort, detailing, and finish are exceptional. The furniture doesn’t just fill the space — it defines it.",
    name: "Rohit Sharma",
    role: "Homeowner",
  },
  {
    image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    text: "Working with Chivalry Design felt effortless. Their sense of balance, luxury, and proportion is rare.",
    name: "Kavita Patel",
    role: "Architect",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
      setAnimKey((k) => k + 1); // force animation restart
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section className="relative h-[85vh] min-h-[620px] overflow-hidden">
      {/* IMAGE LAYER */}
      <div className="absolute inset-0">
        <img
          key={animKey}
          src={t.image}
          alt="Chivalry Design Interior"
          className="h-full w-full object-cover transition-all duration-[1800ms] ease-out"
          style={{
            animation: "imageReveal 6s ease-out forwards",
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(55,35,20,0.78) 0%, rgba(55,35,20,0.55) 45%, rgba(55,35,20,0.35) 100%)",
          }}
        />
      </div>

      {/* DESKTOP CONTENT */}
      <div className="relative z-10 items-center hidden h-full md:flex">
        <div className="grid w-full grid-cols-2 gap-16 px-6 mx-auto max-w-7xl">
          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[rgb(var(--color-primary))] mb-6">
              Real Words
            </p>

            <h2 className="text-4xl font-light leading-tight text-white">
              What Our <br /> Clients Say
            </h2>
          </div>

          {/* Right */}
          <div
            key={active}
            className="self-center bg-[rgba(255,248,240,0.94)] rounded-2xl p-10 transition-all duration-700"
            style={{
              animation: "contentFade 0.8s ease-out",
            }}
          >
            <p className="mb-8 text-base leading-relaxed text-text">
              “{t.text}”
            </p>

            <div>
              <p className="font-medium text-[rgb(var(--color-primary))]">
                {t.name}
              </p>
              <p className="mt-1 text-xs text-muted">{t.role}</p>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === active ? "22px" : "6px",
                    background:
                      i === active
                        ? "rgb(var(--color-primary))"
                        : "rgba(120,80,50,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE CONTENT */}
      <div className="relative z-10 flex items-end h-full md:hidden">
        <div
          key={active}
          className="w-full p-8 transition-all duration-700 rounded-t-3xl"
          style={{
            background: "rgba(255,248,240,0.96)",
            animation: "contentSlideUp 0.8s ease-out",
          }}
        >
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[rgb(var(--color-primary))] mb-4">
            Testimonials
          </p>

          <p className="mb-6 text-sm leading-relaxed text-text">“{t.text}”</p>

          <div>
            <p className="font-medium text-[rgb(var(--color-primary))]">
              {t.name}
            </p>
            <p className="mt-1 text-xs text-muted">{t.role}</p>
          </div>

          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === active ? "18px" : "6px",
                  background:
                    i === active
                      ? "rgb(var(--color-primary))"
                      : "rgba(120,80,50,0.35)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* KEYFRAMES (INLINE) */}
      <style>
        {`
          @keyframes imageReveal {
            0% {
              opacity: 0;
              transform: scale(1.08) translateX(-2%);
            }
            40% {
              opacity: 1;
            }
            100% {
              opacity: 1;
              transform: scale(1) translateX(0);
            }
          }

          @keyframes contentFade {
            from {
              opacity: 0;
              transform: translateY(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes contentSlideUp {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
