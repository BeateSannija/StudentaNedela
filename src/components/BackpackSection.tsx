export function BackpackSection() {
  const items = [
    'Portatīvais dators',
    'Piezīmju klade',
    'Ūdens pudele',
    'Austiņas',
    'Lādētājs',
    'Studentu apliecība',
  ]

  return (
    <section id="backpack" className="section section-divider">
      <div className="container">
        <h2 className="mb-10 text-3xl font-semibold md:text-4xl">
          Kas ir manā mugursomā?
        </h2>

        <div className="grid items-center gap-10 md:grid-cols-[1fr_280px_1fr]">
          <div className="space-y-6">
            {items.slice(0, 3).map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[var(--color-surface)] p-5 shadow-sm"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="placeholder-circle mx-auto h-64 w-64" />

          <div className="space-y-6">
            {items.slice(3).map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[var(--color-surface)] p-5 shadow-sm"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}