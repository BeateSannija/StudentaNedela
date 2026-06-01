export function HeroSection() {
  return (
    <section className="hero-gradient relative pb-56 pt-8">
      <div className="container relative z-10">
        <div className="relative min-h-[620px] py-8 md:py-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
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

              <div className="mt-8 max-w-2xl">
                <h2 className="mt-8 text-2xl font-semibold text-[var(--color-text)] md:text-3xl">
                  Datorikas nodaļas studenta dzīvē
                </h2>

                <p className="mt-8 text-lg leading-[1.6] text-[var(--color-muted)]">
                  Personisks ieskats studiju nedēļā — no digitālās darba vides
                  un ceļa uz universitāti līdz maltītēm, mūzikai un atpūtai.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#schedule"
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/55 px-6 py-3 font-bold shadow-[0_10px_30px_rgba(31,39,71,0.08)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:text-[var(--color-primary)]"
                  >
                    Sākt apskati
                  </a>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center">
              <img
                src="/images/coding-black.png"
                alt="Studenta ilustrācija"
                className="h-auto w-[430px] object-contain opacity-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
