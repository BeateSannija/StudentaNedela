const bagItems = [
  {
    number: "01",
    title: "Dators",
    description: "Lenovo Yoga un studiju darbi.",
  },
  {
    number: "02",
    title: "Ūdens pudele",
    description: "Vienmēr līdzi lekcijās.",
  },
  {
    number: "03",
    title: "Austiņas",
    description: "Fokusam, mūzikai un ceļam.",
  },
  { number: "04", title: "Našķis", description: "Enerģijai starp lekcijām." },
  {
    number: "05",
    title: "Roku krēms",
    description: "Ikdienas nepieciešamība.",
  },
  { number: "06", title: "Lūpu balzāms", description: "Vienmēr somā." },
  {
    number: "07",
    title: "Dezinfekcijas līdzeklis",
    description: "Ātrai roku dezinfekcijai.",
  },
  { number: "08", title: "Atslēgas", description: "Lai tiktu mājās." },
];

export function BackpackSection() {
  return (
    <section id="backpack" className="section -mt-24">
      <div className="container">
        <div className="mb-6 max-w-3xl">
          <div className="relative inline-block">
            <div className="absolute -left-4 top-0 h-7 w-36 rotate-1 bg-[var(--color-green)]" />

            <p className="relative text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Soma
            </p>
          </div>

          <h2 className="display-heading text-4xl font-bold leading-[1.3] text-[var(--color-primary)] md:text-6xl">
            Kas ir manā mugursomā?
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-[1.6] text-[var(--color-muted)] indent-8">
            Lietas, kas gandrīz vienmēr ceļo līdzi — studijām, ceļam un mazām
            pauzēm starp lekcijām.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_12px_34px_rgba(31,39,71,0.05)]">
            <img
              src={`${import.meta.env.BASE_URL}images/backpack.jpg`}
              alt="Mugursomas saturs: dators, ūdens pudele, austiņas, našķi, roku krēms, lūpu balzāms, dezinfekcijas līdzeklis un atslēgas"
              className="w-full object-cover"
            />
          </div>

          <div className="grid auto-rows-fr gap-x-8 border-t border-[var(--color-border)] sm:grid-cols-2">
            {bagItems.map((item) => (
              <article
                key={item.number}
                className="grid grid-cols-[42px_1fr] gap-3 border-b border-[var(--color-border)] py-5 md:min-h-[120px] md:py-4"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full border border-[var(--color-primary)] text-[0.65rem] font-extrabold text-[var(--color-primary)]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text)]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
