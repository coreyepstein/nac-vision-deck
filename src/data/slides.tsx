import type { DeckSection } from "@/components/deck/Deck";

/* ─── Shared Components ─── */

function TopBar() {
  return <div className="h-2 w-full shrink-0 bg-red" />;
}
function BottomBar() {
  return <div className="h-2 w-full shrink-0 bg-navy" />;
}
function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-1 w-20 bg-red ${className}`} />;
}
function DividerSm({ className = "" }: { className?: string }) {
  return <div className={`h-[3px] w-[60px] bg-red ${className}`} />;
}

function FooterLight({ num }: { num: number }) {
  return (
    <div className="flex items-end justify-between px-[100px] pb-6">
      <p className="font-heading text-lg font-bold uppercase tracking-wider text-black/25">
        thenewamerican.org
      </p>
      <p className="font-mono text-[11px] uppercase tracking-widest text-black/20">
        {String(num).padStart(2, "0")} / 28
      </p>
    </div>
  );
}

function FooterDark({ num }: { num: number }) {
  return (
    <div className="flex items-end justify-between px-[100px] pb-6">
      <p className="font-heading text-lg font-bold uppercase tracking-wider text-offwhite/25">
        thenewamerican.org
      </p>
      <p className="font-mono text-[11px] uppercase tracking-widest text-offwhite/20">
        {String(num).padStart(2, "0")} / 28
      </p>
    </div>
  );
}

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-red ${className}`}>
      {children}
    </p>
  );
}

function CardRed({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-l-4 border-red bg-card-bg px-5 py-4">
      <p className="mb-1 font-heading text-base font-semibold uppercase text-black">{title}</p>
      <p className="font-body text-[13px] text-black/40">{desc}</p>
    </div>
  );
}

function CardNavy({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-l-4 border-navy bg-card-bg px-5 py-4">
      <p className="mb-1 font-heading text-base font-semibold uppercase text-black">{title}</p>
      <p className="font-body text-[13px] text-black/40">{desc}</p>
    </div>
  );
}

function CardRedDark({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-l-4 border-red bg-offwhite/5 px-5 py-4">
      <p className="mb-1 font-heading text-base font-semibold uppercase text-offwhite">{title}</p>
      <p className="font-body text-[13px] text-offwhite/30">{desc}</p>
    </div>
  );
}

function CardNavyDark({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-l-4 border-navy bg-offwhite/5 px-5 py-4">
      <p className="mb-1 font-heading text-base font-semibold uppercase text-offwhite">{title}</p>
      <p className="font-body text-[13px] text-offwhite/30">{desc}</p>
    </div>
  );
}

/* ─── Pillar Slide Template ─── */

function PillarSlide({
  num,
  label,
  name,
  tagline,
  desc,
  activities,
  variant,
  slideNum,
}: {
  num: string;
  label: string;
  name: string;
  tagline: string;
  desc: string;
  activities: readonly { title: string; desc: string }[];
  variant: "light" | "dark";
  slideNum: number;
}) {
  const isLight = variant === "light";
  const Card = isLight ? CardRed : CardNavyDark;

  return (
    <>
      <TopBar />
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col justify-center px-[100px] py-[60px]">
          <p className={`font-heading text-[180px] font-bold leading-[0.8] ${isLight ? "text-black/3" : "text-offwhite/3"}`}>
            {num}
          </p>
          <Label className="mb-3 -mt-8">{label}</Label>
          <h1 className={`font-heading text-[52px] font-bold uppercase leading-none ${isLight ? "text-black" : "text-offwhite"} mb-4`}>
            {name}
          </h1>
          <p className={`font-body text-2xl italic ${isLight ? "text-black/40" : "text-offwhite/40"} mb-4`}>
            {tagline}
          </p>
          <DividerSm className="mb-8" />
          <p className={`max-w-[600px] font-body text-base leading-relaxed ${isLight ? "text-black/50" : "text-offwhite/35"}`}>
            {desc}
          </p>
        </div>
        <div className="flex w-[580px] shrink-0 flex-col justify-center gap-4 pr-[100px] py-[60px]">
          {activities.map((a) => (
            <Card key={a.title} title={a.title} desc={a.desc} />
          ))}
        </div>
      </div>
      {isLight ? <FooterLight num={slideNum} /> : <FooterDark num={slideNum} />}
      <BottomBar />
    </>
  );
}

/* ═════════════════════════════════════════════
   SECTIONS
   ═════════════════════════════════════════════ */

