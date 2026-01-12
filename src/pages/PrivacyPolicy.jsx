import { Navbar, Footer } from "../components";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* ===================== */}
        {/* HERO */}
        {/* ===================== */}
        <section className="relative py-45 bg-surface">
          <div className="px-4 mx-auto text-center max-w-7xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[rgb(var(--color-primary))] mb-4">
              Legal
            </p>

            <h1 className="mb-6 text-3xl font-light md:text-5xl text-text">
              Privacy Policy
            </h1>

            <p className="max-w-2xl mx-auto text-sm leading-relaxed md:text-base text-muted">
              This Privacy Policy explains how Chivalry Design collects, uses,
              and protects your personal information.
            </p>
          </div>
        </section>

        {/* ===================== */}
        {/* CONTENT */}
        {/* ===================== */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl px-4 mx-auto space-y-16">
            <PolicyBlock
              title="1. Introduction"
              text="Chivalry Design is committed to protecting your privacy. This policy outlines how we handle personal information collected through our website, enquiries, and communications."
            />

            <PolicyBlock
              title="2. Information We Collect"
              text="We may collect personal information such as your name, phone number, email address, and enquiry details when you contact us via forms, WhatsApp, or email."
            />

            <PolicyBlock
              title="3. How We Use Your Information"
              list={[
                "To respond to enquiries and provide customer support",
                "To communicate about products, services, or appointments",
                "To improve our website, services, and customer experience",
              ]}
            />

            <PolicyBlock
              title="4. Sharing of Information"
              text="We do not sell, trade, or rent your personal information to third parties. Your information is only shared when required to respond to your enquiry or comply with legal obligations."
            />

            <PolicyBlock
              title="5. Data Security"
              text="We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is completely secure."
            />

            <PolicyBlock
              title="6. Cookies & Website Usage"
              text="Our website may use basic cookies or analytics tools to understand website usage and improve performance. These do not collect personally identifiable information."
            />

            <PolicyBlock
              title="7. Third-Party Links"
              text="Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such external sites."
            />

            <PolicyBlock
              title="8. Your Consent"
              text="By using our website or submitting your information, you consent to the collection and use of information in accordance with this Privacy Policy."
            />

            <PolicyBlock
              title="9. Policy Updates"
              text="Chivalry Design reserves the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page."
            />

            <PolicyBlock
              title="10. Contact Information"
              text="If you have any questions regarding this Privacy Policy, please contact us at hello@chivalrydesign.com or call +91 98712 66782."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ===================== */
/* POLICY BLOCK */
/* ===================== */

function PolicyBlock({ title, text, list }) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-medium text-text">{title}</h2>

      {text && (
        <p className="text-sm leading-relaxed md:text-base text-muted">
          {text}
        </p>
      )}

      {list && (
        <ul className="mt-4 space-y-2 text-sm list-disc list-inside md:text-base text-muted">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
