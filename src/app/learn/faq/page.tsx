import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salsa Dancing FAQ — Your Questions Answered | Bad Bunny Salsa",
  description:
    "Answers to the most common questions about salsa dancing — cost, partners, what to wear, how long to learn, styles, and more. Everything you need to know before you dance.",
  alternates: { canonical: "/learn/faq" },
  openGraph: {
    title: "Salsa Dancing FAQ — Your Questions Answered | Bad Bunny Salsa",
    description:
      "Answers to the most common questions about salsa dancing — cost, partners, what to wear, how long to learn, styles, and more.",
    url: "https://badbunnysalsa.com/learn/faq",
  },
};

const faqs = [
  {
    question: "Do I need a partner for salsa group classes?",
    answer:
      "No, you do not need a partner for group salsa classes. Most studios have students rotate partners throughout the class, so everyone gets to practice with different people. In fact, group classes are one of the best ways to meet people and build friendships in the salsa community. Rotating partners also makes you a stronger dancer because you learn to adapt to different leading and following styles. Many lifelong dance partnerships and friendships start in group classes. If you do have a partner who wants to join, that's great too — but it's absolutely not a requirement. Just show up solo and you'll fit right in.",
  },
  {
    question: "Do I need experience to take salsa lessons?",
    answer:
      'No experience is needed to start salsa lessons. Most studios offer dedicated beginner classes designed for people who have never danced before. "I have two left feet" is the most common thing instructors hear from new students — they hear it every single week, and every single week those same students are dancing by the end of class. Beginner courses break everything down into small, manageable steps. You\'ll learn basic timing, footwork, and simple turn patterns before anything complex. The only requirement is showing up with an open mind and a willingness to try. Everyone in that beginner class is in the same boat.',
  },
  {
    question: "I grew up dancing salsa at home. Do I need the beginner course?",
    answer:
      "It depends on the studio, so check with them directly about prerequisites. Growing up dancing salsa at family parties or at home gives you a wonderful cultural connection to the music and movement — but it doesn't always translate directly to formal partner dancing techniques. Studios build their curriculum on specific fundamentals: timing, lead-follow mechanics, frame, footwork patterns, and turn technique. These are structured skills that even experienced social dancers sometimes haven't formalized. Some studios offer placement assessments or let you try an intermediate class to see if it's the right fit. Don't take it personally if they recommend starting at the beginning — it's about building a solid foundation, not questioning your background.",
  },
  {
    question: "What should I wear to a salsa class?",
    answer:
      "Wear comfortable clothes that let you move freely — nothing too tight or too baggy. For shoes, smooth-soled shoes work best. Leather-soled dress shoes, dance shoes, or even clean socks over sneakers in a pinch. Avoid heavy sneakers, hiking boots, or anything with rubber grip soles — they'll catch on the floor and make turns difficult and potentially hurt your knees. Bring a water bottle and consider wearing layers since you'll warm up quickly. Skip heavy jewelry that could catch on your partner. If you plan to stick with salsa, investing in a pair of proper dance shoes makes a noticeable difference in comfort and control.",
  },
  {
    question: "How much do salsa lessons cost?",
    answer:
      "Salsa lesson prices typically range from $12 to $30 per class depending on the studio, location, and class type. Many studios offer package deals that bring the per-class cost down significantly — for example, 4-class packages around $57 or 3-class bundles around $65. Punch cards and monthly memberships are also common. Drop-in rates are almost always more expensive than buying a package, so if you plan to attend regularly, a bundle is the smarter move. Private lessons cost more — usually $60 to $120 per hour — but offer personalized attention that can accelerate your progress. Most studios let you try a first class at a discounted rate or even free.",
  },
  {
    question: "What is the typical schedule for salsa classes?",
    answer:
      "Most salsa classes run on weeknights, typically starting around 7pm, making them easy to fit in after work. Saturday and Sunday classes are common too, usually in the morning or afternoon. Studios often stack levels — beginner at 7pm, intermediate at 8pm — so you can eventually level up without changing your schedule. Private lessons are usually available during weekday daytime hours by appointment. Social dance events (where you practice what you've learned) typically happen on Friday and Saturday nights. Check your local studio's schedule for exact times — most post their weekly calendar online and update it seasonally.",
  },
  {
    question: "How long does it take to learn salsa?",
    answer:
      "Most people can dance socially with confidence in 3 to 6 months of consistent classes. That means you'll know the basic step, a handful of turn patterns, and enough musicality to enjoy a night out dancing. Reaching a high level of proficiency — smooth leading or following, complex combinations, strong musicality, and style — takes 3 to 7 years of dedicated practice. But here's what matters: the fun starts from day one. You don't need to be \"good\" to enjoy salsa. Even your first class will have you moving to the music and smiling. Progress isn't linear either — some weeks you'll feel like you leveled up overnight, others you'll feel stuck. That's completely normal.",
  },
  {
    question: "How long does it take to advance to the next level?",
    answer:
      "A typical beginner cycle runs 3 to 6 months, depending on the studio's curriculum structure. At the end of the cycle, most studios do some form of assessment — either a formal evaluation or an instructor recommendation — before moving you to the next level. The best thing you can do is check with your instructor early on for clear expectations about what's needed to advance. Consistent attendance matters more than natural talent. Students who show up every week, practice between classes, and attend social dances tend to advance faster. Don't rush it though — solid fundamentals in the beginner level make everything easier later.",
  },
  {
    question: "Can I learn salsa online?",
    answer:
      "Online salsa resources can be a great supplement to your learning, but they can't replace in-person classes for social dancing. Salsa is a partner dance — it requires real-time physical connection, lead-follow communication, and spatial awareness that a screen simply can't replicate. That said, online videos are excellent for reviewing footwork, learning solo shines, understanding <a href=\"/learn/musicality\">musicality</a>, and studying styling between classes. The best approach: take in-person classes for your core learning and use online content to reinforce what you've learned and explore new ideas. Think of online as your study hall, not your classroom.",
  },
  {
    question: "How often should I take classes to improve?",
    answer:
      "For steady, noticeable progress, aim for at least one class per week. Two to three classes per week will accelerate your improvement significantly — especially if you mix group classes with social dancing practice. But here's the thing most people miss: what you do between classes matters just as much as the classes themselves. Practicing your basic step at home for 10 minutes a day, listening to salsa music during your commute, and attending social dances to apply what you've learned — these habits compound. Attending socials is especially powerful because you're dancing with different partners, adapting in real time, and building the muscle memory that only comes from repetition.",
  },
  {
    question: "What's the difference between Salsa On1 and On2?",
    answer:
      'The main difference is the break beat. In Salsa On1 (LA style), the leader breaks forward on count 1 — the strongest downbeat in the music — giving it a punchy, dramatic feel. In Salsa On2 (New York style), the leader breaks on count 2, syncing with the conga drum\'s tumbao pattern for a smoother, more percussion-driven flow. Both are linear styles danced in a slot. The footwork sequence is nearly identical — the shift is in where each step falls in the musical phrase. Most beginners start with On1 because the timing is easier to hear. Read our <a href="/learn/salsa-styles/on1-vs-on2">full On1 vs On2 breakdown</a> for a detailed comparison.',
  },
  {
    question: "What are the main salsa dance styles?",
    answer:
      'There are four dominant salsa styles danced around the world. Salsa On1 (LA style) is the most widely taught, with a punchy forward break on beat 1. Salsa On2 (New York Mambo) breaks on beat 2 for a smoother, more musical feel. Salsa Cale\u00f1a, from Cali, Colombia, features lightning-fast footwork with minimal upper body movement. And Casino (Cuban salsa) is danced in a circular motion with Afro-Cuban body movement and often incorporates group formations called Rueda de Casino. Each style has its own community, music preferences, and culture. Explore our <a href="/learn/salsa-styles">complete salsa styles guide</a> for an in-depth look at each one.',
  },
  {
    question: "Which salsa style should I learn first?",
    answer:
      "Most beginners start with Salsa On1, and for good reason — it's the most widely taught style worldwide, so you'll find classes almost anywhere. The forward break on count 1 lands on the strongest beat in the music, making it the most intuitive timing for new dancers to hear and feel. On1 also has the largest social dancing community, meaning you'll have the most opportunities to practice. That said, if you're in New York City or an area with a strong On2 scene, starting with On2 is perfectly fine too. The fundamentals of partner connection, timing, and musicality transfer between styles. Start with whatever is available and feels right — you can always expand later.",
  },
  {
    question: "What's the difference between salsa and bachata?",
    answer:
      "Salsa and bachata are different dances with different music, rhythm, and movement. Salsa is faster, danced to an 8-count rhythm with quick-quick-slow timing and a lot of turn patterns. Bachata is slower and more sensual, danced to a 4-count side-to-side basic with a signature hip tap on beat 4. The music is completely different too — salsa uses horns, congas, and piano-driven arrangements rooted in Afro-Cuban traditions, while bachata features guitar-driven melodies from the Dominican Republic. Many dancers learn both because they're often played at the same events and socials. Knowing both means you'll never have to sit out a song. They complement each other well — salsa builds your turn technique while bachata develops your body movement and connection.",
  },
  {
    question: "What is a salsa social?",
    answer:
      "A salsa social is an event where dancers gather to dance — not a class, not a performance, just social dancing. A DJ plays salsa music (and often bachata, merengue, and other Latin genres), and dancers ask each other to dance, rotate partners, and enjoy the music together. Most socials happen on Friday and Saturday nights at dance studios, restaurants, or dedicated event spaces. Some include a beginner lesson before the open dancing starts. Socials are where everything you learn in class comes alive. It's casual, welcoming, and the whole point is to have fun. You don't need to be advanced — many socials have dancers of all levels. Just show up, ask someone to dance, and let the music do the rest.",
  },
  {
    question: "How do I ask someone to dance at a social?",
    answer:
      'It\'s simpler than you think. Extend your hand, make eye contact, smile, and ask "Would you like to dance?" or "\u00bfQuieres bailar?" That\'s it. In salsa culture, dancing with strangers is not just normal — it\'s the entire point. Nobody expects you to know someone before asking. Most experienced dancers are happy to dance with beginners because they remember being new themselves. A few tips: approach between songs (not mid-dance), be friendly and relaxed, and don\'t take it personally if someone says no — they might just be taking a break. After the dance, a simple "thank you" is the standard. Then go ask someone else.',
  },
  {
    question: "Is it okay to say no to a dance?",
    answer:
      'Yes, always. A polite "Not right now, thank you" is perfectly acceptable, and no explanation is needed. You might be tired, need water, want to rest your feet, or simply not feel like dancing that particular song. All valid. The unwritten etiquette is: if you say no to one person, don\'t immediately accept a dance from someone else for that same song — it comes across as rude. But otherwise, declining is completely fine and everyone understands. Consent matters on the dance floor just as much as anywhere else. A good dance community respects boundaries without question.',
  },
  {
    question: "How do you count salsa music?",
    answer:
      'Salsa music follows an 8-count structure: count steadily from 1 through 8, then repeat. Dancers step on beats 1-2-3 and 5-6-7, pausing (holding) on beats 4 and 8. The pattern is: quick-quick-slow, quick-quick-slow. Beat 1 is the strongest downbeat — you\'ll often hear a horn hit, a piano chord, or a rhythmic accent that marks it. The conga pattern (tumbao) accents beats 2 and 6, which is why On2 dancers break on those beats. Learning to hear the 1 is the first and most important musicality skill. Once you can find it, everything else falls into place. Check out our <a href="/learn/musicality">full musicality guide</a> for listening exercises and song breakdowns.',
  },
  {
    question: "What's the best salsa music for beginners?",
    answer:
      'Start with songs that have a clear, steady rhythm and an obvious beat 1. Some classics that make counting easy: Celia Cruz "Quimbara," Marc Anthony "Vivir Mi Vida," H\u00e9ctor Lavoe "Aguanile," and Joe Arroyo "La Rebelion." These tracks have strong rhythmic patterns without too many breaks or tempo changes that can confuse new dancers. As you get more comfortable, branch out into faster songs, more complex arrangements, and different sub-genres (timba, mambo, salsa dura, salsa rom\u00e1ntica). Listening to salsa outside of class — in the car, while cooking, at the gym — trains your ear even when your feet aren\'t moving. Visit our <a href="/learn/musicality">musicality guide</a> for a full recommended playlist.',
  },
  {
    question: "Do I need to understand Spanish to dance salsa?",
    answer:
      "Not at all. Salsa music is universal — your body responds to rhythm, not lyrics. Dancers from every background and language connect to the same beats, the same energy, the same joy. You don't need to understand a single word to feel the conga pattern hit your chest or to know when the chorus is about to drop. That said, understanding the lyrics does add another beautiful layer of connection and expression to your dancing. When you know a song is about heartbreak, celebration, or longing, it changes how you move. Many dancers pick up Spanish naturally just from listening to salsa music over time. But it's a bonus, not a requirement. The dance floor speaks its own language.",
  },
];

