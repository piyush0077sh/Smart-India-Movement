const trimUrl = (value: string | undefined) => value?.trim() || undefined;

export const site = {
  name: "Smart India Movement",
  shortName: "SIM",
  tagline: "Civic initiatives for an informed India.",
  description:
    "SIM is an umbrella of independent civic-tech initiatives focused on awareness, governance, education, and informed citizenship in India.",
  ogDescription:
    "An umbrella of civic-tech initiatives building tools for awareness, governance, and informed citizenship in India.",
  url: trimUrl(import.meta.env.VITE_SITE_URL)?.replace(/\/$/, "") ?? "",
} as const;

export const siteMeta = {
  title: `${site.name} — ${site.tagline}`,
  ogTitle: `${site.name} (${site.shortName})`,
} as const;

export type ProjectKey = "kyl" | "kyc";

const projectUrls: Record<ProjectKey, string | undefined> = {
  kyl: trimUrl(import.meta.env.VITE_KYL_URL),
  kyc: trimUrl(import.meta.env.VITE_KYC_URL),
};

export function getProjectUrl(key: ProjectKey): string | undefined {
  return projectUrls[key];
}

export type SocialKey = "twitter" | "github" | "linkedin";

const socialUrls: Record<SocialKey, string | undefined> = {
  twitter: trimUrl(import.meta.env.VITE_TWITTER_URL),
  github: trimUrl(import.meta.env.VITE_GITHUB_URL),
  linkedin: trimUrl(import.meta.env.VITE_LINKEDIN_URL),
};

export function getSocialLinks(): Partial<Record<SocialKey, string>> {
  return Object.fromEntries(
    Object.entries(socialUrls).filter((entry): entry is [SocialKey, string] => Boolean(entry[1])),
  );
}

export type Project = {
  key?: ProjectKey;
  name: string;
  description: string;
  status: "live" | "soon";
};

export const projects: Project[] = [
  {
    key: "kyl",
    name: "Know Your Leaders",
    description:
      "A searchable database of elected representatives, their work, and public records.",
    status: "live",
  },
  {
    key: "kyc",
    name: "Know Your Constitution",
    description:
      "The Constitution of India, made readable — articles, schedules, and amendments in plain language.",
    status: "live",
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

export function getProjectHref(project: Project): string | undefined {
  if (project.status !== "live" || !project.key) return undefined;
  return getProjectUrl(project.key);
}