export const sections: DeckSection[] = [
  /* ─── Section 1: The Opening ─── */
  {
    title: "The Opening",
    slides: [
      /* Slide 01 — Title */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col justify-center px-[100px] py-20">
              <Label className="mb-6">Open Source Education</Label>
              <h1 className="font-heading text-[48px] font-light uppercase leading-none text-black/25">The</h1>
              <h1 className="font-heading text-[120px] font-bold uppercase leading-[0.9] text-black">New</h1>
              <h1 className="font-heading text-[120px] font-bold uppercase leading-[0.9] text-red">American</h1>
              <h1 className="font-heading text-[120px] font-bold uppercase leading-[0.9] text-black mb-8">Codex</h1>
              <Divider className="mb-8" />
              <p className="max-w-[600px] font-body text-[22px] italic leading-relaxed text-black/50">
                Rebuilding education from first principles. Pregnancy through 18. Open source. AI-personalized. Community-built.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 px-[100px] pb-10">
              {["Agency & Critical Thinking", "American Dynamism", "Physical & Survival", "Building & Engineering", "Software & AI", "Food & Farming", "Core Academics", "Character & Purpose"].map((p) => (
                <div key={p} className="border-l-[3px] border-red bg-card-bg px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-black">
                  {p}
                </div>
              ))}
            </div>
            <div className="flex items-end justify-between px-[100px] pb-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-black/20 mb-1.5">Free Forever — CC BY-SA 4.0</p>
                <p className="font-heading text-[22px] font-bold uppercase tracking-wider text-black">thenewamerican.org</p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <p className="border border-card-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-black/25">Fork It · Teach It · Improve It</p>
                <p className="border border-card-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-black/25">AI-Personalized Learning</p>
              </div>
            </div>
            <BottomBar />
          </>
        ),
      },
      /* Slide 02 — The Problem */
      {
        variant: "dark",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col justify-center px-[100px] py-20">
              <Label className="mb-10">The New American Codex</Label>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-offwhite/50">18 Years.</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-offwhite/50">$200,000.</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-red">And Your Kid</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-offwhite">Can&apos;t Change</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-offwhite">A Tire, Cook</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-offwhite">A Meal, Or</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-red">Think For Themselves.</h1>
              <DividerSm className="mt-8" />
            </div>
            <FooterDark num={2} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 03 — Crisis Numbers */
      {
        variant: "dark",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-20">
              <Label className="mb-16">The New American Codex</Label>
              <div className="flex flex-1 items-center gap-20">
                <div className="flex-1">
                  <p className="font-heading text-[140px] font-bold leading-[0.85] text-offwhite">73%</p>
                  <DividerSm className="my-4" />
                  <p className="mb-3 font-heading text-[22px] font-semibold uppercase text-offwhite">Of Employers Say Graduates Lack Critical Thinking</p>
                  <p className="font-body text-[15px] italic leading-relaxed text-offwhite/30">The system optimizes for compliance, not competence. Eighteen years of schooling and the most common complaint is that graduates can&apos;t think.</p>
                </div>
                <div className="flex-1">
                  <p className="font-heading text-[140px] font-bold leading-[0.85] text-offwhite">$15K</p>
                  <DividerSm className="my-4" />
                  <p className="mb-3 font-heading text-[22px] font-semibold uppercase text-offwhite">Per Year For A Closed Curriculum</p>
                  <p className="font-body text-[15px] italic leading-relaxed text-offwhite/30">Average annual spending per student on a curriculum you can&apos;t see, can&apos;t modify, and can&apos;t opt out of.</p>
                </div>
                <div className="flex-1">
                  <p className="font-heading text-[140px] font-bold leading-[0.85] text-offwhite">0</p>
                  <DividerSm className="my-4" />
                  <p className="mb-3 font-heading text-[22px] font-semibold uppercase text-offwhite">Pillars For Building, Farming, Or Software</p>
                  <p className="font-body text-[15px] italic leading-relaxed text-offwhite/30">Zero. No pillar for survival skills. No pillar for making things with your hands. No pillar for code.</p>
                </div>
              </div>
            </div>
            <FooterDark num={3} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 04 — The Question */
      {
        variant: "dark",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col justify-center px-[100px] py-20">
              <Label className="mb-16">The Question</Label>
              <p className="max-w-[1100px] font-body text-5xl italic leading-snug text-offwhite">
                What if the best curriculum in America was free, open source, and built by the people who actually know how to do things?
              </p>
              <DividerSm className="mt-12" />
            </div>
            <FooterDark num={4} />
            <BottomBar />
          </>
        ),
      },
    ],
  },

  /* ─── Section 2: The Vision ─── */
  {
    title: "The Vision",
    slides: [
      /* Slide 05 — The Answer */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-[60px]">
              <Label className="mb-6">The Answer</Label>
              <h1 className="mb-3 max-w-[1200px] font-heading text-[52px] font-bold uppercase leading-tight text-black">
                An Open-Source Curriculum For Raising Capable, Self-Governing Humans.
              </h1>
              <Divider className="mb-12" />
              <div className="flex flex-1 gap-10">
                {[
                  { title: "The Magical Child", desc: "Children are unfolding intelligences, not empty vessels. We honor each child\u2019s readiness signals and build on sensory learning before abstract thinking." },
                  { title: "Tikkun Olam", desc: "Repairing the world. Service isn\u2019t extracurricular \u2014 it\u2019s a pillar. Children learn moral courage by doing, not by being told." },
                  { title: "American Dynamism", desc: "Liberty, entrepreneurship, civic responsibility, and making things. The American experiment is an ongoing act of creation." },
                ].map((f) => (
                  <div key={f.title} className="flex-1 border-l-4 border-red bg-card-bg p-6">
                    <p className="mb-3 font-heading text-xl font-bold uppercase text-black">{f.title}</p>
                    <p className="font-body text-base italic leading-relaxed text-black/50">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <FooterLight num={5} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 06 — What Makes It Different */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-[60px]">
              <Label className="mb-6">The Differentiators</Label>
              <h1 className="mb-3 font-heading text-5xl font-bold uppercase text-black">What Makes It Different</h1>
              <Divider className="mb-12" />
              <div className="grid grid-cols-2 gap-8 flex-1">
                {[
                  { num: "$0", title: "Free Forever", desc: "Licensed CC BY-SA 4.0. No subscriptions, no textbooks, no paywalls. Fork it, teach it, improve it.", border: "border-red" },
                  { num: "0\u201318", title: "Pregnancy Through 18", desc: "Not just K-12. Six developmental stages from Genesis through Architect. A complete lifecycle.", border: "border-navy" },
                  { num: "8", title: "Pillars of Real Life", desc: "Not just academics. Agency, dynamism, physical survival, building, software, food, academics, and character.", border: "border-red" },
                  { num: "AI", title: "Personalized Learning", desc: "Same framework, infinite variations. AI generates weekly plans themed to your child\u2019s interests.", border: "border-navy" },
                ].map((d) => (
                  <div key={d.title} className={`border-l-4 ${d.border} bg-card-bg p-7`}>
                    <p className="font-heading text-[56px] font-bold leading-[0.9] text-black">{d.num}</p>
                    <p className="mt-2 font-heading text-xl font-semibold uppercase text-black">{d.title}</p>
                    <p className="mt-3 font-body text-[15px] italic leading-relaxed text-black/45">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <FooterLight num={6} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 07 — School vs Codex */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-[60px]">
              <Label className="mb-6">The Comparison</Label>
              <h1 className="mb-3 font-heading text-5xl font-bold uppercase text-black">School vs. The Codex</h1>
              <Divider className="mb-12" />
              <div className="flex flex-1 gap-20">
                <div className="flex-1">
                  <p className="mb-2 font-heading text-lg font-semibold uppercase text-black/30">Traditional School</p>
                  <div className="mb-7 h-0.5 w-full bg-black/10" />
                  <div className="flex flex-col gap-5">
                    {["Memorize Facts", "Sit Still For 8 Hours", "One-Size-Fits-All", "Standardized Tests", "$15K+ Per Year", "Closed Curriculum", "Academics Only", "Ages 5\u201318"].map((t) => (
                      <p key={t} className="font-heading text-[26px] font-semibold uppercase text-black/20">{t}</p>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="mb-2 font-heading text-lg font-semibold uppercase text-black">The Codex</p>
                  <div className="mb-7 h-0.5 w-full bg-black" />
                  <div className="flex flex-col gap-5">
                    {["Question Everything", "Build With Your Hands", "AI-Personalized", "Real-World Projects", "Free Forever", "Open Source (CC BY-SA)", "8 Pillars of Real Life", "Pregnancy Through 18"].map((t) => (
                      <p key={t} className="border-l-4 border-red pl-4 font-heading text-[26px] font-bold uppercase text-black">{t}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <FooterLight num={7} />
            <BottomBar />
          </>
        ),
      },
    ],
  },

  /* ─── Section 3: The 8 Pillars ─── */
  {
    title: "The Pillars",
    slides: [
      /* Slide 08 — Pillars Overview */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-[60px]">
              <div className="flex items-baseline gap-5 mb-6">
                <p className="font-heading text-[100px] font-bold leading-[0.85] text-red">8</p>
                <div>
                  <Label className="mb-2">The Curriculum</Label>
                  <h1 className="font-heading text-[44px] font-bold uppercase leading-none text-black">Pillars of Real Life</h1>
                </div>
              </div>
              <Divider className="mb-6" />
              <p className="mb-10 max-w-[700px] font-body text-lg italic leading-relaxed text-black/45">
                Every child deserves competence across all eight domains — not just academics.
              </p>
              <div className="grid grid-cols-4 gap-5 flex-1">
                {[
                  { n: "01", name: "Agency & Critical Thinking", tag: "Think for yourself.", c: "red" },
                  { n: "02", name: "American Dynamism", tag: "Build the republic.", c: "navy" },
                  { n: "03", name: "Physical & Survival", tag: "Be capable in the world.", c: "red" },
                  { n: "04", name: "Building & Engineering", tag: "Make things with your hands.", c: "navy" },
                  { n: "05", name: "Software & AI", tag: "Code is the new literacy.", c: "red" },
                  { n: "06", name: "Food & Farming", tag: "Know where your food comes from.", c: "navy" },
                  { n: "07", name: "Core Academics", tag: "Master the fundamentals.", c: "red" },
                  { n: "08", name: "Character & Purpose", tag: "Who you are matters most.", c: "navy" },
                ].map((p) => (
                  <div key={p.n} className={`border-l-4 ${p.c === "red" ? "border-red" : "border-navy"} bg-card-bg p-5`}>
                    <p className={`mb-1 font-mono text-[11px] font-bold uppercase tracking-widest ${p.c === "red" ? "text-red" : "text-navy"}`}>{p.n}</p>
                    <p className="font-heading text-xl font-bold uppercase text-black">{p.name}</p>
                    <p className="mt-1 font-body text-sm text-black/40">{p.tag}</p>
                  </div>
                ))}
              </div>
            </div>
            <FooterLight num={8} />
            <BottomBar />
          </>
        ),
      },
      /* Slides 09-16 — Individual Pillar Deep Dives */
      ...([
        { num: "01", label: "Pillar One", name: "Agency & Critical Thinking", tagline: "Think for yourself.", desc: "Socratic method, logic, media literacy, first-principles reasoning. Children learn to question assumptions, evaluate evidence, and form their own conclusions.", activities: [{ title: "Socratic Questioning", desc: 'Lead with questions, not answers. Build the habit of asking "why."' }, { title: "Media Literacy", desc: "Decode advertising, identify propaganda, evaluate sources." }, { title: "First-Principles Reasoning", desc: "Break problems down to fundamentals. Rebuild from the ground up." }, { title: "Debate & Argumentation", desc: "Construct and defend positions. Change your mind when evidence demands it." }], variant: "light" as const, slideNum: 9 },
        { num: "02", label: "Pillar Two", name: "American Dynamism", tagline: "Build the republic.", desc: "Founding documents, constitutional principles, builders and inventors, free markets, civic responsibility. The American experiment as an ongoing act of creation.", activities: [{ title: "Founding Documents", desc: "Read the Declaration, Constitution, and Federalist Papers." }, { title: "Entrepreneurship", desc: "Start something. Sell lemonade, build a website, solve a real problem." }, { title: "Civic Responsibility", desc: "Voting, community service, local government. Citizens are participants." }, { title: "Builders & Inventors", desc: "Study the people who made things: Ford, Edison, the Wright Brothers." }], variant: "dark" as const, slideNum: 10 },
        { num: "03", label: "Pillar Three", name: "Physical & Survival", tagline: "Be capable in the world.", desc: "Wilderness navigation, fire and shelter building, first aid, physical fitness, self-defense. The confidence from knowing you can handle what the world throws at you.", activities: [{ title: "Wilderness Skills", desc: "Navigate by stars, build shelter, start fire without matches." }, { title: "First Aid & Safety", desc: "CPR, wound care, emergency response. Know what to do." }, { title: "Physical Fitness", desc: "Strength, endurance, flexibility. Your body is a tool — keep it sharp." }, { title: "Self-Defense", desc: "Situational awareness, de-escalation, martial arts basics." }], variant: "light" as const, slideNum: 11 },
        { num: "04", label: "Pillar Four", name: "Building & Engineering", tagline: "Make things with your hands.", desc: "Woodworking, electrical circuits, mechanical systems, 3D printing, architecture. The deep satisfaction from turning raw materials into something real.", activities: [{ title: "Woodworking", desc: "Measure, cut, join. Build a birdhouse, then a bookshelf, then a table." }, { title: "Electrical Circuits", desc: "Wire a lamp, build a motor, understand current." }, { title: "Mechanical Systems", desc: "Gears, pulleys, levers, engines. Build machines to understand them." }, { title: "Design & Architecture", desc: "Sketch, model, prototype. From napkin drawing to physical reality." }], variant: "dark" as const, slideNum: 12 },
        { num: "05", label: "Pillar Five", name: "Software & AI", tagline: "Code is the new literacy.", desc: "Programming as literacy, how computers work, AI literacy, digital citizenship. Understanding the tools that shape the modern world — and learning to shape them back.", activities: [{ title: "Programming Fundamentals", desc: "Variables, loops, functions, data structures. Think like a computer." }, { title: "AI Literacy", desc: "Understand how models learn, what prompts do, where AI fails." }, { title: "Build & Ship", desc: "Make a website, deploy an app, automate a task. Real projects." }, { title: "Digital Citizenship", desc: "Privacy, security, ethics online. Navigate with wisdom, not just skill." }], variant: "light" as const, slideNum: 13 },
        { num: "06", label: "Pillar Six", name: "Food & Farming", tagline: "Know where your food comes from.", desc: "Gardening, cooking, nutrition science, food systems, preservation. The most fundamental human skill — feeding yourself — treated as a core discipline.", activities: [{ title: "Grow Your Own", desc: "Seed to table. Container gardens, raised beds, composting." }, { title: "Cook Real Meals", desc: "Knife skills, heat control, flavor building. Feed a family." }, { title: "Nutrition Science", desc: "Macros, micros, gut health. What food does inside the body." }, { title: "Food Preservation", desc: "Canning, fermenting, drying, smoking. Ancient skills for modern resilience." }], variant: "dark" as const, slideNum: 14 },
        { num: "07", label: "Pillar Seven", name: "Core Academics", tagline: "Master the fundamentals.", desc: "Reading, writing, mathematics, science, history, geography. Academics aren\u2019t eliminated — they\u2019re contextualized. Every concept connects to real application.", activities: [{ title: "Applied Mathematics", desc: "Fractions through woodworking. Geometry through architecture." }, { title: "Reading & Writing", desc: "Great books, persuasive essays, technical documentation." }, { title: "Science & Nature", desc: "Hypothesis, experiment, observe. Science is a method, not a subject." }, { title: "History & Geography", desc: "Stories of people and places. Why civilizations rise and fall." }], variant: "light" as const, slideNum: 15 },
        { num: "08", label: "Pillar Eight", name: "Character & Purpose", tagline: "Who you are matters most.", desc: "Integrity, resilience, empathy, service, spiritual grounding. Skills without character produce capable sociopaths. The Codex builds both.", activities: [{ title: "Integrity & Honesty", desc: "Do the right thing when no one is watching." }, { title: "Resilience & Grit", desc: "Fail, get up, try again. Discomfort is development." }, { title: "Service & Empathy", desc: "Tikkun Olam in action. Leave every place better than you found it." }, { title: "Purpose & Meaning", desc: "Why are you here? Every child needs a reason beyond a grade." }], variant: "dark" as const, slideNum: 16 },
      ] as const).map((p) => ({
        variant: p.variant,
        content: <PillarSlide {...p} />,
      })),
    ],
  },

  /* ─── Section 4: The Stages ─── */
  {
    title: "The Stages",
    slides: [
      /* Slide 17 — Stages Overview */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-[60px]">
              <Label className="mb-6">The Lifecycle</Label>
              <h1 className="mb-3 font-heading text-5xl font-bold uppercase text-black">6 Stages of Development</h1>
              <Divider className="mb-6" />
              <p className="mb-10 max-w-[700px] font-body text-lg italic leading-relaxed text-black/45">
                From before birth through age 18. Each stage builds on the last. Children move through stages by readiness, not by age.
              </p>
              <div className="flex flex-1 gap-5">
                {[
                  { age: "Pregnancy\u2013Birth", name: "Genesis", desc: "The foundation before the foundation. Prenatal nutrition, bonding, preparing the environment.", c: "navy" },
                  { age: "Ages 0\u20134", name: "Foundation", desc: "Sensory immersion. Language, movement, nature, music. Learning through play and wonder.", c: "navy" },
                  { age: "Ages 5\u20138", name: "Explorer", desc: "Curiosity unleashed. Hands-on discovery, nature study, early building, cooking basics.", c: "red" },
                  { age: "Ages 9\u201312", name: "Builder", desc: "Skill acquisition. Real tools, real projects, real responsibility. Competence becomes identity.", c: "red" },
                  { age: "Ages 13\u201315", name: "Apprentice", desc: "Mentorship and depth. Work alongside experts. First real ventures and community impact.", c: "navy" },
                  { age: "Ages 16\u201318", name: "Architect", desc: "Self-directed mastery. Launch a business, lead a project, teach others. Ready for the world.", c: "navy" },
                ].map((s) => (
                  <div key={s.name} className={`flex-1 border-l-4 ${s.c === "red" ? "border-red" : "border-navy"} bg-card-bg p-5`}>
                    <p className={`mb-1 font-mono text-[11px] font-bold uppercase tracking-widest ${s.c === "red" ? "text-red" : "text-navy"}`}>{s.age}</p>
                    <p className="mb-2 font-heading text-[22px] font-bold uppercase text-black">{s.name}</p>
                    <p className="font-body text-[13px] leading-relaxed text-black/40">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <FooterLight num={17} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 18 — Readiness Not Age */
      {
        variant: "dark",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col justify-center px-[100px] py-20">
              <Label className="mb-10">The Principle</Label>
              <h1 className="font-heading text-[68px] font-bold uppercase leading-none text-offwhite">Stages Are</h1>
              <h1 className="font-heading text-[68px] font-bold uppercase leading-none text-red">Readiness Levels,</h1>
              <h1 className="font-heading text-[68px] font-bold uppercase leading-none text-offwhite mb-8">Not Age Gates.</h1>
              <DividerSm className="mb-8" />
              <p className="max-w-[800px] font-body text-[22px] italic leading-relaxed text-offwhite/35">
                A child reading at 10 but doing math at 7 pulls from different stages simultaneously. No gates. No &ldquo;behind.&rdquo; The curriculum meets the child where they are.
              </p>
            </div>
            <FooterDark num={18} />
            <BottomBar />
          </>
        ),
      },
    ],
  },

  /* ─── Section 5: How It Works ─── */
  {
    title: "How It Works",
    slides: [
      /* Slide 19 — 10 Content Types */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-[60px]">
              <Label className="mb-6">The Toolkit</Label>
              <h1 className="mb-3 font-heading text-5xl font-bold uppercase text-black">10 Ways to Learn</h1>
              <Divider className="mb-6" />
              <p className="mb-8 max-w-[700px] font-body text-lg italic leading-relaxed text-black/45">
                Every pillar uses a mix of content types. No two weeks look the same.
              </p>
              <div className="flex gap-4 mb-4">
                {[
                  { name: "Lesson", desc: "Structured teaching with clear objectives." },
                  { name: "Activity", desc: "Hands-on doing. Build, make, move, create." },
                  { name: "Project", desc: "Multi-day builds with real deliverables." },
                  { name: "Field Plan", desc: "Get outside. Nature hikes, community exploration." },
                  { name: "Recipe", desc: "Cook together. Math, science, culture in one pot." },
                ].map((t) => <CardRed key={t.name} title={t.name} desc={t.desc} />)}
              </div>
              <div className="flex flex-1 gap-4">
                {[
                  { name: "Experiment", desc: "Hypothesis, test, observe. Science in action." },
                  { name: "Adventure", desc: "Physical challenges, wilderness, courage-building." },
                  { name: "Practice", desc: "Repetition with purpose. Drills and skill refinement." },
                  { name: "Discussion", desc: "Socratic dialogue. Questions with no easy answers." },
                  { name: "Service", desc: "Give back. Community projects, repairing the world." },
                ].map((t) => <CardNavy key={t.name} title={t.name} desc={t.desc} />)}
              </div>
            </div>
            <FooterLight num={19} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 20 — Sample Week (simplified for web) */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-12">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Label className="mb-3">In Practice</Label>
                  <h1 className="font-heading text-[44px] font-bold uppercase text-black">A Sample Week</h1>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-black/25">Explorer Stage · Ages 5-8</p>
                  <p className="font-body text-sm italic text-black/40">Theme: Dinosaurs</p>
                </div>
              </div>
              <div className="h-0.5 w-full bg-black/5 mb-5" />
              <div className="flex flex-1 gap-3">
                {[
                  { day: "Monday", items: [{ label: "Agency · Lesson", title: "Dino Detective", desc: "How do we know what dinosaurs looked like?", c: "red" }, { label: "Physical · Adventure", title: "Fossil Hunt", desc: "Outdoor excavation dig with hidden plaster fossils.", c: "navy" }] },
                  { day: "Tuesday", items: [{ label: "Academics · Lesson", title: "Dino Math", desc: "Measure & compare: How tall was a T-Rex?", c: "red" }, { label: "Building · Project", title: "Build a Dino", desc: "Cardboard skeleton assembly with movable joints.", c: "navy" }] },
                  { day: "Wednesday", items: [{ label: "Food · Recipe", title: "Herbivore Salad", desc: "What did plant-eaters eat? Make their meal.", c: "red" }, { label: "Dynamism · Discussion", title: "Extinction Debate", desc: "What killed the dinosaurs? Evaluate theories.", c: "navy" }] },
                  { day: "Thursday", items: [{ label: "Software · Activity", title: "Dino Scratch Game", desc: "Code a simple dino-themed game in Scratch.", c: "red" }, { label: "Character · Service", title: "Museum Guide", desc: "Teach a younger child what you learned.", c: "navy" }] },
                  { day: "Friday", items: [{ label: "Academics · Experiment", title: "Dino Egg Hatch", desc: "Baking soda dino eggs — chemical reactions.", c: "red" }, { label: "All Pillars · Practice", title: "Week Review", desc: "What did you learn? What was hardest?", c: "navy" }] },
                ].map((d) => (
                  <div key={d.day} className="flex flex-1 flex-col gap-2.5">
                    <p className="mb-1 font-heading text-[15px] font-bold uppercase text-black">{d.day}</p>
                    {d.items.map((item) => (
                      <div key={item.title} className={`flex-1 border-l-[3px] ${item.c === "red" ? "border-red" : "border-navy"} bg-card-bg p-2.5`}>
                        <p className={`mb-0.5 font-mono text-[9px] font-bold uppercase tracking-widest ${item.c === "red" ? "text-red" : "text-navy"}`}>{item.label}</p>
                        <p className="font-heading text-sm font-semibold text-black">{item.title}</p>
                        <p className="font-body text-[11px] text-black/40">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <FooterLight num={20} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 21 — AI Personalization */
      {
        variant: "dark",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col justify-center px-[100px] py-20">
              <Label className="mb-10">AI-Powered</Label>
              <h1 className="font-heading text-[56px] font-bold uppercase leading-none text-offwhite/50">The Framework Is</h1>
              <h1 className="font-heading text-[56px] font-bold uppercase leading-none text-offwhite">The Constant.</h1>
              <h1 className="mt-4 font-heading text-[56px] font-bold uppercase leading-none text-offwhite/50">Your Child&apos;s Interests Are</h1>
              <h1 className="font-heading text-[56px] font-bold uppercase leading-none text-red">The Variable.</h1>
              <DividerSm className="mt-8 mb-8" />
              <p className="mb-10 max-w-[700px] font-body text-xl italic leading-relaxed text-offwhite/35">
                Same eight pillars. Same developmental stages. But a dinosaur-obsessed Explorer gets a completely different week than a space-obsessed one.
              </p>
              <div className="flex gap-6">
                {[
                  { name: "Dinosaurs Week", c: "red" },
                  { name: "Space Week", c: "navy" },
                  { name: "Cooking Week", c: "red" },
                  { name: "Robots Week", c: "navy" },
                ].map((t) => (
                  <div key={t.name} className={`border-l-[3px] ${t.c === "red" ? "border-red" : "border-navy"} bg-offwhite/5 px-4 py-3`}>
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-offwhite/25">Same Framework</p>
                    <p className="font-heading text-lg font-semibold uppercase text-offwhite">{t.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <FooterDark num={21} />
            <BottomBar />
          </>
        ),
      },
    ],
  },

  /* ─── Section 6: The Technology ─── */
  {
    title: "The Technology",
    slides: [
      /* Slide 22 — Tech Stack */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-[60px]">
              <Label className="mb-6">The Technology</Label>
              <h1 className="mb-3 font-heading text-5xl font-bold uppercase text-black">Built in the Open</h1>
              <Divider className="mb-10" />
              <div className="flex flex-1 gap-16">
                <div className="flex-1">
                  <p className="mb-4 font-heading text-[22px] font-bold uppercase text-black">The Curriculum</p>
                  <p className="mb-6 font-body text-base leading-relaxed text-black/45">Markdown files with YAML frontmatter. No database. Just content. Git-versioned. Forkable.</p>
                  <div className="mb-6 bg-black p-5">
                    <p className="font-mono text-[13px] leading-loose text-offwhite/40">
                      curriculum/<br />
                      &nbsp;&nbsp;&#123;stage&#125;/<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&#123;pillar&#125;/<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;content-type&#125;-&#123;slug&#125;.md
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <CardRed title="124 Content Files" desc="" />
                    <CardRed title="6 Stages x 8 Pillars" desc="" />
                    <CardRed title="CC BY-SA 4.0 License" desc="" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="mb-4 font-heading text-[22px] font-bold uppercase text-black">The Website</p>
                  <p className="mb-6 font-body text-base leading-relaxed text-black/45">Next.js 15 / React 19 / Tailwind 4. Reads curriculum from filesystem at runtime. AI personalization powered by Claude.</p>
                  <div className="flex flex-col gap-3">
                    <CardNavy title="Browse & Filter" desc="Search by stage, pillar, content type" />
                    <CardNavy title="AI Personalize" desc="Generate themed weeks via Claude Sonnet" />
                    <CardNavy title="Contribute" desc="Submit content \u2192 auto-generates GitHub draft PR" />
                    <CardNavy title="Get Involved" desc="Supporter intake \u2192 Neon Postgres" />
                  </div>
                </div>
              </div>
            </div>
            <FooterLight num={22} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 23 — Open Source */
      {
        variant: "dark",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col justify-center px-[100px] py-20">
              <Label className="mb-10">Open Source</Label>
              <h1 className="font-heading text-[64px] font-bold uppercase leading-none text-offwhite/50">Education Is</h1>
              <h1 className="font-heading text-[64px] font-bold uppercase leading-none text-offwhite/50">Too Important</h1>
              <h1 className="font-heading text-[64px] font-bold uppercase leading-none text-red">To Be Closed</h1>
              <h1 className="font-heading text-[64px] font-bold uppercase leading-none text-offwhite mb-8">Source.</h1>
              <DividerSm className="mb-10" />
              <div className="flex gap-6">
                <CardRedDark title="Fork the Repo" desc="Clone it, customize it, teach your way." />
                <CardRedDark title="Submit a PR" desc="Write a lesson, fix an error, add a recipe." />
                <CardRedDark title="Review Content" desc="Domain experts validate lessons via peer review." />
                <CardRedDark title="Translate" desc="Localize for your language and culture." />
              </div>
              <p className="mt-8 font-mono text-sm uppercase tracking-widest text-offwhite/20">github.com/coreyepstein/new-american-codex</p>
            </div>
            <FooterDark num={23} />
            <BottomBar />
          </>
        ),
      },
    ],
  },

  /* ─── Section 7: Community ─── */
  {
    title: "Community",
    slides: [
      /* Slide 24 — Community Model */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-[60px]">
              <Label className="mb-6">The Community</Label>
              <h1 className="mb-3 font-heading text-5xl font-bold uppercase text-black">Built By the People Who Know</h1>
              <Divider className="mb-6" />
              <p className="mb-8 max-w-[700px] font-body text-lg italic leading-relaxed text-black/45">
                The best person to write a lesson on woodworking is a woodworker. The Codex is built by domain experts, not curriculum committees.
              </p>
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex gap-5">
                  <div className="flex-1 border-l-4 border-red bg-card-bg p-5">
                    <p className="mb-1.5 font-heading text-lg font-bold uppercase text-black">Core Maintainers</p>
                    <p className="font-body text-sm leading-relaxed text-black/40">Architecture, quality standards, merge decisions. Keep the framework coherent.</p>
                  </div>
                  <div className="flex-1 border-l-4 border-navy bg-card-bg p-5">
                    <p className="mb-1.5 font-heading text-lg font-bold uppercase text-black">Domain Experts</p>
                    <p className="font-body text-sm leading-relaxed text-black/40">Carpenters, farmers, engineers, chefs. Write what they know.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-1 border-l-4 border-red bg-card-bg p-5">
                    <p className="mb-1.5 font-heading text-lg font-bold uppercase text-black">Parents & Teachers</p>
                    <p className="font-body text-sm leading-relaxed text-black/40">Field-test content with real kids. Report what works.</p>
                  </div>
                  <div className="flex-1 border-l-4 border-navy bg-card-bg p-5">
                    <p className="mb-1.5 font-heading text-lg font-bold uppercase text-black">Students</p>
                    <p className="font-body text-sm leading-relaxed text-black/40">Older students mentor younger ones across stages.</p>
                  </div>
                  <div className="flex-1 border-l-4 border-red bg-card-bg p-5">
                    <p className="mb-1.5 font-heading text-lg font-bold uppercase text-black">Community at Large</p>
                    <p className="font-body text-sm leading-relaxed text-black/40">Translate, share, advocate. Spread the word.</p>
                  </div>
                </div>
              </div>
            </div>
            <FooterLight num={24} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 25 — The Flywheel */
      {
        variant: "dark",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col justify-center px-[100px] py-20">
              <Label className="mb-10">The Flywheel</Label>
              <div className="flex items-center gap-16">
                <div className="flex-1">
                  <h1 className="mb-4 font-heading text-[52px] font-bold uppercase leading-none text-offwhite">Better Content Feeds Better Learning.</h1>
                  <DividerSm className="mb-6" />
                  <p className="max-w-[600px] font-body text-xl italic leading-relaxed text-offwhite/35">
                    Open content feeds AI personalization. Personalization feeds engagement. Engagement feeds contributions. The cycle accelerates.
                  </p>
                </div>
                <div className="flex w-[560px] shrink-0 flex-col">
                  {[
                    { n: "1", title: "Open Content", desc: "Free, forkable, community-reviewed curriculum" },
                    { n: "2", title: "AI Personalization", desc: "Themed weeks matched to your child\u2019s interests" },
                    { n: "3", title: "Engagement", desc: "Kids love it because it\u2019s about what they love" },
                    { n: "4", title: "More Contributions", desc: "Families contribute back what worked" },
                  ].map((item, i) => (
                    <div key={item.n}>
                      {i > 0 && <div className="ml-7 h-0.5 w-10 bg-offwhite/10" />}
                      <div className="flex items-center gap-4 py-6">
                        <p className="font-heading text-[64px] font-bold leading-[0.9] text-red">{item.n}</p>
                        <div>
                          <p className="font-heading text-xl font-bold uppercase text-offwhite">{item.title}</p>
                          <p className="font-body text-sm text-offwhite/25">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <FooterDark num={25} />
            <BottomBar />
          </>
        ),
      },
    ],
  },

  /* ─── Section 8: Roadmap & Close ─── */
  {
    title: "Roadmap & Close",
    slides: [
      /* Slide 26 — Roadmap */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col px-[100px] py-[60px]">
              <Label className="mb-6">The Roadmap</Label>
              <h1 className="mb-3 font-heading text-5xl font-bold uppercase text-black">What&apos;s Next</h1>
              <Divider className="mb-10" />
              <div className="flex flex-1 gap-10">
                {[
                  { phase: "Phase 1 \u2014 Now", name: "Foundation", items: ["Foundation + Explorer stages fully seeded", "Site live at thenewamerican.org", "AI personalization working", "Community contributions open"], c: "red" },
                  { phase: "Phase 2 \u2014 Next", name: "Scale", items: ["Builder + Apprentice deep content", "Expert review pipeline", "Translation infrastructure", "Saved plans + progress tracking"], c: "navy" },
                  { phase: "Phase 3 \u2014 Future", name: "Movement", items: ["Mobile app for daily curriculum", "Micro-school toolkit", "Partnership program", "Global localization"], c: "red" },
                ].map((p) => (
                  <div key={p.name} className={`flex-1 border-l-4 ${p.c === "red" ? "border-red" : "border-navy"} bg-card-bg p-7`}>
                    <p className={`mb-2 font-mono text-xs font-bold uppercase tracking-widest ${p.c === "red" ? "text-red" : "text-navy"}`}>{p.phase}</p>
                    <p className="mb-4 font-heading text-2xl font-bold uppercase text-black">{p.name}</p>
                    <div className="flex flex-col gap-3">
                      {p.items.map((item) => (
                        <p key={item} className="border-l-2 border-black/10 pl-3 font-body text-[15px] leading-relaxed text-black/45">{item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <FooterLight num={26} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 27 — Mission */
      {
        variant: "dark",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col justify-center px-[100px] py-20">
              <Label className="mb-12">The Mission</Label>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-offwhite">Raise Humans</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-offwhite">Who Can Think,</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-red">Build, Feed</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-red">Themselves,</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-offwhite">And Repair</h1>
              <h1 className="font-heading text-[72px] font-bold uppercase leading-[0.95] text-offwhite mb-8">The World.</h1>
              <DividerSm className="mb-6" />
              <p className="font-body text-[22px] italic text-offwhite/25">That&apos;s the mission. Everything else is a feature.</p>
            </div>
            <FooterDark num={27} />
            <BottomBar />
          </>
        ),
      },
      /* Slide 28 — CTA */
      {
        variant: "light",
        content: (
          <>
            <TopBar />
            <div className="flex flex-1 flex-col items-center justify-center px-[100px] py-20 text-center">
              <Label className="mb-8">Get Started</Label>
              <h1 className="font-heading text-[64px] font-bold uppercase text-black mb-4">thenewamerican.org</h1>
              <p className="font-mono text-base uppercase tracking-widest text-black/25 mb-2">github.com/coreyepstein/new-american-codex</p>
              <Divider className="mt-6 mb-12" />
              <div className="flex gap-8 mb-12">
                <div className="border-l-4 border-red bg-card-bg p-5 text-left">
                  <p className="mb-1.5 font-heading text-[22px] font-bold uppercase text-black">Browse the Curriculum</p>
                  <p className="font-body text-sm text-black/40">Explore 124 lessons across 8 pillars and 6 stages.</p>
                </div>
                <div className="border-l-4 border-navy bg-card-bg p-5 text-left">
                  <p className="mb-1.5 font-heading text-[22px] font-bold uppercase text-black">Get Involved</p>
                  <p className="font-body text-sm text-black/40">Parents, educators, builders — join the movement.</p>
                </div>
                <div className="border-l-4 border-red bg-card-bg p-5 text-left">
                  <p className="mb-1.5 font-heading text-[22px] font-bold uppercase text-black">Fork and Teach</p>
                  <p className="font-body text-sm text-black/40">Clone the repo. Customize it. Start teaching today.</p>
                </div>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-black/20">Free Forever — CC BY-SA 4.0</p>
              <p className="mt-2 font-heading text-base font-semibold uppercase tracking-widest text-black/25">Fork It · Teach It · Improve It</p>
            </div>
            <BottomBar />
          </>
        ),
      },
    ],
  },
];
