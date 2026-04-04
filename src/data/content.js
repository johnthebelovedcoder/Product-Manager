import React from 'react';

/**
 * BI-LEVEL STRATEGY:
 * 1. Professional Identity: Positioning as a Product Manager who bridges business goals with technical execution.
 * 2. Narrative Structure: Shifting from "what was built" to "why it matters" and "how it was led."
 */

export const projects = [
    {
        id: 1,
        title: "CredBevy Fintech Platform",
        description: "Owned product strategy across two dashboards, a mobile app, and marketing site. Ran A/B tests that drove a 22% improvement in activation rate from simplified onboarding.",
        tags: ["Fintech", "Growth", "Product Strategy"],
        image: "/assets/credbevy-hero-v2.png",
        link: "#",
        deviceType: "mobile",
        metadata: {
            client: "CredBevy Inc",
            industry: "Micro Lending",
            type: "Product Ecosystem",
            year: "2022 – Present"
        },
        gallery: [
            "/assets/credbevy-screen-1.png",
            "/assets/credbevy-screen-2.png",
            "/assets/credbevy-screen-3.png",
            "/assets/credbevy-dashboard-1.png",
            "/assets/credbevy-dashboard-2.png"
        ],
        caseStudy: {
            overview: "CredBevy is a loan marketplace connecting borrowers with multiple lenders across Nigeria. When I joined as Product Manager, the platform had a fundamental mismatch: borrowers were applying for loans they'd never qualify for, and lenders were drowning in low-quality applications. Both sides of the marketplace were frustrated. I owned product strategy and execution across the entire ecosystem — two lender-facing dashboards (admin and analytics), a consumer mobile app, and the marketing website. The product served 15+ lending partners and processed thousands of applications monthly.",
            goal: "Improve activation rate on the borrower app and increase application quality for lenders — without adding friction. Secondary goals included reducing lender screening time and increasing the overall qualified application volume across the marketplace.",
            challenge: "The onboarding funnel had a 70%+ drop-off rate between landing page and loan disbursement. Borrowers didn't understand eligibility criteria before starting applications, leading to repeated rejections and churn. Lenders had no standardized way to communicate their lending criteria to the platform, so they spent 10+ hours per week manually screening applications that didn't meet their basic requirements. The engineering team was shipping features every sprint, but metrics barely moved because we were optimizing the wrong part of the funnel. Stakeholder pressure to increase top-of-funnel volume made it difficult to argue for quality-first improvements.",
            strategy: "I led a data-driven UX overhaul starting with three parallel research tracks: borrower interviews, lender interviews, and a full funnel audit. The key insight: borrowers needed self-diagnostic tools before applying, not after rejection. We restructured onboarding to surface eligibility signals early through a lightweight pre-qualification flow. I then ran a series of A/B tests to validate each change incrementally, shipping behind feature flags to minimize risk. The broader strategy was to shift the team culture from 'ship more features' to 'ship features that move the needle.'",
            leadership: "Defined product vision and wrote detailed PRDs for each release cycle, aligning a cross-functional team of 8 (3 engineers, 1 designer, 1 QA, 1 marketing lead, and myself) around shared OKRs. Managed a backlog of 120+ items by implementing a scoring framework that balanced user impact, technical debt, and business KPIs. Coordinated go-to-market strategy across product, engineering, and marketing for three major launches. Established a bi-weekly stakeholder demo cadence that increased leadership confidence in the product direction and reduced ad-hoc feature requests by 60%.",
            sections: [
                {
                    title: "01. The Problem I Started With",
                    content: "When I took over the product, I spent my first two weeks living in the data. Mixpanel told a clear story: 70% of users who landed on the application page never completed it. Of those who did, 40% were rejected within 24 hours because they didn't meet basic eligibility criteria. Lenders were spending an average of 12 hours per week manually reviewing applications that should never have reached them. The business team was pushing for more marketing spend to drive top-of-funnel volume, but my analysis showed that pouring more users into a leaky funnel would waste budget and further damage lender relationships. My hypothesis was controversial: we needed fewer applications, but better ones. Improving quality would naturally improve conversion because borrowers who understood their eligibility upfront would be more likely to complete the process. This meant deprioritizing features that drove volume — a hard sell to stakeholders who were measured on growth."
                },
                {
                    title: "02. Discovery & Research",
                    content: "I designed a research plan with three parallel tracks to triangulate the problem from every angle. Track 1: I conducted 12 user interviews with borrowers who had started but abandoned applications. The dominant theme was confusion — they didn't understand what factors determined their eligibility, so they applied blindly and got rejected repeatedly. Track 2: I interviewed 5 lending partners to understand their screening process. Every lender had different criteria, and none had a standardized way to communicate those criteria to the platform. Track 3: I performed a full funnel audit, mapping every step from landing page to loan disbursement, and identified three critical drop-off points: the eligibility check page (35% drop-off), the document upload step (25% drop-off), and the final confirmation screen (15% drop-off). I also benchmarked 8 competing lending platforms across Africa and the US, and found that the highest-converting platforms all offered some form of pre-qualification or eligibility preview before the full application.",
                    list: [
                        "12 borrower interviews with users who abandoned mid-funnel.",
                        "5 lender interviews to understand screening pain points and criteria.",
                        "Full funnel audit: mapped 7 steps, identified 3 critical drop-off points.",
                        "Competitive benchmarking across 8 lending platforms (Africa + US).",
                        "Mixpanel analysis: 70% drop-off, 40% rejection rate post-application."
                    ]
                },
                {
                    title: "03. Decisions & Trade-offs",
                    content: "The pivotal decision was whether to build an eligibility pre-checker — which would add an extra step before the application — or to simplify the existing flow. Conventional product wisdom says adding steps kills conversion. But our research showed that borrowers wanted to know their chances before investing 15 minutes in an application. They'd rather get a quick 'not eligible' signal upfront than waste time and get rejected later. I made the call to build a lightweight pre-qualification flow as the first step, betting that transparency would build trust and improve completion rates among qualified users. The trade-off was engineering time: this meant delaying a lender-requested feature (bulk application export) by one sprint cycle. I justified this to stakeholders by building a simple model: if the pre-checker improved activation by even 10%, the total qualified application volume would increase enough to make the bulk export feature more valuable later. I also decided to ship the pre-checker behind a feature flag and run it as an A/B test rather than a full rollout, which reduced the risk and gave us clean data to validate the hypothesis."
                },
                {
                    title: "04. Execution & Delivery",
                    content: "I wrote a detailed PRD for the pre-qualification flow that included 14 acceptance criteria, 6 edge cases (including users with incomplete credit histories), and three success metrics (activation rate, time-to-qualification, and lender satisfaction score). We built the flow in one sprint and shipped it behind a feature flag, routing 50% of new users to the test variant. We ran the A/B test for 3 weeks, collecting data on 2,400+ users. The results exceeded expectations: the test variant showed a 22% improvement in activation rate, a 35% reduction in rejection rate, and a 15% decrease in average time-to-qualification. We rolled out to 100% of users the following sprint. After that win, I led a broader UX overhaul of the remaining onboarding steps — document upload, confirmation screen, and post-application tracking — using the same research-then-test methodology. I also introduced a bi-weekly stakeholder demo cadence that gave leadership visibility into what we were building and why, which reduced ad-hoc feature requests significantly.",
                    list: [
                        "Wrote PRDs with 14 acceptance criteria, 6 edge cases, and 3 success metrics per release.",
                        "Shipped behind feature flags; ran 3-week A/B test with 2,400+ users.",
                        "Led UX overhaul of 3 additional onboarding steps post-pre-qualification win.",
                        "Established bi-weekly stakeholder demos; reduced ad-hoc requests by 60%.",
                        "Coordinated GTM strategy with marketing for each launch, including in-app messaging and email campaigns."
                    ]
                },
                {
                    title: "05. Results & Impact",
                    content: "The pre-qualification flow delivered a 22% improvement in activation rate and a 35% reduction in application rejection rate. Lenders reported a significant increase in application quality — the average time spent screening applications dropped from 12 hours to under 2 hours per week. But the more important outcome was cultural: the team shifted from shipping features based on stakeholder requests to shipping features validated by user research and data. The product roadmap became more predictable because we were solving real problems, not perceived ones. The bi-weekly demo cadence I established became the standard for all product teams at CredBevy, and the A/B testing framework I introduced is now used for every major feature launch.",
                    impact: {
                        metric: "22% Activation Rate · 35% Fewer Rejections",
                        description: "A/B tested pre-qualification flow reduced onboarding drop-off and increased qualified application volume. Lender screening time dropped from 12 hrs/week to under 2 hrs/week. Bi-weekly stakeholder demos reduced ad-hoc requests by 60%."
                    }
                }
            ]
        }
    },
    {
        id: 2,
        title: "TeenPay Africa — 0 to Launch",
        description: "Founded and led a fintech startup building a financial empowerment app for African teenagers. Defined product vision, wrote all PRDs, and managed the full backlog from ideation to MVP launch.",
        tags: ["Founder", "0→1 Product", "Fintech"],
        image: "/assets/teenpay-hero.png",
        link: "#",
        deviceType: "mobile",
        metadata: {
            client: "TeenPay Africa",
            industry: "Neo-Banking",
            type: "Venture Leadership",
            year: "2021 – 2022"
        },
        gallery: [
            "/assets/teenpay-screen-1.png",
            "/assets/teenpay-screen-2.png",
            "/assets/teenpay-screen-3.png",
            "/assets/teenpay-screen-4.png"
        ],
        caseStudy: {
            overview: "TeenPay was my own startup — a financial empowerment app built for African teenagers, a demographic that traditional banks either ignore or treat as an afterthought. This wasn't a design engagement or a product management role at an existing company. I defined the product vision, the business model, the go-to-market strategy, and the north star metric from zero. I wrote every PRD, led product discovery, managed a cross-functional team of 4 engineers (2 mobile, 1 backend, 1 frontend), and shipped the MVP in 6 months. I also handled regulatory conversations around minor banking, designed the parent-teen account linking mechanism, and grew a pre-launch waitlist of 500+ high-intent users through community outreach. This is the closest thing to a complete PM story you'll find — because I lived every part of it, from the first user interview to the launch decision, including the moments where I had to cut features I loved because the runway wouldn't support them.",
            goal: "Build and launch a financial platform that gives African teenagers real financial autonomy — with parental oversight — and prove product-market fit in a market no one was serving. The north star metric was monthly active teen users, and the business model was built around a freemium tier (basic account + card) with premium features (higher limits, peer transfers, savings challenges) unlocked through subscription.",
            challenge: "This was a two-sided audience problem with real tension: teens wanted independence, privacy, and a frictionless spending experience, while parents needed control, visibility, and trust that their money was safe. Low financial literacy among teens meant the product had to educate while it enabled — it couldn't just be a spending tool. Regulatory compliance around minor banking added complexity: we needed a parent-teen account linking mechanism that satisfied both legal requirements and user experience expectations. And as a founder with limited runway, every feature had to earn its place in the MVP. There was no 'we'll build it later' — if it wasn't in v1, it might never exist.",
            strategy: "I set monthly active teen users as the north star metric and built the entire product around it. The core product strategy was 'gamified literacy' — teens unlocked features (higher spending limits, savings goals, peer transfers) as they demonstrated financial competence through in-app quizzes and responsible spending behavior. This satisfied both audiences: teens got a progression system that felt rewarding and game-like, and parents got evidence that their child was learning responsible money management before gaining access to more powerful features. The monetization strategy was freemium: basic account and card were free, but premium features required a monthly subscription paid by the parent. This aligned incentives — parents only paid when they saw value in their child's financial education.",
            leadership: "As founder and sole product leader, I set company OKRs, defined the business model and monetization strategy, and led a cross-functional team of 4 engineers across mobile (Flutter), backend (Node.js), and frontend (React). I wrote all PRDs, ran sprint planning, managed the full backlog from ideation to MVP, and made every prioritization call. I also handled go-to-market: community outreach in 3 schools, a pre-launch waitlist campaign that grew to 500+ users, and partnerships with parent influencers on Instagram and Twitter. I managed investor conversations, built the pitch deck, and developed a financial model that positioned the company for a pre-seed raise.",
            sections: [
                {
                    title: "01. The Problem I Started With",
                    content: "I noticed a gap that most fintech companies in Africa were blind to: teenagers had money — allowances, gifts, side hustles, small business income — but no good way to manage it digitally. They either used their parents' bank accounts (zero autonomy, constant negotiation for every purchase) or dealt entirely in cash (no safety, no tracking, no financial education). Parents, meanwhile, wanted to teach their kids financial responsibility but had no systematic tools to do it. They gave cash allowances with no visibility into spending, or they refused digital banking entirely out of fear. The problem wasn't just a missing app — it was a missing mental model for how teens should learn to manage money in a digital-first economy. I started TeenPay because I believed the company that solved this first would own a generation of financial customers. The timing was right: smartphone penetration among African teens was exploding, mobile money infrastructure was maturing, and parents were increasingly comfortable with digital financial tools after the pandemic."
                },
                {
                    title: "02. Discovery & Research",
                    content: "I conducted user research with two distinct groups: teenagers (ages 13–19) and their parents. For teens, I ran 20+ informal interviews and surveys across 3 Nigerian cities (Lagos, Abuja, Port Harcourt) to understand spending habits, pain points with existing banking apps, and what 'financial independence' actually meant to them. The findings were revealing: teens didn't just want to spend — they wanted to save for specific goals (phones, laptops, school trips), they wanted to send money to friends, and they wanted to feel grown-up managing their own money. For parents, I explored their concerns about digital banking for minors, what oversight features would make them comfortable, and how they currently taught money management. The research revealed a critical tension: teens wanted privacy ('I don't want my parents seeing every purchase'), but parents wanted transparency ('I need to know where my money is going'). The product had to serve both without alienating either. I also analyzed the competitive landscape — traditional banks had junior accounts, but they were essentially stripped-down adult accounts with zero engagement design. No one was building for the teen experience specifically.",
                    list: [
                        "20+ teen interviews across Lagos, Abuja, and Port Harcourt.",
                        "Parent surveys (80 respondents) exploring trust barriers and oversight needs.",
                        "Competitive analysis of junior accounts at 5 major Nigerian banks.",
                        "Product-market fit hypothesis testing through landing page experiments (12% conversion rate).",
                        "Regulatory research on minor banking requirements in Nigeria."
                    ]
                },
                {
                    title: "03. Decisions & Trade-offs",
                    content: "The hardest decision was scoping the MVP. I had a long list of features teens wanted — peer-to-peer transfers, savings challenges, spending analytics, gamified rewards, bill splitting, international spending — but limited engineering capacity and runway. I made the call to focus on three core flows for v1: (1) account creation with a novel parent-teen account linking mechanism, (2) a virtual debit card with real-time spending notifications to both teen and parent, and (3) a savings goals feature with milestone-based unlocks. Everything else went into the backlog. The rationale was simple: we needed to prove that teens would actually use the product before building the full vision. The most painful cut was peer-to-peer transfers — teens were most excited about this feature, but it introduced regulatory complexity (KYC requirements, fraud risk) that we couldn't handle in v1. I also decided to build the parental oversight dashboard in parallel with the teen app, even though it added significant complexity, because parent trust was the gating factor for adoption. Without parent buy-in, teen acquisition meant nothing. The dashboard included spending summaries, limit controls, and a 'financial report card' that showed parents their child's progress through the gamified literacy modules."
                },
                {
                    title: "04. Execution & Delivery",
                    content: "I wrote every PRD myself — from the onboarding flow (which required a novel parent-teen account linking mechanism that satisfied both usability and regulatory requirements) to the savings goals feature (which needed gamification logic tied to financial education modules). I led sprint planning with a cross-functional team of 4 engineers, managing a backlog of 60+ items and making prioritization calls when scope threatened to expand. The most challenging technical decision was the parent-teen linking flow: we needed a mechanism that was simple enough for a 13-year-old to complete but robust enough to satisfy banking regulations around minor accounts. We landed on a two-step verification: the teen initiated signup with basic info, then the parent received an SMS link to complete KYC and link their funding account. I also handled the go-to-market strategy: community outreach in 3 schools (presentations to parent-teacher associations), a pre-launch waitlist campaign through Instagram and Twitter that grew to 500+ users, and partnerships with 4 parent influencers who shared the product with their audiences. We shipped the MVP in 6 months — on time and within budget — with all three core flows working end-to-end.",
                    list: [
                        "Wrote all PRDs: onboarding, card management, savings goals, parental dashboard.",
                        "Led sprint planning and backlog management across mobile, backend, and frontend.",
                        "Designed parent-teen linking flow: two-step verification (teen init + parent KYC).",
                        "Built pre-launch waitlist to 500+ users through school outreach and social campaigns.",
                        "Defined monetization roadmap: freemium model with premium subscription for advanced features.",
                        "Managed investor conversations: built pitch deck and financial model for pre-seed raise."
                    ]
                },
                {
                    title: "05. Results & Impact",
                    content: "TeenPay validated a real product-market fit signal: African teenagers are ready for digital financial autonomy when given the right tools. We shipped the MVP on time in 6 months, grew a pre-launch waitlist of 500+ high-intent users, and received strong positive feedback from both teens and parents during beta testing. The gamified literacy approach resonated — 78% of beta users completed at least one financial education module, and parents reported that their children were more engaged with money management than ever before. We developed a monetization roadmap that positioned the company for a pre-seed raise, with a clear path to $50K MRR within 18 months of launch. But the most important outcome was personal: I learned what it means to be a PM when the buck actually stops with you. Every decision — from which feature to cut to how to position the product to parents to how to navigate regulatory ambiguity — was mine. That experience fundamentally changed how I approach product management in every role since. I now evaluate every product decision through the lens of 'if this were my company, would I make this call?' — and it's made me a more decisive, more accountable product leader.",
                    impact: {
                        metric: "0 → MVP in 6 Months · 500+ Waitlist",
                        description: "Built a fintech startup from concept to launched product. 78% of beta users completed financial education modules. Grew pre-launch waitlist to 500+ high-intent users. Developed monetization roadmap positioning for pre-seed raise."
                    }
                }
            ]
        }
    },
    {
        id: 3,
        title: "XXOL Care Marketplace",
        description: "Led product discovery and growth strategy for a handyman services marketplace. Redesigned booking and conversion flows, contributing to a 65% revenue increase.",
        tags: ["Marketplace", "Growth", "Conversion Optimization"],
        image: "/assets/xxol-hero.png",
        link: "#",
        deviceType: "mobile",
        metadata: {
            client: "XXOL Care",
            industry: "On-Demand Services",
            type: "Marketplace Platform",
            year: "2021 – 2022"
        },
        gallery: [
            "/assets/xxol-screen-1.png",
            "/assets/xxol-screen-2.png",
            "/assets/xxol-screen-3.png"
        ],
        caseStudy: {
            overview: "XXOL Care is a marketplace connecting consumers with skilled service providers — plumbers, electricians, cleaners, carpenters, and other domestic professionals across Nigerian cities. When I joined as Product Manager, the platform had a classic two-sided marketplace problem: users were browsing but not booking, and providers were underutilized despite having capacity. I owned product discovery, the growth strategy, and the redesign of the core booking and conversion flows across both the consumer app and the provider app. The result was a 65% revenue increase over two quarters, driven by reducing friction between service discovery and booking confirmation. I also defined the provider onboarding improvements that increased supply-side growth by 40%.",
            goal: "Increase booking conversion rate and provider utilisation by removing friction from the service discovery-to-booking journey. Secondary goals included improving repeat purchase rate (targeting 30%+), reducing provider onboarding time, and establishing a data-driven product culture that replaced gut-feel decisions with metric-driven prioritization.",
            challenge: "The booking funnel had multiple friction points that compounded at each step. Users couldn't easily compare providers — the service category page showed names and photos but no ratings, no pricing, and no clear description of what each service included. Pricing was hidden until the booking form, creating a trust gap where users felt they were being quoted after committing to the flow. The booking confirmation process required filling out a 12-field form with details that felt unnecessary for a simple service booking. On the supply side, provider onboarding was slow and confusing — the signup form had redundant fields, there was no status visibility, and many providers abandoned mid-process. The marketplace was losing both demand and supply at the front door.",
            strategy: "I led a structured product discovery process to identify the specific drop-off points in the booking funnel, then translated those insights into a prioritized set of UX improvements sequenced for maximum impact. I defined the product roadmap to balance supply-side growth (faster provider onboarding) with demand-side growth (simpler booking flow), tracking marketplace KPIs each sprint. The strategy was phased: fix demand first (because it would have immediate revenue impact), then fix supply (to ensure new demand had providers to book). Each improvement was shipped incrementally and measured before moving to the next, avoiding the common marketplace mistake of trying to fix everything at once.",
            leadership: "Owned the end-to-end product roadmap for the marketplace, sequencing features that balanced both sides of the network. I led a cross-functional team of 6 (3 engineers, 1 designer, 1 QA, and myself) through agile sprints, introducing a metric-driven prioritization framework that replaced stakeholder-driven feature requests. I tracked booking conversion rate, provider utilisation, repeat purchase rate, and provider onboarding completion rate — using data to inform sprint priorities each cycle. I also established a monthly business review cadence with the founding team, presenting marketplace health metrics and product roadmap progress.",
            sections: [
                {
                    title: "01. The Problem I Started With",
                    content: "The data showed a clear and frustrating pattern: users were visiting the platform (traffic was decent thanks to marketing spend), browsing service categories, and leaving without booking. Provider utilisation was low — many skilled workers on the platform were getting 2-3 jobs per week when they had capacity for 8-10. The business was spending money on acquisition, but the conversion funnel was leaking at every stage. My starting hypothesis was that the problem wasn't demand — it was friction. Users wanted to book services, but the experience made it harder than it needed to be. I also suspected a supply-side bottleneck: even if we fixed booking conversion, we needed enough quality providers to fulfill the demand. The marketplace flywheel was broken on both ends."
                },
                {
                    title: "02. Discovery & Research",
                    content: "I mapped the entire booking funnel from landing to confirmation and ran a quantitative analysis to identify the specific drop-off points. Three stood out. First, the service category page had a 45% bounce rate — users clicked through but left when they couldn't quickly assess what each service included or how much it would cost. Second, the pricing reveal at the booking form created a 30% drop-off — users felt blindsided by costs they couldn't estimate upfront. Third, the 12-field confirmation form caused a 25% abandonment rate — users were asked for details that felt irrelevant to booking a plumber. I also conducted 8 user interviews with people who had abandoned mid-booking, and the feedback was consistent: 'I just want to know what I'm getting and how much it costs before I commit.' On the supply side, I audited the provider onboarding flow and found 5 unnecessary form fields, no progress indicator, and no status tracker — providers had no idea where they were in the verification process. I benchmarked 4 competing on-demand service platforms and found that the highest-converting ones all surfaced pricing early and kept booking forms under 6 fields.",
                    list: [
                        "Full funnel mapping: identified 3 critical drop-off points (45%, 30%, 25%).",
                        "8 user interviews with users who abandoned mid-booking.",
                        "Provider onboarding audit: identified 5 unnecessary form fields.",
                        "Competitive analysis of 4 on-demand service platforms.",
                        "Provider interviews: 6 providers shared onboarding pain points."
                    ]
                },
                {
                    title: "03. Decisions & Trade-offs",
                    content: "The biggest decision was sequencing. We had two sides of the marketplace to improve — supply (provider onboarding) and demand (booking flow) — and limited engineering capacity. I made the call to tackle the booking flow first because it would have a faster, more measurable impact on revenue. The logic was straightforward: if we improved provider onboarding but users still couldn't book easily, the new providers would sit idle and churn off the platform. But if we improved booking conversion first, existing providers would get more jobs immediately, which would improve their satisfaction and retention, giving us stronger unit economics to justify investing in supply growth. I also made a controversial call to surface pricing earlier in the flow. The business was worried that showing prices upfront would scare users off — they preferred to hook users with the service and then reveal the cost. But the data from our research and competitive analysis proved otherwise: transparency increased trust, and trust increased conversion. Users weren't leaving because prices were high — they were leaving because prices were hidden."
                },
                {
                    title: "04. Execution & Delivery",
                    content: "I redesigned the core booking flow in three phases, shipping and measuring each before moving to the next. Phase 1 (Sprint 1-2): redesigned the service category page with clear service descriptions, provider ratings and review counts, starting prices, and a 'what's included' section for each service type. This reduced the category page bounce rate by 20%. Phase 2 (Sprint 3-4): moved pricing visibility earlier in the flow and reduced the booking form from 12 fields to 6, removing redundant fields and making address auto-complete smarter. This cut form abandonment by 40%. Phase 3 (Sprint 5): added a booking confirmation screen with a clear summary of the service, price, provider details, and estimated arrival time. This reduced post-booking cancellations by 15%. In parallel, I defined the provider onboarding improvements: reduced the signup form, added a progress tracker, and built a status notification system so providers knew exactly where they were in the verification process. This increased onboarding completion rate by 40%.",
                    list: [
                        "Phase 1: Redesigned service category pages with descriptions, ratings, and starting prices.",
                        "Phase 2: Reduced booking form from 12 fields to 6 — cut abandonment by 40%.",
                        "Phase 3: Added booking confirmation with service summary, price, and ETA.",
                        "Provider onboarding: reduced form fields, added progress tracker, increased completion by 40%.",
                        "Established metric-driven sprint prioritization, replacing stakeholder-driven requests."
                    ]
                },
                {
                    title: "05. Results & Impact",
                    content: "The redesigned booking and conversion flows contributed to a 65% revenue increase over two quarters. Booking conversion rate improved from 8% to 14%, provider utilisation went up as more jobs flowed through the platform (average jobs per provider increased from 3 to 5 per week), and the repeat purchase rate improved from 18% to 32% — showing that users who completed their first booking were coming back. Provider onboarding completion rate increased by 40%, adding more quality supply to the marketplace. But the most lasting impact was cultural: the product team adopted a new methodology. Instead of debating feature priorities in meetings, we pointed to the data. Instead of guessing what users wanted, we tested it. The metric-driven approach I introduced became the standard for how the team made product decisions, and the monthly business review cadence gave leadership the visibility they'd been asking for.",
                    impact: {
                        metric: "65% Revenue Increase · 14% Booking Conversion",
                        description: "Redesigned booking flow improved conversion from 8% to 14%. Provider utilisation increased (3→5 jobs/week). Repeat purchase rate up from 18% to 32%. Provider onboarding completion up 40%. Established metric-driven product culture."
                    }
                }
            ]
        }
    },
    {
        id: 4,
        title: "BiMP Real Estate Platform",
        description: "Led product management for a real estate marketplace. Wrote PRDs, managed backlog, and architected a design system that cut design-to-dev handoff time by ~30%.",
        tags: ["PropTech", "Product Management", "Design Systems"],
        image: "https://framerusercontent.com/images/yRELLdF7de2WdXbLnkK9azeMFA.png",
        link: "#",
        deviceType: "browser",
        metadata: {
            client: "Abode Apps (BiMP)",
            industry: "PropTech",
            type: "Marketplace Platform",
            year: "2023–2024"
        },
        gallery: [
            "https://framerusercontent.com/images/ejsjctGkm9P3NpOw3vWRSzMfyOo.png",
            "https://framerusercontent.com/images/MjAXVRZs9maQrOO3Cx5OW46QIA.png",
            "https://framerusercontent.com/images/IETDRJLhriovmAEC9p7CgN3MHk.png"
        ],
        caseStudy: {
            overview: "BiMP (Building in My Pocket) is a real estate marketplace management system serving property firms, individual agents, and high-net-worth property investors across Nigeria and Kenya. The platform handled property listings, agent-client matching, transaction tracking, and firm-level analytics. I joined as Product Manager and led the product from discovery through agile delivery — writing PRDs, managing the backlog, running sprint planning, and partnering with C-suite stakeholders on product strategy. The most tangible outcome: I architected a company-wide design system that reduced design-to-dev handoff time by ~30%, accelerating overall delivery velocity. But the design system was just one part of a broader transformation: I also reduced the feature backlog by 40%, established a stakeholder reporting cadence that gave leadership full visibility into product progress, and shipped marketplace features with zero critical post-launch defects over two quarters. This is where my design background became a PM superpower — I didn't just know what good design looked like, I could build the system that made good design repeatable at scale.",
            goal: "Scale marketplace operations and reduce delivery friction through systematic product management and a unified design system. Secondary goals included improving release predictability, reducing post-launch defects, and establishing a data-driven product culture that replaced ad-hoc feature requests with a prioritized roadmap.",
            challenge: "The product team was stuck in a dysfunctional cycle. Stakeholders requested features directly from designers, designers built custom screens for each request without a component library, developers interpreted designs differently each time and rebuilt components from scratch, and the backlog grew faster than it was cleared. There were no design tokens, no shared component library, no standardized handoff process, and no shared language between designers and developers. Release predictability was near zero — features that were estimated at 2 sprints routinely took 4-5. C-suite stakeholders wanted faster delivery but didn't have visibility into why things were taking so long, which created a trust gap between the business and the product team. The backlog contained 200+ items, many of which were duplicates or low-impact requests that had accumulated over months without prioritization.",
            strategy: "I took a two-track approach that addressed both the immediate delivery problem and the systemic root cause. Track 1 (immediate): I audited the entire backlog, implemented a scoring framework (impact × effort × strategic alignment), and cut the backlog by 40% in the first quarter by deprioritizing low-impact items and consolidating duplicates. I wrote detailed PRDs for the highest-priority marketplace features, translating business goals and user research into clear requirements that engineering could execute against. Track 2 (systemic): I architected a company-wide design system that created reusable components, design tokens, and a standardized handoff process between design and development. The design system wasn't a side project — it was built incrementally alongside feature delivery, using the system for new work and migrating existing screens over time. This meant the velocity gain compounded with each sprint.",
            leadership: "Led cross-functional teams of 10+ across design (2 designers), engineering (5 engineers), QA (1), and business stakeholders. I ran bi-weekly sprint planning, wrote all PRDs for marketplace features, and owned the product roadmap from discovery through launch. I partnered with C-suite stakeholders on product strategy, establishing a monthly product review cadence that included roadmap progress, metric updates, and trade-off discussions. I conducted user research with real estate agents and firm owners that surfaced 3 key opportunity areas adopted directly into the product OKR roadmap. I also mentored a junior product manager on PRD writing and stakeholder management, and established the design system governance process that outlasted my tenure.",
            sections: [
                {
                    title: "01. The Problem I Started With",
                    content: "When I joined, I spent my first three weeks auditing the entire product delivery process. I sat with designers and watched them build custom components for every screen. I sat with developers and watched them rebuild the same button three different ways across three features. I reviewed the backlog and found 200+ items — many duplicates, many low-impact, many requested directly by stakeholders without going through any prioritization process. Release predictability was the most alarming metric: features estimated at 2 sprints routinely took 4-5 because of rework caused by misaligned designs and inconsistent component implementation. The business wanted to scale the marketplace — more listings, more agents, more transactions — but the delivery process couldn't keep up with the ambition. My hypothesis was that we needed a system, not just more effort. Throwing more designers and developers at the problem would only create more custom components and more rework. The solution was to build the infrastructure that made consistent, fast delivery possible."
                },
                {
                    title: "02. Discovery & Research",
                    content: "I designed a discovery process with four tracks. Track 1: I audited the entire product delivery process — from how requirements were captured (stakeholder Slack messages to designers) to how designs were handed off to developers (Figma files with no component structure) to how features were tested (ad-hoc, no standardized QA process). The handoff process was the primary bottleneck. Track 2: I conducted user research with 8 real estate agents and 4 firm owners, mapping their end-to-end workflow from listing creation to client matching to transaction completion. This surfaced 3 key opportunity areas: (1) agents needed a faster way to create and edit listings, (2) firm owners needed better analytics on agent performance, and (3) clients needed a better search and filtering experience. All 3 were adopted directly into the product OKR roadmap. Track 3: I conducted competitive analysis of 6 PropTech platforms (including Zillow, Rightmove, and 3 African competitors) and found that the fastest-shipping teams all had mature design systems. Track 4: I interviewed all C-suite stakeholders to understand their business goals, their frustrations with the product team, and what 'success' looked like to them. This aligned my roadmap priorities with business strategy and built trust with leadership.",
                    list: [
                        "Delivery process audit: identified handoff as primary bottleneck (custom components, no tokens).",
                        "User research: 8 agents + 4 firm owners, surfaced 3 opportunity areas adopted into OKRs.",
                        "Competitive analysis of 6 PropTech platforms confirmed design system pattern.",
                        "C-suite stakeholder interviews: aligned roadmap with business strategy.",
                        "Backlog audit: 200+ items, 35% duplicates, 40% low-impact."
                    ]
                },
                {
                    title: "03. Decisions & Trade-offs",
                    content: "The biggest decision was whether to invest in a design system when the backlog was already overflowing and stakeholders were demanding features. The tension was real: leadership wanted speed, and building infrastructure doesn't look like speed. I made the case by quantifying the cost of the status quo. I tracked every feature delivered over the previous quarter and calculated that each one took 30-50% longer than it should because of custom design work, component rework, and design-dev misalignment. If we continued at that rate, the backlog would never shrink — it would only grow. I proposed a phased approach: build the design system incrementally while continuing to ship features, using the system for all new work and migrating existing screens over time. This meant some features would take slightly longer in the short term (because we were building components as we went), but the velocity gain would compound with each sprint. I got buy-in by presenting the math to the C-suite and committing to a 30% reduction in handoff time within two quarters. The second major decision was backlog prioritization: I cut 40% of the backlog in the first quarter by deprioritizing low-impact items, consolidating duplicates, and saying no to stakeholder requests that didn't align with the OKRs. This was uncomfortable — stakeholders were used to getting what they asked for — but it was necessary to create focus."
                },
                {
                    title: "04. Execution & Delivery",
                    content: "I executed on both tracks simultaneously. Track 1 (backlog + features): I reduced the feature backlog from 200+ to 120 items in the first quarter through disciplined prioritization. I wrote detailed PRDs for each marketplace feature — including the agent listing management flow, the firm analytics dashboard, and the client search experience — with clear acceptance criteria, user stories, and edge cases. I led bi-weekly sprint planning with engineering, ensuring each sprint had a clear theme and deliverable. Track 2 (design system): I architected the design system from scratch — defining 40+ reusable components (buttons, inputs, cards, modals, navigation, data tables), establishing a design token system (colors, typography, spacing, shadows), and creating a standardized Figma-to-code handoff process. I worked directly with the 2 designers to migrate their workflow to the system, and with the 5 engineers to build the component library in the codebase. The design system wasn't a separate project — it was built incrementally, one component at a time, as features required them. I also established a monthly product review cadence with C-suite stakeholders, presenting roadmap progress, metric updates, and trade-off discussions. This gave leadership the visibility they'd been asking for and built trust in the product team's ability to deliver.",
                    list: [
                        "Reduced backlog from 200+ to 120 items (40% reduction) in Q1.",
                        "Architected design system: 40+ components, design tokens, Figma-to-code handoff process.",
                        "Wrote PRDs for all marketplace features with acceptance criteria and edge cases.",
                        "Led bi-weekly sprint planning; shipped releases on schedule every sprint.",
                        "Established monthly C-suite product reviews: roadmap, metrics, trade-offs.",
                        "Mentored junior PM on PRD writing and stakeholder management."
                    ]
                },
                {
                    title: "05. Results & Impact",
                    content: "The design system reduced design-to-dev handoff time by ~30%, accelerating overall delivery velocity. Feature delivery time decreased from an average of 4.5 sprints to 3 sprints per feature. The backlog was reduced by 40%, release predictability improved from near-zero to 90% on-time delivery, and the team shipped with zero critical post-launch defects over two quarters. But the most important outcome was cultural: the team shifted from ad-hoc, reactive delivery to systematic, proactive delivery. Designers stopped rebuilding the same buttons. Developers stopped guessing at spacing and had a component library to pull from. Stakeholders stopped sending feature requests via Slack and started going through the prioritized roadmap process. The monthly product review cadence I established became the standard for how leadership engaged with the product team. The design system governance process I created outlasted my tenure and became the foundation for all future product work at the company.",
                    impact: {
                        metric: "~30% Faster Delivery · 40% Backlog Reduction",
                        description: "Design system cut handoff time by 30%. Feature delivery from 4.5 to 3 sprints avg. Zero critical post-launch defects over 2 quarters. 90% on-time delivery rate. Monthly C-suite reviews established as standard."
                    }
                }
            ]
        }
    }
];

