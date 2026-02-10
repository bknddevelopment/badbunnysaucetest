import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salsa On1 vs On2: What's the Difference? | Bad Bunny Salsa",
  description:
    "A complete breakdown of Salsa On1 vs On2 — timing, footwork, feel, and which style to learn first. Understand the difference between LA-style and NY-style salsa.",
  alternates: { canonical: "/learn/salsa-styles/on1-vs-on2" },
  openGraph: {
    title: "Salsa On1 vs On2: What's the Difference? | Bad Bunny Salsa",
    description:
      "A complete breakdown of Salsa On1 vs On2 — timing, footwork, feel, and which style to learn first. Understand the difference between LA-style and NY-style salsa.",
    url: "https://badbunnysalsa.com/learn/salsa-styles/on1-vs-on2",
  },
};

export default function On1VsOn2Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://badbunnysalsa.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learn",
        item: "https://badbunnysalsa.com/learn",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Salsa Styles",
        item: "https://badbunnysalsa.com/learn/salsa-styles",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "On1 vs On2",
        item: "https://badbunnysalsa.com/learn/salsa-styles/on1-vs-on2",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Salsa On1 vs On2: What's the Difference?",
    description:
      "A complete breakdown of Salsa On1 vs On2 — timing, footwork, feel, and which style to learn first. Understand the difference between LA-style and NY-style salsa.",
    author: {
      "@type": "Organization",
      name: "Bad Bunny Salsa",
      url: "https://badbunnysalsa.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Bad Bunny Salsa",
      url: "https://badbunnysalsa.com",
      logo: {
        "@type": "ImageObject",
        url: "https://badbunnysalsa.com/images/logo.webp",
      },
    },
    datePublished: "2026-02-10",
    mainEntityOfPage: "https://badbunnysalsa.com/learn/salsa-styles/on1-vs-on2",
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, articleSchema]),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
          Salsa Styles
        </p>
        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Salsa On1 vs On2: What&apos;s the Difference?
        </h1>
        <p className="text-xl md:text-2xl text-white/70 italic max-w-3xl mx-auto mb-6">
          Two styles, same music, completely different feel. Here&apos;s
          everything you need to know.
        </p>
        <Link
          href="/learn/salsa-styles"
          className="text-red-500 hover:text-red-400 underline underline-offset-4 text-sm"
        >
          &larr; Back to Salsa Styles Guide
        </Link>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="space-y-16">
            {/* Intro */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-8 md:p-12 space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                If you&apos;ve spent any time around the salsa scene,
                you&apos;ve heard the debate: On1 or On2? It&apos;s the question
                that launches a thousand conversations at every congress,
                social, and workshop on the planet. Some dancers swear by one,
                some live for the other, and plenty dance both without picking
                sides.
              </p>
              <p>
                Here&apos;s the thing &mdash; both On1 and On2 are linear salsa
                styles built on the same 8-count musical structure. Both step on
                counts 1-2-3 and 5-6-7, pausing on 4 and 8. Both move the same
                feet on the same counts. The difference? Which count gets the
                <em> break step</em> &mdash; the moment you change direction.
                That single difference changes the entire feel of the dance,
                from how you connect with the music to how your body moves
                through space. Let&apos;s break it all down.
              </p>
            </div>

            {/* What Is Salsa On1? */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                What Is Salsa On1?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  Salsa On1 is a linear dance style where the lead breaks
                  forward with the left foot on count 1, creating an energetic,
                  visually dynamic start to the phrase. The follower steps back
                  on 1. Both pause on 4 and 8. It&apos;s the most widely taught
                  style worldwide and a natural starting point for{" "}
                  <Link
                    href="/learn/beginners"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    beginners
                  </Link>
                  .
                </p>
                <p>
                  <strong className="text-white">Lead footwork:</strong> The
                  leader steps forward with the left foot on count 1 (the break
                  step), continues stepping on 2 and 3, then holds on 4. On
                  count 5, the leader rocks back with the right foot, steps on 6
                  and 7, and holds on 8. The follower mirrors this &mdash;
                  stepping back on 1 and forward on 5 &mdash; creating that
                  clean, linear slot of movement that defines the style.
                </p>
                <p>
                  On1 took shape in Los Angeles during the 1990s when dancers
                  like the Vazquez Brothers and Alex Da Silva elevated the style
                  into an athletic, performance-ready art form. LA&apos;s salsa
                  congress circuit gave On1 a global stage, and today it
                  dominates salsa scenes from London to Tokyo. The style is
                  known for dramatic cross-body leads, flashy turn patterns,
                  dips, and tricks that make it an absolute spectacle to watch.
                </p>
                <p>
                  Because the break step lands on beat 1 &mdash; the strongest
                  downbeat in the music &mdash; On1 feels punchy and explosive.
                  Every major movement aligns with the most powerful moment in
                  the bar. If you&apos;re at a social and a couple stops you in
                  your tracks with a jaw-dropping combination, there&apos;s a
                  solid chance they&apos;re dancing On1.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* What Is Salsa On2? */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                What Is Salsa On2?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  Salsa On2 is a linear style where break steps land on counts 2
                  and 6. The lead steps backward on 1 and breaks direction on 2.
                  Popularized by Eddie Torres in New York, On2 is prized for its
                  smooth, musical quality &mdash; dancers say it lets you
                  &quot;ride the rhythm&quot; rather than chase it.
                </p>
                <p>
                  <strong className="text-white">
                    The Eddie Torres system:
                  </strong>{" "}
                  Eddie Torres, known as the &quot;Mambo King,&quot; codified
                  the modern On2 technique that most schools teach today. In his
                  system, the leader steps back on count 1, breaks forward on
                  count 2 with the left foot, steps on 3, holds on 4, then steps
                  forward on 5, breaks back on count 6 with the right foot,
                  steps on 7, and holds on 8. His students &mdash; and their
                  students &mdash; carried this technique from New York to every
                  corner of the globe.
                </p>
                <p>
                  What makes On2 feel so different comes down to its connection
                  to the clave and conga patterns. When your break step lands on
                  2, your body naturally syncs with the conga&apos;s tumbao
                  &mdash; that deep, driving pulse that forms the percussive
                  heartbeat of salsa music. Many dancers describe the feeling as
                  &quot;gliding&quot; or &quot;floating&quot; through the song,
                  as opposed to the more attack-oriented feel of On1. If
                  you&apos;re interested in deepening your{" "}
                  <Link
                    href="/learn/musicality"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    musicality
                  </Link>
                  , On2 will open doors you didn&apos;t know existed.
                </p>
                <p>
                  On2 evolved from the mambo clubs of New York City, with roots
                  tracing back to the Palladium Ballroom era of the 1950s and
                  60s. The New York salsa scene &mdash; el barrio, Spanish
                  Harlem, the Bronx &mdash; gave On2 its soul. Body movement
                  takes center stage: shines (solo footwork) become deeply
                  musical, transitions are silky, and the emphasis shifts from
                  visual spectacle to <em>feeling</em>. There&apos;s a reason
                  veteran dancers often say, &quot;On1 is what you see. On2 is
                  what you feel.&quot;
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Comparison Table */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                How Do On1 and On2 Compare?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  The table below gives you a side-by-side snapshot of how these
                  two styles stack up across the dimensions that matter most.
                  Keep in mind &mdash; neither is &quot;better.&quot;
                  They&apos;re different expressions of the same{" "}
                  <Link
                    href="/learn/salsa-styles"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    salsa tradition
                  </Link>
                  .
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-4 px-4 text-red-500 font-semibold text-sm uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="py-4 px-4 text-red-500 font-semibold text-sm uppercase tracking-wider">
                        Salsa On1
                      </th>
                      <th className="py-4 px-4 text-red-500 font-semibold text-sm uppercase tracking-wider">
                        Salsa On2
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10 bg-[#111]">
                      <td className="py-4 px-4 text-white font-medium">
                        Break steps
                      </td>
                      <td className="py-4 px-4">Counts 1 &amp; 5</td>
                      <td className="py-4 px-4">Counts 2 &amp; 6</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-medium">
                        Lead&apos;s first step
                      </td>
                      <td className="py-4 px-4">Left foot forward</td>
                      <td className="py-4 px-4">Left foot backward</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-[#111]">
                      <td className="py-4 px-4 text-white font-medium">
                        Origin city
                      </td>
                      <td className="py-4 px-4">Los Angeles</td>
                      <td className="py-4 px-4">New York</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-medium">Feel</td>
                      <td className="py-4 px-4">Energetic, flashy</td>
                      <td className="py-4 px-4">Smooth, musical</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-[#111]">
                      <td className="py-4 px-4 text-white font-medium">
                        Beginner friendly
                      </td>
                      <td className="py-4 px-4">Very accessible</td>
                      <td className="py-4 px-4">Steeper learning curve</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-medium">
                        Music connection
                      </td>
                      <td className="py-4 px-4">Rides the downbeat</td>
                      <td className="py-4 px-4">
                        Syncs with conga &amp; clave
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-[#111]">
                      <td className="py-4 px-4 text-white font-medium">
                        Turn patterns
                      </td>
                      <td className="py-4 px-4">Dramatic, visual</td>
                      <td className="py-4 px-4">Fluid, body-driven</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="section-divider" />

            {/* Which Should I Learn First? */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                Which Should I Learn First: On1 or On2?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  Most instructors recommend starting with Salsa On1. The
                  forward break on count 1 aligns naturally with how most people
                  hear music &mdash; you step on the downbeat, the most obvious
                  accent. On2&apos;s break on count 2 requires more musical
                  awareness, which develops over time.
                </p>
                <p>
                  That said, both are completely valid starting points. If you
                  live in a city where On2 dominates the social scene &mdash;
                  like New York &mdash; starting there makes perfect sense.
                  You&apos;ll have more partners to practice with and more
                  classes to attend. The same applies if you&apos;re in an LA or
                  global scene where On1 is the default. Your local dance
                  community matters more than any &quot;right answer&quot; on
                  the internet.
                </p>
                <p>
                  Here&apos;s the good news: the skills transfer beautifully.
                  Dancers who learn On1 first often pick up On2 much faster than
                  starting from scratch, and vice versa. Your body already knows
                  the basic rhythm, the footwork patterns, and the lead-follow
                  connection. The switch is more like learning a new accent in a
                  language you already speak. Many of the best social dancers
                  worldwide are fluent in both and switch depending on the song,
                  the partner, or the mood. That&apos;s the goal &mdash; not
                  choosing one forever, but building a toolkit. If you&apos;re
                  just starting out, our{" "}
                  <Link
                    href="/learn/beginners"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    beginner&apos;s guide
                  </Link>{" "}
                  will help you get your feet moving no matter which style you
                  choose.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Same Social? */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                Can You Dance On1 and On2 at the Same Social?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  Absolutely &mdash; and it happens all the time. At most salsa
                  socials, any song can be danced On1 or On2. The music
                  doesn&apos;t dictate which timing you use; that&apos;s a
                  choice between you and your partner. You&apos;ll see couples
                  dancing On1 right next to couples dancing On2 on the same
                  floor, to the same track.
                </p>
                <p>
                  The key is communication. When you ask someone to dance (or
                  accept), the first few beats usually make it clear which
                  timing you&apos;re on. Experienced dancers adjust
                  instinctively. If you&apos;re newer, a quick &quot;&iquest;On1
                  o On2?&quot; before the song starts is perfectly normal and
                  appreciated. Nobody will judge you for asking &mdash;
                  it&apos;s actually a sign you know what you&apos;re doing.
                </p>
                <p>
                  Some socials lean heavily one way. A New York mambo night
                  might be 90% On2. An LA congress floor might be dominated by
                  On1. But most mixed socials are exactly that &mdash; mixed.
                  Being able to dance both means you never have to sit out a
                  song because of a timing mismatch.{" "}
                  <em>M&aacute;s baile, menos banco.</em>
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Same Footwork? */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                Do On1 and On2 Use the Same Footwork?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  Yes &mdash; and this surprises a lot of people. Both On1 and
                  On2 step on counts 1-2-3 and 5-6-7, pausing on 4 and 8. Both
                  move the same feet on the same counts. The left foot steps on
                  odd beats (1, 3, 5, 7) and the right foot steps on even beats
                  (2, 6) with holds on 4 and 8. The fundamental footwork
                  skeleton is identical.
                </p>
                <p>
                  The difference is which count gets the <em>break step</em>
                  &mdash; the moment you change direction. In On1, the break
                  happens on count 1 (leader steps forward) and count 5 (leader
                  steps back). In On2, the break shifts to count 2 (leader
                  breaks forward) and count 6 (leader breaks back). Same feet,
                  same counts, different directional emphasis.
                </p>
                <p>
                  Think of it like this: imagine walking through a room on a
                  beat. Your feet hit the floor at the same moments regardless
                  of whether you turn around at the start of the phrase (On1) or
                  one beat later (On2). That one-beat shift cascades through
                  everything &mdash; your momentum, your body movement, your
                  connection to the percussion &mdash; creating two styles that
                  feel worlds apart despite sharing the same foundation.
                  That&apos;s the magic of salsa timing, and it&apos;s why
                  understanding{" "}
                  <Link
                    href="/learn/musicality"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    musicality
                  </Link>{" "}
                  transforms your dancing no matter which style you prefer.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
            Ready to Feel the Difference?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            The best way to understand On1 vs On2 isn&apos;t reading about it
            &mdash; it&apos;s stepping onto the floor. Find a class near you and
            let your body decide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="inline-block px-8 py-4 rounded-full btn-primary text-lg"
            >
              Find Events Near You
            </Link>
            <Link
              href="/learn/salsa-styles"
              className="inline-block px-8 py-4 rounded-full border border-white/20 text-white hover:border-white/40 transition-colors text-lg"
            >
              Back to Salsa Styles Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
