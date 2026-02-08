import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import ListYourStudio from "@/components/home/ListYourStudio";
import SocialProof from "@/components/home/SocialProof";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "Bad Bunny Salsa | Salsa Events & Classes in New Jersey",
  description:
    "Discover salsa classes, events, and socials across New Jersey. Join the movement — no partner required, no experience needed. Salsa Elevated.",
  alternates: { canonical: "/" },
};

const galleryImages = [
  { src: "/badbunnysaucetest/images/11.webp", alt: "Salsa Dancing 1" },
  { src: "/badbunnysaucetest/images/12.webp", alt: "Salsa Dancing 2" },
  { src: "/badbunnysaucetest/images/13.webp", alt: "Salsa Dancing 3" },
  { src: "/badbunnysaucetest/images/14.webp", alt: "Salsa Dancing 4" },
  { src: "/badbunnysaucetest/images/15.webp", alt: "Salsa Dancing 5" },
  { src: "/badbunnysaucetest/images/16.webp", alt: "Salsa Dancing 6" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SocialProof />
      <ImageGallery images={galleryImages} title="Moments on the Floor" />
      <FeaturedEvents />
      <ListYourStudio />
    </main>
  );
}
