import { useState } from "react";

const navItems = [
  { label: "Sākums", href: "#home" },
  { label: "Soma", href: "#backpack" },
  { label: "Ceļš", href: "#route" },
  { label: "Ceļš", href: "#route" },
  { label: "Grafiks", href: "#schedule" },
  { label: "Našķi", href: "#food" },
  { label: "Mūzika", href: "#soundtrack" },
  { label: "Atpūta", href: "#relax" },
];

export function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 rounded-full border border-white/30 bg-white/40 p-3 text-slate-700 backdrop-blur-xl md:hidden"
        aria-label="Atvērt navigāciju"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>

      <nav className="hidden rounded-full border border-white/30 bg-white/40 px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl md:block">
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

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsOpen(false)}
            aria-label="Aizvērt navigāciju"
          />

          <nav className="absolute right-0 top-0 h-full w-52 bg-stone-50/80 px-8 py-20 shadow-xl">
            <ul className="space-y-6 text-right text-xl font-bold">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-[var(--color-primary)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
