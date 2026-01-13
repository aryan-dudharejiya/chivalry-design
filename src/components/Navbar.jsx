import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "All Furniture", to: "/products" },

  // SOFA-FOCUSED (HIGH CONVERSION)
  {
    label: "Sofa Sets",
    to: "/products?category=sectional-sofas",
    highlight: true,
  },
  {
    label: "Sectional Sofas",
    to: "/products?category=sectional-sofas",
  },
  {
    label: "Sofa Beds",
    to: "/products?category=accent",
  },
  {
    label: "Accent Chairs",
    to: "/products?category=accent",
  },

  // SUPPORTING CATEGORIES
  {
    label: "Coffee Tables",
    to: "/products?category=accent",
  },
  {
    label: "Storage & Display",
    to: "/products?category=storage",
  },
  {
    label: "Luxury Décor",
    to: "/products?category=decor",
  },

  // BRAND
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* ===================== */}
      {/* DESKTOP NAVBAR */}
      {/* ===================== */}
      <div className="hidden border-b md:block bg-white/85 backdrop-blur-md border-border">
        {/* LOGO */}
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-center h-20">
            <Link
              to="/"
              className="text-2xl font-semibold tracking-wider text-text"
            >
              Chivalry Design
            </Link>
          </div>
        </div>

        {/* LINKS */}
        <nav className="border-t border-border">
          <div className="px-4 mx-auto max-w-7xl">
            <ul className="flex items-center justify-between py-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={`nav-item transition ${
                      item.highlight
                        ? "text-primary font-semibold"
                        : "text-text hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* ===================== */}
      {/* MOBILE NAVBAR */}
      {/* ===================== */}
      <div className="bg-white border-b md:hidden border-border">
        <div className="flex items-center justify-between h-16 px-4">
          <Link
            to="/"
            className="text-lg font-semibold tracking-wide text-text"
          >
            Chivalry Design
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-xl text-text"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {mobileOpen && (
          <div className="bg-white border-t border-border">
            <ul className="px-4 py-6 space-y-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={`block text-sm transition ${
                      item.highlight
                        ? "text-primary font-semibold"
                        : "text-text"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
