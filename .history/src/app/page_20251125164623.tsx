import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

const withIconClass = (className?: string) =>
  className ? `h-5 w-5 ${className}` : "h-5 w-5";

const ArrowUpRightIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={withIconClass(className)}
    aria-hidden="true"
    {...props}
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const SparklesIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={withIconClass(className)}
    aria-hidden="true"
    {...props}
  >
    <path d="M12 3.5 13.2 7l3.8 1.2L13.2 9.4 12 13l-1.2-3.6-3.8-1.2 3.8-1.2z" />
    <path d="M5.2 4.2 5.7 6l1.8.6-1.8.6-.5 1.9-.6-1.9-1.8-.6 1.8-.6z" />
    <path d="M18.8 13.6l.6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6z" />
  </svg>
);

const SendIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.6}
    className={withIconClass(className)}
    aria-hidden="true"
    {...props}
  >
    <path d="M4 4l16 8-16 8 4.5-8z" />
    <path d="M4 4l6.5 8" />
  </svg>
);

const GithubIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={withIconClass(className)}
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.424 2.865 8.176 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.071 1.532 1.034 1.532 1.034.892 1.53 2.341 1.088 2.91.833.091-.648.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.094.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.678.921.678 1.856 0 1.339-.012 2.421-.012 2.75 0 .267.18.579.688.48C19.138 20.193 22 16.44 22 12.02 22 6.484 17.523 2 12 2Z" />
  </svg>
);

const LinkedinIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={withIconClass(className)}
    aria-hidden="true"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.605 0 4.27 2.372 4.27 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123Zm1.779 13.019H3.558V9h3.558v11.452Z" />
  </svg>
);

const MailIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={withIconClass(className)}
    aria-hidden="true"
    {...props}
  >
    <rect x={3} y={5} width={18} height={14} rx={2} />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const PhoneIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={withIconClass(className)}
    aria-hidden="true"
    {...props}
  >
    <path d="M6.5 3h4l1.5 5-3 2.5a15 15 0 0 0 5.5 5.5l2.5-3 5 1.5v4a2 2 0 0 1-2.2 2 17 17 0 0 1-14.3-14.3A2 2 0 0 1 6.5 3Z" />
  </svg>
);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  {
    label: "Production-ready projects",
    value: "15+",
    sub: "Full-stack • AI • DX",
  },
  {
    label: "Technical events facilitated",
    value: "12",
    sub: "Workshops & campus meets",
  },
  {
    label: "LinkedIn network",
    value: "3K+",
    sub: "Builders & hiring partners",
  },
];

const skillPillars = [
  {
    title: "Product Engineering",
    detail:
      "Crafting polished user journeys, design systems, and DX tooling that keeps teams shipping fast.",
    stack: ["React 19", "Next.js 16", "Tailwind 4", "Framer Motion"],
  },
  {
    title: "AI & Automation",
    detail:
      "Conversational assistants, workflow automation, and real-time intelligence using Node.js and modern APIs.",
    stack: ["Node.js", "Python", "LangChain", "LLM APIs"],
  },
  {
    title: "Systems & Delivery",
    detail:
      "Structured planning, DevOps hygiene, and reliable deployments on modern cloud platforms.",
    stack: ["MongoDB", "MySQL", "Render", "Vercel", "GitHub Actions"],
  },
];

const projects = [
  {
    title: "AI Virtual Assistant",
    subtitle: "Conversational OS for the browser",
    image: "/Virtual Aiistant project.png",
    href: "https://virtual-assistant-9u59.onrender.com/",
    stats: "99.9% uptime · 40+ reusable intents",
    summary:
      "Voice + text assistant that interprets natural commands, calls real-time APIs, and drives reminders, news digests, and contextual answers.",
    features: [
      "Realtime Web Speech handling with resilient fallbacks",
      "Modular skill graph with intent confidence scoring",
      "Cloud-native deploy with blue/green rollouts on Render",
    ],
    stack: ["React", "Node.js", "Express", "Web Speech", "REST APIs"],
  },
  {
    title: "Spotify Clone · Cadenza",
    subtitle: "Immersive streaming experience",
    image: "/spotify clone project.png",
    href: "https://spotify-clone-by-gaurav.vercel.app/",
    stats: "60fps UI · Offline-ready caching",
    summary:
      "A premium streaming app mirroring Spotify interactions, adaptive theming, seamless queueing, and collaborative playlists.",
    features: [
      "Role-based auth with protected routes and creator dashboards",
      "Waveform-driven mini-player plus lyrics + queue sync",
      "Edge caching + Prisma ORM for instant load globally",
    ],
    stack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL", "Vercel"],
  },
  {
    title: "Trivia Quiz Arena",
    subtitle: "Single + multiplayer quiz battles",
    image: "/Quiz Game Project.png",
    href: "https://trivia-quiz-application-game.vercel.app/",
    stats: "200ms realtime sync",
    summary:
      "Dynamic trivia hub with curated categories, duo arenas, and streak-based power-ups for campus fests.",
    features: [
      "Socket.io powered multiplayer rooms & live leaderboard",
      "Adaptive difficulty engine + anti-cheat guardrails",
      "Delightful gradient UI with motion micro-interactions",
    ],
    stack: ["React", "Socket.io", "Node.js", "Styled Components"],
  },
];

