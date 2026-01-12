import { useState } from "react";
import { Navbar, Footer } from "../components";

const images = [
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  "https://images.unsplash.com/photo-1582582494700-8f9f03b6c1c5",
  "https://images.unsplash.com/photo-1618220179428-22790b461013",
  "https://images.unsplash.com/photo-1598300056350-4c3a6f4cba3d",
];

const relatedProducts = [
  {
    name: "Solid Wood Arm Chair",
    price: "₹22,000",
    img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41",
  },
  {
    name: "Handcrafted Coffee Table",
    price: "₹18,500",
    img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
  },
  {
    name: "Minimal Lounge Sofa",
    price: "₹46,000",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  },
  {
    name: "Solid Wood Bedside Table",
    price: "₹14,000",
    img: "https://images.unsplash.com/photo-1616627983822-2c8a9b9c7c3d",
  },
];

export default function Product() {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [zoomOpen, setZoomOpen] = useState(false);

  const product = {
    name: "Solid Wood Lounge Chair",
    price: "₹28,000",
    material: "Seasoned Hardwood",
    finish: "Natural Oil Finish",
    delivery: "15–21 Days (Made to Order)",
  };

  const handleWhatsApp = () => {
    const message = `
Hello Chivalry Design,

I’m interested in the following product:

Product: ${product.name}
Expected Price: ${product.price}
Material: ${product.material}
Finish: ${product.finish}

Please share final pricing, customization options, and delivery details.
    `.trim();

    const url = `https://wa.me/919871266782?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />

      {/* FIXED NAVBAR OFFSET */}
      <main
        className="bg-[#f6f5f3] pb-24"
        style={{ paddingTop: "var(--navbar-height, 140px)" }}
      >
        <div className="px-4 mx-auto max-w-7xl">
          {/* ================= PRODUCT ================= */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* IMAGE */}
            <div className="lg:sticky top-[160px]">
              <div
                onClick={() => setZoomOpen(true)}
                className="overflow-hidden bg-white shadow-sm cursor-zoom-in rounded-2xl"
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-[440px] md:h-[560px] object-cover"
                />
              </div>

              <div className="flex gap-4 mt-4 overflow-x-auto no-scrollbar">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Thumbnail"
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 shrink-0 ${
                      activeImage === img
                        ? "border-[rgb(var(--color-primary))]"
                        : "border-transparent"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-3 text-xs text-muted">Click image to zoom</p>
            </div>

            {/* INFO */}
            <div>
              <h1 className="text-3xl font-light md:text-4xl text-text">
                {product.name}
              </h1>

              <p className="mt-5 leading-relaxed text-muted">
                Designed for relaxed living, this lounge chair is handcrafted
                from solid hardwood with a natural oil finish. Built slowly,
                honestly, and meant to age beautifully over decades.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <span className="text-3xl font-medium text-text">
                  {product.price}
                </span>
                <span className="line-through text-muted">₹34,000</span>
              </div>

              <div className="mt-10 space-y-4 text-sm text-muted">
                <p>
                  <span className="font-medium text-text">Material:</span>{" "}
                  {product.material}
                </p>
                <p>
                  <span className="font-medium text-text">Finish:</span>{" "}
                  {product.finish}
                </p>
                <p>
                  <span className="font-medium text-text">Warranty:</span> 5
                  Years Structural
                </p>
                <p>
                  <span className="font-medium text-text">Delivery:</span>{" "}
                  {product.delivery}
                </p>
                <p>
                  <span className="font-medium text-text">Customization:</span>{" "}
                  Size & finish available on request
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-12 sm:flex-row">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 text-sm tracking-wider text-white uppercase transition rounded-md sm:w-1/2"
                  style={{ background: "rgb(var(--color-primary))" }}
                >
                  Ask Price on WhatsApp
                </button>

                <button className="w-full py-4 text-sm tracking-wider uppercase transition border rounded-md sm:w-1/2 border-text text-text hover:bg-gray-100">
                  Add to Enquiry
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm mt-14 text-muted">
                <p>✔ Solid Wood Only</p>
                <p>✔ Made in India</p>
                <p>✔ Custom Built</p>
                <p>✔ No MDF / Ply</p>
              </div>
            </div>
          </div>

          {/* ================= RELATED FURNITURE ================= */}
          <section className="mt-32">
            <h2 className="mb-8 text-2xl font-light text-text">
              Related Furniture
            </h2>

            {/* MOBILE: HORIZONTAL SCROLL */}
            <div className="flex gap-6 overflow-x-auto no-scrollbar lg:hidden">
              {relatedProducts.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-sm shrink-0"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover w-full h-52"
                  />
                  <div className="p-4">
                    <p className="font-medium text-text">{item.name}</p>
                    <p className="mt-1 text-sm text-muted">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP: GRID */}
            <div className="hidden grid-cols-3 gap-8 lg:grid">
              {relatedProducts.map((item, i) => (
                <div
                  key={i}
                  className="overflow-hidden transition bg-white shadow-sm rounded-xl hover:shadow-md"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover w-full h-56"
                  />
                  <div className="p-5">
                    <p className="font-medium text-text">{item.name}</p>
                    <p className="mt-1 text-sm text-muted">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* ZOOM MODAL */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setZoomOpen(false)}
        >
          <img
            src={activeImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] object-contain cursor-zoom-out"
          />
        </div>
      )}

      <Footer />

      {/* SCROLLBAR HIDE */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </>
  );
}
