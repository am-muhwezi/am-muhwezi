export type Project = {
  slug: string
  title: string
  description: string
  year: string
  role: string
  tags: string[]
  links: {
    live?: string
    repo?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'church-reg',
    title: 'Church Reg',
    description:
      'A church registration and management app focused on clear workflows, data integrity, and practical admin UX.',
    year: '2025',
    role: 'Full‑stack Engineer',
    tags: ['Python', 'Django', 'UI', 'DevOps'],
    links: { repo: 'https://github.com/am-muhwezi/' },
  },
  {
    slug: 'collaboration',
    title: 'Collaboration (with am-derrick)',
    description:
      'A collaborative build focused on shipping features fast, aligning on UX, and keeping code maintainable.',
    year: '2025',
    role: 'Full‑stack Engineer',
    tags: ['Teamwork', 'Frontend', 'Backend'],
    links: { repo: 'https://github.com/am-muhwezi/' },
  },
  {
    slug: 'trainrup-fit',
    title: 'TrainrUp.fit',
    description:
      'Fitness platform experience with a clean landing and fast navigation for users to engage and return.',
    year: '2024',
    role: 'Frontend / Full‑stack',
    tags: ['Frontend', 'UX', 'Performance'],
    links: { live: 'https://trainrup.fit' },
  },
  {
    slug: 'pauls-tropical-fitness',
    title: 'paulstropicalfitness.fit',
    description:
      'A premium marketing site built to keep visitors focused with clear hierarchy and strong visual rhythm.',
    year: '2024',
    role: 'Frontend Engineer',
    tags: ['UI', 'Responsive', 'Typography'],
    links: { live: 'https://paulstropicalfitness.fit' },
  },
  {
    slug: 'apobasi',
    title: 'Apobasi',
    description:
      'A multi-client system: React + TypeScript admin frontend, Flutter apps for drivers and parents, live location tracking, plus backend services in Express.js and Django REST Framework (with some native code integration).',
    year: '2024',
    role: 'Full‑stack Engineer',
    tags: ['React', 'TypeScript', 'Flutter', 'Express', 'DRF', 'Live Tracking'],
    links: { repo: 'https://github.com/am-muhwezi/' },
  },
  {
    slug: 'portfolio-v1',
    title: 'Portfolio',
    description:
      'A premium single-page portfolio with a projects grid, fast navigation, and a clean UI that supports light/dark mode.',
    year: '2026',
    role: 'Frontend Engineer',
    tags: ['React', 'TypeScript', 'Tailwind', 'UI'],
    links: { repo: 'https://github.com/am-muhwezi/' },
  },
]
