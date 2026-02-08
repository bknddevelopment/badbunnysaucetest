import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Bad Bunny Salsa",
  description:
    "Get in touch with Bad Bunny Salsa for salsa classes, events, or partnership opportunities worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Bad Bunny Salsa",
    description:
      "Contact Bad Bunny Salsa for classes, events, or partnerships.",
    url: "https://badbunnysalsa.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            &iquest;Tienes preguntas? &iexcl;Escr&iacute;benos!
          </h1>
          <p className="text-white/50 mt-6 text-lg">
            Whether you&apos;re a first-timer or a seasoned salsero, we&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-white text-xl font-semibold mb-3">
              Drop Us a Line
            </h2>
            <a
              href="mailto:info@badbunnysalsa.com"
              className="text-red-500 hover:text-red-400 transition-colors text-lg"
            >
              info@badbunnysalsa.com
            </a>
            <p className="text-white/40 text-sm mt-3">
              Questions, collabs, or just want to say hola&mdash;we&apos;re here
            </p>
          </div>

          {/* Text Updates Card */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h2 className="text-white text-xl font-semibold mb-3">
              Stay in the Loop
            </h2>
            <p className="text-white text-lg">
              Text <span className="font-bold text-red-500">NJSalsa</span> to{" "}
              <span className="font-bold text-red-500">545454</span>
            </p>
            <p className="text-white/40 text-sm mt-3">
              Be the first to know when the next class or social drops
            </p>
          </div>

          {/* Social Media Card */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h2 className="text-white text-xl font-semibold mb-3">
              @badbunnysalsa
            </h2>
            <div className="flex gap-4 justify-center mt-4">
              <a
                href="https://www.instagram.com/badbunnysalsa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@badbunnysalsa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585239167439"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
            Partnerships
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-6">
            Dance Schools, Promoters, Organizers &mdash; Let&apos;s Connect.
          </h2>
          <p className="text-white/60 text-lg mb-4">
            Whether you&apos;re a studio in New York, a promoter in Colombia, or
            a dance school in Berlin &mdash; if you&apos;re part of the Latin
            dance world, we want to work with you.
          </p>
          <p className="text-white/40 mb-8">
            Tell us who you are and what you bring to the floor.
            &iexcl;Hablemos!
          </p>
          <a
            href="mailto:info@badbunnysalsa.com"
            className="inline-block px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>
    </main>
  );
}
