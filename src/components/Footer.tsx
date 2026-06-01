export function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] px-6 mb-8">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Studenta nedēļa
            </p>
            <p className="mt-8 text-s leading-[1.6] text-[var(--color-muted)]">
              Neliels ieskats datorikas studenta nedēļā
            </p>
          </div>

          <div className="space-y-5 md:text-right">
            <nav aria-label="Kājenes navigācija">
              <ul className="flex flex-wrap gap-4 text-sm font-bold md:justify-end">
                <li>
                  <a
                    href="#backpack"
                    className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  >
                    Soma
                  </a>
                </li>
                <li>
                  <a
                    href="#route"
                    className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  >
                    Ceļš
                  </a>
                </li>
                <li>
                  <a
                    href="#schedule"
                    className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  >
                    Grafiks
                  </a>
                </li>
                <li>
                  <a
                    href="#food"
                    className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  >
                    Našķi
                  </a>
                </li>
                <li>
                  <a
                    href="#soundtrack"
                    className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  >
                    Mūzika
                  </a>
                </li>
                <li>
                  <a
                    href="#relax"
                    className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  >
                    Atpūta
                  </a>
                </li>
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
  );
}
