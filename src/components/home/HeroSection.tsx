"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-salsa-black overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/badbunnysaucetest/videos/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/badbunnysaucetest/videos/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-salsa-black/40 via-salsa-black/50 to-salsa-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Label */}
        <p
          className="text-red-600 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0s" }}
        >
          The World&apos;s Latin Dance Platform
        </p>

        {/* Headline */}
        <h1
          className="font-playfair italic text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="text-salsa-white">Feel the Rhythm.</span>
          <br />
          <span className="text-red-600">Own the Floor.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-salsa-white/70 text-base md:text-lg lg:text-xl max-w-2xl mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          From New Jersey to the world &mdash; electrifying salsa socials,
          world-class workshops, and unforgettable nights that bring Latin dance
          to every city.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Link
            href="/events"
            className="btn-glow px-8 py-4 rounded-full text-salsa-white font-bold text-sm uppercase tracking-wider"
          >
            Upcoming Events
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 rounded-full border-2 border-salsa-white/80 text-salsa-white font-bold text-sm uppercase tracking-wider hover:bg-salsa-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-bounce">
        <svg
          className="w-6 h-6 text-salsa-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
