import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import SocialProof from "@/components/home/SocialProof";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import ImageGallery from "@/components/ImageGallery";
import Testimonials from "@/components/Testimonials";
import LearnSalsa from "@/components/home/LearnSalsa";
import ListYourStudio from "@/components/home/ListYourStudio";

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
  { src: "/badbunnysaucetest/images/17.webp", alt: "Salsa Dancing 7" },
  { src: "/badbunnysaucetest/images/18.webp", alt: "Salsa Dancing 8" },
  { src: "/badbunnysaucetest/images/19.webp", alt: "Salsa Dancing 9" },
  { src: "/badbunnysaucetest/images/20.webp", alt: "Salsa Dancing 10" },
  { src: "/badbunnysaucetest/images/21.webp", alt: "Salsa Dancing 11" },
  { src: "/badbunnysaucetest/images/22.webp", alt: "Salsa Dancing 12" },
  { src: "/badbunnysaucetest/images/23.webp", alt: "Salsa Dancing 13" },
  { src: "/badbunnysaucetest/images/24.webp", alt: "Salsa Dancing 14" },
  { src: "/badbunnysaucetest/images/25.webp", alt: "Salsa Dancing 15" },
  { src: "/badbunnysaucetest/images/26.webp", alt: "Salsa Dancing 16" },
  { src: "/badbunnysaucetest/images/27.webp", alt: "Salsa Dancing 17" },
  { src: "/badbunnysaucetest/images/28.webp", alt: "Salsa Dancing 18" },
  { src: "/badbunnysaucetest/images/29.webp", alt: "Salsa Dancing 19" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SocialProof />
      <FeaturedEvents />
      <ImageGallery images={galleryImages} />
      <Testimonials />
      <LearnSalsa />
      <ListYourStudio />
    </main>
  );
}
