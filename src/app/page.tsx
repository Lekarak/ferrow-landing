import Pricing from "@/components/Pricing";

const sources = ["Intercom", "Zendesk", "App Store", "Gong", "Slack", "Typeform"];

const themes = [
  { name: "CSV export times out", count: 214, trend: "+38%", width: "92%", hot: true },
  { name: "Wants dark mode", count: 161, trend: "+12%", width: "70%", hot: false },
  { name: "Onboarding step 3 confusing", count: 118, trend: "+54%", width: "52%", hot: true },
  { name: "Slack alerts too noisy", count: 76, trend: "−8%", width: "34%", hot: false },
];

const features = [
  {
    tag: "01",
    title: "Reads everything",
    body: "Tickets, reviews, NPS comments and sales calls flow into one place. Ferrow reads each one, so your team doesn't have to.",
  },
  {
    tag: "02",
    title: "Finds the patterns",
    body: "Similar requests are grouped into themes automatically, even when customers describe the same problem in different words.",
  },
  {
    tag: "03",
    title: "Ranks by impact",
    body: "Every theme is scored by volume, growth and the revenue of the accounts asking for it. The loudest problem isn't always the biggest.",
  },
  {
    tag: "04",
    title: "Answers in plain English",
    body: "Ask “why are enterprise users churning?” and get an answer with the exact quotes behind it, in seconds.",
  },
];

const steps = [
  { title: "Connect your sources", body: "One-click integrations with the tools you already use. Setup takes about five minutes." },
  { title: "Ferrow does the reading", body: "Historical feedback is analyzed overnight. New feedback is sorted the moment it arrives." },
  { title: "Ship what matters", body: "Push top themes straight to Linear or Jira, with the customer quotes attached." },
];

const faqs = [
  {
    q: "Is my customer data used to train AI models?",
    a: "No. Your data is processed only to produce your insights and is never used to train models. It is encrypted in transit and at rest.",
  },
  {
    q: "How accurate is the theme grouping?",
    a: "Ferrow shows the source quotes behind every theme, so you can check any grouping in one click and merge or split themes when needed.",
  },
  {
    q: "Which languages are supported?",
    a: "Ferrow understands feedback in more than 30 languages and summarizes everything in the language your team works in.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Plans are month-to-month or yearly, and you can export all of your data before you leave.",
  },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-paper">
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 13V3h8M3 8h6" strokeLinecap="round" />
          <circle cx="12.5" cy="12" r="1.5" fill="#e4572e" stroke="none" />
        </svg>
      </span>
      Ferrow
    </a>
  );
}

