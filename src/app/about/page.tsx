import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Bad Bunny Salsa | Our Mission & Story",
  description:
    "Learn about Bad Bunny Salsa — born in New Jersey, built for the world. The global platform for salsa events, classes, and Latin dance community.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Bad Bunny Salsa | Our Mission & Story",
    description:
      "Learn about Bad Bunny Salsa — born in New Jersey, connecting dancers worldwide.",
    url: "https://badbunnysalsa.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
          Our Story
        </p>
        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Nuestra Historia
        </h1>
        <p className="text-red-500 font-medium text-xl md:text-2xl italic max-w-2xl mx-auto">
          Born in New Jersey. Built for the world.
        </p>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111] border border-white/10 rounded-xl p-8 md:p-12 space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              The music drops. The lights shift. And a room full of strangers
              becomes a family. That&apos;s not a tagline&mdash;that&apos;s a
              Tuesday night at{" "}
              <span className="text-red-500 font-semibold">
                Bad Bunny Salsa
              </span>
              .
            </p>
            <p>
              We started with a simple idea: Latin dance shouldn&apos;t be
              locked away in studios. It belongs in the clubs, the lounges, the
              places where the music already lives. So we teamed up with DJs,
              musicians, dance crews, and venues &mdash; first across New
              Jersey, and now across the world &mdash; to bring salsa back to
              the people.{" "}
              <span className="italic text-white">
                Somos familia. Sin fronteras.
              </span>
            </p>
            <p>
              Our first partner?{" "}
              <span className="text-red-500 font-semibold">NJ Salsa</span>
              &mdash;the heartbeat of the Latin dance movement in the Garden
              State. That partnership lit the spark. Now we&apos;re building a
              global platform where dance schools, promoters, and event
              organizers from any city can reach dancers worldwide. More than
              classes &mdash; community without borders.
            </p>
            <p>
              Want to be part of it?{" "}
              <a
                href="mailto:info@badbunnysalsa.com"
                className="text-red-500 hover:text-red-400 underline underline-offset-4 transition-colors"
              >
                Drop us a line
              </a>
              . Tell us your story. Let&apos;s make moves together.
            </p>
          </div>
        </div>
      </section>

      {/* NJ Salsa Partnership */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
            The Movement
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-white mb-8">
            No experience? No problem.
          </h2>
          <p className="text-xl text-white/70 italic mb-6">
            Todos empezamos en alg&uacute;n lugar.
          </p>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-3xl mx-auto">
            It started in New Jersey with{" "}
            <span className="text-red-500 font-bold">NJ SALSA</span>, and now
            we&apos;re taking that same energy worldwide. Group classes,
            late-night socials, festivals, congresses &mdash; if it moves to
            Latin rhythms, it belongs here. Real life. Real connection. Every
            city.
          </p>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mt-8 mb-6">
            Join the movement. Follow us.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://www.instagram.com/badbunnysalsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all"
              aria-label="BadBunnySalsa Instagram"
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
              href="https://www.facebook.com/profile.php?id=61585239167439"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all"
              aria-label="BadBunnySalsa Facebook"
            >
              <svg
                className="w-5 h-5 text-white"
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
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all"
              aria-label="BadBunnySalsa TikTok"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>

          {/* Text Updates */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-4 max-w-md mx-auto mb-8">
            <p className="text-white text-lg">
              Text{" "}
              <span className="text-red-500 font-bold">
                &quot;NJSalsa&quot;
              </span>{" "}
              to <span className="text-red-500 font-bold">545454</span>
            </p>
          </div>

          <p className="text-lg text-white/70">
            Jersey City to Jakarta, Miami to Madrid &mdash; we&apos;re
            everywhere the music is. Find your city and pull up.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section>
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
            <source
              src="/badbunnysaucetest/videos/second-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Why People Keep Coming Back */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
              Why Us
            </p>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-white">
              Why People Keep Coming Back
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <h3 className="text-red-500 font-bold text-xl mb-3">
                The Energy
              </h3>
              <p className="text-white/70 leading-relaxed">
                You walk in after a long week. The bass hits. Your body starts
                moving before your brain catches up. By the end of the night,
                you&apos;ve forgotten every email, every deadline, every worry.
                That&apos;s the reset.
              </p>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <h3 className="text-red-500 font-bold text-xl mb-3">
                The People
              </h3>
              <p className="text-white/70 leading-relaxed">
                Walk in a stranger, leave with a crew. Our community is the kind
                of place where someone holds your hand through your first spin
                and cheers when you nail it. Real people. Real connection.
              </p>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <h3 className="text-red-500 font-bold text-xl mb-3">
                The Growth
              </h3>
              <p className="text-white/70 leading-relaxed">
                Imagine walking into any wedding, any party, any cookout for the
                rest of your life and being THAT person on the dance floor.
                Yeah. That&apos;s you now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solo CTA */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
            &iquest;Solo? Perfecto.
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-4">
            No partner needed. No experience required. You won&apos;t be solo
            for long. Just bring your energy&mdash;we handle the rest.
          </p>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="py-16 md:py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
            More Than Dance
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-10">
            It&apos;s a lifestyle.
          </h2>
          <div className="space-y-4 text-left max-w-2xl mx-auto mb-10">
            <p className="text-lg text-white/70 leading-relaxed">
              Your body moves, your mind clears, and your week melts away.
              Better than any gym. Way more fun.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              You&apos;ll meet people who become your Friday-night crew, your
              weekend plans, your lifelong friends.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              And you&apos;ll finally have the moves everyone&apos;s been
              talking about. <span className="italic text-white">De nada.</span>
            </p>
          </div>
          <p className="text-xl md:text-2xl text-white font-semibold">
            Don&apos;t just stream the music&mdash;live it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-8">
            &iquest;List@? Let&apos;s go.
          </h2>
          <Link
            href="/events"
            className="inline-block px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30"
          >
            View Our Events
          </Link>
        </div>
      </section>
    </main>
  );
}
