import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Clock, Zap, Shield, Mail, ChevronLeft, ChevronRight, Play, Pause, Star } from "lucide-react";

// ---
// OpsWay Odoo AI Developer – Template A (Enriched)
// ---

export default function LandingPage() {
  return (
    <Shell>
      <Hero />
      <Section id="how" title="How it works" subtitle="From brief → estimate → implementation in minutes.">
        <HowItWorks />
      </Section>
      <MediaShowcase />
      <Section id="benefits" title="Benefits" subtitle="Why teams pick OpsWay's AI Odoo developer.">
        <Benefits />
      </Section>
      <Section id="pricing" title="Pricing" subtitle="Estimation-first. 50% cheaper than a human developer—guaranteed.">
        <Pricing />
      </Section>
      <Section id="compare" title="Compared to a human developer" subtitle="Save time, money, and cycles.">
        <Comparison />
      </Section>
      <Section id="faq" title="FAQ" subtitle="The quick answers.">
        <FAQ />
      </Section>
      <CTABand />
      <SiteFooter />
    </Shell>
  );
}

// ----------------------
// Layout & shared
// ----------------------
const emailTarget = "EMAIL TARGET";
const primaryCTA = "Help me to onboard AI Odoo Developer";
const secondaryCTA = "Order Odoo AI developer";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-[#714B67]" />
            <span className="font-semibold">OpsWay</span>
          </div>
          <nav className="hidden gap-6 md:flex text-sm">
            <a className="hover:opacity-70" href="#how">How it works</a>
            <a className="hover:opacity-70" href="#benefits">Benefits</a>
            <a className="hover:opacity-70" href="#pricing">Pricing</a>
            <a className="hover:opacity-70" href="#compare">Compare</a>
            <a className="hover:opacity-70" href="#faq">FAQ</a>
          </nav>
          <a href={`mailto:${emailTarget}`} className="rounded-xl bg-[#714B67] px-4 py-2 text-white text-sm shadow-sm">{secondaryCTA}</a>
        </div>
      </header>
      {children}
    </div>
  );
}

