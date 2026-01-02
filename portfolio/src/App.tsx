import Footer from './components/Footer'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import Section from './components/Section'
import TechIcons from './components/TechIcons'
import { projects } from './data/projects'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Skip to content
      </a>

      <Header />

      <main id="content">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/20" />
            <div className="absolute -bottom-40 left-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-500/10" />
          </div>

          <Section id="top" className="relative pt-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200">
                  Muhanguzi Muhwezi • Full‑stack • DevOps
                </p>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
                  Visionary and action‑first.
                  I ship fast.
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-slate-700 sm:text-lg dark:text-slate-300">
                  Full‑stack engineer with strong frontend execution and production-minded delivery.
                  I build clean UI, reliable APIs, and ship features end-to-end.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white outline-none ring-1 ring-indigo-400/30 hover:bg-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-300"
                  >
                    View projects
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 outline-none hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-indigo-300 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-100 dark:hover:bg-slate-900/50"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 backdrop-blur">
                  <p className="text-sm font-semibold text-slate-200">Stack & strengths</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-400" />
                      <span>Frontend: React + TypeScript, responsive UI, accessibility, and component systems.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                      <span>Backend: Python (Django/Flask) and Node.js (Express) for pragmatic APIs.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-200" />
                      <span>DevOps: server management + VPS deployments (DigitalOcean) and production ops.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        <Section id="projects" title="Projects" subtitle="A few selected builds (placeholder data for now).">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>

        <Section id="about" title="About" subtitle="A quick snapshot of how I work.">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-base leading-7 text-slate-300">
                I’m Muhanguzi Muhwezi — a full‑stack engineer with an action-first mindset. I care about
                sharp UI detail, clean abstractions, and build quality that scales as products grow.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                My workflow is straightforward: clarify requirements, ship an MVP quickly, then iterate with
                better UX, stronger types, and production hardening.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
                <p className="text-sm font-semibold text-slate-200">Core stack</p>
                <TechIcons />
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="This is a UI-only contact form (no backend).">
          <form
            className="max-w-2xl rounded-2xl border border-slate-800 bg-slate-950/50 p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-200">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="h-11 rounded-xl border border-slate-800 bg-slate-950 px-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-indigo-300"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-200">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 rounded-xl border border-slate-800 bg-slate-950 px-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-indigo-300"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2">
              <span className="text-sm font-medium text-slate-200">Message</span>
              <textarea
                rows={5}
                placeholder="What are you building?"
                className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-indigo-300"
              />
            </label>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-400">
                Prefer email? Use{' '}
                <a
                  className="font-medium text-slate-200 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                  href="mailto:hello@example.com"
                >
                  hello@example.com
                </a>
                .
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white outline-none ring-1 ring-indigo-400/30 hover:bg-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                Send (UI only)
              </button>
            </div>
          </form>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