const sections = [
  { title: "Getting Started", start: 0, end: 4 },
  { title: "Cost & Schedule", start: 4, end: 6 },
  { title: "Learning & Progress", start: 6, end: 10 },
  { title: "Salsa Styles", start: 10, end: 14 },
  { title: "Social Dancing", start: 14, end: 17 },
  { title: "The Music", start: 17, end: 20 },
];

export default function FaqPage() {
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
        name: "FAQ",
        item: "https://badbunnysalsa.com/learn/faq",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]*>/g, ""),
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, faqSchema]),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-4">
          FAQ
        </p>
        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Salsa Dancing FAQ
        </h1>
        <p className="text-xl md:text-2xl text-white/70 italic max-w-2xl mx-auto">
          Every question you&apos;re thinking &mdash; answered.
        </p>
      </section>

      {/* Q&A Sections */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, sectionIndex) => (
            <div key={section.title}>
              {sectionIndex > 0 && <div className="section-divider mb-16" />}

              {/* Section Heading */}
              <div className="mb-10">
                <p className="uppercase tracking-[0.2em] text-sm text-red-600 mb-2">
                  {section.title}
                </p>
                <div className="w-12 h-px bg-red-600/50" />
              </div>

              {/* Q&A Cards */}
              <div className="space-y-6">
                {faqs.slice(section.start, section.end).map((faq) => (
                  <div
                    key={faq.question}
                    className="bg-[#111] border border-white/10 rounded-xl p-8"
                  >
                    <h2 className="text-white text-xl font-semibold mb-4">
                      {faq.question}
                    </h2>
                    <div
                      className="text-white/80 leading-relaxed [&_a]:text-red-500 [&_a]:hover:text-red-400 [&_a]:underline [&_a]:underline-offset-4"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* CTA */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            We&apos;re here to help. Reach out directly or come see us in
            person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full btn-primary text-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/events"
              className="inline-block px-8 py-4 rounded-full btn-outline text-lg"
            >
              Find Events
            </Link>
            <Link
              href="/partner"
              className="inline-block px-8 py-4 rounded-full btn-outline text-lg"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
