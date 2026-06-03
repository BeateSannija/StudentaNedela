type HeroSectionProps = {
  isDark: boolean;
};

export function HeroSection({ isDark }: HeroSectionProps) {
  const codingImage = isDark
    ? `${import.meta.env.BASE_URL}images/coding-white.png`
    : `${import.meta.env.BASE_URL}images/coding-black.png`;

  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen pt-8 pb-20 md:pb-32"
    >
      <div className="container relative z-10">
        <div className="flex min-h-screen flex-col py-8 md:items-center md:py-12">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative z-10 max-w-4xl pt-10 text-center md:pt-0 lg:text-left">

              {/* LATVIJAS UNIVERSITĀTE / EZTF / DATORZINĀTNES */}
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-muted)] sm:text-sm md:mb-8">
                LU / Eksakto zinātņu un tehnoloģiju fakultāte / Datorzinātnes
              </p>

              <div className="pt-6 md:pt-0">
                <h1 className="display-heading text-[3.8rem] font-extrabold leading-[0.85] tracking-tight text-[var(--color-primary)] sm:text-[5.5rem] md:text-[7.5rem]">
                  Viena
                  <br />
                  darba
                  <br />
                  nedēļa
                </h1>
              </div>

              <div className="my-8 flex justify-center lg:hidden">
                <img
                  src={codingImage}
                  aria-hidden="true"
                  className="w-52 opacity-80"
                />
              </div>

              <div className="mt-6 max-w-2xl mx-auto md:mt-8 lg:mx-0">
                <h2 className="text-2xl font-semibold text-[var(--color-text)] md:text-3xl">
                  Datorzinātņu studenta dzīvē
                </h2>

                <p className="mt-3 text-lg leading-[1.6] text-[var(--color-muted)] md:mt-5">
                  Ikdienas aktivitātēs, paradumos un brīžos, kas raksturo manu studenta dzīvi.
                </p>

                <div className="mt-7 flex justify-center gap-3 lg:justify-start">
                  <a
                    href="#backpack"
                    className="rounded-full border border-[var(--color-border)] bg-white/10 dark:bg-white/10 px-6 py-3 font-bold shadow-[0_10px_30px_rgba(31,39,71,0.08)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:text-[var(--color-primary)] focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[var(--color-primary)]"
                  >
                    Sākt apskati
                  </a>
                </div>
              </div>
            </div>

            <div className="relative hidden items-center justify-center lg:flex">
              <img
                src={codingImage}
                aria-hidden="true"
                className="h-auto w-[430px] object-contain opacity-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
