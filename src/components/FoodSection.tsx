const snacks = [
  {
    name: "Dateles ar zemesriekstu sviestu",
    note: 'Kad vēlos batoniņu "Snicker".',
  },
  {
    name: "Banānu pankūkas",
    note: "Prasa mazliet vairāk gatavošanu.",
  },
  {
    name: "Mango sorberts",
    note: "Atsvaidzinošs našķis siltākām dienām.",
  },
  {
    name: "Riekstu maisījums",
    note: "Parasti iekļauj indijas riekstus, vālriekstus un žāvētas aprikozes.",
  },
];

type FoodSectionProps = {
  isDark: boolean;
};

export function FoodSection({ isDark }: FoodSectionProps) {
  const cupcakeImage = isDark
    ? `${import.meta.env.BASE_URL}images/cupcake-white.png`
    : `${import.meta.env.BASE_URL}images/cupcake-black.png`;
  return (
    <section id="food" className="relative overflow-hidden pb-8 pt-8">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <div className="relative hidden min-h-[420px] items-center justify-center overflow-visible lg:flex">
            <div className="food-hero-gradient pointer-events-none absolute -left-40 -top-32 h-[760px] w-[900px] blur-3xl" />

            <img
              src={cupcakeImage}
              aria-hidden="true"
              className="relative z-10 mx-auto h-auto max-h-[280px] w-auto object-contain opacity-95"
            />
          </div>
          <div className="relative">
            <div className="absolute -left-5 -top-1 h-7 w-44 -rotate-2 bg-[var(--color-green)]" />

            <p className="relative text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Našķi
            </p>

            <div className="relative mt-3 mb-2">
              <h2 className="relative display-heading text-4xl font-bold leading-[1.1] text-[var(--color-primary)] md:text-6xl">
                Mani mīļākie našķi
              </h2>
            </div>

            <p className="mt-4 max-w-lg text-base leading-[1.6] text-[var(--color-muted)] indent-8">
              Našķi starp lekcijām un pauzēs starp mācību sesijām ir svarīga
              studenta dzīves daļa. Es piekopju augu valsts uzturu, tāpēc ne
              vienmēr varu izvēlēties pirmo našķi, kas pagadās pa rokai. Šie ir
              mani mīļākie augu valsts našķi.
            </p>

            <div className="mt-5 border-t border-[var(--color-border)]">
              {snacks.map((snack, index) => (
                <article
                  key={snack.name}
                  className="grid gap-3 border-b border-[var(--color-border)] py-4 sm:grid-cols-[54px_1fr]"
                >
                  <span className="text-sm font-bold tracking-[0.25em] text-[var(--color-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-[1.35rem] font-extrabold tracking-tight">
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
