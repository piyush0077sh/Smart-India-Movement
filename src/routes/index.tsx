import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart India Movement — Civic initiatives for an informed India" },
      {
        name: "description",
        content:
          "SIM is an umbrella of independent civic-tech initiatives focused on awareness, governance, education, and informed citizenship in India.",
      },
      { property: "og:title", content: "Smart India Movement (SIM)" },
      {
        property: "og:description",
        content:
          "An umbrella of civic-tech initiatives building tools for awareness, governance, and informed citizenship in India.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

type Project = {
  name: string;
  description: string;
  status: "live" | "soon";
  href?: string;
};

const projects: Project[] = [
  {
    name: "Know Your Leaders",
    description:
      "A searchable database of elected representatives, their work, and public records.",
    status: "live",
    href: "#",
  },
  {
    name: "Know Your Constitution",
    description:
      "The Constitution of India, made readable — articles, schedules, and amendments in plain language.",
    status: "live",
    href: "#",
  },
  {
    name: "Know Your Rights",
    description:
      "A practical guide to fundamental rights and the legal protections available to every citizen.",
    status: "soon",
  },
  {
    name: "Know Your Budget",
    description:
      "Where public money comes from and where it goes — Union and State budgets, visualised.",
    status: "soon",
  },
  {
    name: "Know Your Policies",
    description:
      "Plain-language briefings on flagship policies, schemes, and the ministries that run them.",
    status: "soon",
  },
  {
    name: "Civic Classroom",
    description:
      "Short, structured lessons on how India is governed — for students, teachers, and curious citizens.",
    status: "soon",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <main>
        <Hero />
        <ProjectsSection />
        <Principles />
      </main>
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card">
      <div className="h-2 w-2 rounded-full bg-foreground" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid items-center gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              Smart India Movement.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              SIM is a collection of independent yet connected initiatives focused on
              civic awareness, governance, education, public knowledge, and informed
              citizenship.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Explore projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#principles"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                What we stand for
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <NodeDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}


function NodeDiagram() {
  // SIM as the central node connecting projects — minimal SVG
  const nodes = [
    { label: "Leaders", x: 50, y: 12 },
    { label: "Constitution", x: 92, y: 38 },
    { label: "Rights", x: 80, y: 86 },
    { label: "Budget", x: 20, y: 86 },
    { label: "Policies", x: 8, y: 38 },
  ];
  const cx = 50;
  const cy = 50;
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {nodes.map((n) => (
          <line
            key={n.label}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="currentColor"
            strokeWidth="0.2"
            className="text-border"
          />
        ))}
        <circle cx={cx} cy={cy} r="18" className="fill-card stroke-border" strokeWidth="0.3" />
        {nodes.map((n) => (
          <circle
            key={n.label}
            cx={n.x}
            cy={n.y}
            r="3.2"
            className="fill-background stroke-border"
            strokeWidth="0.3"
          />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Hub
        </div>
        <div className="mt-1 text-sm font-semibold tracking-tight">SIM</div>
      </div>
      {nodes.map((n) => (
        <div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
          style={{ left: `${n.x}%`, top: `${n.y + 7}%` }}
        >
          {n.label}
        </div>
      ))}
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Projects
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              An ecosystem of civic tools.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each project under SIM is built to stand on its own, while contributing
              to a shared body of public knowledge.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            {projects.filter((p) => p.status === "live").length} live ·{" "}
            {projects.filter((p) => p.status === "soon").length} in development
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === "live";
  const Wrapper: React.ElementType = isLive ? "a" : "div";
  const wrapperProps = isLive ? { href: project.href ?? "#" } : {};
  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative flex flex-col gap-6 bg-card p-8 transition-colors ${
        isLive ? "hover:bg-accent" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-[11px] font-medium text-muted-foreground">
          {project.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
        </div>
        <span
          className={`text-[10px] uppercase tracking-[0.16em] ${
            isLive ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {isLive ? "Live" : "Soon"}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {isLive ? "Open project" : "In development"}
        </span>
        <ArrowUpRight
          className={`h-4 w-4 transition-transform ${
            isLive
              ? "text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              : "text-muted-foreground/50"
          }`}
        />
      </div>
    </Wrapper>
  );
}

function Principles() {
  const items = [
    {
      title: "Independent",
      body: "Not aligned with any party, government, or commercial interest.",
    },
    {
      title: "Open",
      body: "Built on public data, open standards, and transparent methods.",
    },
    {
      title: "Durable",
      body: "Designed as long-term public infrastructure, not a campaign.",
    },
  ];
  return (
    <section id="principles" className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Principles
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Quiet, careful, and built to last.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:col-span-8 md:grid-cols-3">
            {items.map((it) => (
              <div key={it.title} className="bg-card p-8">
                <div className="text-sm font-semibold tracking-tight">{it.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {it.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                Smart India Movement
              </span>
              <span className="text-xs text-muted-foreground">
                Civic initiatives for an informed India.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <SocialLink href="#" label="Twitter">
              <Twitter className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="#" label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="#" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Smart India Movement.</div>
          <div>Made for the public good.</div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {children}
    </a>
  );
}
