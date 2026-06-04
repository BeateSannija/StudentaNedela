const hobbies = [
  {
    title: "Skriešana",
    image: "/images/soundtrack-run.jpeg",
    alt: "Cilvēka kājas, ejot pa skrējceliņu stadionā",
    imagePosition: "object-[center_73%]",
    imageSize: "large",
    description: [
      "Skriešana ir nodarbe, ar kuru es ne tikai uzturu sevi labā fiziskā formā, " +
        "bet arī veids, kā es izvēdinu galvu. Parasti skrienu pa pilsētu.",
      "Lai neskrietu bez mērķa un motivētu sevi uzlabot rezultātus, gatavojos pusmaratonam. " +
        "Otrdienās pirms algoritmu teorijas lekcijām parasti skrienu intervālus, " +
        "ceturtdienās izvēlos vieglu skrējienu, bet svētdienās veicu garākās distances, pakāpeniski pietuvojoties 21 kilometra robežai."
    ],
  },
  {
    title: "Lasīšana",
    image: "/images/relax-read.jpg",
    alt: "Atvērta grāmata lasīšanas laikā",
    imagePosition: "object-center",
    imageSize: "small",
    description: [
      "Lasīšana ir veids, kā es patiešām atpūšos. " +
        "Tas ir laiks sev, kad varu pilnībā iegrimt citā pasaulē un uz brīdi aizmirst par termiņiem un studiju darbiem. " +
        "Visbiežāk izvēlos fantāziju vai zinātnisko fantastiku.",
    ],
  },
  {
    title: "Gatavošana",
    image: "/images/relax-cook.jpg",
    alt: "Izceptas maizītes tikko izņemtas no krāsns",
    imagePosition: "object-center",
    imageSize: "medium",
    description: [
      "Tā kā uzturā lietoju tikai augu valsts produktus, daudz laika pavadu virtuvē, izmēģinot jaunas receptes un idejas. " +
        "Tāpat man patīk apmeklēt jaunas vietas, kur var garšīgi paēst un pasūtīt ko tādu, ko vēlāk varētu mēģināt atdarināt un ieviest savā ēdienkartē.",
    ],
  },
  {
    title: "Draugu satikšana",
    image: "/images/relax-friends.jpeg",
    alt: "Draugi smaida",
    imagePosition: "object-center",
    imageSize: "large",
    description: [
      "Nedēļa nebūtu pilnīga bez laika, ko pavadu kopā ar draugiem. " +
        "Lai gan universitātē tiekamies gandrīz katru dienu, cenšamies atrast laiku arī kopīgām pastaigām, pasākumiem vai vienkārši sarunām ārpus studijām.",
    ],
  },
];

export function RelaxSection() {
  return (
    <section id="relax" className="section">
      <div className="container">
        <div className="mb-6 max-w-3xl">
          <div className="relative inline-block">
            <div className="absolute -left-4 top-0 h-7 w-44 -rotate-1 bg-[var(--color-green)]" />

            <p className="relative pt-[2px] text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Atpūta
            </p>
          </div>

          <h2 className="display-heading text-4xl font-bold leading-[1.3] text-[var(--color-primary)] md:text-6xl">
            Atpūta no studijām
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-[1.6] text-[var(--color-muted)] indent-8">
            Brīži ārpus lekcijām, kas palīdz atgūt enerģiju un saglabāt
            līdzsvaru darba nedēļas laikā.
          </p>
        </div>

        <div className="space-y-14">
          {hobbies.map((hobby, index) => {
            const isReversed = index % 2 === 1;
            const imageWidthClass =
              hobby.imageSize === "large"
                ? "max-w-full"
                : hobby.imageSize === "medium"
                  ? "max-w-md"
                  : "max-w-sm";

            const imageAlignClass =
              hobby.imageSize === "large"
                ? ""
                : isReversed
                  ? "lg:mr-auto"
                  : "lg:ml-auto";

            return (
              <article
                key={hobby.title}
                className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2 lg:items-center"
              >
                <div className={isReversed ? "lg:order-2" : ""}>
                  <div
                    className={`overflow-hidden rounded-[1.5rem] border border-white/30 bg-white/35 p-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-[var(--color-surface)]/55 ${imageWidthClass} ${imageAlignClass}`}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${hobby.image}`}
                      alt={`${hobby.alt} attēls`}
                      className={`aspect-[4/3] w-full rounded-[14px] object-cover ${hobby.imagePosition}`}
                    />
                  </div>
                </div>

                <div className={isReversed ? "lg:order-1" : ""}>
                  <h3 className="display-heading text-3xl leading-none text-[var(--color-primary)] md:text-[2.75rem]">
                    {hobby.title}
                  </h3>

                  <div className="mt-4 max-w-[55ch] space-y-3 text-base leading-[1.6] text-[var(--color-muted)]">
                    {hobby.description.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="indent-8">
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
