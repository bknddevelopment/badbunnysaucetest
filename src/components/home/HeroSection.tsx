"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-salsa-black">
      {/* Mobile Layout - Stacked */}
      <div className="md:hidden flex flex-col">
        {/* Text Content - Mobile */}
        <div className="pt-24 pb-8 px-6 text-center bg-salsa-black flex flex-col items-center">
          <Image
            src="/badbunnysaucetest/images/logo.webp"
            alt="Bad Bunny Salsa"
            width={300}
            height={200}
            className="h-40 w-auto mb-4 animate-fade-in-up"
            priority
          />
          <p
            className="text-lg text-salsa-white/90 max-w-md mx-auto mb-6 animate-fade-in-up italic"
            style={{ animationDelay: "0.2s" }}
          >
            &quot;Salsa Elevated&quot;
          </p>
          <Link
            href="/events"
            className="btn-salsa inline-block px-6 py-3 rounded-full text-salsa-white font-semibold animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Join Our Next Event
          </Link>
        </div>
        {/* Video - Mobile */}
        <div className="relative w-full aspect-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/badbunnysaucetest/videos/hero-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/badbunnysaucetest/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Scroll indicator - Mobile */}
        <div className="py-6 flex justify-center animate-bounce">
          <svg
            className="w-8 h-8 text-salsa-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Desktop Layout - Overlay */}
      <div className="hidden md:block relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/badbunnysaucetest/videos/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/badbunnysaucetest/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="text-2xl text-salsa-white/90 max-w-2xl mb-8 animate-fade-in-up italic">
            &quot;Salsa Elevated&quot;
          </p>
          <Link
            href="/events"
            className="btn-salsa px-8 py-4 rounded-full text-salsa-white font-semibold text-lg animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Join Our Next Event
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-salsa-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
