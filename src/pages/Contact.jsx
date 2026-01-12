import { useState } from "react";
import { Navbar, Footer } from "../components";
import contactVideo from "../assets/contactvideo.mp4";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
New Enquiry – Chivalry Design

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Requirement:
${form.message}
    `.trim();

    const url = `https://wa.me/919871266782?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* ===================== */}
        {/* HERO WITH VIDEO */}
        {/* ===================== */}
        <section className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src={contactVideo} type="video/mp4" />
          </video>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(40,25,15,0.7), rgba(40,25,15,0.6), rgba(40,25,15,0.75))",
            }}
          />

          <div className="relative z-10 flex items-center h-full">
            <div className="w-full px-4 pt-24 mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-xs tracking-[0.3em] uppercase text-[rgb(var(--color-primary))] mb-4">
                  Contact Us
                </p>

                <h1 className="mb-6 text-4xl font-light leading-tight text-white md:text-6xl">
                  Let’s Create Something <br className="hidden md:block" />
                  Thoughtful Together
                </h1>

                <p className="max-w-2xl text-sm leading-relaxed md:text-base text-white/85">
                  Whether you’re planning a new home, redesigning a space, or
                  exploring custom furniture, our team is here to guide you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* CONTACT INFO + FORM */}
        {/* ===================== */}
        <section className="py-32 bg-white">
          <div className="grid gap-20 px-4 mx-auto max-w-7xl md:grid-cols-2">
            {/* LEFT — INFO */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
                Get in Touch
              </p>

              <h2 className="mb-10 text-3xl font-light md:text-4xl text-text">
                Visit Our Showroom <br />
                or Reach Out Directly
              </h2>

              <div className="space-y-8 text-sm md:text-base text-muted">
                <div>
                  <p className="mb-1 font-medium text-text">Showroom Address</p>
                  <p>
                    1/84, First Floor, W.H.S., <br />
                    Kirti Nagar, New Delhi – 110015
                  </p>
                </div>

                <div>
                  <p className="mb-1 font-medium text-text">Phone / WhatsApp</p>
                  <p>
                    +91 99107 23678 <br />
                    +91 98712 66782
                  </p>
                </div>

                <div>
                  <p className="mb-1 font-medium text-text">Email</p>
                  <p>hello@chivalrydesign.com</p>
                </div>

                <div>
                  <p className="mb-1 font-medium text-text">Business Hours</p>
                  <p>
                    Monday – Sunday <br />
                    09:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div
              className="p-10 rounded-2xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(120,90,60,0.12), rgba(120,90,60,0.18))",
              }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6">
                Send an Enquiry
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your requirement"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-white rounded-md outline-none resize-none text-text"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-3 text-sm tracking-wider text-white uppercase transition rounded-md"
                  style={{ background: "rgb(var(--color-primary))" }}
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* MAP */}
        {/* ===================== */}
        <section className="pb-32">
          <div className="px-4 mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-2xl h-[420px]">
              <iframe
                title="Chivalry Design – Kirti Nagar"
                src="https://www.google.com/maps?q=1/84,%20First%20Floor,%20W.H.S.,%20Kirti%20Nagar,%20New%20Delhi%20110015&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ===================== */
/* INPUT */
/* ===================== */

function Input({ name, placeholder, value, onChange }) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 text-sm bg-white rounded-md outline-none text-text"
      required
    />
  );
}
