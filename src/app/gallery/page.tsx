import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "Photo Gallery | Bad Bunny Salsa",
  description:
    "Browse photos from Bad Bunny Salsa events, classes, and socials across New Jersey. See the energy and passion of our salsa community.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Photo Gallery | Bad Bunny Salsa",
    description: "Browse photos from Bad Bunny Salsa events and classes.",
    url: "https://badbunnysalsa.com/gallery",
  },
};

const allImages = [
  { src: "/badbunnysaucetest/images/11.webp", alt: "Salsa dancing at Bad Bunny Salsa event" },
  { src: "/badbunnysaucetest/images/12.webp", alt: "Salsa class in New Jersey" },
  { src: "/badbunnysaucetest/images/13.webp", alt: "Social dancing at salsa night" },
  { src: "/badbunnysaucetest/images/14.webp", alt: "Salsa dancers on the floor" },
  { src: "/badbunnysaucetest/images/15.webp", alt: "Group salsa class" },
  { src: "/badbunnysaucetest/images/16.webp", alt: "Latin dance social event" },
  { src: "/badbunnysaucetest/images/17.webp", alt: "Salsa event highlight" },
  { src: "/badbunnysaucetest/images/18.webp", alt: "Dance floor moments" },
  { src: "/badbunnysaucetest/images/19.webp", alt: "Salsa community gathering" },
  { src: "/badbunnysaucetest/images/20.webp", alt: "Partner dancing at salsa social" },
  { src: "/badbunnysaucetest/images/21.webp", alt: "Salsa class practice session" },
  { src: "/badbunnysaucetest/images/22.webp", alt: "Latin dance night" },
  { src: "/badbunnysaucetest/images/23.webp", alt: "Salsa workshop attendees" },
  { src: "/badbunnysaucetest/images/24.webp", alt: "Dance floor action" },
  { src: "/badbunnysaucetest/images/25.webp", alt: "Salsa community event" },
  { src: "/badbunnysaucetest/images/26.webp", alt: "Social dancing highlights" },
  { src: "/badbunnysaucetest/images/27.webp", alt: "Bad Bunny Salsa class" },
  { src: "/badbunnysaucetest/images/28.webp", alt: "New Jersey salsa event" },
  { src: "/badbunnysaucetest/images/29.webp", alt: "Salsa dance celebration" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-salsa-black">
      {/* Page Header */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="cursive-logo text-4xl md:text-5xl font-bold text-salsa-white mb-4 red-underline inline-block">
            Gallery
          </h1>
          <p className="text-salsa-white/70 mt-8">
            Moments captured from our salsa classes, socials, and events
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <ImageGallery images={allImages} lazy={false} />

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <p className="text-salsa-white/70 mb-6">
          Want to be in our next gallery?
        </p>
        <Link
          href="/events"
          className="btn-salsa inline-block px-8 py-4 rounded-full text-salsa-white font-semibold"
        >
          Join Our Next Event
        </Link>
      </section>
    </main>
  );
}
