import type { ReactNode } from 'react'

export default function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: {
  id?: string
  title?: string
  subtitle?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={['px-4', className].filter(Boolean).join(' ')}>
      <div className="mx-auto w-full max-w-6xl py-16 sm:py-20">
        {(title || subtitle) && (
          <header className="mb-8 border-b border-slate-200/80 pb-6 dark:border-slate-900/60">
            {title && (
              <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
