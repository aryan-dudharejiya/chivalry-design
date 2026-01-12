import { useEffect, useRef, useState } from "react";

export default function Milestones() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-0 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl">
        {/* EYEBROW */}
        <p className="text-xs tracking-[0.3em] uppercase text-[rgb(var(--color-primary))] mb-4">
          Milestone
        </p>

        {/* HEADING */}
        <h2 className="text-3xl font-light leading-tight md:text-5xl text-text">
          A Luxury Furniture Brand <br className="hidden md:block" />
          Built on Craftsmanship
        </h2>

        {/* DIVIDER */}
        <div
          className="w-16 h-[1px] mx-auto my-8"
          style={{ background: "rgb(var(--color-primary))" }}
        />

        {/* DESCRIPTION */}
        <p className="max-w-3xl mx-auto text-sm leading-relaxed md:text-base text-muted">
          With over{" "}
          <span className="font-medium text-text">25+ years of experience</span>
          , Chivalry Design brings timeless European aesthetics and refined
          craftsmanship to modern Indian homes through thoughtfully curated
          furniture collections.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 mt-20 md:grid-cols-4 gap-y-14 gap-x-8">
          <AnimatedStat
            start={startCount}
            value={25}
            suffix="+"
            label="Years of Experience"
          />
          <AnimatedStat
            start={startCount}
            value={1200}
            suffix="+"
            label="Sofas Crafted"
          />
          <AnimatedStat
            start={startCount}
            value={2500}
            suffix="+"
            label="Products Delivered"
          />
          <AnimatedStat
            start={startCount}
            value={800}
            suffix="+"
            label="Projects Completed"
          />
        </div>
      </div>
    </section>
  );
}

/* ===================== */
/* Animated Counter */
/* ===================== */

function AnimatedStat({ value, suffix = "", label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 900; // ms (fast & premium)
    const step = value / (duration / 16);

    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [start, value]);

  return (
    <div>
      <p className="text-4xl font-light md:text-5xl text-text">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs tracking-[0.25em] uppercase text-muted">
        {label}
      </p>
    </div>
  );
}
