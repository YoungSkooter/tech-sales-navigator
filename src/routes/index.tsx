import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Mwangi — Technical SDR / BDR" },
      {
        name: "description",
        content:
          "Technical SDR/BDR portfolio: B2B sales background, AWS Solutions Architect certified, HubSpot and Surfer certified. Ready to build pipeline for SaaS and cloud teams.",
      },
      { property: "og:title", content: "Alex Mwangi — Technical SDR / BDR" },
      {
        property: "og:description",
        content:
          "B2B sales background, AWS-certified cloud fluency, and a track record of hitting quota — now building pipeline in tech sales.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "142%", label: "Quota, last 2 quarters", accent: true },
  { value: "31", label: "SQLs booked / month" },
  { value: "8.4%", label: "Cold email reply rate" },
  { value: "3", label: "Technical certifications" },
];

const certs = [
  {
    tag: "AWS",
    title: "Solutions Architect – Associate",
    desc: "Designs and reasons about real cloud infrastructure — speaks to engineers without a script.",
  },
  {
    tag: "HubSpot",
    title: "Sales Software Certified",
    desc: "Full-funnel pipeline discipline inside the CRM every SaaS team already runs.",
  },
  {
    tag: "Surfer",
    title: "SEO Content Certified",
    desc: "Turns search intent into outbound angles and warm inbound leads.",
  },
];

const stack = [
  "Prospecting",
  "Cold outreach",
  "CRM & pipeline",
  "Cloud fluency",
  "Content & SEO",
  "Discovery",
];

const discovery = [
  "Lead with a sharp hypothesis, not a generic ask.",
  "Qualify with real technical questions, not checkboxes.",
  "Close the next step before the call ends.",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-card/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-sm font-semibold tracking-tight">
            Alex Mwangi<span className="text-accent">.</span>
          </span>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
            <a href="#proof" className="transition-colors hover:text-foreground">
              Proof
            </a>
            <a href="#why" className="transition-colors hover:text-foreground">
              Why tech
            </a>
            <a href="#stack" className="transition-colors hover:text-foreground">
              Stack
            </a>
            <a href="#contact" className="btn-accent">
              Book a call
            </a>
          </div>
        </div>
      </nav>

      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="drift-a absolute -top-24 -left-24 size-[420px] rounded-full bg-accent/25 blur-[120px]" />
          <div className="drift-b absolute top-40 right-0 size-[380px] rounded-full bg-sky-500/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
          <div className="max-w-[35ch]">
            <span className="mb-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              Technical SDR / BDR
            </span>
            <h1 className="text-4xl font-semibold leading-none text-balance sm:text-5xl">
              I sell cloud like <span className="text-accent">I already use it.</span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-base text-pretty text-muted-foreground">
              B2B sales background, AWS-certified cloud fluency, and a track record of hitting
              quota in local services — now chasing pipeline at a SaaS company.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-accent">
                Book a call
              </a>
              <a href="#proof" className="btn-ghost-dark">
                See the numbers
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-16">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass p-5">
                <div
                  className={`text-3xl font-semibold ${s.accent ? "text-accent" : "text-foreground"}`}
                >
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="proof" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-[56ch]">
          <h2 className="text-2xl font-semibold text-balance">Proof on the table</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Certifications that back the pitch — not just buzzwords on a resume.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {certs.map((c) => (
            <div key={c.tag} className="glass glass-hover p-6">
              <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-accent">
                {c.tag}
              </div>
              <div className="mt-2 font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-pretty text-muted-foreground">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-6 py-20">
        <div className="glass grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
          <div className="max-w-[46ch]">
            <h2 className="text-2xl font-semibold text-balance">Why technical sales</h2>
            <p className="mt-4 text-sm text-pretty text-muted-foreground">
              I spent years closing B2B local services deals on the phone — cold outreach,
              qualification, objection handling. The part that always excited me was the product.
            </p>
            <p className="mt-3 text-sm text-pretty text-muted-foreground">
              So I got AWS-certified. Now I pair that cloud fluency with a sales instinct that
              already knows how to find a buyer, earn a meeting, and push a deal to yes.
            </p>
          </div>
          <div className="rounded-[min(1vw,12px)] bg-card/80 p-6 shadow-[inset_0_0_0_1px_oklch(1_0_0/10%)]">
            <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Discovery call, my way
            </div>
            <ol className="mt-4 space-y-3 text-sm">
              {discovery.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="shrink-0 font-medium text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-pretty">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-[56ch]">
          <h2 className="text-2xl font-semibold text-balance">The stack</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            What I bring to a pipeline every single week.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="glass px-3 py-1.5 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="glass p-8 text-center lg:p-12">
          <h2 className="mx-auto max-w-[24ch] text-3xl font-semibold leading-none text-balance">
            Ready to build your pipeline?
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-sm text-pretty text-muted-foreground">
            Give me a week and I'll show you a qualified pipeline with real names on it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:alex.mwangi@example.com" className="btn-accent">
              Email me
            </a>
            <a href="#contact" className="btn-ghost-dark">
              Book a call
            </a>
            <a href="#contact" className="btn-ghost-dark">
              LinkedIn
            </a>
          </div>
        </div>
        <footer className="mt-12 flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <span>Alex Mwangi — Technical SDR / BDR</span>
          <span>Open to SaaS &amp; cloud sales roles</span>
        </footer>
      </section>
    </div>
  );
}
