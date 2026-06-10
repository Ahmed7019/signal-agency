import CaseStudyClient, { CaseStudyData } from "./CaseStudyClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "hive" },
    { slug: "noor" },
    { slug: "volta" }
  ];
}

const CASE_STUDIES: Record<string, CaseStudyData> = {
  hive: {
    slug: "hive",
    client: "Hive Apparel Co.",
    tag: "Social Growth",
    services: ["Content Strategy", "Short-Form Video", "Paid Social Amplification"],
    theme: {
      bgClass: "bg-[#0c0c0b]",
      textClass: "text-[#f5f5f4]",
      accentText: "text-[#e8501a]",
      accentBg: "bg-[#e8501a]",
      cardBg: "bg-[#161615]",
      borderColor: "border-[#262624]",
      shadowColor: "rgba(232, 80, 26, 0.15)",
      tableHeaderBg: "bg-neutral-900",
      mutedText: "text-[#7a7570]"
    },
    hero: {
      eyebrow: "Case Study · Fashion & DTC",
      headline: "They had a great product.\nNo one knew it existed.",
      subheadline: "How SIGNAL turned Hive Apparel Co. from a quiet Instagram account into a 280,000-strong community — and a sold-out launch.",
      resultStrip: ["280K followers", "14M video views", "4.2x ROAS", "72hr sellout"]
    },
    clientSection: {
      description: "Hive Apparel Co. is a Dubai-based direct-to-consumer fashion brand built around a simple, bold idea: elevated streetwear for people who move through the world with intention. The clothes were sharp. The vision was clear. The founders had poured everything into the product.\n\nBut in a market flooded with fashion content, having a great product isn't enough. You also need an audience that believes in it — before it ever goes on sale.\n\nWhen Hive came to SIGNAL eight months before their planned launch, they had 12,000 Instagram followers, a handful of sporadic posts, and a deadline that wasn't moving."
    },
    challengeSection: {
      pullQuote: "We knew what we were building. We just didn't know how to make the world care about it yet.",
      author: "Layla Al-Rashid, Co-Founder, Hive Apparel Co.",
      paragraphs: [
        "Hive didn't have a product problem. They had an attention problem.",
        "Their existing content was polished but passive — beautiful images that sat quietly in a feed, waiting to be discovered. There was no narrative pull, no reason for a stranger to stop scrolling, and no mechanism for turning a viewer into a follower or a follower into a buyer.",
        "They were eight months from launch with 12,000 followers. Industry benchmarks suggested they needed at least ten times that number to hit their sales targets on day one.",
        "The pressure was real."
      ]
    },
    approachSection: {
      intro: "We started where we always start: with the audience, not the content.\n\nBefore we opened a single app or wrote a single script, we spent two weeks studying the people Hive was built for. Who were they? Where did they spend time online? What made them stop scrolling? What made them come back? What did they care about that had nothing to do with fashion — and how did Hive's values intersect with those things?\n\nWhat we found changed everything.\n\nHive's audience wasn't following fashion brands — they were following founders, subcultures, and ideas. They wanted to feel like they were part of something before it was big. They wanted access, not advertising.\n\nSo we stopped making fashion content. We started making culture content.",
      pillars: [
        {
          number: "01",
          title: "The inside story",
          description: "We documented the brand's journey in real time. The factory visits. The rejected samples. The late nights before the deadline. The moments of doubt and the moments of clarity. We gave the audience a front-row seat to something being built — because people don't just buy products, they buy stories they were part of."
        },
        {
          number: "02",
          title: "Point-of-view content",
          description: "Short-form videos that had nothing to do with products and everything to do with the worldview the brand embodied. Style as identity. Movement as expression. The relationship between what you wear and how you show up. Content that built the brand's intellectual territory before the product even existed."
        },
        {
          number: "03",
          title: "Community-first distribution",
          description: "We identified and partnered with 14 micro-creators whose audiences overlapped precisely with Hive's ideal customer. Not influencers with massive reach — creators with genuine trust. Every partnership was briefed to feel like a personal recommendation, not a sponsored post."
        }
      ],
      conclusion: "Paid social came last, not first. Once we had organic content that was genuinely performing — videos hitting 200K, 500K, 1M views — we used paid to pour fuel on what was already burning."
    },
    executionSection: {
      timeline: [
        {
          period: "Month 1–2",
          title: "Foundation",
          description: "Content strategy locked. Creator partnerships briefed and activated. First three weeks of content produced — a mix of founder story content, product tease, and pure brand POV. No product shots. No 'follow for more.' Just content that earned its place in someone's feed."
        },
        {
          period: "Month 3–4",
          title: "Momentum",
          description: "The first viral moment came in week nine. A 47-second video of the lead founder explaining why he turned down a major distribution deal landed 1.2M views in four days. It wasn't about the clothes. It was about the values. The comment section became a community.\n\nFollower growth accelerated. 12K to 40K. Then 40K to 90K. We were ahead of every benchmark we'd set."
        },
        {
          period: "Month 5–6",
          title: "Community deepening",
          description: "We introduced a content series that gave the audience naming rights over the first collection's colourways. Over 8,000 people participated. The most-voted name became official. We announced it on-camera with the founders. The video hit 2.1M views.\n\nAt this point, Hive didn't have followers. They had advocates."
        },
        {
          period: "Month 7–8",
          title: "Launch preparation",
          description: "Paid social activated at scale across Meta and TikTok. We retargeted every video viewer with product-specific content, sequenced across 14 days. Early access was teased to the most engaged community members. Pre-launch waitlist hit 6,200 people."
        }
      ]
    },
    resultSection: {
      intro: "Launch day arrived. The collection went live at 10am.\n\nBy 10pm, it was gone.\n\n72 hours. Sold out. Every SKU.",
      table: [
        { metric: "Instagram followers", start: "12,000", end: "280,000" },
        { metric: "Organic video views", start: "—", end: "14.3M" },
        { metric: "Paid social ROAS", start: "—", end: "4.2x" },
        { metric: "Launch sell-through", start: "—", end: "100% in 72 hours" },
        { metric: "Email waitlist built", start: "—", end: "6,200 subscribers" },
        { metric: "Creator partnerships activated", start: "—", end: "14" }
      ],
      conclusion: "The fashion brands that win on social aren't the ones with the biggest budgets or the most posts. They're the ones that make their audience feel like insiders — like they were there before it was big.\n\nHive didn't go viral because they had a great product. They went viral because they built a story worth following. The product was just the natural conclusion of a journey their audience had already taken with them.\n\nContent strategy did what no amount of ad spend could have done alone: it created demand before there was anything to buy."
    },
    testimonial: {
      quote: "SIGNAL didn't just grow our following — they changed how we think about content entirely. For the first time, our social presence actually reflects the quality of what we're building. The launch results spoke for themselves. We sold out in 72 hours — and the DMs we're still getting a month later are from people who feel like they were part of it. That's what SIGNAL gave us. Not just numbers. A community.",
      author: "Layla Al-Rashid, Co-Founder, Hive Apparel Co."
    },
    closingCTA: {
      headline: "Your audience is out there.\nThey just haven't found you yet.",
      body: "If you're building something worth believing in, we'll help you find the people who'll believe in it.",
      buttonText: "Start a conversation"
    }
  },
  noor: {
    slug: "noor",
    client: "Noor Clinic",
    tag: "Healthcare · Paid Ads",
    services: ["Brand Messaging", "Ad Creative", "Paid Social Management"],
    theme: {
      bgClass: "bg-[#FAF6F0]",
      textClass: "text-[#0c0c0b]",
      accentText: "text-[#c2613d]",
      accentBg: "bg-[#c2613d]",
      cardBg: "bg-[#ffffff]",
      borderColor: "border-[#E8E2D9]",
      shadowColor: "rgba(194, 97, 61, 0.08)",
      tableHeaderBg: "bg-neutral-100/50",
      mutedText: "text-[#7a7267]"
    },
    hero: {
      eyebrow: "Case Study · Medical Aesthetics",
      headline: "Same budget.\nThree times the bookings.",
      subheadline: "How SIGNAL helped Noor Clinic stop wasting ad spend — and start converting the patients who were already looking for them.",
      resultStrip: ["3x bookings", "58% lower cost per lead", "41% more returning clients", "Top 3 local search"]
    },
    clientSection: {
      description: "Noor Clinic is a Dubai-based medical aesthetics practice built around a conviction that's rarer than it sounds: that aesthetic medicine should be led by genuine care, not sales pressure.\n\nDr. Khaled Nour founded the clinic after a decade in reconstructive surgery. He brought surgical precision and a clinical mindset to an industry that often prioritises throughput over trust. Every treatment at Noor is slow, considered, and patient-led. The results speak for themselves — but the marketing hadn't been.\n\nWhen Noor came to SIGNAL, they were spending a solid monthly budget on digital advertising and wondering why the waiting room wasn't full."
    },
    challengeSection: {
      pullQuote: "We were spending well. The numbers just didn't show it. Something between the ad and the appointment was breaking down — and we didn't know what.",
      author: "Dr. Khaled Nour, Founder & Director, Noor Clinic",
      paragraphs: [
        "Noor's ads were getting clicks. They just weren't converting.",
        "The creative was clean. The targeting was reasonable. The offers were competitive. On paper, nothing was obviously wrong. But the cost per booked appointment was high enough to erase the margin on most treatments, and the types of enquiries they were attracting — price-hunters, procedure-shoppers, one-time visitors — weren't becoming loyal patients.",
        "After two prior agency relationships that produced the same results, Dr. Nour was beginning to wonder if paid social simply didn't work for a clinic like his.",
        "It did. The ads were just saying the wrong things to the wrong people."
      ]
    },
    whatWeFound: {
      intro: "When we audited Noor's entire marketing footprint — ads, landing pages, social content, Google presence, and patient communications — a pattern emerged almost immediately.\n\nEvery touchpoint was leading with procedure. Botox. Fillers. Lasers. Prices. Offers. The language was transactional before the relationship had even started.\n\nIn a category where the single biggest barrier to booking is trust, Noor was skipping trust entirely and going straight to the sell.\n\nThe patients Dr. Nour actually wanted to attract — thoughtful, informed, willing to invest in long-term results, likely to return — weren't responding to transactional ads. They were doing research. They were reading reviews. They were looking for evidence that a clinic understood them before they'd hand over their face.\n\nNoor's competitors were all saying the same things. Better prices. Latest technology. Certified practitioners. Nobody was building trust. That gap was the opportunity."
    },
    approachSection: {
      intro: "We rebuilt Noor's entire marketing voice from scratch before we changed a single targeting parameter.",
      pillars: [
        {
          number: "01",
          title: "The messaging shift",
          description: "Out went the procedure-led language. In came patient-led language — content that spoke to how people felt about their appearance, what they were hoping for, and what they were afraid of. We wrote ad copy that acknowledged the anxiety of the first consultation. That normalised asking questions before committing. That described outcomes in human terms rather than clinical ones. That positioned Dr. Nour's surgical background not as a credential bullet-point, but as a reason to feel genuinely safe."
        },
        {
          number: "02",
          title: "The creative rebuild",
          description: "New visual creative across all paid placements — designed around warmth, credibility, and the faces of real patients (with consent) rather than stock photography and promotional overlays. Video creative centred on Dr. Nour himself: short, direct pieces where he explained his philosophy, debunked common misconceptions, and answered the questions patients were too nervous to ask at a consultation."
        },
        {
          number: "03",
          title: "The funnel restructure",
          description: "We introduced a sequenced ad approach for cold audiences: awareness content first (the videos), followed by educational retargeting (procedure explainers, before-and-after context, patient stories), followed by a direct booking prompt only after a prospect had engaged multiple times. Nobody was asked to book on first contact. Trust was built before the ask."
        }
      ],
      conclusion: "The landing page was rebuilt around a single goal: reduce anxiety and create confidence. Less promotional copy. More honesty. A clear explanation of what to expect at a first consultation. A personal note from Dr. Nour. Real patient testimonials with real names and real stories."
    },
    executionSection: {
      timeline: [
        {
          period: "Weeks 1–2",
          title: "Audit and strategy",
          description: "Full audit of all active campaigns, creative assets, landing pages, and patient communications. Competitor analysis across 11 local clinics. Strategy brief and new messaging framework delivered and approved."
        },
        {
          period: "Weeks 3–4",
          title: "Creative production",
          description: "New ad creative produced: 4 video ads featuring Dr. Nour, 12 static ad variants, 3 landing page variants. All copy rewritten across every patient touchpoint."
        },
        {
          period: "Week 5",
          title: "Launch and test",
          description: "New campaigns launched alongside a 30% holdback of old creative for controlled comparison. Within eight days, the new creative was outperforming the old on every metric. The holdback was paused."
        },
        {
          period: "Weeks 6–12",
          title: "Optimise and scale",
          description: "Weekly performance reviews. Continuous creative testing — headline variations, audience refinements, offer testing. Budget held constant throughout. Every efficiency gain came from creative and strategy, not increased spend."
        }
      ]
    },
    resultSection: {
      intro: "Three months after launch, Noor Clinic's booking calendar was full.\n\nNot full-ish. Full. With a waitlist.",
      table: [
        { metric: "Monthly bookings", start: "Baseline", end: "3x baseline" },
        { metric: "Cost per booked lead", start: "Baseline", end: "-58%" },
        { metric: "Return patient rate", start: "Baseline", end: "+41%" },
        { metric: "Ad budget", start: "X", end: "X (unchanged)" },
        { metric: "Local search ranking", start: "Outside top 10", end: "Top 3" },
        { metric: "Consultation-to-booking rate", start: "—", end: "+67%" }
      ],
      conclusion: "The type of patient changed too. Enquiries from price-hunters dropped. Enquiries from patients who had watched multiple videos, read the patient stories, and arrived at their consultation having already decided they trusted the doctor — those went up significantly.\n\nThe best patients don't need to be sold to. They need to be reassured. Once Noor's marketing started doing that, everything else followed."
    },
    testimonial: {
      quote: "We'd worked with two agencies before SIGNAL and both overpromised and underdelivered. SIGNAL was the first team that actually diagnosed the problem before prescribing a solution. They told us our messaging was wrong before they changed a single targeting setting — and they were right. Within three months, our calendar was full for the first time since we opened. The patients coming in now are the patients we built this clinic for. That's not a small thing.",
      author: "Dr. Khaled Nour, Founder & Director, Noor Clinic"
    },
    closingCTA: {
      headline: "You don't have a spend problem.\nYou might have a message problem.",
      body: "If your ads are running and your phone isn't ringing, the issue is almost never the budget. Let's find out what it actually is.",
      buttonText: "Book a free audit call"
    }
  },
  volta: {
    slug: "volta",
    client: "Volta",
    tag: "B2B · Lead Generation",
    services: ["LinkedIn Strategy", "Thought Leadership Content", "Paid Lead Generation"],
    theme: {
      bgClass: "bg-[#F8FAFC]",
      textClass: "text-[#0F172A]",
      accentText: "text-[#0f766e]",
      accentBg: "bg-[#0f766e]",
      cardBg: "bg-[#ffffff]",
      borderColor: "border-[#E2E8F0]",
      shadowColor: "rgba(15, 118, 110, 0.08)",
      tableHeaderBg: "bg-slate-100",
      mutedText: "text-[#475569]"
    },
    hero: {
      eyebrow: "Case Study · B2B SaaS · Enterprise",
      headline: "They had a product that solved\na real problem.\nNo one in procurement knew their name.",
      subheadline: "How SIGNAL helped Volta build a LinkedIn presence that put them in the room with enterprise decision-makers — and generated $180K in pipeline in 90 days.",
      resultStrip: ["22 enterprise leads", "6 pilots closed", "$180K pipeline", "14K LinkedIn followers"]
    },
    clientSection: {
      description: "Volta is a logistics intelligence platform built for one of the most overlooked inefficiencies in modern supply chains: the gap between what operations directors think is happening in their logistics network and what is actually happening.\n\nThe platform integrates with existing systems, surfaces real-time visibility across the entire supply chain, and gives operations teams the data they need to make decisions in hours instead of weeks. For companies managing complex distribution at scale, the ROI is significant and measurable.\n\nThe product was strong. The team was experienced. Two enterprise pilots had already validated product-market fit.\n\nBut Volta was invisible. Their ICP — logistics operations directors, supply chain VPs, and COOs at mid-to-large enterprises — had never heard of them. And in enterprise B2B, you cannot sell to someone who doesn't know you exist."
    },
    challengeSection: {
      pullQuote: "We knew we had something genuinely valuable. But our sales team was spending most of their time on cold outreach that barely got replies. We needed a different way in.",
      author: "Omar Siddiqui, CEO, Volta",
      paragraphs: [
        "Enterprise B2B sales has a trust problem that most companies try to solve with volume. More cold emails. More LinkedIn connection requests. More SDR calls to people who didn't ask to be called.",
        "Volta had tried this. The results were exhausting and incremental.",
        "The problem wasn't the product. It was the approach. Enterprise decision-makers — especially in logistics, a notoriously relationship-driven industry — don't buy from companies they've never heard of. They buy from people they've learned from, respected from a distance, and come to associate with expertise.",
        "The question wasn't how to reach more people. It was how to become the name that the right people already recognised when the sales call came in."
      ]
    },
    whatWeFound: {
      intro: "When we mapped Volta's ideal customer profile in detail — not the job title, but the actual human being doing that job — a clear picture emerged.\n\nThese were people drowning in operational complexity. They spent their days fighting fires they shouldn't have to fight because their visibility into their own networks was poor. They were acutely aware of the problem. They just didn't know there was a solution with Volta's specific capability set.\n\nThey were also spending meaningful time on LinkedIn. Not posting — reading. Consuming. Looking for perspective, frameworks, and intelligence they could use. The content they engaged with wasn't product demos or company announcements. It was point-of-view content from operators who'd seen what they'd seen and had something to say about it.\n\nVolta's CEO, Omar, had 15 years of supply chain experience. He'd lived the exact problems the platform solved. He had a perspective that was genuinely worth sharing. He just hadn't shared it."
    },
    approachSection: {
      intro: "We built a thought leadership engine with Omar's voice at the centre — and a paid amplification strategy to put it in front of the right people at scale.",
      pillars: [
        {
          number: "01",
          title: "The content strategy",
          description: "LinkedIn was the only channel that mattered for this ICP. We went deep on one. We developed a content framework built around three types: Insight posts (weekly long-form posts under Omar's name addressing real supply chain pain points); Pattern posts (shorter, punchier observation content to drive comments); Case and framework posts (deeper content walking through operational challenges)."
        },
        {
          number: "02",
          title: "The distribution engine",
          description: "Organic content alone doesn't reliably reach cold audiences. We built a paid amplification layer using LinkedIn's targeting to push Volta's best-performing organic posts specifically to logistics operations directors, supply chain VPs, and COOs at companies with 500+ employees in the GCC and MENA. The ads didn't look like ads. They were posts."
        },
        {
          number: "03",
          title: "The inbound pathway",
          description: "Every piece of content was designed to do one thing: make the right person want to have a conversation with Omar. We built a simple, frictionless response mechanism — a standing offer in the content itself to connect directly. The CTA was never 'book a demo.' It was 'let's talk supply chain.'"
        }
      ],
      conclusion: "The qualification happened in the conversation, not before it."
    },
    executionSection: {
      timeline: [
        {
          period: "Weeks 1–2",
          title: "Voice development and content framework",
          description: "In-depth sessions with Omar to extract his most distinctive perspectives on supply chain operations. Content framework developed and signed off. First three months of content planned in detail."
        },
        {
          period: "Weeks 3–4",
          title: "First content wave",
          description: "First six posts published. Focus on reach and establishing Omar's voice. Paid amplification live on day one for the best-performing organic content."
        },
        {
          period: "Weeks 5–8",
          title: "Momentum phase",
          description: "Post cadence: two to three pieces per week. Response rate to connection requests climbed steadily. First three organic inbound enquiries arrived in week six. Sales team briefed on how to handle the new type of inbound."
        },
        {
          period: "Weeks 9–12",
          title: "Pipeline phase",
          description: "The flywheel was turning. Content that performed was amplified further. New content addressed specific objections surfacing in sales conversations, accelerating the conversion from lead to pilot. Two enterprise pilots closed before day 90."
        }
      ]
    },
    resultSection: {
      intro: "Ninety days after the first post published, Volta's sales team was having more good conversations than at any previous point in the company's history.\n\nNot because they were working harder. Because the people coming to them were different.",
      table: [
        { metric: "LinkedIn followers", start: "800", end: "14,000" },
        { metric: "Avg. post impressions", start: "< 1,000", end: "40,000" },
        { metric: "Qualified inbound leads", start: "~2/month", end: "22 in 90 days" },
        { metric: "Enterprise pilot deals closed", start: "2 (existing)", end: "6 (new)" },
        { metric: "New pipeline value", start: "—", end: "$180,000" },
        { metric: "Cold outreach reply rate", start: "Low", end: "Significantly reduced need" }
      ],
      conclusion: "The last metric is the one Volta's sales team talks about most. Cold outreach didn't stop — but it became dramatically easier when prospects had already seen twenty posts from the CEO and felt like they knew him.\n\nEnterprise sales is a long game. What content does is compress the trust-building phase — so that by the time a sales conversation happens, half the work is already done."
    },
    testimonial: {
      quote: "I was genuinely skeptical that LinkedIn content could generate enterprise leads. Our product isn't an impulse buy — these are six-figure decisions that take months. But within 90 days, we had qualified conversations with decision-makers at companies we'd been trying to cold-email for two years. The difference was that they already knew who we were. They'd been reading Omar's posts. In one conversation, a VP told us she'd been following the content for weeks and had been waiting for the right moment to reach out. That doesn't happen from a cold email. That's what SIGNAL built for us. I'm not skeptical anymore.",
      author: "Omar Siddiqui, CEO, Volta"
    },
    closingCTA: {
      headline: "Your buyers are on LinkedIn.\nAre they reading anything with your name on it?",
      body: "If your sales team is still introducing your company to people who should already know you, content strategy is the most efficient investment you can make.",
      buttonText: "Let's talk about your pipeline"
    }
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  
  const data = CASE_STUDIES[slug];
  
  if (!data) {
    notFound();
  }

  return <CaseStudyClient data={data} />;
}