function ProductMockup() {
  return (
    <div className="relative mx-auto max-w-5xl text-left">
      <div className="absolute -inset-x-8 -top-8 -bottom-8 -z-10 rounded-[3rem] bg-gradient-to-b from-accent/15 via-moss/10 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-2xl shadow-ink/10">
        <div className="flex items-center gap-2 border-b border-line px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-line" />
          <span className="h-3 w-3 rounded-full bg-line" />
          <span className="h-3 w-3 rounded-full bg-line" />
          <span className="ml-4 text-xs text-muted">app.ferrow.ai / insights</span>
        </div>
        <div className="grid md:grid-cols-[1.4fr_1fr]">
          <div className="p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold">Top themes this week</h3>
              <span className="text-xs text-muted">2,418 items analyzed</span>
            </div>
            <ul className="mt-6 space-y-5">
              {themes.map((t) => (
                <li key={t.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      {t.hot && <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />}
                      {t.name}
                    </span>
                    <span className="tabular-nums text-muted">
                      {t.count}{" "}
                      <span className={t.trend.startsWith("+") ? "text-accent" : "text-moss"}>{t.trend}</span>
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-paper">
                    <div
                      className={`h-2 rounded-full ${t.hot ? "bg-accent" : "bg-ink/70"}`}
                      style={{ width: t.width }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-line bg-paper/60 p-6 md:border-t-0 md:border-l md:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted">Ask Ferrow</p>
            <div className="mt-5 ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-4 py-3 text-sm text-paper">
              Why did trial conversions drop in October?
            </div>
            <div className="mt-4 max-w-[95%] rounded-2xl rounded-bl-sm border border-line bg-white px-4 py-3 text-sm leading-relaxed">
              Mostly onboarding. Mentions of <b>step 3</b> rose 54% after the Oct 2 release. Trial users say the
              import screen &ldquo;looks broken&rdquo; when the file is empty.
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-paper px-2.5 py-1 text-xs text-muted">38 tickets</span>
                <span className="rounded-full bg-paper px-2.5 py-1 text-xs text-muted">11 reviews</span>
                <span className="rounded-full bg-paper px-2.5 py-1 text-xs text-muted">4 calls</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-transparent bg-paper/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#pricing" className="hover:text-ink">Pricing</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </div>
          <a
            href="#start"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink/85"
          >
            Get started
          </a>
        </nav>
      </header>

      <main className="overflow-x-clip">
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 text-center md:pt-24">
          <div className="rise inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            New: Gong call transcripts are now supported
          </div>
          <h1
            className="rise mx-auto mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Your customers already told you{" "}
            <span className="font-serif font-normal italic text-accent">what to build.</span>
          </h1>
          <p
            className="rise mx-auto mt-6 max-w-xl text-lg text-muted"
            style={{ animationDelay: "160ms" }}
          >
            Ferrow reads every ticket, review and call, groups them into clear themes, and ranks them by impact.
            Stop guessing. Start shipping what matters.
          </p>
          <div
            className="rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#start"
              className="rounded-full bg-accent px-6 py-3.5 font-medium text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5"
            >
              Start free, no card needed
            </a>
            <a href="#how" className="rounded-full px-6 py-3.5 font-medium text-ink hover:bg-ink/5">
              See how it works →
            </a>
          </div>

          <div className="rise mt-20" style={{ animationDelay: "360ms" }}>
            <ProductMockup />
          </div>

          <div className="mt-20">
            <p className="text-xs uppercase tracking-widest text-muted">Connects to the tools you already use</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-medium text-ink/40">
              {sources.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="border-y border-line bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-accent">Features</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                A research team that never <span className="font-serif font-normal italic">sleeps.</span>
              </h2>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
              {features.map((f) => (
                <div key={f.tag} className="bg-white p-8 md:p-10">
                  <span className="font-serif text-2xl text-accent">{f.tag}</span>
                  <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="text-sm font-medium text-accent">How it works</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                From noise to roadmap in <span className="font-serif font-normal italic">one afternoon.</span>
              </h2>
              <p className="mt-6 text-muted">
                No tagging, no spreadsheets, no weekly synthesis meetings. Connect your tools and let Ferrow do the
                reading.
              </p>
            </div>
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-6 rounded-3xl border border-line bg-white p-7">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink font-medium text-paper">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" className="border-y border-line bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-10 text-center">
              <p className="text-sm font-medium text-accent">Pricing</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Simple plans. <span className="font-serif font-normal italic">No surprises.</span>
              </h2>
            </div>
            <Pricing />
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-4xl font-semibold tracking-tight">Questions, answered</h2>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="start" className="px-6 pb-24">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-8 py-20 text-center text-paper md:py-28">
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Stop reading tickets. <span className="font-serif font-normal italic text-accent">Start listening.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-paper/60">
              Connect your first source in five minutes. Free for your first 500 feedback items, every month.
            </p>
            <form action="#start" className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Work email"
                className="flex-1 rounded-full border border-paper/15 bg-paper/5 px-5 py-3.5 text-paper placeholder:text-paper/40 focus:border-accent focus:outline-none"
              />
              <button className="rounded-full bg-accent px-6 py-3.5 font-medium text-white transition hover:bg-accent/90">
                Get started
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted md:flex-row">
          <Logo />
          <p>Ferrow is a fictional product. Concept and development by Mehmet Efe.</p>
          <p>© 2026</p>
        </div>
      </footer>
    </>
  );
}
