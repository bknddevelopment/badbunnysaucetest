"use client";

import { useState, FormEvent } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-white text-lg font-medium pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-red-500 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-neutral-400 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    city: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Partner Signup: ${formData.businessType} — ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness Type: ${formData.businessType}\nCity: ${formData.city}\nMessage: ${formData.message}`,
    );
    window.location.href = `mailto:info@badbunnysalsa.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 md:pb-20 px-6 text-center">
        <p className="section-label mb-4">Partner With Us</p>
        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Grow Your Dance Business
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Join the world&apos;s Latin dance platform. Reach thousands of dancers
          actively searching for their next class, social, or event.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#signup-form"
            className="inline-block px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30"
          >
            Get Started &mdash; It&apos;s Free
          </a>
          <a
            href="#how-it-works"
            className="inline-block px-8 py-3 rounded-full border border-white text-white font-medium text-lg transition-all hover:bg-white/10 hover:-translate-y-0.5"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* 2. Social Proof Bar */}
      <section className="py-8 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:divide-x sm:divide-white/10">
          <div className="sm:px-8 text-center">
            <p className="text-2xl font-bold text-white">500+</p>
            <p className="text-neutral-400 text-sm">Events Listed</p>
          </div>
          <div className="sm:px-8 text-center">
            <p className="text-2xl font-bold text-white">10,000+</p>
            <p className="text-neutral-400 text-sm">Active Dancers</p>
          </div>
          <div className="sm:px-8 text-center">
            <p className="text-2xl font-bold text-white">15+</p>
            <p className="text-neutral-400 text-sm">Cities &amp; Growing</p>
          </div>
        </div>
      </section>

      {/* 3. Partner Types Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Who We Work With</p>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-white">
              Built for Every Corner of the Dance World
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <div className="text-4xl mb-4">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Studios &amp; Schools
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                List your classes, attract new students, and fill your floor
                every night.
              </p>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <div className="text-4xl mb-4">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Event Promoters
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Promote socials, workshops, congresses, and festivals to dancers
                who are ready to move.
              </p>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <div className="text-4xl mb-4">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Venues</h3>
              <p className="text-neutral-400 leading-relaxed">
                Fill your Latin nights. Get discovered by dancers looking for
                the best spots in town.
              </p>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <div className="text-4xl mb-4">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Instructors &amp; DJs
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Build your profile, showcase your style, and get booked for
                events worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="py-16 md:py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Why Partner With Us</p>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-white">
              Everything You Need to Grow
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Get Discovered
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Your listing appears where dancers are already searching. No
                ads, no algorithms &mdash; just real visibility.
              </p>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Fill Your Events
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Reach dancers who are actively looking for their next social,
                class, or workshop in your city.
              </p>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Grow Your Brand
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Your own profile page with photos, schedule, reviews, and a
                direct link to your booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works Section */}
      <section
        id="how-it-works"
        className="py-16 md:py-24 px-6 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-4">How It Works</p>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-white">
              Three Steps. That&apos;s It.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-0.5 bg-white/10" />
            <div className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold relative z-10">
                1
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Sign Up</h3>
              <p className="text-neutral-400 leading-relaxed">
                Create your free partner account in under 2 minutes.
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold relative z-10">
                2
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Add Your Listing
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Upload your classes, events, or instructor profile with photos
                and details.
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold relative z-10">
                3
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Start Getting Booked
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Dancers find you, show up, and keep coming back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-16 md:py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Frequently Asked Questions</p>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-white">
              Got Questions? We&apos;ve Got Answers.
            </h2>
          </div>
          <div className="bg-[#111] border border-white/10 rounded-xl px-6 md:px-8">
            <FAQItem
              question="Is it free to list my business?"
              answer="Yes. Basic listings are completely free. We want to make it as easy as possible for you to get discovered."
            />
            <FAQItem
              question="Who will see my listing?"
              answer="Dancers actively searching for classes, socials, and events in your area — plus our growing global community."
            />
            <FAQItem
              question="What types of businesses can sign up?"
              answer="Studios, event promoters, venues, freelance instructors, DJs — anyone in the Latin dance world."
            />
            <FAQItem
              question="Can I manage my own events and listings?"
              answer="Absolutely. You'll have full control to add, edit, and update your listings anytime."
            />
            <FAQItem
              question="I'm an independent instructor. Is this for me?"
              answer="Yes! We have dedicated instructor profiles so you can showcase your style and get booked."
            />
            <FAQItem
              question="How is this different from Eventbrite or Meetup?"
              answer="We're built specifically for the Latin dance community. Every feature is designed for how dancers actually find and attend events."
            />
          </div>
        </div>
      </section>

      {/* 7. Signup Form Section */}
      <section
        id="signup-form"
        className="py-16 md:py-24 px-6 border-t border-white/5"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-4">Get Started</p>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              List Your Business Today
            </h2>
            <p className="text-neutral-400 text-lg">
              It takes less than 2 minutes. No credit card required.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-10 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="businessType"
                className="block text-white text-sm font-medium mb-2"
              >
                Business Type
              </label>
              <select
                id="businessType"
                required
                value={formData.businessType}
                onChange={(e) =>
                  setFormData({ ...formData, businessType: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none"
              >
                <option value="" className="bg-[#111]">
                  Select your business type
                </option>
                <option value="Studio" className="bg-[#111]">
                  Studio
                </option>
                <option value="Event Promoter" className="bg-[#111]">
                  Event Promoter
                </option>
                <option value="Venue" className="bg-[#111]">
                  Venue
                </option>
                <option value="Instructor" className="bg-[#111]">
                  Instructor
                </option>
                <option value="DJ" className="bg-[#111]">
                  DJ
                </option>
                <option value="Other" className="bg-[#111]">
                  Other
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-white text-sm font-medium mb-2"
              >
                City
              </label>
              <input
                id="city"
                type="text"
                required
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Your city"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white text-sm font-medium mb-2"
              >
                Message{" "}
                <span className="text-neutral-500 font-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                placeholder="Tell us about your business..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30"
            >
              Create My Free Account
            </button>
          </form>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-16 md:py-20 px-6 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
            Ready to Reach More Dancers?
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            Join hundreds of partners already growing their business on Bad
            Bunny Salsa.
          </p>
          <a
            href="#signup-form"
            className="inline-block px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30"
          >
            Get Started &mdash; It&apos;s Free
          </a>
        </div>
      </section>
    </main>
  );
}
