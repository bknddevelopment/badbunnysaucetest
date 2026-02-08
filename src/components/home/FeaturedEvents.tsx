import Link from "next/link";
import eventsData from "@/data/events.json";

interface EventbriteEvent {
  id: string;
  name: { text: string };
  summary: string;
  url: string;
  start: { local: string };
  end: { local: string };
  venue?: {
    name: string;
    address: {
      localized_area_display: string;
    };
  };
  logo?: {
    url: string;
  };
  capacity?: number;
}

function getEventCategory(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes("social") || lower.includes("party"))
    return "SPECIAL EVENT";
  if (lower.includes("workshop") || lower.includes("level")) return "WORKSHOP";
  return "WEEKLY SOCIAL";
}

function formatDateParts(dateString: string) {
  const date = new Date(dateString);
  return {
    year: date.getFullYear().toString(),
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: date.getDate().toString(),
  };
}

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const fallbackImages = [
  "/badbunnysaucetest/images/18.webp",
  "/badbunnysaucetest/images/19.webp",
  "/badbunnysaucetest/images/20.webp",
];

export default function FeaturedEvents() {
  const events = (eventsData.events as unknown as EventbriteEvent[])
    .filter((e) => new Date(e.end.local) >= new Date())
    .sort(
      (a, b) =>
        new Date(a.start.local).getTime() - new Date(b.start.local).getTime(),
    )
    .slice(0, 3);

  return (
    <section className="py-20 md:py-28 px-6 bg-salsa-gray">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-red-600 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Upcoming Events
            </p>
            <h2 className="font-playfair italic text-3xl md:text-5xl lg:text-6xl text-salsa-white">
              Hit the Floor
            </h2>
          </div>
          <Link
            href="/events"
            className="text-red-600 font-semibold text-sm uppercase tracking-wider hover:text-red-500 transition-colors mt-4 md:mt-0"
          >
            View Full Calendar &rarr;
          </Link>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => {
            const category = getEventCategory(event.name.text);
            const dateParts = formatDateParts(event.start.local);
            const time = formatTime(event.start.local);
            const imageUrl = event.logo?.url || fallbackImages[index];

            return (
              <a
                key={event.id}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-salsa-black rounded-xl overflow-hidden border border-salsa-white/10 hover:border-salsa-white/20 transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={event.name.text}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-salsa-black/60 to-transparent" />

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Date Badge + Title */}
                  <div className="flex gap-4 mb-3">
                    <div className="flex-shrink-0 text-center">
                      <div className="text-[10px] text-salsa-white/40 uppercase">
                        {dateParts.year}
                      </div>
                      <div className="text-xs font-bold text-red-600">
                        {dateParts.month}
                      </div>
                      <div className="text-2xl font-bold text-salsa-white leading-none">
                        {dateParts.day}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-salsa-white font-semibold text-base md:text-lg group-hover:text-red-500 transition-colors line-clamp-2">
                        {event.name.text}
                      </h4>
                      {event.summary && (
                        <p className="text-salsa-white/50 text-sm mt-1 line-clamp-2">
                          {event.summary}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Location */}
                  {event.venue && (
                    <div className="flex items-center gap-2 text-salsa-white/50 text-sm mb-1">
                      <svg
                        className="w-4 h-4 text-red-600 flex-shrink-0"
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
                      <span className="truncate">
                        {event.venue.address.localized_area_display}
                      </span>
                    </div>
                  )}

                  {/* Time */}
                  <div className="flex items-center gap-2 text-salsa-white/50 text-sm mb-4">
                    <svg
                      className="w-4 h-4 text-red-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{time}</span>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <span className="text-red-600 font-semibold text-sm uppercase tracking-wider group-hover:text-red-500 transition-colors">
                      Get Tickets &rarr;
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
