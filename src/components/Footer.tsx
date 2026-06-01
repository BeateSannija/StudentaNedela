export function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] px-6 py-12">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Studenta nedēļa
            </p>

            <p className="text-lg leading-8 text-[var(--color-muted)]">
              Personiska mājaslapa par Datorikas nodaļas studenta darba nedēļu.
            </p>
          </div>

          <div className="space-y-5 md:text-right">
            <nav>
              <ul className="flex flex-wrap gap-4 text-sm font-bold md:justify-end">
                <li><a href="#backpack">Soma</a></li>
                <li><a href="#route">Ceļš</a></li>
                <li><a href="#schedule">Grafiks</a></li>
                <li><a href="#food">Našķi</a></li>
                <li><a href="#soundtrack">Mūzika</a></li>
                <li><a href="#relax">Atpūta</a></li>
              </ul>
            </nav>

            <div className="text-sm leading-7 text-[var(--color-muted)]">
              <p>Tīmekļa dizaina pamati</p>
              <p>Autore: Beāte Sannija Aploka · 2026</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}