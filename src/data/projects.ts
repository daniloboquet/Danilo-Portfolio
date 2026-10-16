export interface Project {
  slug: string;
  num: string;
  title: string;
  hook: string;
  meta: string;
}

export const projects: Project[] = [
  {
    slug: "ai-commerce",
    num: "01",
    title: "SusTern AI-Commerce",
    hook: "The platform that began as my first proposal to the team — product information, branded storefronts, and connected workflows, with human review where trust matters.",
    meta: "SusTern · Product & UX design lead · 2025 — present",
  },
  {
    slug: "tpl-platform",
    num: "02",
    title: "SusTern TPL Platform",
    hook: "The queue that tells you what to do next — document intake, dispatch, and billing for third-party logistics, derived from the AI-Commerce platform.",
    meta: "SusTern · Product & UX design lead · 2025 — present",
  },
  {
    slug: "noryx",
    num: "03",
    title: "noryX — the first product",
    hook: "The app that brought me to SusTern — and set the pattern the platform still runs on: AI drafts, humans decide.",
    meta: "SusTern · Product & UX design lead, post-launch · May 2025 — present",
  },
];
