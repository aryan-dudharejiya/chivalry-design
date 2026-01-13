import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Footer, WoodLoader } from "../components";
import { sanityClient } from "../lib/sanity";

export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ===================== */
  /* FETCH PRODUCT */
  /* ===================== */
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await sanityClient.fetch(
          `
          *[_type == "product" && _id == $id][0]{
            _id,
            name,
            category,
            description,
            "images": images[].asset->url
          }
        `,
          { id }
        );

        setProduct(data);
        setActiveImage(data?.images?.[0]);
      } catch (err) {
        console.error("Product fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  /* ===================== */
  /* WHATSAPP CTA */
  /* ===================== */
  const handleWhatsApp = () => {
    if (!product) return;

    const message = `
Hello Chivalry Design,

I’m interested in the following furniture piece:

Product Name: ${product.name}
Category: ${product.category}

Could you please share:
• Price details
• Available customization options
• Estimated delivery timeline

Looking forward to your response.
    `.trim();

    window.open(
      `https://wa.me/919871266782?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  /* ===================== */
  /* LOADER */
  /* ===================== */
  if (loading) {
    return (
      <>
        <Navbar />
        <WoodLoader text="Loading craftsmanship..." />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="pt-40 text-center text-muted">Product not found.</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* FIX NAVBAR OVERLAP */}
      <main className="bg-[#f6f5f3] pb-24 pt-24 md:pt-50">
        <div className="px-4 mx-auto max-w-7xl">
          {/* ================= PRODUCT ================= */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* IMAGES */}
            <div className="lg:sticky top-[140px]">
              <div
                onClick={() => setZoomOpen(true)}
                className="overflow-hidden bg-white cursor-zoom-in rounded-2xl"
              >
                {activeImage && (
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-[420px] md:h-[560px] object-cover"
                  />
                )}
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-4 mt-4 overflow-x-auto no-scrollbar">
                {product.images?.map((img, i) => (
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

              <p className="mt-3 text-xs text-muted">
                Tap image to view larger
              </p>
            </div>

            {/* INFO */}
            <div>
              <p className="mb-2 text-xs tracking-[0.3em] uppercase text-muted">
                {product.category}
              </p>

              <h1 className="text-3xl font-light md:text-4xl text-text">
                {product.name}
              </h1>

              <p className="mt-6 leading-relaxed text-muted">
                {product.description ||
                  "Thoughtfully crafted with premium materials, designed to bring comfort, balance, and timeless elegance into your living space."}
              </p>

              {/* FEATURES */}
              <div className="mt-10 space-y-4 text-sm text-muted">
                <p>✔ Solid wood construction</p>
                <p>✔ Handcrafted by skilled artisans</p>
                <p>✔ Custom finishes available</p>
                <p>✔ Made to order</p>
              </div>

              {/* SINGLE CTA */}
              <div className="mt-12">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 text-sm tracking-wider text-white uppercase transition rounded-md"
                  style={{ background: "rgb(var(--color-primary))" }}
                >
                  Enquire on WhatsApp
                </button>
              </div>

              {/* TRUST */}
              <div className="grid grid-cols-2 gap-6 text-sm mt-14 text-muted">
                <p>✔ Made in India</p>
                <p>✔ No MDF / Ply</p>
                <p>✔ Premium finishes</p>
                <p>✔ Built for long-term use</p>
              </div>
            </div>
          </div>
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

      {/* HIDE SCROLLBAR */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { scrollbar-width: none; }
        `}
      </style>
    </>
  );
}
