export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: "rgb(var(--color-primary))" }}
    >
      {/* TOP */}
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <h3 className="mb-4 text-xl font-medium tracking-wide">
              Chivalry Design
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-white/80">
              Crafting timeless furniture with refined European aesthetics.
              Designed for modern luxury living.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-5">
              Company
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/collections" className="transition hover:text-white">
                  Collections
                </a>
              </li>
              <li>
                <a href="/brands" className="transition hover:text-white">
                  Brands
                </a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-5">
              Categories
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/category/sofas"
                  className="transition hover:text-white"
                >
                  Sofas
                </a>
              </li>
              <li>
                <a
                  href="/category/dining"
                  className="transition hover:text-white"
                >
                  Dining
                </a>
              </li>
              <li>
                <a
                  href="/category/bedroom"
                  className="transition hover:text-white"
                >
                  Bedroom
                </a>
              </li>
              <li>
                <a
                  href="/category/decor"
                  className="transition hover:text-white"
                >
                  Décor
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-white/85">
              <li>Delhi, India</li>
              <li>+91 98712 66782</li>
              <li>chivalrydesign@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20" />

      {/* BOTTOM */}
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-6 mx-auto text-sm max-w-7xl md:flex-row text-white/70">
        <p>
          © {new Date().getFullYear()} Chivalry Design. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="transition hover:text-white">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
