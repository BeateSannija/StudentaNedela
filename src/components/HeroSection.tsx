export function HeroSection() {
  return (
    // <section className="pb-16 pt-8 section-divider overflow-hidden">
    // <section className="section-divider overflow-hidden bg-[linear-gradient(135deg,_var(--color-bg)_0%,_rgba(171,195,226,0.35)_70%,_rgba(76,5,12,0.10)_100%)] pb-16 pt-8">
    <section className="section-divider overflow-hidden bg-[linear-gradient(135deg,var(--color-bg)_0%,rgba(171,195,226,0.38)_60%,rgba(76,5,12,0.24)_100%)] pb-16 pt-8">
      <div className="container">
        <nav className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <a href="#" className="text-lg font-extrabold tracking-tight">
            Studenta nedēļa
          </a>

          <ul className="flex flex-wrap gap-5 text-sm font-semibold">
            <li><a href="#backpack">Soma</a></li>
            <li><a href="#route">Ceļš</a></li>
            <li><a href="#schedule">Grafiks</a></li>
            <li><a href="#food">Maltītes</a></li>
            <li><a href="#soundtrack">Mūzika</a></li>
            <li><a href="#relax">Atpūta</a></li>
          </ul>
        </nav>

        {/* if i want to go back to card with rounded corners and gradient within (not on the section)*/}
        {/* <div className="relative min-h-[620px] rounded-[2rem] bg-[linear-gradient(135deg,_var(--color-surface)_0%,_#f7f4ef_35%,_rgba(171,195,226,0.35)_70%,_rgba(76,5,12,0.08)_100%)] p-8 shadow-sm md:p-14"> */}
        <div className="relative min-h-[620px] py-8 md:py-12">


          <div className="relative z-10 max-w-4xl">
            <p className="mb-8 text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-muted)]">
              LU / Datorikas nodaļa / darba nedēļa
            </p>

            <h1 className="display-heading text-[4rem] font-extrabold leading-[0.85] tracking-tight text-[var(--color-primary)] sm:text-[5.5rem] md:text-[7.5rem]">
              Viena
              <br />
              darba
              <br />
              nedēļa
            </h1>

            <div className="mt-8 max-w-2xl space-y-5">
              <h2 className="editorial-heading text-2xl md:text-4xl">
                Datorikas nodaļas studenta dzīvē
              </h2>

              <p className="text-lg leading-8 text-[var(--color-muted)]">
                Personisks ieskats studiju nedēļā — no digitālās darba vides
                un ceļa uz universitāti līdz maltītēm, mūzikai un atpūtai.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#backpack"
                  className="rounded-full bg-[var(--color-primary)] text-[#F4F1EB] px-6 py-3"
                >
                  Sākt apskati
                </a>

                <a
                  href="#schedule"
                  className="rounded-full border border-[var(--color-border)] px-6 py-3 font-bold"
                >
                  Skatīt grafiku
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}