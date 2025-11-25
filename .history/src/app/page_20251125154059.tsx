import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    label: "Projects shipped",
    value: "15+",
    sub: "MERN, AI, BI dashboards",
  },
  {
    label: "Focus areas",
    value: "AI & DX",
    sub: "Assistants, product-thinking",
  },
  {
    label: "Availability",
    value: "Jan 2025",
    sub: "Full-time / internships",
  },
];

const skills = [
  "Java",
  "C++",
  "Node.js",
  "React",
  "MySQL",
  "MongoDB",
  "GitHub",
  "Postman",
  "Vercel",
  "Render",
  "OOP",
  "Cloud & DevOps basics",
];

const projects = [
  {
    title: "AI Virtual Assistant",
    period: "Feb 2024",
    stack: ["Node.js", "React", "Web Speech", "REST APIs"],
    summary:
      "Conversational web assistant that understands natural commands, streams context-aware replies, and triggers smart utilities like weather, news, reminders, and Q&A.",
    impact: [
      "Blended voice + text interface for frictionless UX",
      "Realtime API stitching with resilient fallbacks",
      "Cloud deployment with zero-downtime rollouts",
    ],
  },
  {
    title: "Spotify Clone (Cadenza)",
    period: "2024",
    stack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    summary:
      "Premium music streaming experience with adaptive theming, curated playlists, and offline-ready caching that mirrors modern product polish.",
    impact: [
      "Role-based auth + playlist collaboration flow",
      "Waveform-driven mini player & lyric sync",
      "Edge caching for snappy global playback",
    ],
  },
  {
    title: "Quiz Arena",
    period: "2023",
    stack: ["React", "Node.js", "Socket.io"],
    summary:
      "Single & multiplayer quiz platform with live leaderboards, smart question pools, and anti-cheat safeguards for campus events.",
    impact: [
      "Dynamic difficulty and streak-based scoring",
      "WebSocket powered rooms under 200ms latency",
      "Admin analytics to replay sessions instantly",
    ],
  },
];

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/imgaurav0001",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gauravjoshi327/",
  },
  {
    icon: Mail,
    label: "gauravjoshi327@gmail.com",
    href: "mailto:gauravjoshi327@gmail.com",
  },
  {
    icon: Phone,
    label: "+91 97606 73280",
    href: "tel:+919760673280",
  },
];

export default function Home() {
  return (
    <div className="page-shell min-h-screen">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 md:px-8 md:py-24">
        <section className="rounded-3xl border border-white/5 bg-slate-900/60 p-8 shadow-[0_20px_120px_-60px_rgba(14,165,233,0.9)] backdrop-blur-3xl md:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-200">
                <Sparkles className="h-4 w-4" /> Final-year MTech · NIET
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
                Gaurav Joshi — Building human-centered software & AI-first
                experiences.
              </h1>
              <p className="text-lg text-slate-300 md:text-xl">
                Software developer with strong CS fundamentals, a bias for
                structured execution, and an eye for crafted UI. I thrive at the
                intersection of product thinking, MERN stack engineering, and
                AI-driven workflows.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Explore projects <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:gauravjoshi327@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-cyan-300/60"
                >
                  Let&apos;s collaborate <Send className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-2xl border border-white/5 bg-slate-950/70 p-6 lg:max-w-sm">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/5 bg-white/5 p-4"
                >
                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="text-sm text-slate-400">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-white/5 bg-slate-900/40 p-8 backdrop-blur-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Structured learning, clear communication, reliable delivery.
            </h2>
            <p className="mt-4 text-slate-300">
              From algorithms to deployment, I bring a systems mindset: break
              problems down, communicate the plan, and ship with polish. I am
              currently wrapping up my Integrated BTech-MTech in CSE at NIET and
              looking for teams where I can own features end-to-end, pair with
              designers, and keep leveling up in AI engineering.
            </p>
            <p className="mt-4 text-slate-300">
              I love crafting calm interfaces, automating repetitive tasks, and
              documenting everything so collaboration stays effortless.
            </p>
          </article>
          <article className="rounded-3xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 via-transparent to-indigo-500/10 p-8 backdrop-blur-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Tech focus
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium text-slate-100">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="projects" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Selected projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Product-grade work with measurable impact
              </h2>
            </div>
            <Link
              href="https://github.com/imgaurav0001"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60"
            >
              GitHub profile <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-2xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {project.period}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {project.stack[0]}
                  </span>
                </div>
                <p className="text-slate-300">{project.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  {project.impact.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-white/5 bg-slate-900/50 p-8 backdrop-blur-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Core principles
            </p>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>
                • Start with user journeys, then architect systems that feel
                invisible.
              </li>
              <li>
                • Communicate upfront, document edge cases, and keep everyone in
                the loop.
              </li>
              <li>
                • Sweat the visual details—micro-interactions matter for trust.
              </li>
              <li>
                • Automate QA and delivery pipelines so shipping stays boring.
              </li>
            </ul>
          </article>
          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 p-8 backdrop-blur-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              What&apos;s next
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">
              Looking for product-driven software roles.
            </h3>
            <p className="mt-4 text-slate-900/80">
              I&apos;m ready to join teams shipping meaningful products across
              full-stack, AI, or platform engineering. Open to SDE, product
              engineering, AI engineer, or developer experience roles.
            </p>
            <p className="mt-4 text-slate-900">
              Reach out if you want someone who blends clean code, strong system
              design foundations, and thoughtful UI.
            </p>
          </article>
        </section>

        <section id="contact" className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-2xl md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Contact
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Coffee chats, collaborations, or referrals welcome.
              </h2>
              <p className="text-slate-300">
                Share a challenge, a dream product, or a team vibe—let&apos;s
                craft something reliable together.
              </p>
            </div>
            <Link
              href="mailto:gauravjoshi327@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:opacity-80"
            >
              Say hello <Send className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-100 transition hover:border-cyan-300/50"
              >
                <span className="rounded-2xl bg-white/10 p-3">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <p className="pb-8 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
          © {new Date().getFullYear()} Gaurav Joshi · Built with Next.js & Tailwind
        </p>
      </main>
    </div>
  );
}
