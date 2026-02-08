import type { Metadata } from "next";
import eventsData from "@/data/events.json";

export const metadata: Metadata = {
  title: "Upcoming Salsa Events & Classes | Bad Bunny Salsa",
  description:
    "Join salsa classes and social events across New Jersey. No partner required, no experience needed. Register on Eventbrite.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Upcoming Salsa Events & Classes | Bad Bunny Salsa",
    description: "Join salsa classes and social events across New Jersey.",
    url: "https://badbunnysalsa.com/events",
  },
};

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
      address_1?: string;
      city?: string;
      region?: string;
      postal_code?: string;
      country?: string;
      localized_area_display: string;
    };
  };
  logo?: {
    url: string;
  };
  capacity?: number;
  category_id?: string;
}

function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatEventTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function getCategoryBadge(event: EventbriteEvent): string {
  const lower = event.name.text.toLowerCase();
  if (lower.includes("bachata")) return "Bachata";
  if (lower.includes("on2") || lower.includes("mambo")) return "Salsa On2";
  if (lower.includes("social") || lower.includes("party")) return "Social";
  if (lower.includes("super bowl") || lower.includes("valentine"))
    return "Special Event";
  return "Salsa";
}

export default function EventsPage() {
  const events = (eventsData.events as unknown as EventbriteEvent[])
    .filter((e) => new Date(e.end.local) >= new Date())
    .sort(
      (a, b) =>
        new Date(a.start.local).getTime() - new Date(b.start.local).getTime(),
    );

  const eventsSchema = events.map((event) => {
    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: event.name.text,
      startDate: event.start.local,
      endDate: event.end.local,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      description: event.summary || "",
      organizer: {
        "@type": "Organization",
        name: "Bad Bunny Salsa",
        url: "https://badbunnysalsa.com",
      },
      offers: {
        "@type": "Offer",
        url: event.url,
        availability: "https://schema.org/InStock",
      },
    };

    if (event.venue) {
      schema.location = {
        "@type": "Place",
        name: event.venue.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: event.venue.address.address_1,
          addressLocality: event.venue.address.city,
          addressRegion: event.venue.address.region,
          postalCode: event.venue.address.postal_code,
          addressCountry: event.venue.address.country,
        },
      };
    }

    return schema;
  });

  return (
    <>
      {eventsSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="min-h-screen bg-[#0a0a0a]">
        {/* Page Header */}
        <section className="pt-32 pb-8 px-6 text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
            Upcoming Events
          </p>
          <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            Hit the Floor
          </h1>
          <p className="text-xl md:text-2xl text-white/60 italic mt-4">
            &iexcl;No te lo pierdas!
          </p>
        </section>

        {/* Events Grid */}
        <section className="py-12 md:py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => {
                const category = getCategoryBadge(event);

                return (
                  <a
                    key={event.id}
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/5 flex flex-col"
                  >
                    {/* Event Image */}
                    <div className="relative w-full h-48 overflow-hidden">
                      {event.logo?.url ? (
                        <img
                          src={event.logo.url}
                          alt={event.name.text}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-red-600/10 flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-red-600/30"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-red-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                          {category}
                        </span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-5 flex flex-col flex-grow">
                      {/* Date */}
                      <p className="text-red-500 text-sm font-medium mb-2">
                        {formatEventDate(event.start.local)} &bull;{" "}
                        {formatEventTime(event.start.local)}
                      </p>

                      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                        {event.name.text}
                      </h3>

                      <p className="text-white/50 text-sm mb-4 line-clamp-2 flex-grow">
                        {event.summary}
                      </p>

                      {/* Location */}
                      {event.venue && (
                        <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
                          <svg
                            className="w-4 h-4 flex-shrink-0"
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
                            {event.venue.name} &bull;{" "}
                            {event.venue.address.localized_area_display}
                          </span>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="bg-red-600 hover:bg-red-700 text-center py-2.5 px-6 rounded-lg text-white font-bold text-sm uppercase tracking-wider transition-colors">
                        GET TICKETS
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* View All */}
            <div className="text-center mt-12">
              <a
                href="https://www.eventbrite.com/o/nj-salsa-49096153083"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-500 hover:text-white transition-colors font-medium"
              >
                View All Events on Eventbrite
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
