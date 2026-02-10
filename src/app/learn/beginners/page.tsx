import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How to Start Salsa Dancing: The Complete Beginner's Guide | Bad Bunny Salsa",
  description:
    "Everything you need to know before your first salsa class — what to expect, what to wear, how long it takes to learn, and why you don't need a partner. Start dancing today.",
  alternates: { canonical: "/learn/beginners" },
  openGraph: {
    title:
      "How to Start Salsa Dancing: The Complete Beginner's Guide | Bad Bunny Salsa",
    description:
      "Everything you need to know before your first salsa class — what to expect, what to wear, how long it takes to learn, and why you don't need a partner.",
    url: "https://badbunnysalsa.com/learn/beginners",
  },
};

export default function BeginnersGuidePage() {
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
        name: "Beginner's Guide",
        item: "https://badbunnysalsa.com/learn/beginners",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Start Salsa Dancing: The Complete Beginner's Guide",
    description:
      "Everything you need to know before your first salsa class — what to expect, what to wear, how long it takes to learn, and why you don't need a partner.",
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
        url: "https://badbunnysalsa.com/logo.png",
      },
    },
    datePublished: "2026-02-10",
    mainEntityOfPage: "https://badbunnysalsa.com/learn/beginners",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need a partner for salsa classes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you don't need a partner for salsa group classes. In almost all classes that teach partner-work patterns, students rotate partners throughout the lesson. This is actually one of the best parts — you'll dance with different people, improve faster, and build friendships along the way.",
        },
      },
      {
        "@type": "Question",
        name: "What should I expect at my first salsa class?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Expect to arrive a few minutes early, do a light warm-up, learn the basic step broken down slowly, practice with rotating partners, and finish with a cool-down. Everyone is nervous at first — that's completely normal. Instructors are used to working with total beginners.",
        },
      },
      {
        "@type": "Question",
        name: "What should I wear to a salsa class?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wear comfortable clothes you can move in and smooth-soled shoes. Avoid sneakers with heavy grip, open-toed shoes, and flip-flops. Bring water and a small towel. You don't need special dance shoes for your first class.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to learn salsa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most people can social dance comfortably within 3-6 months of consistent classes. To become highly proficient with your own style and the ability to improvise, expect 3-7 years of practice. But you'll be having fun from day one.",
        },
      },
      {
        "@type": "Question",
        name: "How much do salsa lessons cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salsa lessons typically range from $12-$30 per class depending on location, instructor, and studio. Buying packages saves money — expect $57-$65 for 3-4 class bundles. Some studios offer punch cards for even better value.",
        },
      },
      {
        "@type": "Question",
        name: "I grew up dancing salsa — do I need the beginner course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It's a good idea to check with the specific dance company. Having salsa as part of your cultural background doesn't mean you're ready for advanced formal instruction. Studios use a foundation of basics that advanced lessons build upon.",
        },
      },
      {
        "@type": "Question",
        name: "What style of salsa should beginners learn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most instructors recommend starting with On1 (LA style) because its timing is the most intuitive — you break forward on beat 1, which is the easiest count to hear. Once comfortable, dancers often explore On2, Casino, or other styles.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema,
            articleSchema,
            faqSchema,
          ]),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
          Beginner&apos;s Guide
        </p>
        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          How to Start Salsa Dancing
        </h1>
        <p className="text-xl md:text-2xl text-white/70 italic max-w-3xl mx-auto">
          No partner needed. No experience required. Just bring your energy.
        </p>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="space-y-16">
            {/* Intro */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-8 md:p-12 space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                So you want to learn salsa. Maybe you saw someone dancing at a
                party and thought, <em>&ldquo;I want to move like that.&rdquo;</em>{" "}
                Maybe a friend dragged you to a social and you spent the whole night
                watching from the sidelines, wishing you knew the steps. Maybe
                you&apos;ve been thinking about it for years and just never pulled
                the trigger.
              </p>
              <p>
                Here&apos;s the truth: every single person on that dance floor
                started exactly where you are right now. Every smooth lead, every
                graceful follow, every dancer who looks like they were born doing
                this &mdash; they all had a first class where they didn&apos;t know
                their left foot from their right. <em>Todos empezamos igual.</em>
              </p>
              <p>
                Salsa is one of the most welcoming dance communities in the world.
                It doesn&apos;t care about your age, your body type, your
                background, or your rhythm (or lack thereof). It only asks one
                thing: that you show up. This guide covers everything you need to
                know before your first class &mdash; from what to wear to how long
                it takes to get comfortable &mdash; so you can walk in with
                confidence and leave with a smile.
              </p>
            </div>

            <div className="section-divider" />

            {/* Do I Need a Partner? */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                Do I Need a Partner for Salsa Classes?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">
                    No, you don&apos;t need a partner for salsa group classes.
                  </strong>{" "}
                  In almost all classes that teach partner-work patterns, students
                  rotate partners throughout the lesson. This is actually one of
                  the best parts &mdash; you&apos;ll dance with different people,
                  improve faster, and build friendships along the way.
                </p>
                <p>
                  Partner rotation is standard practice in salsa education for a
                  reason: it forces you to adapt your lead or follow to different
                  body types, heights, and experience levels. That adaptability is
                  what separates a good social dancer from a great one. Dancing
                  with only one person creates habits &mdash; dancing with everyone
                  creates skill.
                </p>
                <p>
                  And here&apos;s a bonus nobody tells you about: salsa classes are
                  one of the best places to meet people. Not just romantic
                  connections (though that happens plenty), but genuine friendships.
                  You&apos;ll laugh together over fumbled turns, celebrate
                  breakthroughs, and before long, you&apos;ll have a whole crew of
                  people who share your new obsession. The salsa community is like
                  a second family &mdash; <em>una familia de ritmo.</em>
                </p>
                <p>
                  If the idea of dancing with strangers makes you nervous,
                  that&apos;s normal. Everyone feels it. But within five minutes
                  of your first partner rotation, you&apos;ll realize everyone
                  is too focused on getting the steps right to judge you. You&apos;re
                  all in it together.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* What to Expect */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                What Should I Expect at My First Salsa Class?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">
                    Expect to arrive, warm up, learn the basic step, rotate
                    partners, and leave smiling.
                  </strong>{" "}
                  That&apos;s the short version. Here&apos;s what the experience
                  actually looks like, step by step.
                </p>
                <p>
                  <strong className="text-white">Arrival (5-10 minutes early):</strong>{" "}
                  Get there a little early. Most studios have a sign-in process,
                  especially for drop-ins. You&apos;ll change your shoes (if
                  needed), stash your bag, and get a feel for the room. Look around
                  &mdash; you&apos;ll see people chatting, stretching, maybe
                  practicing a move from last week. The energy is relaxed. Nobody
                  is sizing you up.
                </p>
                <p>
                  <strong className="text-white">Warm-up (5-10 minutes):</strong>{" "}
                  The instructor will start with light movement to get your body
                  loose &mdash; shoulder rolls, hip circles, weight shifts from
                  side to side. This is where the salsa music starts playing and
                  the room begins to come alive. Don&apos;t worry about looking
                  silly. Everyone&apos;s warming up their own way.
                </p>
                <p>
                  <strong className="text-white">Basic step breakdown (15-20 minutes):</strong>{" "}
                  The core of a beginner class. The instructor will break down the
                  basic salsa step &mdash; the foundation everything else is built
                  on. You&apos;ll practice it solo first: step forward, step in
                  place, step together, then step back, step in place, step
                  together. Slowly, then with music. It will feel awkward. That
                  awkwardness is learning.
                </p>
                <p>
                  <strong className="text-white">Partner work and rotation (15-20 minutes):</strong>{" "}
                  Now you&apos;ll pair up and try the basic step with a partner.
                  The instructor will demonstrate the frame (how you hold each
                  other) and the connection. After a few minutes, they&apos;ll
                  call &ldquo;rotate!&rdquo; and you&apos;ll switch to a new
                  partner. This is where the fun really starts. Each new partner
                  feels slightly different, and that&apos;s the point.
                </p>
                <p>
                  <strong className="text-white">Cool-down and social time (5-10 minutes):</strong>{" "}
                  Class wraps up with some light stretching and usually a chance
                  to practice freely. Many studios run a social after class where
                  you can try what you just learned in a low-pressure setting.
                  Stay for it if you can &mdash; the practice is invaluable and
                  the energy is infectious.
                </p>
                <p>
                  The biggest thing to remember? <strong className="text-white">Everyone is nervous at first.</strong>{" "}
                  The person next to you who looks calm? They&apos;re nervous too.
                  Salsa instructors have seen thousands of first-timers and
                  they&apos;re experts at making beginners feel welcome. You will
                  step on toes. You will lose the beat. You will laugh about it.
                  And you will want to come back.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* What to Wear */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                What Should I Wear to a Salsa Class?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">
                    Comfortable clothes you can move in and smooth-soled shoes.
                  </strong>{" "}
                  That&apos;s the essentials. But let&apos;s break it down so
                  you feel prepared.
                </p>
                <p>
                  <strong className="text-white">Clothing:</strong> Wear
                  something breathable that allows a full range of motion. You
                  don&apos;t need special dance clothes &mdash; a fitted t-shirt
                  or blouse with jeans, leggings, or athletic pants works
                  perfectly. Avoid anything too baggy (it can get caught during
                  turns) or too restrictive (you need to move your hips and
                  shoulders freely). You will sweat, so choose fabrics that
                  handle moisture well.
                </p>
                <p>
                  <strong className="text-white">Shoes:</strong> This is the most
                  important part. You need shoes with a smooth sole that allows
                  you to pivot and slide on the dance floor. Leather-soled dress
                  shoes, low heels with suede soles, or even socks over sneakers
                  can work in a pinch. <strong className="text-white">Avoid
                  rubber-soled sneakers</strong> &mdash; they grip the floor and
                  make turning nearly impossible, which is frustrating and can
                  strain your knees. Avoid open-toed shoes and sandals as a
                  beginner &mdash; your toes will thank you when someone
                  inevitably steps on them.
                </p>
                <p>
                  <strong className="text-white">What to bring:</strong> A water
                  bottle (you will get thirsty), a small towel (you will get
                  sweaty), and a positive attitude. Some dancers bring an extra
                  shirt to change into if they&apos;re staying for the social
                  after class. Deodorant is appreciated by everyone. Keep
                  jewelry minimal &mdash; rings, bracelets, and long necklaces
                  can snag on your partner.
                </p>
                <p>
                  As you progress, you may want to invest in actual dance shoes.
                  They&apos;re specifically designed for turning, with suede soles
                  and the right amount of heel support. But for your first few
                  classes, don&apos;t overthink it. Just show up in something
                  comfortable and smooth-soled. <em>Lo importante es llegar.</em>
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* How Long to Learn */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                How Long Does It Take to Learn Salsa?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">
                    Most people can social dance comfortably within 3-6 months of
                    consistent classes. To become highly proficient with your own
                    style and the ability to improvise, expect 3-7 years of
                    practice. But here&apos;s the thing &mdash; you&apos;ll be
                    having fun from day one.
                  </strong>
                </p>
                <p>
                  Salsa is a skill, and like any skill, it follows a learning
                  curve. The first few weeks feel steep &mdash; everything is new,
                  your brain is trying to coordinate feet, timing, direction, and
                  a partner all at once. But somewhere around week 3-4, something
                  clicks. The basic step becomes automatic. You start hearing the
                  beat without counting. Your body begins to relax.
                </p>
                <p>
                  <strong className="text-white">Month 1-2:</strong> You&apos;ll
                  learn the basic step, a few turn patterns, and how to hold a
                  frame with your partner. Social dancing will feel clunky but
                  possible. This is the &ldquo;figuring it out&rdquo; phase, and
                  it&apos;s supposed to feel messy. Lean into it.
                </p>
                <p>
                  <strong className="text-white">Month 3-6:</strong> The
                  foundations solidify. You can dance a full song without
                  stopping, you&apos;re starting to lead or follow with intention
                  rather than memory, and you&apos;re beginning to develop
                  preferences for certain{" "}
                  <Link
                    href="/learn/salsa-styles"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    styles of salsa
                  </Link>
                  . Social dancing becomes genuinely enjoyable.
                </p>
                <p>
                  <strong className="text-white">Month 6-12:</strong> You&apos;re
                  an intermediate dancer. Turn patterns flow, you can react to
                  the music, and you start to develop your own flavor.{" "}
                  <Link
                    href="/learn/musicality"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    Musicality
                  </Link>{" "}
                  begins to shape how you move. This is often when dancers fall
                  completely in love with salsa.
                </p>
                <p>
                  <strong className="text-white">Year 1-3+:</strong> Advanced
                  territory. You&apos;re improvising, adding body movement,
                  exploring multiple styles, and possibly performing or
                  competing. The learning never stops &mdash; that&apos;s part
                  of what makes salsa a lifelong pursuit.
                </p>
                <p>
                  The most important factor isn&apos;t talent &mdash; it&apos;s
                  consistency. Dancers who attend class once a week and go to one
                  social per week progress dramatically faster than those who
                  only take class. Practice is the accelerator. The dance floor
                  is the classroom that never closes.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Cost */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                How Much Do Salsa Lessons Cost?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">
                    Salsa lessons typically range from $12-$30 per class depending
                    on location, instructor, and studio. Buying packages saves
                    money &mdash; expect $57-$65 for 3-4 class bundles. Some
                    studios offer punch cards for even better value.
                  </strong>
                </p>
                <p>
                  Here&apos;s how pricing generally breaks down across most
                  studios:
                </p>
                <p>
                  <strong className="text-white">Drop-in classes:</strong> The
                  most flexible option. You show up, pay at the door, and take
                  the class. Drop-in rates typically run $15-$25 per class in
                  most cities. They&apos;re great for trying out a new studio or
                  instructor, but they&apos;re the most expensive per-class
                  option over time.
                </p>
                <p>
                  <strong className="text-white">Class packages:</strong> Most
                  studios offer bundles &mdash; buy 4, 8, or 12 classes at a
                  discounted rate. A typical 4-class package runs $57-$65,
                  bringing the per-class cost down to $14-$16. This is the sweet
                  spot for regular students. Some packages expire after 30-60
                  days, so check the terms.
                </p>
                <p>
                  <strong className="text-white">Punch cards and memberships:</strong>{" "}
                  Some studios sell punch cards (buy 10 classes, use them
                  whenever) or monthly unlimited memberships. If you&apos;re
                  committed to dancing 2-3 times per week, an unlimited
                  membership can bring the per-class cost down to $8-$12
                  &mdash; the best value available.
                </p>
                <p>
                  <strong className="text-white">Private lessons:</strong> One-on-one
                  instruction with a dedicated teacher. Rates vary widely
                  ($60-$150+ per hour depending on the instructor&apos;s
                  experience and location), but the progress is accelerated.
                  Privates are excellent for working on specific weaknesses or
                  preparing for a performance.
                </p>
                <p>
                  Don&apos;t let cost be a barrier. Many studios offer a free
                  first class, and community-run socials often charge only
                  $5-$10 at the door. The salsa world wants you in it &mdash;
                  there&apos;s almost always an affordable way to start.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Schedule */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                What Is the Typical Schedule for Salsa Classes?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">
                    Most salsa classes run on weeknights starting at 7pm, with
                    additional options on Saturday and Sunday mornings and
                    afternoons. Private lessons are typically available during
                    weekdays.
                  </strong>
                </p>
                <p>
                  The salsa world runs on a pretty consistent schedule across
                  most cities. Weeknight group classes are the backbone &mdash;
                  Monday through Thursday evenings, usually starting at 7:00pm
                  or 7:30pm, running for an hour. Many studios stack levels: a
                  beginner class at 7pm followed by an intermediate class at
                  8pm, so as you advance, you just stay later.
                </p>
                <p>
                  Weekends tend to offer daytime options &mdash; Saturday and
                  Sunday mornings or early afternoons. These are popular with
                  people who can&apos;t make weeknight classes, parents, and
                  anyone who wants to keep their evenings free for socials
                  (which happen Friday, Saturday, and Sunday nights at various
                  venues).
                </p>
                <p>
                  Private lessons operate on a more flexible schedule. Most
                  instructors are available during weekday afternoons, and
                  you&apos;ll book a time that works for both of you. If
                  you&apos;re a working professional with an unpredictable
                  schedule, privates give you the most flexibility.
                </p>
                <p>
                  Pro tip: check if your studio runs a social or practice
                  session after class. Those extra 30-60 minutes of informal
                  dancing are where the real learning happens. The class gives
                  you the vocabulary; the social teaches you to speak.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Cultural Background */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                I Grew Up Dancing Salsa &mdash; Do I Need the Beginner Course?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">
                    It&apos;s a good idea to check with the specific dance
                    company.
                  </strong>{" "}
                  Having salsa as part of your cultural background is a
                  beautiful advantage &mdash; your body already knows the rhythm,
                  the music lives in you, and you&apos;ve probably been moving to
                  it since childhood. But that doesn&apos;t always mean
                  you&apos;re ready to skip ahead in a formal class setting.
                </p>
                <p>
                  Here&apos;s why: dance studios build their curriculum on a
                  specific foundation of basics. Advanced lessons assume you know
                  that foundation &mdash; the exact footwork patterns, the frame
                  technique, the specific turn patterns the studio teaches.
                  Dancing salsa at family parties is different from dancing salsa
                  in a structured partner-work environment. Both are valid, but
                  they&apos;re different skill sets.
                </p>
                <p>
                  Many studios offer a placement class or assessment where an
                  instructor watches you dance and recommends the right level.
                  This is the best approach &mdash; it respects your experience
                  while making sure you&apos;re in a class where you&apos;ll
                  actually grow. Don&apos;t think of the beginner course as
                  being &ldquo;held back.&rdquo; Think of it as filling in the
                  gaps that make everything else easier.
                </p>
                <p>
                  Some of the best dancers in any studio are the ones who went
                  through the foundations even though they could already dance.
                  Their technique is clean because they built it from the ground
                  up. <em>Las ra&iacute;ces fuertes dan &aacute;rboles altos.</em>
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Advancing */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                How Do I Advance to the Next Level?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">
                    Most studios run beginner cycles of 3-6 months, with
                    assessments to determine when you&apos;re ready to move up.
                  </strong>{" "}
                  Talk to your instructor for clear expectations specific to
                  your studio.
                </p>
                <p>
                  Advancement in salsa isn&apos;t like leveling up in a video game
                  &mdash; there&apos;s no universal standard. Each studio has its
                  own progression path. Some use formal assessment cycles where
                  instructors evaluate your timing, technique, lead/follow
                  quality, and comfort with the material. Others are more
                  informal, with instructors tapping you on the shoulder when they
                  think you&apos;re ready.
                </p>
                <p>
                  Here&apos;s what instructors generally look for when deciding
                  if a student is ready to advance:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>
                    <strong className="text-white/90">Consistent timing:</strong>{" "}
                    You can stay on beat for an entire song without losing count
                  </li>
                  <li>
                    <strong className="text-white/90">Clean basic step:</strong>{" "}
                    Your foundation is automatic, not something you&apos;re
                    thinking about
                  </li>
                  <li>
                    <strong className="text-white/90">Partner connection:</strong>{" "}
                    You can lead or follow clearly, not just execute memorized
                    sequences
                  </li>
                  <li>
                    <strong className="text-white/90">Comfort with rotation:</strong>{" "}
                    You dance well with different partners, not just your
                    favorite one
                  </li>
                  <li>
                    <strong className="text-white/90">Mastery of current material:</strong>{" "}
                    The turn patterns and combinations from your level are
                    second nature
                  </li>
                </ul>
                <p>
                  The most important thing is to be honest with yourself. Moving
                  up too fast creates gaps in your foundation that become harder
                  to fix later. There&apos;s no shame in repeating a beginner
                  cycle &mdash; many great dancers do it intentionally to deepen
                  their basics. The foundation is everything.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* What Style */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                What Style of Salsa Should Beginners Learn?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">
                    Most instructors recommend starting with On1 (LA style)
                    because its timing is the most intuitive.
                  </strong>{" "}
                  You break forward on beat 1 &mdash; the strongest, most
                  obvious beat in the music &mdash; which makes it the easiest
                  to hear and the fastest to learn.
                </p>
                <p>
                  That said, the &ldquo;best&rdquo; style to start with is
                  really the one that&apos;s taught near you. If every studio in
                  your city teaches On2, start with On2. If there&apos;s a
                  thriving Casino (Cuban salsa) community in your town, jump in.
                  The style matters less than the consistency of your practice
                  and the quality of your instructor.
                </p>
                <p>
                  Salsa has four major styles &mdash; On1, On2, Cale&ntilde;a
                  (Colombian), and Casino (Cuban) &mdash; each with its own
                  timing, geometry, and feel. They&apos;re all salsa, they&apos;re
                  all beautiful, and they&apos;re all worth learning eventually.
                  For a deep dive into what makes each one unique, check out our{" "}
                  <Link
                    href="/learn/salsa-styles"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    complete guide to salsa dance styles
                  </Link>
                  . If you&apos;re specifically curious about the two most
                  popular styles,{" "}
                  <Link
                    href="/learn/salsa-styles/on1-vs-on2"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    our On1 vs On2 comparison
                  </Link>{" "}
                  breaks it down side by side.
                </p>
                <p>
                  For now, don&apos;t overthink style. Pick a class. Show up.
                  Learn the basics. The style will choose you as much as you
                  choose it.
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* Practice at Home */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                How Can I Practice Salsa at Home?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">
                    Listen to salsa music and practice counting, drill the basic
                    step in front of a mirror, and attend socials to build real-world
                    confidence.
                  </strong>{" "}
                  Those three things will accelerate your progress more than
                  anything else.
                </p>
                <p>
                  <strong className="text-white">Train your ears:</strong> Put on
                  salsa music during your commute, while cooking, while
                  cleaning. Start counting the beats: 1-2-3 (pause) 5-6-7
                  (pause). The more you listen, the more natural the rhythm
                  becomes. When you can find the &ldquo;1&rdquo; in any song
                  without thinking, you&apos;ve crossed a major threshold. For
                  a deeper understanding of what you&apos;re hearing, read our
                  guide on{" "}
                  <Link
                    href="/learn/musicality"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    salsa musicality
                  </Link>
                  .
                </p>
                <p>
                  <strong className="text-white">Mirror work:</strong> Stand in
                  front of a mirror and practice your basic step. Watch your
                  posture &mdash; chest up, shoulders back, weight on the balls
                  of your feet. Add arm styling once the footwork is automatic.
                  Even 10 minutes a day creates muscle memory that shows up in
                  class.
                </p>
                <p>
                  <strong className="text-white">Watch social dance videos:</strong>{" "}
                  Not performances or competitions &mdash; social dancing.
                  Watch how experienced dancers navigate a song, how they
                  connect with their partner, how they play with the music.
                  This trains your eye and gives you inspiration for what your
                  dancing can become.
                </p>
                <p>
                  <strong className="text-white">Go to socials:</strong> This is
                  the single best thing you can do outside of class. Salsa
                  socials are low-pressure events where people of all levels
                  dance together. You&apos;ll get more practice in one night
                  at a social than in a week of solo drilling. Plus, the
                  atmosphere is pure joy &mdash; good music, good people, good
                  energy. Check our{" "}
                  <Link
                    href="/events"
                    className="text-red-500 hover:text-red-400 underline underline-offset-4"
                  >
                    events page
                  </Link>{" "}
                  to find socials near you.
                </p>
                <p>
                  Remember: practice doesn&apos;t have to be formal. Dance in
                  your kitchen. Groove while waiting for the bus. Let the music
                  move you whenever it finds you. <em>El ritmo no espera
                  &mdash; y t&uacute; tampoco deber&iacute;as.</em>
                </p>
              </div>
            </div>

            <div className="section-divider" />

            {/* FAQ Recap */}
            <div className="space-y-8">
              <h2 className="font-serif italic text-3xl md:text-4xl text-white">
                Quick Answers for New Salsa Dancers
              </h2>

              <div className="space-y-6">
                <div className="bg-[#111] border border-white/10 rounded-xl p-8">
                  <h3 className="text-white font-semibold text-xl mb-3">
                    Do I need a partner for salsa classes?
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    No. Group classes rotate partners throughout the lesson.
                    You&apos;ll dance with everyone and learn faster because of
                    it. Solo dancers are always welcome.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-8">
                  <h3 className="text-white font-semibold text-xl mb-3">
                    What should I wear to my first salsa class?
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Comfortable, breathable clothes and smooth-soled shoes. Avoid
                    rubber-soled sneakers (they grip too much) and open-toed
                    shoes. Bring water and keep jewelry minimal.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-8">
                  <h3 className="text-white font-semibold text-xl mb-3">
                    How long until I can actually dance at a social?
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Most people feel comfortable at socials within 3-6 months
                    of consistent classes. But you can (and should) attend
                    socials from the very beginning &mdash; even watching and
                    dancing a few songs builds confidence.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-8">
                  <h3 className="text-white font-semibold text-xl mb-3">
                    How much do salsa classes cost?
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Drop-in classes run $12-$30. Class packages (3-4 classes)
                    cost $57-$65. Many studios offer a free first class. There
                    are affordable options for every budget.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-8">
                  <h3 className="text-white font-semibold text-xl mb-3">
                    I grew up dancing salsa &mdash; can I skip the beginner
                    course?
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Check with the studio. Cultural experience with salsa is
                    valuable, but formal instruction builds on a specific
                    technical foundation. A placement assessment is the best way
                    to find your level.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-xl p-8">
                  <h3 className="text-white font-semibold text-xl mb-3">
                    What style of salsa should I start with?
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    On1 (LA style) is the most common recommendation for
                    beginners because its timing is intuitive. But the best
                    style to start with is the one taught near you. Read our{" "}
                    <Link
                      href="/learn/salsa-styles"
                      className="text-red-500 hover:text-red-400 underline underline-offset-4"
                    >
                      salsa styles guide
                    </Link>{" "}
                    for a full comparison.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
            Your First Class Is Waiting
          </h2>
          <p className="text-lg text-white/70 mb-8">
            You&apos;ve read the guide. You know what to expect. Now it&apos;s
            time to feel it for yourself. Find a class, show up, and let the
            music do the rest. <em>Te esperamos en la pista.</em>
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
              Learn About Salsa Styles
            </Link>
          </div>
          <p className="mt-6 text-white/50">
            Want to understand the music behind the movement?{" "}
            <Link
              href="/learn/musicality"
              className="text-red-500 hover:text-red-400 underline underline-offset-4"
            >
              Read our musicality guide
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
