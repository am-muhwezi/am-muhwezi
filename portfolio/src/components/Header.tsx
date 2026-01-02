import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-900/60 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:text-slate-50"
        >
          Muhanguzi Muhwezi
        </a>

        <nav aria-label="Primary" className="flex items-center gap-2 text-sm">
          <a
            href="#projects"
            className="rounded-full border border-transparent px-3 py-1.5 font-medium text-slate-600 hover:border-slate-200 hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:text-slate-300 dark:hover:border-slate-800 dark:hover:bg-slate-950/60 dark:hover:text-slate-50"
          >
            Projects
          </a>
          <a
            href="#about"
            className="rounded-full border border-transparent px-3 py-1.5 font-medium text-slate-600 hover:border-slate-200 hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:text-slate-300 dark:hover:border-slate-800 dark:hover:bg-slate-950/60 dark:hover:text-slate-50"
          >
            About
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100 dark:hover:bg-slate-900/60"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100 dark:hover:bg-slate-900/60"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}
