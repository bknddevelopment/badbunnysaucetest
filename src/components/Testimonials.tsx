const testimonials = [
  {
    quote:
      "Bad Bunny Salsa changed my life. I walked in nervous and walked out with a new family. The energy is unmatched.",
    name: "Maria Santos",
    role: "Regular since 2022",
    initial: "M",
  },
  {
    quote:
      "The DJs always know exactly what to play and the vibe is always incredible.",
    name: "Carlos Rivera",
    role: "Dance Instructor",
    initial: "C",
  },
  {
    quote:
      "I took my first steps in salsa at a Fuego Friday. Three years later, I'm competing nationally. This community is everything.",
    name: "Jasmine Lee",
    role: "Competitive Dancer",
    initial: "J",
  },
  {
    quote:
      "The Spring Gala was the highlight of my year. Live orchestra, amazing dancers, and an atmosphere that makes you never want to leave.",
    name: "David Morales",
    role: "Community Member",
    initial: "D",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-salsa-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 bg-salsa-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-salsa-red text-sm font-semibold uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mt-3">
            What Our Dancers Say
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-salsa-gray/60 border border-white/10 rounded-xl p-6 md:p-8"
            >
              <StarRating />
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-salsa-red flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
