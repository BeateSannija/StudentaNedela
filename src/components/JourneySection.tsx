export function JourneySection() {
  return (
    <section id="route" className="section section-divider">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold md:text-4xl">
              No mājām līdz universitātei
            </h2>

            <p className="text-lg text-[var(--color-muted)]">
              Šeit vēlāk būs apraksts par ceļu uz universitāti, ikdienas
              pārvietošanos, pieturpunktiem un noskaņu darba nedēļas sākumā.
            </p>

            <div className="space-y-3">
              <div className="h-4 w-3/4 rounded-full bg-[var(--color-muted)]" />
              <div className="h-4 w-2/3 rounded-full bg-[var(--color-muted)]" />
              <div className="h-4 w-5/6 rounded-full bg-[var(--color-muted)]" />
              <div className="h-4 w-2/3 rounded-full bg-[var(--color-muted)]" />
            </div>
          </div>

          <div className="placeholder-box h-[420px]" />
        </div>
      </div>
    </section>
  )
}