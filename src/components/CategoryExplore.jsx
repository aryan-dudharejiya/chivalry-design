function CategoryIcon({ type }) {
  const common = "w-8 h-8 stroke-[1.5]";

  switch (type) {
    case "sofa":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="3" y="10" width="18" height="5" rx="1" />
          <path d="M6 10V7M18 10V7" />
        </svg>
      );

    case "corner-sofa":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M3 10h12v6H3zM15 14h6v2h-6z" />
        </svg>
      );

    case "sofa-bed":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="3" y="10" width="18" height="5" />
          <path d="M5 10V7M19 10V7" />
        </svg>
      );

    case "recliner":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="4" y="9" width="16" height="6" rx="2" />
          <path d="M8 9V6M16 9V6" />
        </svg>
      );

    case "sofa-set":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="3" y="10" width="18" height="5" />
          <path d="M7 10V7M17 10V7" />
        </svg>
      );

    case "coffee-table":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="4" y="6" width="16" height="4" />
          <path d="M6 10v8M18 10v8" />
        </svg>
      );

    case "console":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="3" y="6" width="18" height="6" />
          <path d="M6 12v6M18 12v6" />
        </svg>
      );

    case "wall-unit":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="4" y="3" width="16" height="6" />
          <rect x="4" y="11" width="16" height="10" />
        </svg>
      );

    default:
      return null;
  }
}

/**
 * HIGH-INTENT, HIGH-SEARCH CATEGORIES
 * Sofa-first. This is what actually converts.
 */
const categories = [
  { name: "Sofas", icon: "sofa" },
  { name: "Sectional Sofas", icon: "corner-sofa" },
  { name: "Sofa Cum Beds", icon: "sofa-bed" },
  { name: "Recliner Sofas", icon: "recliner" },
  { name: "Sofa Sets (3+2 / 3+1+1)", icon: "sofa-set" },
  { name: "Coffee Tables", icon: "coffee-table" },
  { name: "Console Tables", icon: "console" },
  { name: "TV Units & Wall Storage", icon: "wall-unit" },
];

export default function CategoryExplore() {
  return (
    <section className="py-20 bg-surface">
      <div className="px-4 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col gap-4 mb-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">
              Shop by Category
            </p>
            <h2 className="text-2xl font-medium md:text-3xl text-text">
              Find the Right Sofa for Your Home
            </h2>
          </div>

          <a
            href="/categories"
            className="items-center hidden gap-2 text-sm font-medium md:inline-flex text-primary"
          >
            View All
            <span className="text-lg">→</span>
          </a>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`/category/${cat.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")}`}
              className="category-card"
            >
              <div className="icon-wrap">
                <CategoryIcon type={cat.icon} />
              </div>
              <p className="category-label">{cat.name}</p>
            </a>
          ))}
        </div>

        {/* MOBILE CTA */}
        <div className="mt-10 text-center md:hidden">
          <a
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View All Categories →
          </a>
        </div>
      </div>
    </section>
  );
}
