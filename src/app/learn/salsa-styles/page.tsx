import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Guide to Salsa Dance Styles | Bad Bunny Salsa",
  description:
    "Discover the 4 dominant salsa dance styles — On1, On2, Caleña, and Casino. Learn what makes each unique, how they move, and which one is right for you.",
  alternates: { canonical: "/learn/salsa-styles" },
  openGraph: {
    title: "Complete Guide to Salsa Dance Styles | Bad Bunny Salsa",
    description:
      "Discover the 4 dominant salsa dance styles — On1, On2, Caleña, and Casino. Learn what makes each unique, how they move, and which one is right for you.",
    url: "https://badbunnysalsa.com/learn/salsa-styles",
  },
};

export default function SalsaStylesPage() {
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
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Complete Guide to Salsa Dance Styles",
    description:
      "Discover the 4 dominant salsa dance styles — On1, On2, Caleña, and Casino. Learn what makes each unique, how they move, and which one is right for you.",
    author: {
      "@type": "Organization",
      name: "Bad Bunny Salsa",
      url: "https://badbunnysalsa.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Bad Bunny Salsa",
      logo: {
        "@type": "ImageObject",
        url: "https://badbunnysalsa.com/images/logo.webp",
      },
    },
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
    mainEntityOfPage: "https://badbunnysalsa.com/learn/salsa-styles",
    image: "https://badbunnysalsa.com/og-image.png",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which salsa style should I learn first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most dancers start with Salsa On1. It's the most widely taught style worldwide, the timing is intuitive (you step on beat 1, which is the easiest count to hear), and you'll find On1 classes in almost every city. Once you're comfortable with On1, exploring On2, Casino, or Caleña becomes much easier because the foundational footwork transfers across styles.",
        },
      },
      {
        "@type": "Question",
        name: "Can I mix different salsa styles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely — and many experienced dancers do exactly this. You might dance On2 timing with Casino-inspired body movement, or add Caleña footwork flourishes to an On1 foundation. The key is learning each style's fundamentals cleanly first. Mixing too early can create muddy technique. But once you have a solid base, cross-pollination is part of what makes social dancing so rich and personal.",
        },
      },
      {
        "@type": "Question",
        name: "What's the most popular salsa style?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Globally, Salsa On1 (LA style) is the most widely danced and taught style. It dominates in the US, Europe, Asia, and Australia. On2 has a strong following in New York, parts of Europe, and among competitive dancers. Casino is dominant in Cuba and has growing communities worldwide. Caleña is centered in Colombia but has gained international recognition through performances and competitions.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a partner to learn salsa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — most salsa classes rotate partners so everyone dances with everyone. You'll learn both the movement patterns and how to connect with different people, which is exactly what social dancing is about. Solo practice is also valuable for footwork, body movement, and musicality. Check out our beginner's guide for more on what to expect at your first class.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
          Salsa Styles
        </p>
        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          The Complete Guide to Salsa Dance Styles
        </h1>
        <p className="text-xl md:text-2xl text-white/70 italic max-w-3xl mx-auto">
          Four styles. Four cities. Four ways to feel the same music.{" "}
          <span className="text-white">Find your sabor.</span>
        </p>
      </section>

      {/* Content */}
      <article className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Here&apos;s something most people don&apos;t realize when they
              first hear the word &quot;salsa&quot; &mdash; it&apos;s not one
              dance. It&apos;s a family of expressions, born in different
              cities, shaped by different cultures, and carrying the DNA of the
              communities that created them. The footwork in Cali, Colombia
              looks nothing like what you&apos;ll see in a Midtown Manhattan
              studio. A Cuban casino circle feels worlds apart from a flashy LA
              showcase. And yet, underneath all of it, the same clave rhythm
              pulses.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              This guide breaks down the four dominant salsa dance styles
              you&apos;ll encounter in studios, socials, and congresses around
              the world: <strong className="text-white">On1</strong> (Los
              Angeles style), <strong className="text-white">On2</strong> (New
              York Mambo), <strong className="text-white">Cale&ntilde;a</strong>{" "}
              (Colombian style), and{" "}
              <strong className="text-white">Casino</strong> (Cuban style).
              Whether you&apos;re{" "}
              <Link
                href="/learn/beginners"
                className="text-red-500 hover:text-red-400 underline underline-offset-4"
              >
                brand new to salsa
              </Link>{" "}
              or you&apos;ve been dancing for years and want to understand
              what&apos;s happening across the room, this page will give you the
              full picture.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              No style is &quot;better&quot; than another. Each one reflects a
              specific musical relationship, a geographic history, and a
              philosophy about what partner dancing should feel like. The
              question isn&apos;t which style is the best &mdash; it&apos;s
              which one makes <em>you</em> come alive.{" "}
              <span className="text-white italic">Vamos a ver.</span>
            </p>
          </div>

          <div className="section-divider max-w-xl mx-auto" />

          {/* What Are the Main Styles */}
          <section className="py-16">
            <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-6">
              What Are the Main Styles of Salsa Dancing?
            </h2>
            <div className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8 mb-8">
              <p className="text-white/90 leading-relaxed">
                <strong className="text-white">
                  The four dominant styles of salsa dancing are On1 (LA style),
                  On2 (NY Mambo), Cale&ntilde;a (Colombian style), and Casino
                  (Cuban style).
                </strong>{" "}
                On1 and On2 are linear &mdash; dancers move back and forth in a
                slot. Cale&ntilde;a and Casino are non-linear &mdash; dancers
                move in circular patterns.
              </p>
            </div>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              The simplest way to organize salsa styles is by how dancers use
              space. <strong className="text-white">Linear styles</strong> (On1
              and On2) travel along a straight line, sometimes called a
              &quot;slot.&quot; The lead and follower face each other and move
              forward and backward within that lane. This makes linear salsa
              visually clean, great for performances, and well-suited to crowded
              dance floors where space is limited.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              <strong className="text-white">Non-linear styles</strong>{" "}
              (Cale&ntilde;a and Casino) break free from the slot entirely. In
              Casino, partners orbit around each other in circular patterns
              &mdash; the lead guides the follower in arcs and turns that
              constantly shift the shared center point. In Cale&ntilde;a, the
              focus shifts to intricate footwork performed in place or with
              lateral movement, often at breathtaking speed.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Within each category, the styles differ in <em>timing</em> &mdash;
              specifically, which beat of the music gets the &quot;break
              step&quot; (the moment a dancer changes direction). This timing
              distinction is what separates On1 from On2, and it&apos;s also
              what gives each style its unique feel and musical relationship.
              Understanding{" "}
              <Link
                href="/learn/musicality"
                className="text-red-500 hover:text-red-400 underline underline-offset-4"
              >
                how salsa music is structured
              </Link>{" "}
              makes all of this click much faster.
            </p>
          </section>

          <div className="section-divider max-w-xl mx-auto" />

          {/* On1 */}
          <section className="py-16">
            <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-6">
              What Is Salsa On1?
            </h2>
            <div className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8 mb-8">
              <p className="text-white/90 leading-relaxed">
                <strong className="text-white">
                  Salsa On1 is a linear dance style where the lead steps forward
                  with their left foot on beat 1 and back with their right foot
                  on beat 5.
                </strong>{" "}
                The follower mirrors this &mdash; stepping back on 1 and forward
                on 5. Both dancers pause on counts 4 and 8.
              </p>
            </div>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              On1 is the style most people encounter first, and for good reason.
              It emerged from the Los Angeles salsa scene in the 1990s,
              pioneered by dancers and instructors like Albert Torres, Alex Da
              Silva, and the Vazquez Brothers. They took the partner dancing
              traditions of Latin America and refined them into a
              performance-ready system &mdash; linear, visually dramatic, and
              designed to turn heads.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              The timing feels natural because beat 1 is the most prominent
              count in salsa music &mdash; it&apos;s the beat your body
              instinctively wants to move on. This makes On1 the most accessible
              style for{" "}
              <Link
                href="/learn/beginners"
                className="text-red-500 hover:text-red-400 underline underline-offset-4"
              >
                beginners
              </Link>
              . The basic step is straightforward: lead steps forward on 1,
              together on 2, in place on 3, pause on 4, then back on 5, together
              on 6, in place on 7, pause on 8. The follower mirrors everything.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Visually, On1 is <em>big</em>. LA-style dancers are known for
              dramatic arm styling, fast spins, dips, tricks, and lifts &mdash;
              especially in performance and competition settings. The energy is
              outward. It says, &quot;Watch this.&quot; On the social floor, it
              dials back, but the DNA is the same: clean lines, confident
              movement, and a strong forward step that drives every pattern.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Today, On1 is taught in virtually every salsa school worldwide. If
              you walk into a random class in London, Tokyo, Sydney, or
              S&atilde;o Paulo, odds are good it&apos;s On1. It&apos;s the
              lingua franca of salsa &mdash; a shared foundation that lets you
              dance with someone from any country, in any club, without
              exchanging a single word.{" "}
              <span className="text-white italic">Eso es lo bonito.</span>
            </p>
          </section>

          <div className="section-divider max-w-xl mx-auto" />

          {/* On2 */}
          <section className="py-16">
            <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-6">
              What Is Salsa On2?
            </h2>
            <div className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8 mb-8">
              <p className="text-white/90 leading-relaxed">
                <strong className="text-white">
                  Salsa On2 is a linear dance style where break steps land on
                  counts 2 and 6 instead of 1 and 5.
                </strong>{" "}
                The lead steps backward on count 1 and breaks with a direction
                change on count 2. Popularized by Eddie Torres in New York,
                it&apos;s known for its smooth, musical feel.
              </p>
            </div>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              If On1 is extroverted, On2 is introspective. It doesn&apos;t grab
              you by the collar &mdash; it pulls you in slowly, and by the third
              song, you&apos;re hypnotized. New York Mambo style, as it&apos;s
              often called, grew out of the Palladium Ballroom era and the deep
              mambo traditions of the Puerto Rican and Cuban communities in New
              York City. But the modern codification of On2 belongs largely to
              one man: <strong className="text-white">Eddie Torres</strong>, the
              &quot;Mambo King.&quot;
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Torres spent decades studying how the body naturally responds to
              clave and tumbao patterns in salsa music. His conclusion: the{" "}
              <em>real</em> musical accent &mdash; where the conga slap hits,
              where the piano montuno resolves &mdash; often lands on count 2,
              not count 1. By shifting the break step to count 2, the
              dancer&apos;s movement locks into the rhythmic heart of the music
              rather than riding on top of it.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              The result is a style that feels <em>smoother</em>. Where On1
              punches forward on the strong beat, On2 slides into the pocket of
              the rhythm. The body movement is more nuanced &mdash; you&apos;ll
              see deeper weight changes, more expressive rib cage isolation, and
              a relationship with the music that feels like conversation rather
              than choreography. This is why On2 dancers often describe it as
              &quot;dancing <em>inside</em> the music.&quot;
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              The trade-off? On2 has a steeper learning curve. Hearing count 2
              takes training. Your body wants to start on 1 &mdash; that&apos;s
              natural. Learning to hold back, step on 1 without breaking, and
              then change direction on 2 feels counterintuitive at first. But
              once it clicks, most On2 dancers say they can&apos;t go back. The{" "}
              <Link
                href="/learn/musicality"
                className="text-red-500 hover:text-red-400 underline underline-offset-4"
              >
                musicality connection
              </Link>{" "}
              is that deep.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              New York remains the spiritual home of On2, but strong scenes
              exist in Milan, Paris, Seoul, and pockets of Latin America. At
              salsa congresses worldwide, On2 workshops consistently draw the
              most experienced dancers in the room. There&apos;s a reason for
              that &mdash; once you feel what On2 does to a Tito Puente track,
              you understand why Torres dedicated his life to it.
            </p>
          </section>

          <div className="section-divider max-w-xl mx-auto" />

          {/* Caleña */}
          <section className="py-16">
            <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-6">
              What Is Salsa Cale&ntilde;a?
            </h2>
            <div className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8 mb-8">
              <p className="text-white/90 leading-relaxed">
                <strong className="text-white">
                  Salsa Cale&ntilde;a, or Colombian-style salsa, originates from
                  Cali, Colombia &mdash; the self-proclaimed salsa capital of
                  the world.
                </strong>{" "}
                It&apos;s a non-linear style characterized by rapid footwork,
                acrobatic elements, and tapping on every count rather than
                pausing on 4 and 8.
              </p>
            </div>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              <span className="text-white italic">
                La Capital Mundial de la Salsa
              </span>{" "}
              &mdash; that&apos;s what Cali calls itself, and nobody seriously
              argues. This city of 2.5 million people in Colombia&apos;s Valle
              del Cauca doesn&apos;t just <em>like</em> salsa. Salsa is its
              identity. The music pours out of buses, barbershops, and living
              rooms. Kids grow up dancing before they can read. And the style
              they dance &mdash; Salsa Cale&ntilde;a &mdash; is unlike anything
              else in the salsa world.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              The first thing you&apos;ll notice is the{" "}
              <strong className="text-white">footwork</strong>. Where linear
              styles step on 6 of 8 counts and pause on 4 and 8, Cale&ntilde;a
              dancers occupy <em>every single count</em> &mdash; and sometimes
              subdivide the beats further. Their feet tap, kick, cross, and
              shuffle at speeds that look physically impossible the first time
              you see them. The upper body stays remarkably still while the legs
              become a blur. It&apos;s mesmerizing.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Cale&ntilde;a has both solo and partnered forms. Solo footwork
              routines, often performed by professional dance companies like{" "}
              <em>Swing Latino</em> or <em>Fuerza Latina</em>, feature
              synchronized choreography, acrobatic lifts, and aerial tricks that
              push salsa into the realm of athletic performance. Social
              Cale&ntilde;a between partners is more grounded but still
              footwork-forward, with quick weight transfers and playful{" "}
              <em>juego de piernas</em> (leg play) that keeps both dancers
              smiling.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              The energy is <em>pura alegr&iacute;a</em> &mdash; pure joy.
              Cale&ntilde;a doesn&apos;t have the polished seriousness of On2 or
              the cinematic drama of On1. It&apos;s exuberant, fast, and deeply
              rooted in community. In Cali, salsa isn&apos;t a hobby you pick up
              &mdash; it&apos;s the air you breathe. And that spirit is what
              makes Cale&ntilde;a feel alive in a way that no amount of
              technique can manufacture.
            </p>
          </section>

          <div className="section-divider max-w-xl mx-auto" />

          {/* Casino */}
          <section className="py-16">
            <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-6">
              What Is Casino (Cuban Salsa)?
            </h2>
            <div className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8 mb-8">
              <p className="text-white/90 leading-relaxed">
                <strong className="text-white">
                  Casino is the Cuban expression of salsa dancing. It&apos;s a
                  non-linear, circular style where partners move around each
                  other rather than in a slot.
                </strong>{" "}
                Casino often includes Rueda de Casino &mdash; a group dance
                where couples form a circle and execute synchronized moves
                called by a leader.
              </p>
            </div>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Casino didn&apos;t come from the salsa boom of the 1970s &mdash;
              it predates it. The style originated in the social clubs (
              <em>casinos deportivos</em>) of 1950s Havana, where Cuban couples
              danced Son, Cha-cha-ch&aacute;, and Mambo with a distinctly Cuban
              flavor: circular, grounded, and deeply connected to the African
              rhythmic traditions embedded in Cuban music.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              The <strong className="text-white">circular movement</strong> is
              Casino&apos;s defining characteristic. Instead of a slot, the lead
              guides the follower in arcs &mdash; opening and closing angles,
              sending them into turns that orbit a constantly shifting center.
              This creates a three-dimensional dance that uses space in every
              direction. On a crowded floor in Havana, you&apos;ll see Casino
              dancers navigating around each other like a murmuration of birds
              &mdash; chaotic up close, but beautiful from above.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Then there&apos;s{" "}
              <strong className="text-white">Rueda de Casino</strong> &mdash;
              Casino&apos;s most famous party trick and one of the most joyful
              things you&apos;ll ever see on a dance floor. Multiple couples
              form a circle. A caller (<em>el cantante</em>) shouts out moves
              &mdash; <em>&quot;&iexcl;Enchufla!&quot;</em>,{" "}
              <em>&quot;&iexcl;Dame!&quot;</em>,{" "}
              <em>&quot;&iexcl;Setenta!&quot;</em> &mdash; and every couple
              executes them simultaneously. Partners switch between couples. The
              circle spins, breaks, reforms. It&apos;s organized chaos, and
              it&apos;s addictive.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              The feel of Casino is <em>social</em> in the deepest sense.
              It&apos;s not about tricks or performance &mdash; it&apos;s about{" "}
              <em>connection</em>. The lead-follow dynamic in Casino is more
              conversational than directive. There&apos;s play, humor, and
              call-and-response energy that mirrors the music itself. Afro-Cuban
              body movement (<em>despelote</em>) adds layers of expression that
              go beyond footwork.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Casino thrives in Cuba, obviously, but also in communities across
              Europe (especially Spain, France, and the UK), parts of Latin
              America, and wherever Cuban music and culture have taken root. If
              you{" "}
              <Link
                href="/events"
                className="text-red-500 hover:text-red-400 underline underline-offset-4"
              >
                find a Rueda de Casino circle
              </Link>{" "}
              at a social, jump in. You don&apos;t need to know every move
              &mdash; just follow the energy, and the circle will carry you.{" "}
              <span className="text-white italic">As&iacute; es Cuba.</span>
            </p>
          </section>

          <div className="section-divider max-w-xl mx-auto" />

          {/* On1 vs On2 Comparison */}
          <section className="py-16">
            <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-6">
              Salsa On1 vs On2: What&apos;s the Difference?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              This is the most common question in salsa &mdash; and the source
              of more friendly debates than any other topic on the dance floor.
              Both styles are linear, both use the same 8-count structure, and
              both can look stunning in the right hands. The difference comes
              down to <em>which beat gets the break step</em>, and how that
              timing changes the entire feel of the dance.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 px-4 text-white font-semibold text-sm uppercase tracking-wider">
                      Aspect
                    </th>
                    <th className="py-3 px-4 text-white font-semibold text-sm uppercase tracking-wider">
                      On1
                    </th>
                    <th className="py-3 px-4 text-white font-semibold text-sm uppercase tracking-wider">
                      On2
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white/90">
                      Break step
                    </td>
                    <td className="py-3 px-4">Count 1 &amp; 5</td>
                    <td className="py-3 px-4">Count 2 &amp; 6</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white/90">
                      Direction on 1
                    </td>
                    <td className="py-3 px-4">Lead steps forward</td>
                    <td className="py-3 px-4">Lead steps backward</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white/90">
                      Origin
                    </td>
                    <td className="py-3 px-4">Los Angeles</td>
                    <td className="py-3 px-4">New York</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white/90">
                      Feel
                    </td>
                    <td className="py-3 px-4">Energetic, flashy</td>
                    <td className="py-3 px-4">Smooth, musical</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white/90">
                      Best for beginners
                    </td>
                    <td className="py-3 px-4">Yes, easier timing</td>
                    <td className="py-3 px-4">Steeper learning curve</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg text-white/80 leading-relaxed mb-6">
              On1 feels more immediate and punchy. The forward step on beat 1
              creates momentum and visual energy &mdash; you can <em>see</em>{" "}
              when a pattern starts. On2 feels more layered. The direction
              change on beat 2 creates a rolling, wave-like quality that blends
              seamlessly with the percussion. Neither is &quot;right&quot;
              &mdash; they&apos;re different lenses for the same music.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Want to go deeper? We break down the timing, the feel, and the
              practical differences in detail on our{" "}
              <Link
                href="/learn/salsa-styles/on1-vs-on2"
                className="text-red-500 hover:text-red-400 underline underline-offset-4"
              >
                On1 vs On2 comparison page
              </Link>
              .
            </p>
          </section>

          <div className="section-divider max-w-xl mx-auto" />

          {/* Music Connection */}
          <section className="py-16">
            <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-6">
              How Does the Music Connect to Each Style?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Every salsa style dances to the same 8-count musical structure. In
              each measure, dancers step on 6 of the 8 counts and pause (or
              hold) on the remaining 2 &mdash; except Cale&ntilde;a, which fills
              all 8 counts and sometimes more. The critical difference between
              styles is <em>which counts get the break steps</em> &mdash; the
              moments where a dancer changes direction.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              On1 breaks on counts 1 and 5 &mdash; the strong beats. This means
              the dancer&apos;s most visible movement aligns with the most
              prominent accents in the music. It&apos;s direct and satisfying.
              On2 shifts the break to counts 2 and 6, landing on the conga slap
              and aligning with the tumbao pattern. This creates a syncopated
              feel that musicians tend to love.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Casino doesn&apos;t obsess over the break step count the way
              linear styles do. Cuban dancers feel the <em>whole</em> rhythm
              &mdash; clave, conga, bass, piano &mdash; and move in response to
              the complete musical picture rather than isolating a single count.
              Cale&ntilde;a takes it further: the feet respond to every rhythmic
              event, including subdivisions between the main counts.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Understanding this music-movement relationship is one of the most
              rewarding parts of your salsa journey. Our{" "}
              <Link
                href="/learn/musicality"
                className="text-red-500 hover:text-red-400 underline underline-offset-4"
              >
                musicality guide
              </Link>{" "}
              walks you through counting, hearing the clave, and connecting your
              feet to the rhythm &mdash; no matter which style you dance.
            </p>
          </section>

          <div className="section-divider max-w-xl mx-auto" />

          {/* FAQ */}
          <section className="py-16">
            <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Which salsa style should I learn first?
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Most dancers start with{" "}
                  <strong className="text-white">Salsa On1</strong>. It&apos;s
                  the most widely taught style worldwide, the timing is
                  intuitive (you step on beat 1, which is the easiest count to
                  hear), and you&apos;ll find On1 classes in almost every city.
                  Once you&apos;re comfortable with On1, exploring On2, Casino,
                  or Cale&ntilde;a becomes much easier because the foundational
                  footwork transfers across styles. Check out our{" "}
                  <Link
                    href="/learn/beginners"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    beginner&apos;s guide
                  </Link>{" "}
                  for more on getting started.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Can I mix different salsa styles?
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Absolutely &mdash; and many experienced dancers do exactly
                  this. You might dance On2 timing with Casino-inspired body
                  movement, or add Cale&ntilde;a footwork flourishes to an On1
                  foundation. The key is learning each style&apos;s fundamentals
                  cleanly first. Mixing too early can create muddy technique.
                  But once you have a solid base, cross-pollination is part of
                  what makes social dancing so rich and personal.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What&apos;s the most popular salsa style?
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Globally, <strong className="text-white">Salsa On1</strong>{" "}
                  (LA style) is the most widely danced and taught. It dominates
                  across the US, Europe, Asia, and Australia. On2 has a strong
                  following in New York, parts of Europe, and among competitive
                  dancers. Casino is king in Cuba with growing communities
                  worldwide. Cale&ntilde;a centers in Colombia but has gained
                  international recognition through performances and world
                  championships.
                </p>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Do I need a partner to learn salsa?
                </h3>
                <p className="text-white/70 leading-relaxed">
                  No &mdash; most salsa classes rotate partners so everyone
                  dances with everyone. You&apos;ll learn both the movement
                  patterns and how to connect with different people, which is
                  exactly what social dancing is about. Solo practice is also
                  valuable for footwork, body movement, and{" "}
                  <Link
                    href="/learn/musicality"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    musicality
                  </Link>
                  . Check our{" "}
                  <Link
                    href="/learn/faq"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    full FAQ
                  </Link>{" "}
                  for more common questions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
            Ready to Try?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            You&apos;ve read the guide &mdash; now feel it for yourself. Find a
            class, hit a social, and discover which style makes your body move.{" "}
            <span className="text-white italic">El baile te espera.</span>
          </p>
          <Link
            href="/events"
            className="inline-block px-8 py-4 rounded-full btn-primary text-lg"
          >
            Find Events Near You
          </Link>
        </div>
      </section>
    </main>
  );
}