function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {subtitle && <p className="mt-1 text-gray-600">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function FooterCTA() {
  return (
    <form action={`mailto:${emailTarget}`} method="post" encType="text/plain" className="mt-6 flex flex-col gap-3 sm:flex-row">
      <input placeholder="Your work email" className="h-11 flex-1 rounded-xl border px-4 outline-none ring-gray-200 focus:ring" />
      <button type="submit" className="h-11 rounded-xl bg-[#714B67] text-white px-5 font-medium">{primaryCTA}</button>
    </form>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl p-6 text-sm text-gray-500 flex items-center gap-2">
        <Mail className="h-4 w-4"/> {emailTarget}
      </div>
    </footer>
  );
}

// ----------------------
// Hero (with decorative bg + mockup)
// ----------------------
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <GridDeco />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block rounded-full border px-3 py-1 text-sm bg-white/60">🚀 Odoo tweaks in minutes</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Order your AI Odoo Developer
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            OpsWay's bot performs like a junior‑to‑mid Odoo dev to handle simple modifications fast and
            <b> 50% cheaper</b> than hiring.
          </p>
          <FooterCTA />
          <p className="mt-2 text-xs text-gray-500">Submitting opens your email client to contact us.</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4" />)}<span>Loved for speed & savings</span>
          </div>
        </motion.div>

        {/* Mockup card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="rounded-xl border bg-gray-50 p-4 font-mono text-xs">
              <div className="text-gray-500 mb-2"># User story</div>
              <pre className="whitespace-pre-wrap">As a sales manager, add a custom field <code>deal_source</code> to CRM.</pre>
            </div>
            <div className="mt-3 rounded-xl border bg-white p-4 text-sm">
              <div className="text-gray-500 mb-1">Estimate</div>
              <div className="font-semibold">€45–€70</div>
              <div className="text-xs text-gray-500">Approve to start • Ready today</div>
            </div>
            <div className="mt-3 rounded-xl border bg-gray-50 p-4 text-sm">
              <div className="text-gray-500 mb-1">Result</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Module installed</li>
                <li>Field added to view</li>
                <li>Basic validation included</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GridDeco() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#714B67]/10 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// ----------------------
// Media Showcase (slider)
// ----------------------
function MediaShowcase() {
  const slides = useMemo(() => [
    {
      title: "Install a module",
      caption: "Enable a standard Odoo module with safe defaults.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Add a field",
      caption: "Create and expose a custom field in forms and list views.",
      img: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Simple automation",
      caption: "Trigger an action on stage change or condition.",
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Basic integration",
      caption: "Connect to a webhook or simple API endpoint.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    },
  ], []);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <h3 className="text-xl font-semibold">What we can ship fast</h3>
            <p className="mt-2 text-sm text-gray-600">A visual peek at common tasks delivered in minutes, not weeks.</p>
            <div className="mt-4 text-xs text-gray-500">Tip: swap these images with your own screenshots later.</div>
          </div>
          <div className="md:col-span-7">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Carousel({ slides }: { slides: { title: string; caption: string; img: string }[] }) {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!auto) return;
    intervalRef.current = window.setInterval(() => {
      setI((p) => (p + 1) % slides.length);
    }, 4000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [auto, slides.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl border">
      <div className="aspect-[16/9]">
        {slides.map((s, idx) => (
          <img
            key={s.title}
            src={s.img}
            alt={s.title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
            loading={idx === i ? "eager" : "lazy"}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
        <div className="text-sm font-medium">{slides[i].title}</div>
        <div className="text-xs opacity-90">{slides[i].caption}</div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <IconBtn onClick={() => setI((i - 1 + slides.length) % slides.length)} ariaLabel="Previous"><ChevronLeft className="h-5 w-5"/></IconBtn>
        <IconBtn onClick={() => setI((i + 1) % slides.length)} ariaLabel="Next"><ChevronRight className="h-5 w-5"/></IconBtn>
      </div>
      <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 text-white text-xs">
        <button onClick={() => setAuto(!auto)} className="flex items-center gap-1">
          {auto ? <Pause className="h-3.5 w-3.5"/> : <Play className="h-3.5 w-3.5"/>}
          {auto ? "Pause" : "Play"}
        </button>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} className={`h-1.5 w-4 rounded-full ${idx === i ? "bg-white" : "bg-white/50"}`} aria-label={`Go to slide ${idx+1}`}/>
        ))}
      </div>
    </div>
  );
}

function IconBtn({ children, onClick, ariaLabel }: { children: React.ReactNode; onClick: () => void; ariaLabel: string }) {
  return (
    <button aria-label={ariaLabel} onClick={onClick} className="rounded-full bg-black/35 p-2 text-white backdrop-blur transition hover:bg-black/50">
      {children}
    </button>
  );
}

// ----------------------
// Content sections
// ----------------------
function Benefits() {
  const items = [
    { icon: Zap, title: "Cheaper than hiring devs", desc: "Guaranteed 50% cheaper than a human developer." },
    { icon: Clock, title: "Minutes to market", desc: "Ship simple Odoo tweaks in minutes, not weeks." },
    { icon: Check, title: "Flexibility", desc: "Test ideas fast, iterate and deploy quickly." },
    { icon: Shield, title: "Human validation", desc: "Optional OpsWay engineer reviews & controls code quality." },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="rounded-2xl border p-5 hover:shadow-sm transition">
          <div className="flex items-center gap-2"><Icon className="h-5 w-5"/><h4 className="font-semibold">{title}</h4></div>
          <p className="text-sm text-gray-600 mt-1">{desc}</p>
        </div>
      ))}
    </div>
  );
}

function HowItWorks() {
  const steps = [
    "Describe the change (e.g., install module, add field).",
    "Get an instant estimate and approve the price range.",
    "AI Odoo dev implements; optional human validation.",
  ];
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((step, i) => (
        <li key={i} className="rounded-2xl border p-5">
          <div className="text-sm text-gray-500">Step {i + 1}</div>
          <div className="font-semibold">{step}</div>
        </li>
      ))}
    </ol>
  );
}

function Pricing() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border p-6">
        <div className="inline-block rounded-full bg-[#714B67]/10 px-2 py-0.5 text-xs text-[#714B67]">One-time</div>
        <h4 className="font-semibold mt-2">Onboarding</h4>
        <div className="text-3xl font-extrabold mt-2">€1,000</div>
        <p className="text-sm text-gray-600 mt-2">One-time setup for your Odoo.</p>
      </div>
      <div className="rounded-2xl border p-6 relative overflow-hidden">
        <div className="absolute right-3 top-3 rounded-full bg-[#714B67] px-2 py-0.5 text-xs text-white">Popular</div>
        <h4 className="font-semibold">AI Only</h4>
        <div className="text-3xl font-extrabold mt-2">€300/mo</div>
        <p className="text-sm text-gray-600 mt-2">Estimation-based pricing per task. 50% cheaper than human devs.</p>
      </div>
      <div className="rounded-2xl border p-6">
        <h4 className="font-semibold">AI + Human Validation</h4>
        <div className="text-3xl font-extrabold mt-2">€600/mo</div>
        <p className="text-sm text-gray-600 mt-2">Up to 20 user stories/month with human code review.</p>
      </div>
    </div>
  );
}

function Comparison() {
  const pros = [
    "Delivers simple modifications in minutes",
    "Never sleeps or takes vacations",
    "Guaranteed 50% cheaper",
    "Optional human validation",
    "Transparent estimates before coding",
  ];
  const cons = [
    "Lead times from days to weeks",
    "Schedules, handoffs, backlogs",
    "Higher hourly cost",
    "Code quality varies",
    "Estimate surprises",
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border p-6">
        <h4 className="font-semibold">OpsWay AI Odoo Developer</h4>
        <ul className="mt-2 space-y-2 text-sm">
          {pros.map((t) => (
            <li key={t} className="flex gap-2">✅ <span>{t}</span></li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border p-6">
        <h4 className="font-semibold">Traditional Human Developer</h4>
        <ul className="mt-2 space-y-2 text-sm">
          {cons.map((t) => (
            <li key={t} className="flex gap-2">⚠️ <span>{t}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What counts as a \"simple\" Odoo task?",
      a: "Things like enabling modules, adding fields/views, small automations, or basic API hooks. We'll estimate up front before coding.",
    },
    {
      q: "How does the 50% cheaper guarantee work?",
      a: "We base estimates on comparable human dev effort and price. If we miss the mark, we adjust so your final price is at least 50% less.",
    },
    {
      q: "Do I need the human validation add‑on?",
      a: "Optional. Many teams start AI‑only, then add human review for change‑controlled environments or critical workflows.",
    },
    {
      q: "How do we start?",
      a: `Email your first user story to ${emailTarget}. You'll get an estimate to approve.`,
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y rounded-2xl border">
      {faqs.map((f, idx) => (
        <button key={f.q} onClick={() => setOpen(open === idx ? null : idx)} className="w-full p-4 text-left">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-medium">{f.q}</div>
              {open === idx && <div className="mt-1 text-sm text-gray-600">{f.a}</div>}
            </div>
            <span className={`transition ${open === idx ? "rotate-90" : "rotate-0"}`}>›</span>
          </div>
        </button>
      ))}
    </div>
  );
}

function CTABand() {
  return (
    <section className="relative mx-auto my-8 max-w-6xl overflow-hidden rounded-2xl border bg-[#714B67] p-6 text-white">
      <div className="grid items-center gap-4 md:grid-cols-12">
        <div className="md:col-span-8">
          <h3 className="text-xl font-semibold">Ready to ship your first Odoo tweak?</h3>
          <p className="text-sm text-white/80">Send your first user story. We'll reply with an estimate in minutes.</p>
        </div>
        <div className="md:col-span-4">
          <FooterCTA />
        </div>
      </div>
    </section>
  );
}