const certifications = [
  {
    title: "Scrum In Practice",
    org: "Infosys Springboard",
    date: "Sep 08, 2024",
    image: "/Scrum in practice certificate.png",
  },
  {
    title: "Career Essentials in Cybersecurity",
    org: "Microsoft + LinkedIn",
    date: "Jun 08, 2024",
    image: "/Carreer essetail in Cybersecurity certificate.png",
  },
  {
    title: "Java Programming: Arrays, Lists & Structured Data",
    org: "Duke University · Coursera",
    date: "Oct 16, 2022",
    image: "/Java Prog Certificate.png",
  },
];

const contactLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/imgaurav0001",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gauravjoshi327/",
  },
  {
    icon: MailIcon,
    label: "gauravjoshi327@gmail.com",
    href: "mailto:gauravjoshi327@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "+91 97606 73280",
    href: "tel:+919760673280",
  },
];

export default function Home() {
  return (
    <div className="page-shell min-h-screen text-slate-100">
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
        <header className="sticky top-6 z-20 mb-10 flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-900/70 px-6 py-3 backdrop-blur-xl">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Gaurav Joshi
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-transparent px-4 py-1 transition hover:border-cyan-300/70 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="mailto:gauravjoshi327@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:opacity-80"
          >
            Available now
          </Link>
        </header>

        <section
          id="about"
          className="grid gap-8 rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-indigo-900/40 px-6 py-10 backdrop-blur-2xl lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
              <SparklesIcon className="h-4 w-4" />
              MTech CSE · Final Year
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Crafting human-centered software & AI experiences with
              launch-ready polish.
            </h1>
            <p className="text-lg text-slate-300">
              I&apos;m Gaurav Joshi—software engineer, AI enthusiast, and
              Integrated BTech-MTech student at NIET. I thrive on structured
              planning, crisp communication, and building products that blend
              intelligence with delightful UI. Let&apos;s craft the next bold
              idea together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500 px-6 py-3 text-base font-semibold text-slate-900 transition hover:opacity-90"
              >
                Showcase work <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-cyan-300/70"
              >
                Book a call <SendIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
                <div className="absolute inset-x-4 top-6 rounded-2xl border border-cyan-100/20 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-2xl shadow-[0_30px_160px_-60px_rgba(59,130,246,0.8)]">
              <div className="flex items-center gap-4">
                    <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/20 shadow-[0_10px_60px_-20px_rgba(59,130,246,0.9)]">
                  <Image
                    src="/My-Profile_Image.jpg"
                    alt="Gaurav Joshi portrait"
                    fill
                    className="object-cover"
                    sizes="120px"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                    Based in Greater Noida
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Gaurav Joshi
                  </p>
                  <p className="text-sm text-slate-300">
                    Software Developer · AI-driven Futures
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-44 grid w-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-center"
                >
                  <p className="text-3xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{metric.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/10 p-6 backdrop-blur-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                {pillar.title}
              </p>
              <p className="mt-4 text-slate-200">{pillar.detail}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                {pillar.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section id="projects" className="mt-14 space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Featured builds
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Shipping ideas with product-level finish
              </h2>
            </div>
            <Link
              href="https://github.com/imgaurav0001"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/70"
            >
              Visit GitHub <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="grid gap-6 rounded-[28px] border border-white/10 bg-slate-900/50 p-6 backdrop-blur-2xl transition hover:border-cyan-300/60 lg:grid-cols-2"
              >
                <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={project.title === "AI Virtual Assistant"}
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                    {project.stats}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-slate-300">{project.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="text-cyan-300">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                    Visit live build <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="mt-16 space-y-6 rounded-[28px] border border-white/10 bg-slate-900/60 p-6 backdrop-blur-2xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Continuous learning
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Certifications & industry cred
              </h2>
            </div>
            <span className="rounded-full border border-white/10 px-6 py-2 text-xs font-semibold tracking-[0.2em] text-slate-300">
              Scrum · Security · Java
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-4"
              >
                <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10 bg-white">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                  {cert.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-300">{cert.org}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-16 rounded-[28px] border border-white/10 bg-gradient-to-br from-indigo-500/20 via-cyan-500/20 to-transparent p-8 backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Let&apos;s build together
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Open to software developer, AI/automation, and DX roles.
              </h2>
              <p className="text-slate-100/80">
                Send an email, DM on LinkedIn, or ring me. I reply fast with a
                project plan and crisp next steps.
              </p>
            </div>
            <Link
              href="mailto:gauravjoshi327@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:opacity-85"
            >
              Write to me <SendIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-white transition hover:border-white/60"
              >
                <span className="rounded-2xl bg-white/20 p-3">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-12 text-center text-xs uppercase tracking-[0.35em] text-slate-500">
          © 2025 Gaurav Joshi. All rights reserved.
        </p>
      </main>
    </div>
  );
}
