import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn Salsa | Bad Bunny Salsa",
  description:
    "Your complete guide to learning salsa dancing — from styles and musicality to beginner tips. Start your salsa journey with Bad Bunny Salsa.",
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "Learn Salsa | Bad Bunny Salsa",
    description:
      "Your complete guide to learning salsa dancing — styles, musicality, beginner tips, and more.",
    url: "https://badbunnysalsa.com/learn",
  },
};

export default function LearnPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://badbunnysalsa.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learn",
        item: "https://badbunnysalsa.com/learn",
      },
    ],
  };

  const pillars = [
    {
      title: "Salsa Dance Styles",
      description:
        "On1, On2, Caleña, Casino — discover what makes each style unique and find your flavor.",
      href: "/learn/salsa-styles",
      label: "Styles",
    },
    {
      title: "Beginner's Guide",
      description:
        "Never danced before? No problem. Everything you need to know before your first class.",
      href: "/learn/beginners",
      label: "Beginners",
    },
    {
      title: "Salsa Musicality",
      description:
        "Learn to hear the rhythm, count the music, and connect your movement to every beat.",
      href: "/learn/musicality",
      label: "Musicality",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
          Knowledge Hub
        </p>
        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Learn Salsa
        </h1>
        <p className="text-xl md:text-2xl text-white/70 italic max-w-2xl mx-auto">
          Everything you need to go from &quot;I&apos;ve never danced&quot; to
          owning the dance floor. <span className="text-white">Vamos.</span>
        </p>
      </section>

      {/* Pillar Cards */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group bg-[#111] border border-white/10 rounded-xl p-8 hover:border-red-600/50 transition-all hover:-translate-y-1"
              >
                <p className="uppercase tracking-[0.2em] text-xs text-red-600 mb-3">
                  {pillar.label}
                </p>
                <h2 className="font-serif italic text-2xl text-white mb-3 group-hover:text-red-500 transition-colors">
                  {pillar.title}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {pillar.description}
                </p>
                <p className="mt-4 text-red-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Explore &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* FAQ Card */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
            Got Questions?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            From &quot;Do I need a partner?&quot; to &quot;How much does it
            cost?&quot; — we&apos;ve got answers to every question you&apos;re
            thinking.
          </p>
          <Link
            href="/learn/faq"
            className="inline-block px-8 py-4 rounded-full btn-outline text-lg"
          >
            Read the FAQ
          </Link>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
            Ready to Move?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Reading is great, but salsa lives on the dance floor. Find a class
            or social near you and feel the music for yourself.
          </p>
          <Link
            href="/events"
            className="inline-block px-8 py-4 rounded-full btn-primary text-lg"
          >
            Find Events Near You
          </Link>
        </div>
      </section>
    </main>
  );
}
