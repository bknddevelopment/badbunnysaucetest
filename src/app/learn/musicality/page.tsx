import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Understanding Salsa Music: Rhythm, Counting & Musicality | Bad Bunny Salsa",
  description:
    "Learn how to count salsa music, understand the 8-count structure, and connect your dancing to the rhythm. From the clave to the congas — hear the music like a dancer.",
  alternates: { canonical: "/learn/musicality" },
  openGraph: {
    title:
      "Understanding Salsa Music: Rhythm, Counting & Musicality | Bad Bunny Salsa",
    description:
      "Learn how to count salsa music, understand the 8-count structure, and connect your dancing to the rhythm. From the clave to the congas — hear the music like a dancer.",
    url: "https://badbunnysalsa.com/learn/musicality",
  },
};

export default function MusicialityPage() {
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
        name: "Salsa Musicality",
        item: "https://badbunnysalsa.com/learn/musicality",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Understanding Salsa Music: Rhythm, Counting & Musicality",
    description:
      "Learn how to count salsa music, understand the 8-count structure, and connect your dancing to the rhythm. From the clave to the congas — hear the music like a dancer.",
    author: {
      "@type": "Organization",
      name: "Bad Bunny Salsa",
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
    mainEntityOfPage: "https://badbunnysalsa.com/learn/musicality",
    datePublished: "2026-02-10",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you count salsa music?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salsa music follows a consistent 8-count structure. Count steadily: 1, 2, 3, 4, 5, 6, 7, 8 — then repeat. Once you can identify the 1 (the downbeat), count to 8 at a steady pace and you've found the basic rhythmic framework that every salsa song shares.",
        },
      },
      {
        "@type": "Question",
        name: "Which counts do salsa dancers step on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salsa dancers step on 6 of the 8 counts — specifically counts 1-2-3 and 5-6-7. Counts 4 and 8 are pauses or holds. This creates the distinctive quick-quick-slow rhythm that defines salsa dancing. The exception is Salsa Caleña, which taps on every count.",
        },
      },
      {
        "@type": "Question",
        name: "What is the clave in salsa music?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The clave is a two-bar rhythmic pattern that serves as the heartbeat of salsa music. Played on wooden sticks called claves, it comes in two variations — the 3-2 clave and the 2-3 clave. Every instrument in a salsa band orients itself around this pattern.",
        },
      },
      {
        "@type": "Question",
        name: "What instruments make up a salsa band?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A salsa band typically features congas, bongos, timbales, piano, bass, horns (trumpet, trombone), and the clave. The percussion section drives the rhythm while the piano provides the montuno — the repeating melodic pattern that gives each song its energy.",
        },
      },
      {
        "@type": "Question",
        name: "How can I improve my salsa musicality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Listen to salsa daily (even passively), practice counting out loud, clap on the 1, tap your feet to the rhythm while sitting, attend live salsa music events, and dance with more experienced partners. Consistent exposure to the music is the fastest path to musicality.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, articleSchema, faqSchema]),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
          Musicality
        </p>
        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Understanding Salsa Music
        </h1>
        <p className="text-xl md:text-2xl text-white/70 italic max-w-3xl mx-auto">
          Hear the rhythm. Feel the beat. Dance with the music, not against it.
        </p>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="space-y-16">
            {/* Intro */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-8 md:p-12 space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                The music is everything in salsa. It&apos;s not background noise
                &mdash; it&apos;s your partner, your guide, your reason for
                moving. Before you can truly dance to salsa, you need to{" "}
                <em>hear</em> it. Not just the melody floating on top, but the
                layers underneath: the pulse of the congas, the crack of the
                clave, the driving piano montuno that tells your body when to
                go.
              </p>
              <p>
                This guide breaks down salsa music from a dancer&apos;s
                perspective. We&apos;re not writing a music theory textbook
                &mdash; we&apos;re giving you the ears to feel the rhythm and
                the knowledge to connect your movement to every beat. Whether
                you&apos;re a{" "}
                <Link
                  href="/learn/beginners"
                  className="text-red-500 hover:text-red-400 underline underline-offset-4"
                >
                  complete beginner
                </Link>{" "}
                or an intermediate dancer who wants to stop guessing and start{" "}
                <em>listening</em>, this is where your musicality journey
                begins. <span className="text-white">Escucha.</span>
              </p>
            </div>

            {/* How Do You Count Salsa Music? */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                How Do You Count Salsa Music?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  Salsa music follows a consistent 8-count structure. Count
                  steadily: 1, 2, 3, 4, 5, 6, 7, 8 &mdash; then repeat. Once you
                  can identify the 1 (the downbeat), count to 8 at a steady pace
                  and you&apos;ve found the basic rhythmic framework that every
                  salsa song shares.
                </p>
                <p>
                  That&apos;s the beautiful thing about salsa &mdash; no matter
                  how complex a song sounds, no matter how many instruments are
                  layered on top of each other, the underlying structure is
                  always the same. Eight counts, repeating, from the first bar
                  to the last. The tempo changes from song to song (some are
                  slow and sensual, others are blazing fast), but the math never
                  does.
                </p>
                <p>
                  Finding the 1 is the key skill. The &quot;1&quot; is usually
                  the loudest, most emphatic beat &mdash; the moment where the
                  whole band resets. Listen for the bass dropping, the horns
                  hitting, or the song&apos;s melody landing on a strong note.
                  Once you can reliably hear the 1, you can count the rest.
                  Practice with slower songs first: put on a track, close your
                  eyes, and say &quot;ONE, two, three, four, FIVE, six, seven,
                  eight&quot; out loud until you feel locked in.
                </p>
                <p>
                  A helpful trick: the 1 and the 5 are the two strongest beats
                  in each cycle. If you can tap your hand on a table on every 1
                  and 5, you&apos;re already halfway to dancing on time.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Which Counts Do Salsa Dancers Step On? */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                Which Counts Do Salsa Dancers Step On?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  Salsa dancers step on 6 of the 8 counts &mdash; specifically
                  counts 1-2-3 and 5-6-7. Counts 4 and 8 are pauses or holds.
                  This creates the distinctive quick-quick-slow rhythm that
                  defines salsa dancing. The exception is Salsa Cale&ntilde;a,
                  which taps on every count.
                </p>
                <p>
                  Here&apos;s how it breaks down: on counts 1, 2, and 3, you
                  take three steps (quick-quick-slow). On count 4, you hold
                  &mdash; your weight stays on the foot from count 3, and your
                  body absorbs the pause like a breath between phrases. Then on
                  5, 6, and 7, you step again (quick-quick-slow), and hold on 8.
                  That&apos;s one complete cycle. Then it repeats, endlessly,
                  for the entire song.
                </p>
                <p>
                  The holds on 4 and 8 are what give salsa its swing and flavor.
                  Without them, you&apos;d just be marching. The hold is where
                  the <em>sabor</em> lives &mdash; the flavor, the styling, the
                  moment where your body catches up to the music and you can add
                  a hip roll, a shoulder shimmy, or simply breathe. Great
                  dancers make the holds just as expressive as the steps.
                </p>
                <p>
                  Now here&apos;s the exception: in{" "}
                  <Link
                    href="/learn/salsa-styles"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    Salsa Cale&ntilde;a
                  </Link>
                  , dancers often step or tap on every single count &mdash;
                  including the 4 and 8 &mdash; creating that rapid-fire
                  footwork Cali is famous for. It&apos;s a completely different
                  feel, closer to controlled chaos than the measured
                  quick-quick-slow of On1 or On2.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* What Is the Clave? */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                What Is the Clave in Salsa Music?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  The clave is a two-bar rhythmic pattern that serves as the
                  heartbeat of salsa music. Played on wooden sticks called
                  claves, it comes in two variations &mdash; the 3-2 clave and
                  the 2-3 clave. Every instrument in a salsa band orients itself
                  around this pattern.
                </p>
                <p>
                  Think of the clave as the invisible conductor. It&apos;s not
                  always the loudest sound in the mix &mdash; sometimes
                  it&apos;s buried under layers of horns and percussion &mdash;
                  but every musician in the band feels it. The congas play
                  around it. The piano montuno dances with it. The bass anchors
                  to it. When a song is &quot;in clave,&quot; everything clicks.
                  When it&apos;s not, even non-musicians can feel that something
                  is off.
                </p>
                <p>
                  The <strong className="text-white">3-2 clave</strong> places
                  three strikes in the first bar and two in the second. If you
                  count it out, the hits land roughly on beats 1, the
                  &quot;and&quot; of 2, and 4 in the first bar, then beats 2 and
                  3 (or the &quot;and&quot; of 3) in the second bar. The{" "}
                  <strong className="text-white">2-3 clave</strong> simply
                  reverses the order &mdash; two strikes first, then three. Both
                  patterns create a tension-and-release feel that gives salsa
                  its irresistible forward momentum.
                </p>
                <p>
                  For dancers, the clave matters most when you start dancing On2
                  (New York Mambo). On2 dancers break on beat 2 &mdash; which
                  aligns with the conga&apos;s tumbao and the clave&apos;s
                  rhythmic emphasis. That&apos;s why many advanced dancers say
                  On2 feels more &quot;musical&quot; &mdash; you&apos;re
                  literally dancing inside the clave pattern. If you want to
                  understand the{" "}
                  <Link
                    href="/learn/salsa-styles/on1-vs-on2"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    difference between On1 and On2
                  </Link>
                  , the clave is the key.
                </p>
                <p>
                  <strong className="text-white">
                    How to hear it in practice:
                  </strong>{" "}
                  Put on a classic salsa track and listen for a repeating
                  two-bar wooden &quot;knock&quot; pattern. It may be subtle.
                  Try clapping along once you identify it. Over time, your ears
                  will tune in automatically &mdash; and your dancing will
                  change because of it.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Instruments */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                What Instruments Make Up a Salsa Band?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  A salsa band typically features congas, bongos, timbales,
                  piano, bass, horns (trumpet, trombone), and the clave. The
                  percussion section drives the rhythm while the piano provides
                  the montuno &mdash; the repeating melodic pattern that gives
                  each song its energy.
                </p>
                <p>
                  Understanding each instrument helps you hear the layers in the
                  music &mdash; and once you hear the layers, you can choose
                  which one to dance to. Here&apos;s who&apos;s who in the
                  orquesta:
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Congas
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    The heartbeat of salsa. The conga player lays down the{" "}
                    <em>tumbao</em> &mdash; a repeating rhythmic pattern that
                    drives the groove. When On2 dancers say they&apos;re
                    &quot;dancing to the conga,&quot; they mean their break step
                    aligns with the tumbao&apos;s accent. Listen for the deep,
                    warm tones anchoring every song.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Bongos
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    The conversationalist. Bongos play the <em>martillo</em>{" "}
                    (&quot;hammer&quot;) pattern during verses &mdash; a steady,
                    chattering rhythm that fills the mid-range. During the
                    montuno section, the bongocero often switches to the campana
                    (cowbell), adding sharp metallic accents that signal the
                    song is heating up.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Timbales
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    The exclamation points. Timbales provide sharp accents,
                    fills, and the <em>cascara</em> pattern played on the sides
                    of the drums. When you hear a dramatic roll or crack that
                    signals a song transition, that&apos;s the timbalero
                    commanding attention. Tito Puente made this instrument
                    legendary.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Piano
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    The engine room. The piano plays the <em>montuno</em>{" "}
                    &mdash; a repeating melodic-rhythmic pattern that locks
                    together the harmony and rhythm. A great montuno is
                    hypnotic: once it starts, it pulls you in and doesn&apos;t
                    let go. It&apos;s the pattern your feet will naturally want
                    to follow.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Bass
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    The foundation. The bass plays a <em>tumbao</em> pattern
                    that works hand-in-hand with the congas to create the
                    groove. It&apos;s often felt more than heard &mdash; that
                    low pulse that makes your hips move before your brain
                    catches up. The bass tells you where the ground is.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Horns (Trumpet &amp; Trombone)
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    The fire and soul. Trumpets and trombones carry the melody,
                    play call-and-response with the vocalist, and deliver the
                    explosive <em>mambos</em> (horn sections) that make you want
                    to throw your hands up. They add drama, power, and pure
                    Latin energy. When the horns hit, the whole room lights up.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-divider" />

            {/* Music to Dance Connection */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                How Does Salsa Music Connect to Your Dancing?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  The music doesn&apos;t just provide a beat &mdash; it tells
                  you <em>how</em> to move and <em>when</em> to express. Every
                  salsa style interprets the music differently, and
                  understanding that relationship is what separates someone who
                  does steps from someone who <em>dances</em>.
                </p>
                <p>
                  <strong className="text-white">On1 dancers</strong> ride the
                  downbeat. Their break step on count 1 lands with the
                  strongest, most obvious beat in the music. It&apos;s punchy,
                  direct, and immediate &mdash; you hear the 1, you move on the
                  1. This makes On1 feel powerful and intuitive, especially for
                  beginners who are just learning to hear the rhythm.
                </p>
                <p>
                  <strong className="text-white">On2 dancers</strong> ride the
                  conga and the clave. By breaking on beat 2, they sync with the
                  tumbao pattern and the deeper percussive layers of the music.
                  It&apos;s more subtle, more textured, and many dancers
                  describe it as feeling like you&apos;re <em>inside</em> the
                  music rather than on top of it. On2 unlocks a level of
                  musicality that changes how you hear every song.
                </p>
                <p>
                  <strong className="text-white">Cale&ntilde;a dancers</strong>{" "}
                  match the rapid percussion &mdash; their feet mirror every
                  accent, every strike, every syncopation. It&apos;s the most
                  literal interpretation of the music: if the percussion is
                  playing it, your feet are dancing it.
                </p>
                <p>
                  Whichever style you dance, the principle is the same: the
                  music is your guide. The more instruments you can hear, the
                  more options you have for expression. Want to go deeper?{" "}
                  <Link
                    href="/learn/salsa-styles"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    Explore how each salsa style interprets the music
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Best Songs for Beginners */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                What Are the Best Salsa Songs for Beginners?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  The best way to develop your ear is to practice with songs
                  that have a clear, easy-to-follow rhythm. Here are some
                  classics that every salsa dancer should know &mdash; perfect
                  for counting along at home before you hit the dance floor.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    &ldquo;Quimbara&rdquo; &mdash; Celia Cruz
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    The ultimate salsa anthem. The rhythm is clear, the energy
                    is infectious, and the conga pattern is easy to lock onto.
                    If you only practice with one song, make it this one.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    &ldquo;Pedro Navaja&rdquo; &mdash; Rub&eacute;n Blades
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    A slower, story-driven track with a walking tempo that makes
                    counting easy. The steady bass line gives you a clear anchor
                    to follow beat by beat.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    &ldquo;Vivir Mi Vida&rdquo; &mdash; Marc Anthony
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Modern salsa at its most accessible. The arrangement is
                    clean, the tempo is medium, and the chorus is impossible not
                    to move to. Great for practicing basic timing.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    &ldquo;La Vida Es Un Carnaval&rdquo; &mdash; Celia Cruz
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Upbeat and joyful with a strong, danceable groove. The horn
                    sections clearly mark transitions, making it easier to
                    anticipate changes in the music.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    &ldquo;Llorar&aacute;s&rdquo; &mdash; Oscar
                    D&apos;Le&oacute;n
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    A Venezuelan salsa classic with a medium tempo and a
                    gorgeous piano montuno that practically begs you to dance.
                    Excellent for hearing how the montuno drives the groove.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    &ldquo;Aguanile&rdquo; &mdash; H&eacute;ctor Lavoe
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Pure Fania gold. The Afro-Cuban percussion is front and
                    center, making it perfect for practicing your clave
                    listening. The tempo is moderate and the groove is deep.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    &ldquo;Oye Como Va&rdquo; &mdash; Tito Puente
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    One of the most recognizable Latin songs ever recorded. The
                    cha-cha-cha-influenced groove is straightforward and the
                    rhythm section is crisp. Perfect for beginners who want to
                    practice timing without complexity.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    &ldquo;Yo Vivir&eacute;&rdquo; &mdash; Celia Cruz
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Powerful, uplifting, and rhythmically clear. Celia&apos;s
                    voice rides on top of a solid percussion foundation that
                    keeps steady time. A great song to practice clapping on the
                    1 and 5.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-divider" />

            {/* Improve Your Musicality */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                How Can I Improve My Salsa Musicality?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  Musicality isn&apos;t something you&apos;re born with &mdash;
                  it&apos;s something you build, song by song, beat by beat. The
                  good news? You don&apos;t need to be in a dance studio to work
                  on it. Here are the most effective ways to train your ear and
                  deepen your connection to salsa music.
                </p>
                <p>
                  <strong className="text-white">Listen to salsa daily.</strong>{" "}
                  Even passively. Put it on while cooking, driving, working out.
                  Your brain starts recognizing patterns before your conscious
                  mind catches up. Within a few weeks of regular listening,
                  you&apos;ll start hearing instruments you never noticed
                  before.
                </p>
                <p>
                  <strong className="text-white">
                    Practice counting out loud.
                  </strong>{" "}
                  Put on a song and count &quot;1, 2, 3, 4, 5, 6, 7, 8&quot;
                  over and over. Say it out loud &mdash; not in your head.
                  Speaking the counts forces your brain to commit to a timing
                  and exposes when you&apos;re drifting off beat.
                </p>
                <p>
                  <strong className="text-white">Clap on the 1.</strong> This is
                  the simplest and most powerful exercise. Play any salsa song
                  and clap on every count 1. If you can do this consistently
                  without losing the beat, your internal clock is calibrating.
                  Once that&apos;s easy, try clapping on the 2 &mdash; it&apos;s
                  harder than you think.
                </p>
                <p>
                  <strong className="text-white">
                    Tap your feet while sitting.
                  </strong>{" "}
                  Waiting for the bus? Sitting at your desk? Tap the
                  quick-quick-slow pattern (1-2-3, hold, 5-6-7, hold) with your
                  feet. It builds muscle memory without needing any space.
                </p>
                <p>
                  <strong className="text-white">
                    Attend live salsa music events.
                  </strong>{" "}
                  Recorded music is great for practice, but live music changes
                  everything. You&apos;ll hear the instruments in a way speakers
                  can&apos;t replicate. You&apos;ll see how the conguero drives
                  the energy. You&apos;ll feel the bass in your chest. It&apos;s
                  a different experience &mdash; and it&apos;ll accelerate your
                  musicality faster than anything else.
                </p>
                <p>
                  <strong className="text-white">
                    Dance with more experienced partners.
                  </strong>{" "}
                  A partner who dances on time becomes a metronome for your
                  body. You&apos;ll feel when you&apos;re off because their
                  timing pulls you back. Social dancing with stronger dancers is
                  one of the fastest ways to internalize the rhythm.
                </p>
                <p>
                  Musicality is a lifelong journey &mdash; even the best dancers
                  are always finding new things in songs they&apos;ve heard a
                  thousand times. Start today, be patient, and trust that your
                  ears are learning even when it doesn&apos;t feel like it.{" "}
                  <span className="text-white">La m&uacute;sica te llama.</span>
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
            Now That You Hear It, Come Feel It
          </h2>
          <p className="text-lg text-white/70 mb-8">
            The rhythm is calling. Find a class, hit a social, and let the music
            move you for real. No experience needed &mdash; just bring your
            ears.
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
              className="inline-block px-8 py-4 rounded-full btn-outline text-lg"
            >
              Learn the Dance Styles
            </Link>
            <Link
              href="/learn/beginners"
              className="inline-block px-8 py-4 rounded-full btn-outline text-lg"
            >
              Start from the Beginning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