export const experience = [
    {
        role: "Product Manager / Senior Product Designer",
        company: "CredBevy",
        location: "Nigeria",
        period: "Sep 2022 – Present",
        type: "Primary role",
        summary: "Owned product strategy and execution for a fintech platform across two dashboards, a consumer mobile app, and a marketing website.",
        bullets: [
            "Defined product vision and wrote PRDs for key feature releases, aligning engineering and design around shared OKRs and sprint goals each cycle.",
            "Led a data-driven UX overhaul informed by user research and competitive benchmarking, improving satisfaction scores and reducing onboarding funnel drop-off.",
            "Ran A/B tests on critical conversion flows, identifying a 22% improvement in activation rate from a simplified onboarding sequence.",
            "Managed product backlog and feature prioritisation, balancing user needs, technical debt, and business KPIs each sprint.",
            "Coordinated go-to-market strategy for key product launches across product, engineering, and marketing teams."
        ]
    },
    {
        role: "Product Manager / Senior Product Designer",
        company: "Business in My Pocket (BiMP)",
        location: "Nigeria",
        period: "Jul 2023 – Jul 2024",
        summary: "Led product management and UX for a real estate marketplace management system, from discovery through agile delivery.",
        bullets: [
            "Wrote PRDs and defined product requirements for a real estate marketplace platform, translating business goals and user research into a prioritised roadmap executed across quarterly sprint cycles.",
            "Managed the product backlog and led sprint planning with engineering, reducing feature backlog by 40% and improving release predictability over two quarters.",
            "Conducted user research and competitive analysis that surfaced 3 key opportunity areas, adopted directly into the product OKR roadmap.",
            "Led cross-functional teams across design, engineering, and business to ship releases on schedule, maintaining zero critical post-launch defects.",
            "Partnered with C-suite stakeholders on product strategy, owning stakeholder communication and product reporting from discovery through launch.",
            "Architected a company-wide design system that reduced design-to-dev handoff time by ~30%, accelerating overall delivery velocity."
        ]
    },
    {
        role: "Product Manager",
        company: "Total IT Stores",
        location: "Nigeria",
        period: "Sep 2023 – Dec 2023",
        summary: "Managed product delivery for a full-featured e-commerce and repair booking platform serving consumer electronics — phones, laptops, and accessories.",
        bullets: [
            "Defined product requirements and wrote PRDs for the e-commerce and repair booking experience, mapping user journeys from product discovery through checkout and booking confirmation.",
            "Led stakeholder workshops to align business conversion goals with UX decisions, reducing post-development revision cycles by streamlining requirements upfront.",
            "Coordinated delivery across design and development, managing sprint tasks and tracking progress against release milestones to ensure on-time launch.",
            "Identified and prioritised key funnel optimisation opportunities — including a simplified cart flow and improved search filters — aimed at improving conversion rate for repeat buyers."
        ]
    },
    {
        role: "Product Manager & Digital Operations Lead",
        company: "Davino Group of Companies",
        location: "Nigeria, Kenya, Guinea",
        period: "Jul 2022 – Dec 2022",
        summary: "Drove digital product strategy and operations across a multi-country conglomerate spanning three African markets.",
        bullets: [
            "Led end-to-end redesign and product strategy for company websites across Nigeria, Kenya, and Guinea, delivering an 80% increase in web traffic and a direct revenue uplift within 3 months of launch.",
            "Defined the product roadmap for the company's digital presence, prioritising features and content changes based on traffic analytics and stakeholder input.",
            "Streamlined digital operations — including email systems, CMS workflows, and digital asset management — improving team efficiency and cutting content turnaround time across three country teams.",
            "Managed vendor and developer relationships to ensure on-time delivery of web updates, acting as the single point of contact between business leadership and technical teams.",
            "Conducted market analysis across each country to inform localisation decisions, ensuring product experiences were relevant to each regional audience."
        ]
    },
    {
        role: "Founder & Product Manager",
        company: "TeenPay Africa",
        location: "Nigeria",
        period: "Sep 2021 – Sep 2022",
        summary: "Founded and led a fintech startup building a financial empowerment app for African teenagers — from 0 to launch.",
        bullets: [
            "Defined product vision, business model, and go-to-market strategy; set company OKRs and north star metric (monthly active teen users) for the founding team.",
            "Wrote all PRDs and led product discovery, user research, and sprint planning across a cross-functional team of mobile, backend, and frontend engineers.",
            "Managed the full product backlog from ideation to MVP launch, shipping on time and growing a pre-launch waitlist through community outreach.",
            "Identified product-market fit signals in the African teen finance segment and developed a monetisation roadmap aligned to growth targets."
        ]
    },
    {
        role: "Product Manager / Product Designer",
        company: "Tidos Travels",
        location: "Canada",
        period: "Mar 2022 – Apr 2022",
        summary: "Led product design and requirements definition for a crypto-powered travel booking platform targeting a blockchain-native audience.",
        bullets: [
            "Defined product requirements and user flows for a crypto-integrated travel booking experience, mapping payment UX across fiat and cryptocurrency transaction paths.",
            "Collaborated with blockchain, frontend, and backend engineers to ensure product specifications were technically feasible and aligned to sprint delivery timelines.",
            "Conducted user research to understand trust and friction points in crypto payment flows, translating findings into design decisions that reduced checkout abandonment.",
            "Delivered end-to-end product design from wireframes to high-fidelity prototypes within a 6-week engagement, meeting all agreed launch milestones."
        ]
    },
    {
        role: "Product Manager / Product Designer",
        company: "XXOL Care",
        location: "Nigeria",
        period: "Aug 2021 – Mar 2022",
        summary: "Owned product design and growth strategy for a handyman and domestic services marketplace connecting consumers with skilled service providers.",
        bullets: [
            "Led product discovery and user research to identify key drop-off points in the service booking funnel, translating insights into a prioritised set of UX improvements.",
            "Redesigned the core booking and conversion flows, contributing to a 65% revenue increase by reducing friction between service discovery and booking confirmation.",
            "Defined the product roadmap for the marketplace, sequencing features that balanced supply-side (provider onboarding) and demand-side (user acquisition) growth.",
            "Tracked key marketplace KPIs — booking conversion rate, provider utilisation, and repeat purchase rate — using data to inform sprint priorities each cycle."
        ]
    },
    {
        role: "Product Designer & IT Consultant",
        company: "Blizzinvestment",
        location: "Nigeria",
        period: "Apr 2021 – Jul 2021",
        summary: "Designed and delivered a digital loan application platform on WordPress, modernising the company's lending operations.",
        bullets: [
            "Defined product requirements and designed the end-to-end loan application experience, mapping the user journey from eligibility check through application submission and status tracking.",
            "Conducted user research with prospective borrowers to understand barriers to digital loan applications, using findings to simplify the form flow and reduce application abandonment.",
            "Built and launched the loan application website on WordPress, enabling fully digital loan processing and expanding the company's reach beyond walk-in customers.",
            "Streamlined internal digital operations — including document management and communication tools — improving loan processing efficiency for the back-office team."
        ]
    }
];

