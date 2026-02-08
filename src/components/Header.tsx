"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "EVENTS", href: "/events" },
  { label: "GALLERY", href: "/gallery" },
  { label: "TESTIMONIALS", href: "/#testimonials" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/badbunnysaucetest/images/logo.webp"
              alt="Bad Bunny Salsa"
              width={480}
              height={160}
              className="h-40 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                  pathname === item.href
                    ? "text-red-500"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/events"
              className="btn-glow px-6 py-2.5 rounded-full text-white font-semibold text-sm uppercase tracking-wider"
            >
              Join the Party
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-md flex flex-col items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white p-2"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl uppercase tracking-wider transition-colors ${
                  pathname === item.href
                    ? "text-red-500 font-bold"
                    : "text-white hover:text-red-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/events"
              onClick={() => setMenuOpen(false)}
              className="btn-glow mt-4 px-8 py-3 rounded-full text-white font-bold text-lg uppercase tracking-wider"
            >
              Join the Party
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
