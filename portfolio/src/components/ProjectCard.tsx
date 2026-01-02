import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group h-full rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-5 ring-1 ring-inset ring-slate-200/60 hover:border-slate-300 dark:border-slate-800/80 dark:from-slate-950/60 dark:to-slate-950/20 dark:ring-slate-900/40 dark:hover:border-slate-700">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{project.title}</h3>
          <p className="mt-1 text-xs text-slate-400">
            {project.role} • {project.year}
          </p>
        </div>
        <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          {project.year}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        {project.links.live && (
          <a
            className="rounded-xl bg-indigo-500 px-3.5 py-2 font-semibold text-white ring-1 ring-inset ring-indigo-400/30 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        )}
        {project.links.repo && (
          <a
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100 dark:hover:bg-slate-900/60"
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </article>
  )
}
