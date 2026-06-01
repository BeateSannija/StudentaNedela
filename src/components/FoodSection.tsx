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
    <section
      id="food"
      className="relative overflow-hidden pb-8 pt-8"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <div className="relative hidden min-h-[420px] items-center justify-center overflow-visible lg:flex">
            <div className="food-hero-gradient pointer-events-none absolute -left-40 -top-32 h-[760px] w-[900px] blur-3xl" />

            <img
              src={`${import.meta.env.BASE_URL}images/cupcake-black.png`}
              aria-hidden="true"
              className="relative z-10 mx-auto h-auto max-h-[280px] w-auto object-contain opacity-95"
            />
          </div>
          <div className="relative">
            <div className="absolute -left-5 top-0 h-7 w-44 -rotate-2 bg-[var(--color-green)]" />

            <p className="relative text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Enerģija
            </p>

            <div className="relative mt-3 mb-2">
              <div className="absolute bottom-[0.42em] left-[2.2em] h-3 w-[4.6em] -rotate-1 bg-[var(--color-green)] opacity-75" />

              <h2 className="relative display-heading text-4xl font-bold leading-[1.1] text-[var(--color-primary)] md:text-6xl">
                Mani mīļākie našķi
              </h2>
            </div>

            <p className="mt-4 max-w-lg text-base leading-[1.6] text-[var(--color-muted)] indent-8">
              Našķi starp lekcijām un pauzēs starp mācību sesijām ir svarīga
              studenta dzīves daļa. Es piekopju augu valsts uzturu, kas nozīmē,
              ka man ir vairāk jāpiedomā pie atļautajiem našķiem. Šie ir mani
              mīļākie augu valsts našķi.
            </p>

            <div className="mt-5 border-t border-[var(--color-border)]">
              {snacks.map((snack, index) => (
                <article
                  key={snack.name}
                  className="group grid gap-3 border-b border-[var(--color-border)] py-4 sm:grid-cols-[54px_1fr]"
                >
                  <span className="text-sm font-bold tracking-[0.25em] text-[var(--color-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    {/* <h3 className="text-2xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-[var(--color-primary)]"> */}
                    <h3 className="text-[1.35rem] font-extrabold tracking-tight transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                      {snack.name}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
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
