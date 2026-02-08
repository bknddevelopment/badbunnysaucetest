import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bad Bunny Salsa | Salsa Dancing in New Jersey",
  description:
    "Join the most vibrant salsa dancing community in New Jersey. Experience the passion, energy, and joy of Latin dance with Bad Bunny Salsa. Classes, socials, and events for all levels.",
  keywords: [
    "salsa",
    "dance",
    "latin dance",
    "dance classes",
    "bad bunny salsa",
    "new jersey salsa",
    "NJ salsa",
    "bachata",
    "salsa lessons",
    "latin dancing",
  ],
  authors: [{ name: "Bad Bunny Salsa" }],
  creator: "Bad Bunny Salsa",
  publisher: "Bad Bunny Salsa",
  metadataBase: new URL("https://badbunnysalsa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bad Bunny Salsa | Salsa Dancing in New Jersey",
    description:
      "Join the most vibrant salsa dancing community in New Jersey. Experience the passion, energy, and joy of Latin dance.",
    url: "https://badbunnysalsa.com",
    siteName: "Bad Bunny Salsa",
    images: [
      {
        url: "/og-image.png",
        width: 1260,
        height: 1320,
        alt: "Bad Bunny Salsa Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bad Bunny Salsa | Salsa Dancing in New Jersey",
    description:
      "Join the most vibrant salsa dancing community in New Jersey. Experience the passion, energy, and joy of Latin dance.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bad Bunny Salsa",
    url: "https://badbunnysalsa.com",
    logo: "https://badbunnysalsa.com/images/logo.webp",
    description:
      "Salsa Elevated - Premier salsa dancing classes and events in New Jersey",
    email: "info@badbunnysalsa.com",
    sameAs: [
      "https://www.instagram.com/badbunnysalsa/",
      "https://www.tiktok.com/@badbunnysalsa",
      "https://www.facebook.com/profile.php?id=61585239167439",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    name: "Bad Bunny Salsa",
    url: "https://badbunnysalsa.com",
    logo: "https://badbunnysalsa.com/images/logo.webp",
    image: "https://badbunnysalsa.com/og-image.png",
    description:
      "Premier salsa dancing classes and events in New Jersey. No partner required, no experience needed.",
    email: "info@badbunnysalsa.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: "New Jersey",
    },
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/badbunnysalsa/",
      "https://www.tiktok.com/@badbunnysalsa",
      "https://www.facebook.com/profile.php?id=61585239167439",
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
