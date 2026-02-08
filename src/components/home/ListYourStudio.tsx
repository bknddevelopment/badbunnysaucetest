import Link from "next/link";

export default function ListYourStudio() {
  return (
    <section className="py-20 md:py-28 px-6 bg-salsa-gray/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair italic text-3xl md:text-5xl lg:text-6xl text-salsa-white mb-6 leading-tight">
          Bring Your Events to the World
        </h2>
        <p className="text-salsa-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Whether you&apos;re running socials in Miami, teaching bachata in
          London, or hosting congresses in Tokyo &mdash; Bad Bunny Salsa
          connects you with dancers everywhere. More exposure, more ticket
          sales, one global Latin dance community.
        </p>
        <Link
          href="/contact"
          className="btn-glow inline-block px-10 py-4 rounded-full text-salsa-white font-bold text-sm uppercase tracking-wider"
        >
          List Your Events
        </Link>
      </div>
    </section>
  );
}
