const playlists = [
  'Rīta fokusam',
  'Kodēšanas režīms',
  'Brauciens uz universitāti',
  'Vakara atslodze',
]

export function SoundtrackSection() {
  return (
    <section id="soundtrack" className="section section-divider">
      <div className="container">
        <div className="mb-10 space-y-4">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Mans nedēļas soundtrack
          </h2>

          <p className="max-w-3xl text-lg text-[var(--color-muted)]">
            Mūzika palīdz ieiet fokusā, izturēt braucienus un reizēm vienkārši
            padara kodēšanu mazliet dramatiskāku.
          </p>
        </div>

        <div className="rounded-3xl bg-[var(--color-surface)] p-6 shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-[280px_1fr]">
            <div className="placeholder-box h-72" />

            <div className="space-y-4">
              {playlists.map((playlist) => (
                <div
                  key={playlist}
                  className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] p-5"
                >
                  <span className="font-medium">{playlist}</span>

                  <div className="h-10 w-10 rounded-full bg-[var(--color-primary)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}