import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar, Footer } from "../components";

/* ===================== */
/* PRODUCT DATA */
/* ===================== */

const PRODUCTS = [
  {
    id: 1,
    name: "Luxury Sofa Set",
    category: "sofas",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
  },
  {
    id: 2,
    name: "Corner Sofa",
    category: "sofas",
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
  },
  {
    id: 3,
    name: "Dining Table Set",
    category: "dine",
    image: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
  },
  {
    id: 4,
    name: "King Size Bed",
    category: "sleep",
    image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
  },
  {
    id: 5,
    name: "Office Work Desk",
    category: "work",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
  },
  {
    id: 6,
    name: "Decor Shelf Unit",
    category: "decor",
    image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
  },
  {
    id: 7,
    name: "Storage Cabinet",
    category: "store",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
  },
];

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Collections", value: "collections" },
  { label: "Sofas", value: "sofas" },
  { label: "Dine", value: "dine" },
  { label: "Sleep", value: "sleep" },
  { label: "Store", value: "store" },
  { label: "Work", value: "work" },
  { label: "Décor", value: "decor" },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      categoryParam === "all" ||
      categoryParam === "collections" ||
      p.category === categoryParam;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-white md:pt-24 pb-28 md:pb-0">
        {/* ===================== */}
        {/* HEADER */}
        {/* ===================== */}
        <section className="py-20 bg-surface">
          <div className="px-4 mx-auto max-w-7xl">
            <div className="md:text-center md:flex md:flex-col md:items-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">
                {categoryParam === "all" ? "All Categories" : categoryParam}
              </p>

              <h1 className="mb-6 text-3xl font-light md:text-4xl text-text">
                Explore Our Furniture
              </h1>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search sofas, dining, beds..."
                className="w-full px-4 py-3 text-sm bg-white border rounded-md outline-none md:max-w-lg border-black/10"
              />
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* CONTENT */}
        {/* ===================== */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[260px_1fr] gap-16">
            {/* DESKTOP CATEGORIES */}
            <aside className="hidden md:block">
              <p className="mb-6 text-sm tracking-wide text-text">
                Browse Categories
              </p>

              <div className="flex flex-col gap-3">
                {CATEGORIES.map((cat) => {
                  const active = categoryParam === cat.value;

                  return (
                    <button
                      key={cat.value}
                      onClick={() =>
                        setSearchParams(
                          cat.value === "all" ? {} : { category: cat.value }
                        )
                      }
                      className={`text-left px-5 py-3 rounded-xl text-sm transition ${
                        active
                          ? "bg-[rgb(var(--color-primary))] text-white"
                          : "bg-black/5 text-text hover:bg-black/10"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
              {filteredProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="relative h-[180px] md:h-[260px] rounded-2xl overflow-hidden bg-black/5">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.06]"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-medium text-text">{p.name}</p>
                    <p className="mt-1 text-xs capitalize text-muted">
                      {p.category}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* MOBILE BOTTOM BAR */}
        {/* ===================== */}
        <div className="fixed inset-x-0 bottom-0 flex bg-white border-t md:hidden">
          {/* FILTER */}
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center justify-center w-1/2 gap-2 py-3 text-sm font-medium text-text"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="rgb(var(--color-primary))"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M3 5h18M6 12h12M10 19h4" />
            </svg>
            Filter
          </button>

          {/* CATEGORIES */}
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center justify-center w-1/2 gap-2 py-3 text-sm font-medium border-l text-text"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="rgb(var(--color-primary))"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            Categories
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
