export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-900/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Portfolio</p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="#top"
            className="text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:text-slate-300 dark:hover:text-slate-50"
          >
            Back to top
          </a>
          <a
            href="https://github.com/am-muhwezi/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:text-slate-300 dark:hover:text-slate-50"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
