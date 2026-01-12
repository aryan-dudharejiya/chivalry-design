import { Navbar, Footer, Milestones } from "../components";
import aboutVideo from "../assets/aboutvideo.mp4";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[100svh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src={aboutVideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

          <div className="relative z-10 flex items-end min-h-[100svh]">
            <div className="w-full px-5 pb-20 mx-auto max-w-7xl">
              <p className="text-[11px] tracking-[0.35em] uppercase text-[rgb(var(--color-primary))] mb-4">
                Our Story
              </p>

              <h1 className="mb-5 text-4xl font-light leading-tight text-white md:text-6xl">
                Three Generations
                <br className="hidden md:block" />
                of Craft & Commitment
              </h1>

              <p className="max-w-xl text-sm md:text-base text-white/85">
                A family legacy built on craftsmanship, honesty, and furniture
                made to last.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ORIGINS ================= */}
        <section className="py-16 bg-surface">
          <div className="grid items-center gap-10 px-5 mx-auto max-w-7xl md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-light md:text-4xl text-text">
                Where It All Began
              </h2>

              <p className="mb-4 text-sm leading-relaxed md:text-base text-muted">
                Over three generations ago, our family began crafting furniture
                when skill, patience, and reputation mattered more than scale.
              </p>

              <p className="text-sm leading-relaxed md:text-base text-muted">
                That foundation still guides every piece we make today.
              </p>
            </div>

            <img
              src="https://images.pexels.com/photos/5974329/pexels-photo-5974329.jpeg"
              className="rounded-3xl object-cover h-[360px] w-full"
              alt=""
            />
          </div>
        </section>

        {/* ================= GENERATIONS ================= */}
        <section className="bg-white py-14">
          <div className="max-w-5xl px-5 mx-auto text-center">
            <h2 className="mb-4 text-3xl font-light md:text-4xl text-text">
              Three Generations. One Philosophy.
            </h2>

            <p className="text-sm leading-relaxed md:text-base text-muted">
              Traditional joinery, modern materials, and evolving lifestyles all
              guided by respect for proportion, comfort, and longevity.
            </p>
          </div>
        </section>

        {/* ================= FIXED QUOTE ================= */}
        <section
          className="relative min-h-[60vh] md:min-h-[80vh] flex items-center bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
            <h2 className="text-3xl font-light text-white md:text-4xl">
              Furniture should feel natural like it belongs in your life from
              day one.
            </h2>
          </div>
        </section>

        {/* ================= HOW WE WORK – REDESIGNED ================= */}
        <section className="py-16 bg-surface">
          <div className="px-5 mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-light text-center md:text-4xl text-text">
              How We Work
            </h2>

            {/* Desktop grid / Mobile horizontal scroll */}
            <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible scrollbar-hide">
              <WorkCard
                step="01"
                title="Understand Lifestyle"
                text="We begin by understanding how furniture will actually be used."
              />
              <WorkCard
                step="02"
                title="Design with Intent"
                text="Every dimension, curve, and material serves a purpose."
              />
              <WorkCard
                step="03"
                title="Craft Precisely"
                text="Experienced craftsmen bring designs to life with care."
              />
              <WorkCard
                step="04"
                title="Deliver with Care"
                text="Furniture that fits naturally into everyday living."
              />
            </div>
          </div>
        </section>

        {/* ================= MILESTONES ================= */}
        <section className="py-16 bg-white">
          <Milestones />
        </section>

        {/* ================= BRAND CTA – REDESIGNED ================= */}
        <section
          className="relative py-24 bg-center bg-cover md:py-32"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-3xl px-6 mx-auto text-center">
            <h3 className="mb-6 text-3xl font-light text-white md:text-4xl">
              Built for Homes That Value Substance
            </h3>

            <p className="text-sm leading-relaxed md:text-base text-white/85">
              Chivalry Design continues to build furniture the same way it
              always has with patience, integrity, and respect for the craft.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ================= COMPONENTS ================= */

function WorkCard({ step, title, text }) {
  return (
    <div className="min-w-[260px] md:min-w-0 p-6 rounded-2xl bg-white border border-black/5">
      <p className="mb-3 text-xs tracking-widest text-muted">{step}</p>
      <h4 className="mb-3 text-lg font-medium text-text">{title}</h4>
      <p className="text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
