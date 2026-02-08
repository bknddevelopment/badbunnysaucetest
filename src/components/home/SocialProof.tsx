"use client";

import Image from "next/image";

const stats = [
  {
    value: "500+",
    label: "Events Hosted",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
  },
  {
    value: "10K+",
    label: "Community Members",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    value: "50+",
    label: "Live Performances",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
  },
  {
    value: "15+",
    label: "Cities & Growing",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 px-6 bg-salsa-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="text-red-600 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-center mb-4">
          Who We Are
        </p>

        {/* Heading */}
        <h2 className="font-playfair italic text-3xl md:text-5xl lg:text-6xl text-salsa-white text-center mb-6 leading-tight">
          Where Passion Meets the Dance Floor
        </h2>

        {/* Body text */}
        <p className="text-salsa-white/70 text-base md:text-lg max-w-3xl mx-auto text-center mb-16 leading-relaxed">
          Bad Bunny Salsa is the heartbeat of the global Latin dance community.
          Born in New Jersey from a love of salsa, bachata, and the rhythms that
          move us, we&apos;re building a worldwide platform where dancers,
          schools, and promoters come together to celebrate the art of social
          dance &mdash; no matter what city you call home.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 bg-salsa-gray rounded-xl border border-salsa-white/10 text-center"
            >
              <div className="text-red-600 flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-salsa-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-salsa-white/50">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Origin Story */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-playfair italic text-2xl md:text-4xl text-salsa-white text-center mb-12">
            From a Single Night to a Global Movement
          </h3>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-salsa-white/70 text-base md:text-lg leading-relaxed">
                It started as a Friday night social in Jersey City &mdash; a
                small room, a DJ, and a handful of dancers who just wanted to
                move. Word spread. More people showed up. The energy was
                undeniable. And it didn&apos;t stop at the state line.
              </p>
              <p className="text-salsa-white/70 text-base md:text-lg leading-relaxed">
                Today, Bad Bunny Salsa is growing into the world&apos;s go-to
                platform for Latin dance &mdash; connecting dancers, dance
                schools, and event promoters across 15+ cities and counting.
                What started as a passion project in New Jersey became a global
                movement. Whether you&apos;re hosting socials in Miami, teaching
                bachata in Berlin, or throwing congresses in Bogot&aacute;
                &mdash; this is your home. And we&apos;re just getting started.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/badbunnysaucetest/images/17.webp"
                alt="Bad Bunny Salsa community dancing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
