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

export default function EventsPage() {
  const events = (eventsData.events as EventbriteEvent[])
    .filter((e) => new Date(e.end.local) >= new Date())
    .sort(
      (a, b) =>
        new Date(a.start.local).getTime() - new Date(b.start.local).getTime(),
    );

  // Generate Event schema for each upcoming event
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
      {/* Event Schema JSON-LD */}
      {eventsSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* Page Header */}
      <section className="pt-32 pb-8 px-6 bg-salsa-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="cursive-logo text-4xl md:text-5xl font-bold text-salsa-white mb-4 red-underline inline-block">
            Upcoming Events
          </h1>
          <p className="text-salsa-white/70 mt-8">
            Browse all our salsa classes, socials, and events across New Jersey
          </p>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-20 px-6 bg-salsa-gray">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {events.map((event) => (
              <a
                key={event.id}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-salsa-black/60 rounded-xl overflow-hidden border border-salsa-red/10 hover:border-salsa-red/40 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-salsa-red/10 flex flex-col md:flex-row"
              >
                {/* Event Image - Left Side */}
                <div className="relative w-full md:w-80 lg:w-96 h-48 md:h-auto md:min-h-[220px] flex-shrink-0 overflow-hidden">
                  {event.logo?.url ? (
                    <img
                      src={event.logo.url}
                      alt={event.name.text}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-salsa-red/20 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-salsa-red/40"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-salsa-black/40 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-salsa-black/80 to-transparent md:hidden" />
                </div>

                {/* Event Details - Right Side */}
                <div className="p-5 md:p-6 flex flex-col justify-center flex-grow">
                  <h4 className="text-salsa-white font-semibold text-lg md:text-xl mb-3 group-hover:text-salsa-red transition-colors">
                    {event.name.text}
                  </h4>

                  {/* Date & Time */}
                  <div className="flex items-center gap-2 text-salsa-white/70 text-sm md:text-base mb-2">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-salsa-red flex-shrink-0"
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
                    <span>
                      {formatEventDate(event.start.local)} •{" "}
                      {formatEventTime(event.start.local)}
                    </span>
                  </div>

                  {/* Location */}
                  {event.venue && (
                    <div className="flex items-center gap-2 text-salsa-white/60 text-sm md:text-base mb-4">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-salsa-red flex-shrink-0"
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
                      <span>
                        {event.venue.name} •{" "}
                        {event.venue.address.localized_area_display}
                      </span>
                    </div>
                  )}

                  {/* Get Tickets Button */}
                  <div className="btn-salsa text-center py-2 md:py-3 px-6 rounded-lg text-salsa-white font-medium text-sm md:text-base group-hover:shadow-lg transition-shadow w-fit">
                    Get Tickets
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View All Events Link */}
          <div className="text-center mt-10">
            <a
              href="https://www.eventbrite.com/o/nj-salsa-49096153083"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-salsa-red hover:text-salsa-white transition-colors font-medium"
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
    </>
  );
}
