const navItems = [
  { label: 'Soma', href: '#backpack' },
  { label: 'Ceļš', href: '#route' },
  { label: 'Grafiks', href: '#schedule' },
  { label: 'Našķi', href: '#food' },
  { label: 'Mūzika', href: '#soundtrack' },
  { label: 'Atpūta', href: '#relax' },
]

export function NavbarSection() {
  return (
    <header className="fixed right-6 top-6 z-50">
      <nav className="rounded-full border border-white/30 bg-white/40 px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <ul className="flex items-center gap-5 text-sm font-bold">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors duration-200 hover:text-[var(--color-primary)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}