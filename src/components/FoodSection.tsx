const snacks = [
  {
    name: "Dateles + zemesriekstu sviests",
    note: "Īsam enerģijas boostam.",
  },
  {
    name: "Proteīna batoniņi",
    note: "Kad starp lekcijām nav laika.",
  },
  {
    name: "Avokado maizīte",
    note: "Kad vajag ko sātīgāku.",
  },
  {
    name: "Tumšā šokolāde",
    note: "Jo būsim godīgi.",
  },
];

export function FoodSection() {
  return (
    <section id="food" className="section section-divider overflow-hidden">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-10 top-10 h-40 w-32 -rotate-6 bg-[var(--color-green)]" />

            <div className="relative border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_14px_40px_rgba(31,39,71,0.06)]">
              <img
                src="/images/music-park.jpeg"
                alt="Pagaidu attēls ēdiena flatlay vietā"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 top-0 h-7 w-44 -rotate-2 bg-[var(--color-green)]" />

            <p className="relative text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Enerģija
            </p>

            <div className="relative mt-3 mb-2">
              <div className="absolute bottom-[0.42em] left-[2.2em] h-3 w-[4.6em] -rotate-1 bg-[var(--color-green)] opacity-75" />

              <h2 className="relative display-heading text-5xl font-bold leading-none text-[var(--color-primary)] md:text-7xl">
                Mani mīļākie našķi
              </h2>
            </div>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              Našķi starp lekcijām un pauzēs starp mācību sesijām ir svarīga
              studenta dzīves daļa. Es piekopju augu valsts uzturu, kas nozīmē,
              ka man ir vairāk jāpiedomā pie atļautajiem našķiem. Šie ir mani
              mīļākie augu valsts našķi.
            </p>

            <div className="mt-5 border-t border-[var(--color-border)]">
              {snacks.map((snack, index) => (
                <article
                  key={snack.name}
                  className="group grid gap-4 border-b border-[var(--color-border)] py-6 sm:grid-cols-[64px_1fr]"
                >
                  <span className="text-sm font-bold tracking-[0.25em] text-[var(--color-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                      {snack.name}
                    </h3>

                    <p className="mt-2 text-[var(--color-muted)]">
                      {snack.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
