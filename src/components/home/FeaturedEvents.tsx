import Link from "next/link";
import eventsData from "@/data/events.json";

export default function FeaturedEvents() {
  const eventCount = eventsData.events.length;

  return (
    <section className="py-20 px-6 bg-salsa-gray">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="cursive-logo text-4xl md:text-5xl font-bold text-salsa-white mb-4 red-underline inline-block">
          Upcoming Events
        </h2>
        <p className="text-salsa-white/70 mt-8 text-lg md:text-xl max-w-2xl mx-auto mb-4">
          We&apos;ve got{" "}
          <span className="text-salsa-red font-bold">{eventCount}+</span> salsa
          classes, socials, and events happening across New Jersey — and
          we&apos;re adding more every week.
        </p>
        <p className="text-salsa-white/90 text-lg md:text-xl mb-10">
          From beginner classes to social dance nights, there&apos;s something
          for everyone.
        </p>

        <Link
          href="/events"
          className="btn-salsa inline-block px-10 py-4 rounded-full text-salsa-white font-semibold text-lg hover:shadow-xl hover:shadow-salsa-red/20 transition-all"
        >
          Browse All Events
        </Link>
      </div>
    </section>
  );
}
