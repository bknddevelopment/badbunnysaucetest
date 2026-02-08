import Link from "next/link";

export default function ListYourStudio() {
  return (
    <section className="py-20 px-6 bg-salsa-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="cursive-logo text-4xl md:text-5xl font-bold text-salsa-white mb-4 red-underline inline-block">
          Are You a Salsa Studio?
        </h2>
        <p className="text-lg md:text-xl text-salsa-white/80 mt-8 max-w-3xl mx-auto mb-12">
          Join the fastest-growing salsa event platform in New Jersey. List your
          classes and events to reach thousands of passionate dancers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-xl border border-salsa-red/20 bg-salsa-gray/30">
            <div className="w-14 h-14 rounded-full bg-salsa-red/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-salsa-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-salsa-white font-semibold text-xl mb-2">
              Reach More Dancers
            </h3>
            <p className="text-salsa-white/60">
              Get your events in front of an engaged community of salsa
              enthusiasts across NJ.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-salsa-red/20 bg-salsa-gray/30">
            <div className="w-14 h-14 rounded-full bg-salsa-red/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-salsa-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <h3 className="text-salsa-white font-semibold text-xl mb-2">
              Sell More Tickets
            </h3>
            <p className="text-salsa-white/60">
              Boost your registrations with direct Eventbrite integration and
              prominent placement.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-salsa-red/20 bg-salsa-gray/30">
            <div className="w-14 h-14 rounded-full bg-salsa-red/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-salsa-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-salsa-white font-semibold text-xl mb-2">
              Join the Movement
            </h3>
            <p className="text-salsa-white/60">
              Be part of the salsa revival sweeping NJ. Together we grow the
              dance community.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="btn-salsa inline-block px-8 py-4 rounded-full text-salsa-white font-semibold text-lg"
        >
          Partner With Us
        </Link>
      </div>
    </section>
  );
}
