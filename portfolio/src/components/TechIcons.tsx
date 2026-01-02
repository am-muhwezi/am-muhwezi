import {
  siC,
  siDart,
  siDjango,
  siDigitalocean,
  siExpress,
  siFlask,
  siFlutter,
  siNodedotjs,
  siPython,
  siReact,
  siTypescript,
} from 'simple-icons/icons'

type Tech = {
  name: string
  icon: { title: string; svg: string }
}

const tech: Tech[] = [
  { name: 'React', icon: siReact },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'Express', icon: siExpress },
  { name: 'Python', icon: siPython },
  { name: 'Django', icon: siDjango },
  { name: 'Flask', icon: siFlask },
  { name: 'Flutter', icon: siFlutter },
  { name: 'Dart', icon: siDart },
  { name: 'C', icon: siC },
  { name: 'DigitalOcean', icon: siDigitalocean },
]

function toCurrentColorSvg(svg: string) {
  // Simple Icons ships an SVG string without guaranteed fill; enforce currentColor.
  // Keep it minimal and safe.
  return svg.replace('<svg', '<svg fill="currentColor"')
}

export default function TechIcons() {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {tech.map((t) => (
        <div
          key={t.name}
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 ring-1 ring-inset ring-slate-200/60 dark:border-slate-800 dark:bg-slate-950 dark:ring-slate-900/40"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
            dangerouslySetInnerHTML={{ __html: toCurrentColorSvg(t.icon.svg) }}
          />
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t.name}</span>
        </div>
      ))}
    </div>
  )
}
