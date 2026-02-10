import Link from "next/link";

const cards = [
  {
    title: "Salsa Styles",
    description:
      "From LA On1 to New York On2, Cuban Casino to Colombian Cali — discover what makes each style unique and find yours.",
    href: "/learn/salsa-styles",
  },
  {
    title: "Beginner's Guide",
    description:
      "Everything you need to know before your first class. What to wear, what to expect, and how to progress fast.",
    href: "/learn/beginners",
  },
  {
    title: "Salsa Music",
    description:
      "Learn to hear the clave, find the one, and connect your movement to the rhythm that drives the dance.",
    href: "/learn/musicality",
  },
];

export default function LearnSalsa() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Learn</span>
          <h2 className="font-playfair italic text-3xl md:text-5xl lg:text-6xl text-salsa-white mt-4 leading-tight">
            Master the Dance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-[#111] border border-white/10 rounded-xl p-8 hover:border-red-600/50 transition-all"
            >
              <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-red-500 transition-colors">
                {card.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {card.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/learn"
            className="btn-glow inline-block px-10 py-4 rounded-full text-white font-bold text-sm uppercase tracking-wider"
          >
            Explore All Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
