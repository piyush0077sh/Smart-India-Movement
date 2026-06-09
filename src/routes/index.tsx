import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

import {
  getProjectHref,
  getSocialLinks,
  projects,
  site,
  siteMeta,
  type Project,
  type SocialKey,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteMeta.title },
      { name: "description", content: site.description },
      { property: "og:title", content: siteMeta.ogTitle },
      { property: "og:description", content: site.ogDescription },
      { property: "og:type", content: "website" },
      ...(site.url ? [{ property: "og:url", content: site.url }] : []),
    ],
  }),
  component: Index,
});

const socialIcons: Record<SocialKey, typeof Twitter> = {
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
};

const socialLabels: Record<SocialKey, string> = {
  twitter: "Twitter",
  github: "GitHub",
  linkedin: "LinkedIn",
};

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
              SIM is a collection of independent yet connected initiatives focused on civic
              awareness, governance, education, public knowledge, and informed citizenship.
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
    <div className="relative mx-auto aspect-square w-full max-w-md">
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
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Hub</div>
        <div className="mt-1 text-sm font-semibold tracking-tight">{site.shortName}</div>
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
  const liveCount = projects.filter((p) => p.status === "live").length;
  const soonCount = projects.filter((p) => p.status === "soon").length;

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
              Each project under SIM is built to stand on its own, while contributing to a shared
              body of public knowledge.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            {liveCount} live · {soonCount} in development
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
  const href = getProjectHref(project);
  const isLive = project.status === "live";
  const isLink = Boolean(href);
  const Wrapper: React.ElementType = isLink ? "a" : "div";
  const wrapperProps = isLink ? { href, target: "_blank", rel: "noopener noreferrer" } : undefined;

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative flex flex-col gap-6 bg-card p-8 transition-colors ${
        isLink ? "hover:bg-accent" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-[11px] font-medium text-muted-foreground">
          {project.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
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
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {isLink ? "Open project" : isLive ? "Link coming soon" : "In development"}
        </span>
        <ArrowUpRight
          className={`h-4 w-4 transition-transform ${
            isLink
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
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socialLinks = getSocialLinks();

  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">{site.name}</span>
              <span className="text-xs text-muted-foreground">{site.tagline}</span>
            </div>
          </div>

          {Object.keys(socialLinks).length > 0 ? (
            <div className="flex items-center gap-2">
              {(Object.entries(socialLinks) as [SocialKey, string][]).map(([key, href]) => {
                const Icon = socialIcons[key];
                return (
                  <SocialLink key={key} href={href} label={socialLabels[key]}>
                    <Icon className="h-4 w-4" />
                  </SocialLink>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {site.name}.
          </div>
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
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {children}
    </a>
  );
}
