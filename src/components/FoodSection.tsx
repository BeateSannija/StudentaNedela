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
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <div className="relative flex min-h-[420px] items-center justify-center overflow-visible">
            <div className="pointer-events-none absolute -left-40 -top-32 h-[760px] w-[900px] bg-[radial-gradient(circle_at_38%_38%,rgba(171,195,226,0.9)_0%,transparent_34%),radial-gradient(circle_at_35%_68%,rgba(151,168,60,0.42)_0%,transparent_34%),radial-gradient(circle_at_70%_72%,rgba(76,5,12,0.34)_0%,transparent_38%)] blur-3xl" />

  <img
    src="/images/cupcake-black.png"
    alt="Melnbalta kēksiņa ilustrācija"
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

              <h2 className="relative display-heading text-4xl font-bold leading-[0.95] text-[var(--color-primary)] md:text-6xl">
                Mani mīļākie našķi
              </h2>
            </div>

            <p className="mt-4 max-w-lg text-base leading-7 text-[var(--color-muted)]">
              Našķi starp lekcijām un pauzēs starp mācību sesijām ir svarīga
              studenta dzīves daļa. Es piekopju augu valsts uzturu, kas nozīmē,
              ka man ir vairāk jāpiedomā pie atļautajiem našķiem. Šie ir mani
              mīļākie augu valsts našķi.
            </p>

            <div className="mt-5 border-t border-[var(--color-border)]">
              {snacks.map((snack, index) => (
                <article
                  key={snack.name}
                  // className="group grid gap-4 border-b border-[var(--color-border)] py-6 sm:grid-cols-[64px_1fr]"
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
