import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { sanityClient } from "../lib/sanity";

/* ===================== */
/* CATEGORY STRUCTURE */
/* ===================== */
/* MUST match Sanity `category` values exactly */

const CATEGORIES = [
  { label: "All Products", value: "all" },

  // 🔥 TOP SELLERS
  { label: "Sofas", value: "sofas" },
  { label: "Sectional Sofas", value: "sectional-sofas" },
  { label: "Sofa Cum Beds", value: "sofa-cum-beds" },
  { label: "Recliner Sofas", value: "recliner-sofas" },
  { label: "Sofa Sets", value: "sofa-sets" },

  // 🛏 SECOND BEST SELLERS
  { label: "Beds", value: "beds" },
  { label: "Double Beds", value: "double-beds" },
  { label: "King Size Beds", value: "king-size-beds" },
  { label: "Beds with Storage", value: "storage-beds" },

  // 🪑 OTHER FURNITURE
  { label: "Coffee Tables", value: "coffee-tables" },
  { label: "Console Tables", value: "console-tables" },
  { label: "TV Units & Storage", value: "tv-units-storage" },
  { label: "Wardrobes", value: "wardrobes" },
  { label: "Dining Tables", value: "dining-tables" },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ===================== */
  /* FETCH PRODUCTS */
  /* ===================== */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await sanityClient.fetch(`
          *[_type == "product"]{
            _id,
            name,
            category,
            description,
            "image": images[0].asset->url
          }
        `);

        setProducts(data);
      } catch (err) {
        console.error("Sanity fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* ===================== */
  /* FILTER PRODUCTS */
  /* ===================== */
  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name?.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      categoryParam === "all" || p.category === categoryParam;

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
                {categoryParam === "all"
                  ? "All Furniture"
                  : categoryParam.replace(/-/g, " ")}
              </p>

              <h1 className="mb-6 text-3xl font-light md:text-4xl text-text">
                Sofas, Beds & Home Furniture
              </h1>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search sofas, beds, recliners…"
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
            {/* CATEGORY SIDEBAR */}
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
              {loading && (
                <p className="text-sm text-muted">Loading products…</p>
              )}

              {!loading &&
                filteredProducts.map((p) => (
                  <Link key={p._id} to={`/product/${p._id}`} className="group">
                    <div className="relative h-[180px] md:h-[260px] rounded-2xl overflow-hidden bg-black/5">
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.06]"
                        />
                      )}
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-medium text-text">{p.name}</p>
                      <p className="mt-1 text-xs capitalize text-muted">
                        {p.category.replace(/-/g, " ")}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
