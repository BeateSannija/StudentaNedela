const hobbies = [
  {
    title: "Skriešana",
    image: "/images/soundtrack-run.jpeg",
    imagePosition: 'object-[center_73%]',
    description: [
      "Skriešana ir ne tikai veids kā es sev uzturu labā fiziskā sagatavotības formā, " +
      "bet arī veids kā es izvēdinu galvu. Parasti skrienu pa pilsētu.",
      
      "Lai neskrietu bez mērķa un motivētu sevi uzlabot savus rezultātus, es gatavojos pusmaratonam. " +
      "Pašlaik mani treniņi notiek otrdienās pirms algoritmu teorijas lekcijas, tad ir intervālu skrējieni; ceturtdienās skrienu vieglo skrējienu no paša rīta pirms es sāku pildīt mājasdarbus, " +
      "un visbeidzot svētdienas ir dienas, kad es skrienu garās distances jeb katru nedēļu pietuvojos aizvien tuvāk 21 kilometru robežai.",
    ]
  },
  {
    title: "Lasīšana",
    image: "/images/relax-read.jpg",
    imagePosition: 'object-center',
    description: [
      "Mierīgs laiks sev, kas ļauj atslēgties no ekrāniem un ikdienas steigas."
      ]
  },
  {
    title: "Gatavošana",
    image: "/images/relax-somt.jpeg",
    imagePosition: 'object-center',
    description: [
      "Iespēja izmēģināt jaunas receptes un sagatavot sev iecienītos augu valsts ēdienus."
    ]
  },
  {
    title: "Draugu satikšana",
    image: "/images/relax-friends.jpeg",
    imagePosition: 'object-center',
    description: [
      "Svarīga nedēļas daļa, kas palīdz atpūsties un pavadīt laiku ārpus studiju vides."
    ]
  },
];

export function RelaxSection() {
  return (
    <section id="relax" className="section section-divider">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <div className="relative inline-block">
            <div className="absolute -left-4 top-0 h-7 w-44 -rotate-1 bg-[var(--color-green)]" />

            <p className="relative pt-[2px] text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Atpūta
            </p>
          </div>

          <h2 className="mt-5 display-heading text-4xl font-bold leading-[1.02] text-[var(--color-primary)] md:text-6xl">
            Atpūta no studijām
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Brīži ārpus lekcijām, kas palīdz atgūt enerģiju un saglabāt
            līdzsvaru darba nedēļas laikā.
          </p>
        </div>

        <div className="space-y-14">
          {hobbies.map((hobby, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={hobby.title}
                className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-center"
              >
                <div className={isReversed ? "lg:order-2" : ""}>
                  <div className="group overflow-hidden rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_10px_28px_rgba(31,39,71,0.05)]">
                    <img
                      src={hobby.image}
                      alt={`${hobby.title} attēls`}
                      className={`aspect-[4/3] w-full rounded-[14px] object-cover ${hobby.imagePosition} transition duration-500 group-hover:scale-[1.03]`}
                    />
                  </div>
                </div>

                <div className={isReversed ? "lg:order-1" : ""}>
                  <h3 className="display-heading text-3xl leading-none text-[var(--color-primary)] md:text-[2.75rem]">
                    {hobby.title}
                  </h3>

                  <div className="mt-4 max-w-[55ch] space-y-3 text-base leading-[1.6] text-[var(--color-muted)]">
                  {hobby.description.map((paragraph: string, paragraphIndex: number) => (
                    <p
                      key={paragraphIndex}
                      className="indent-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
