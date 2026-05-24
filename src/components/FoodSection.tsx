export function FoodSection() {
  const meals = [
    'Ātras brokastis',
    'Meal prep pusdienas',
    'Makaroni ar pesto',
    'Vakara gatavošana',
  ]

  return (
    <section id="food" className="section section-divider">
      <div className="container">
        <div className="mb-10 space-y-4">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Vegāna studenta maltītes
          </h2>

          <p className="max-w-3xl text-lg text-[var(--color-muted)]">
            Studiju nedēļā ēšana nav tikai "kaut kas pa vidu". Tā ir daļa no
            ritma — ko var pagatavot ātri, ko var sagatavot iepriekš, un kas
            dod enerģiju garām dienām.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {meals.map((meal) => (
            <article
              key={meal}
              className="rounded-3xl bg-[var(--color-surface)] p-5 shadow-sm"
            >
              <div className="mb-4 h-48 rounded-2xl bg-[var(--color-border)]" />

              <h3 className="text-lg font-semibold">{meal}</h3>

              <p className="mt-3 text-sm text-[var(--color-muted)]">
                Placeholder apraksts maltītei.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}