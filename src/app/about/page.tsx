import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Bad Bunny Salsa | Our Mission & Story",
  description:
    "Learn about Bad Bunny Salsa — our mission to elevate salsa dancing in New Jersey through classes, socials, and community events. Partnership with NJ Salsa.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Bad Bunny Salsa | Our Mission & Story",
    description:
      "Learn about Bad Bunny Salsa and our mission to elevate salsa dancing in New Jersey.",
    url: "https://badbunnysalsa.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-20 px-6 bg-salsa-black text-center">
        <h1 className="cursive-logo text-5xl md:text-6xl font-bold text-salsa-white mb-4 red-underline inline-block">
          About Us
        </h1>
        <p className="text-salsa-red font-semibold text-xl mt-6 italic">
          &quot;Salsa Elevated&quot;
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 px-6 bg-salsa-gray">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 text-salsa-white/80 text-lg leading-relaxed">
            <p>
              Our goal at{" "}
              <span className="text-salsa-red font-semibold">
                Bad Bunny Salsa
              </span>{" "}
              is to team up with dance companies, musicians, DJs, and
              nightclubs/lounges to promote Latin music and social dance,
              especially SALSA, as a (re)new(ed) wave in pop culture!
            </p>
            <p>
              We&apos;re excited to have our first collaborative partner and
              sponsor in New Jersey be{" "}
              <span className="text-salsa-red font-semibold">NJ Salsa</span>!
            </p>
            <p>
              Interested in collaborating with us?{" "}
              <a
                href="mailto:info@badbunnysalsa.com"
                className="text-salsa-red hover:underline"
              >
                Send us an email
              </a>
              ; tell us who you are, share your socials, and let us know how you
              think we can collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* NJ Salsa Partnership */}
      <section className="py-16 md:py-20 px-6 bg-salsa-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-salsa-white mb-6 leading-relaxed">
            You don&apos;t need to be a pro to join the movement!
          </h2>
          <p className="text-lg md:text-xl text-salsa-white/90 leading-relaxed mb-4">
            New Jersey, we&apos;ve partnered with the leader in the Latin music
            &amp; dance movement,
            <br />
            <span className="text-salsa-red font-bold">NJ SALSA</span>, to offer
            group dance classes and Latin social experiences!
          </p>

          <p className="text-lg md:text-xl text-salsa-white/90 leading-relaxed mt-6 mb-4">
            Follow us on social media!
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="https://www.instagram.com/badbunnysalsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-salsa-gray flex items-center justify-center hover:bg-salsa-red transition-colors"
              aria-label="BadBunnySalsa Instagram"
            >
              <svg
                className="w-6 h-6 text-salsa-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61585239167439"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-salsa-gray flex items-center justify-center hover:bg-salsa-red transition-colors"
              aria-label="BadBunnySalsa Facebook"
            >
              <svg
                className="w-6 h-6 text-salsa-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@badbunnysalsa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-salsa-gray flex items-center justify-center hover:bg-salsa-red transition-colors"
              aria-label="BadBunnySalsa TikTok"
            >
              <svg
                className="w-6 h-6 text-salsa-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>

          {/* Text Updates */}
          <div className="p-4 bg-salsa-gray/50 rounded-xl mb-8">
            <p className="text-salsa-white text-lg md:text-xl">
              To receive text updates, text the word{" "}
              <span className="text-salsa-red font-bold">
                &quot;NJSalsa&quot;
              </span>{" "}
              to <span className="text-salsa-red font-bold">545454</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-salsa-white/90 leading-relaxed">
            Whether you&apos;re in Central or North Jersey, we&apos;ve got a
            class for you!
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-salsa-gray">
        <div className="relative w-full aspect-video md:h-[50vh] md:aspect-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/badbunnysaucetest/videos/second-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/badbunnysaucetest/videos/second-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Why Enroll Section */}
      <section className="py-16 md:py-20 px-6 bg-salsa-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-salsa-white mb-10 leading-relaxed">
            Why Enroll Now?
          </h2>
          <div className="space-y-6 text-left max-w-3xl mx-auto mb-10">
            <div>
              <p className="text-lg md:text-xl text-salsa-white leading-relaxed">
                <span className="text-salsa-red font-bold">
                  Physical Activity:
                </span>{" "}
                Burn up to 600 calories an hour — way more fun than the
                treadmill! A salsa class keeps you moving, improving your
                coordination and cardiovascular health without it feeling like
                &quot;work!&quot;
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl text-salsa-white leading-relaxed">
                <span className="text-salsa-red font-bold">
                  Social Connection:
                </span>{" "}
                We thrive at making it easy to bring new people together for
                real life connections!
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl text-salsa-white leading-relaxed">
                <span className="text-salsa-red font-bold">
                  Skill Building:
                </span>{" "}
                Learn a skill that you can use at weddings, clubs, lounges,
                restaurants, family gatherings, cook outs, and parties for the
                rest of your life!
              </p>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-salsa-white mb-4">
            Ready to step in?!
          </h3>
          <p className="text-lg md:text-xl text-salsa-white/90 leading-relaxed">
            No partner required! No experience needed! Just bring your energy
            and we&apos;ll make the rest easy!
          </p>
        </div>
      </section>

      {/* Life Hack Section */}
      <section className="py-16 md:py-20 px-6 bg-salsa-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-salsa-white mb-8 leading-relaxed">
            Salsa is the ultimate life hack:
          </h2>
          <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-salsa-white/90 leading-relaxed">
              Burn up to{" "}
              <span className="text-salsa-red font-bold">600 calories</span> an
              hour (way more fun than the treadmill)
            </p>
            <p className="text-lg md:text-xl text-salsa-white/90 leading-relaxed">
              Meet the most vibrant, welcoming community in the city in classes
              &amp; socials
            </p>
            <p className="text-lg md:text-xl text-salsa-white/90 leading-relaxed">
              Finally learn the moves everyone is talking about
            </p>
          </div>
          <p className="text-xl md:text-2xl text-salsa-white font-semibold mb-4">
            Don&apos;t just stream the music—live it!
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 bg-salsa-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-salsa-white mb-8">
            Ready to join the movement?
          </h2>
          <Link
            href="/events"
            className="btn-salsa inline-block px-8 py-4 rounded-full text-salsa-white font-semibold text-lg"
          >
            View Our Events
          </Link>
        </div>
      </section>
    </main>
  );
}
