const relaxMoments = [
  {
    title: 'Vakara pastaiga',
    text: 'Neliela atelpa pēc intensīvas studiju dienas.',
  },
  {
    title: 'Laiks hobijiem',
    text: 'Brīdis sev un lietām, kas patīk ārpus studijām.',
  },
  {
    title: 'Miers mājās',
    text: 'Noslēgums nedēļai ar mierīgāku ritmu.',
  },
]

export function RelaxSection() {
  return (
    <section id="relax" className="section section-divider">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Atpūta no studijām
          </h2>
        </div>

        <div className="space-y-16">
          {relaxMoments.map((moment, index) => (
            <div
              key={moment.title}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="placeholder-box h-72" />

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  {moment.title}
                </h3>

                <p className="text-lg text-[var(--color-muted)]">
                  {moment.text}
                </p>

                <div className="space-y-3">
                  <div className="h-4 w-5/6 rounded-full bg-[var(--color-muted)]" />
                  <div className="h-4 w-3/4 rounded-full bg-[var(--color-muted)]" />
                  <div className="h-4 w-4/5 rounded-full bg-[var(--color-muted)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}