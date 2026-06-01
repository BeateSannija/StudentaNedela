import { useState } from "react";

const navItems = [
  { label: "Sākums", href: "#home" },
  { label: "Soma", href: "#backpack" },
  { label: "Ceļš", href: "#route" },
  { label: "Grafiks", href: "#schedule" },
  { label: "Našķi", href: "#food" },
  { label: "Mūzika", href: "#soundtrack" },
  { label: "Atpūta", href: "#relax" },
];

type NavbarSectionProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

export function NavbarSection({ isDark, toggleTheme }: NavbarSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const ThemeIcon = isDark ? SunIcon : MoonIcon;
  return (
    <header className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 rounded-full border border-white/30 bg-white/40 p-3 text-slate-700 backdrop-blur-xl md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
        aria-label={isOpen ? "Aizvērt navigāciju" : "Atvērt navigāciju"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
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

      <nav
        aria-label="Galvenā navigācija"
        className="hidden rounded-full border border-white/30 bg-white/40 px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl md:block"
      >
        <ul className="flex items-center gap-5 text-sm font-bold">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors duration-200 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full p-1 transition-colors duration-200 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
              aria-label={
                isDark ? "Ieslēgt gaišo režīmu" : "Ieslēgt tumšo režīmu"
              }
            >
              <ThemeIcon />
            </button>
          </li>
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

          <nav
            id="mobile-navigation"
            aria-label="Mobilā navigācija"
            className="absolute right-0 top-0 h-full w-52 bg-stone-50/80 px-8 py-20 shadow-xl"
          >
            <ul className="space-y-6 text-right text-xl font-bold">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="mt-8 ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/40 backdrop-blur-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  aria-label={
                    isDark ? "Ieslēgt gaišo režīmu" : "Ieslēgt tumšo režīmu"
                  }
                >
                  <ThemeIcon />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

function SunIcon() {
  return (
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
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
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
      aria-hidden="true"
    >
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </svg>
  );
}
