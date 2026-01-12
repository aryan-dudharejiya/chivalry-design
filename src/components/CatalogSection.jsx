export default function CatalogSection() {
  return (
    <section className="py-20 bg-bg">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
              Chivalry Design
            </p>

            <h2 className="text-2xl font-medium leading-snug md:text-3xl text-text">
              Explore Our Complete Furniture Collection
            </h2>

            <p className="max-w-lg mt-5 text-sm leading-relaxed md:text-base text-muted">
              Discover thoughtfully designed sofas and furniture pieces crafted
              with precision, comfort, and timeless aesthetics. Download our
              complete catalog to explore materials, finishes, and available
              configurations from Chivalry Design.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/catalog/chivalry-design-catalog.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-wider uppercase border border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary))] hover:text-white transition"
              >
                Download Catalog
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
                alt="Chivalry Design Furniture Collection"
                className="h-[320px] md:h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