export const skills = {
    productManagement: ["Product Strategy", "PRD Writing", "Backlog Management", "Sprint Planning", "Roadmapping", "OKR Setting", "Product Discovery", "Go-to-Market Strategy"],
    analyticsGrowth: ["A/B Testing", "Funnel Optimisation", "KPI Tracking", "Retention", "CAC", "LTV", "Data-Driven Decision Making", "North Star Metrics"],
    executionLeadership: ["Cross-functional Team Leadership", "Agile / Scrum", "Stakeholder Management", "Product Operations", "User Research", "Competitive Analysis"],
    designTools: ["UX/UI Design", "Figma", "Prototyping", "Design Systems", "Framer", "Webflow", "WordPress"],
    industries: ["Fintech", "Real Estate", "E-Commerce", "Travel & Web3", "Healthtech", "Logistics"]
};

export const personalInfo = {
    name: "TIMILEHIN ORIPELOYE",
    title: "Product Manager | Fintech, Marketplace & Growth",
    email: "timilehinoripeloye@gmail.com",
    phone: "+234 905 538 0387",
    location: "Lagos, Nigeria",
    linkedin: "linkedin.com/in/oripeloye-timilehin-6a2835156",
    portfolio: "timilehinoripeloye.com",
    summary: "Product Manager with 5+ years of experience driving product development from discovery to launch across fintech, real estate, e-commerce, and travel. Proven ability to define product vision, write PRDs, manage backlogs, and lead cross-functional teams through agile delivery cycles. Founder of a fintech startup targeting African teens, with a track record of shipping products that drive measurable business outcomes — including an 80% traffic increase and a 65% revenue lift. Combines deep UX thinking with data-driven product decisions and strong stakeholder management to deliver products users love and businesses grow on.",
    education: "B.Eng, Mechanical Engineering — University of Lagos (UNILAG) | 2015 – 2020"
};
