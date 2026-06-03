function HouseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

function WalkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // class="lucide lucide-footprints-icon lucide-footprints"
      aria-hidden="true"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  );
}
function TrainIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // class="lucide lucide-train-front-icon lucide-train-front"
      aria-hidden="true"
    >
      <path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
      <path d="m9 15-1-1" />
      <path d="m15 15 1-1" />
      <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
      <path d="m8 19-2 3" />
      <path d="m16 19 2 3" />
    </svg>
  );
}
function CityIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // class="lucide lucide-building2-icon lucide-building-2"
      aria-hidden="true"
    >
      <path d="M10 12h4" />
      <path d="M10 8h4" />
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </svg>
  );
}
function UniIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // class="lucide lucide-university-icon lucide-university"
      aria-hidden="true"
    >
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M18 12h.01" />
      <path d="M18 16h.01" />
      <path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" />
      <path d="M6 12h.01" />
      <path d="M6 16h.01" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

const journeySteps = [
  {
    id: "home",
    title: "Mājas",
    text: "Paēdu brokastis un dodos ceļā.",
    icon: HouseIcon,
  },
  {
    id: "walk-to-station",
    title: "Pastaiga uz staciju",
    text: "30 minūšu pastaiga līdz stacijai.",
    icon: WalkIcon,
  },
  {
    id: "train",
    title: "Vilciens",
    text: "45 minūtes mūzikai, mācībām vai sarunām ar draugiem.",
    icon: TrainIcon,
  },
  {
    id: "riga-station",
    title: "Rīgas stacija",
    text: "Izkāpšanas punkts, lai dotos uz universitāti.",
    icon: CityIcon,
  },
  {
    id: "walk-to-university",
    title: "Pastaiga uz universitāti",
    text: "10 minūšu pastaiga līdz universitātei.",
    icon: WalkIcon,
  },
  {
    id: "university",
    title: "Universitāte",
    text: "Galamērķis sasniegts.",
    icon: UniIcon,
  },
];

export function JourneySection() {
  return (
    <section id="route" className="section">
      <div className="container">
        <div className="mb-6 max-w-3xl">
          <div className="relative inline-block">
            <div className="absolute -left-4 top-0 h-7 w-32 -rotate-1 bg-[var(--color-green)]" />

            <p className="relative pt-[2px] text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Ceļš
            </p>
          </div>

          <h2 className="display-heading text-4xl font-bold leading-[1.3] text-[var(--color-primary)] md:text-6xl">
            No mājām līdz universitātei
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-[1.6] text-[var(--color-muted)] indent-8">
            Ikdienas maršruts, kas savieno mierīgu rītu, vilciena ritmu un
            studiju dienas sākumu pilsētā.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-6 left-[1.1rem] top-0 w-[3px] rounded-full bg-[var(--color-border)] md:left-1/2" />

          <div className="space-y-6 md:space-y-4">
            {journeySteps.map((step, index) => {
              const isRight = index % 2 === 1;
              const Icon = step.icon;

              return (
                <article
                  key={step.id}
                  className="relative grid gap-6 md:grid-cols-2 md:gap-0"
                >
                  {/* Mobile point */}
                  <span className="absolute left-[1.1rem] top-3 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-[5px] border-[var(--color-bg)] bg-[var(--color-primary)] shadow-[0_0_0_3px_var(--color-green)] md:hidden" />

                  {/* Desktop point */}
                  <span
                    className="absolute left-1/2 top-3 z-10 hidden h-6 w-6 rounded-full border-[6px] border-[var(--color-bg)] bg-[var(--color-primary)] shadow-[0_0_0_3px_var(--color-green)] md:block"
                    style={{ transform: "translateX(calc(-50% + 1.5px))" }}
                  />

                  <span
                    className={`absolute top-[1.35rem] hidden h-px w-12 bg-[var(--color-border)] md:block ${
                      isRight ? "left-1/2 ml-4" : "right-1/2 mr-4"
                    }`}
                  />

                  <div
                    className={`relative pl-14 md:pl-0 ${
                      isRight
                        ? "md:col-start-2 md:pl-20 md:text-left"
                        : "md:col-start-1 md:pr-20 md:text-right"
                    }`}
                  >
                    <h3
                      className={`flex items-center gap-3 text-2xl font-extrabold tracking-tight text-[var(--color-text)] ${
                        !isRight ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm ring-1 ring-[var(--color-border)] dark:bg-white/5 dark:text-[#b85a52]">
                        <Icon />
                      </span>

                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-md text-base leading-7 text-[var(--color-muted)]">
                      {step.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
