import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bad Bunny Salsa | The World's Latin Dance Platform",
  description:
    "The world's premier platform for salsa events, classes, and Latin dance. Born in New Jersey, connecting dancers worldwide. List your events, find socials, and join the global movement.",
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
    "global salsa events",
    "list dance events",
    "salsa worldwide",
  ],
  authors: [{ name: "Bad Bunny Salsa" }],
  creator: "Bad Bunny Salsa",
  publisher: "Bad Bunny Salsa",
  metadataBase: new URL("https://badbunnysalsa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bad Bunny Salsa | The World's Latin Dance Platform",
    description:
      "The world's premier platform for salsa events, classes, and Latin dance. Born in New Jersey, connecting dancers worldwide.",
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
    title: "Bad Bunny Salsa | The World's Latin Dance Platform",
    description:
      "The world's premier platform for salsa events, classes, and Latin dance. Born in New Jersey, connecting dancers worldwide.",
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
      "The world's premier platform for salsa events, classes, and Latin dance. Born in New Jersey, connecting dancers worldwide.",
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
      "The world's Latin dance platform. Salsa events, classes, and community worldwide. Born in New Jersey, connecting dancers everywhere.",
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
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
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
