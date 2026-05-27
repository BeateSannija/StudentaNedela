export function HeroSection() {
  return (
    <section className="hero-gradient section-divider overflow-hidden pb-16 pt-8">
      <div className="container">
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
                Personisks ieskats studiju nedēļā — no digitālās darba vides un
                ceļa uz universitāti līdz maltītēm, mūzikai un atpūtai.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#schedule"
                  className="rounded-full border border-[var(--color-border)] px-6 py-3 font-bold"
                >
                  Sākt apskati
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
