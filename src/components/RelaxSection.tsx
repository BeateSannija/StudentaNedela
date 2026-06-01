const hobbies = [
  {
    title: "Skriešana",
    image: "/images/soundtrack-run.jpeg",
    imagePosition: "object-[center_73%]",
    imageSize: "large",
    description: [
      "Skriešana ir ne tikai veids kā es sev uzturu labā fiziskā sagatavotības formā, " +
        "bet arī veids kā es izvēdinu galvu. Parasti skrienu pa pilsētu.",
      "Lai neskrietu bez mērķa un motivētu sevi uzlabot savus rezultātus, es gatavojos pusmaratonam. " +
        "Pašlaik mani treniņi notiek otrdienās pirms algoritmu teorijas lekcijas, tad ir intervālu skrējieni; ceturtdienās skrienu vieglo skrējienu no paša rīta pirms es sāku pildīt mājasdarbus, " +
        "un visbeidzot svētdienas ir dienas, kad es skrienu garās distances jeb katru nedēļu pietuvojos aizvien tuvāk 21 kilometru robežai.",
    ],
  },
  {
    title: "Lasīšana",
    image: "/images/relax-read.jpg",
    imagePosition: "object-center",
    imageSize: "small",
    description: [
      "Lasīšana ir veids kā es patiešām atpūšos. " +
        "Tas ir laiks sev, kad varu pilnībā iegrimt citā pasaulē un uz brīdi aizmirst par termiņiem un studiju darbiem. " +
        "Visbiežāk izvēlos fantāziju vai zinātnisko fantastiku.",
    ],
  },
  {
    title: "Gatavošana",
    image: "/images/relax-cook.jpg",
    imagePosition: "object-center",
    imageSize: "medium",
    description: [
      "Tā kā piekopju augu valsts uzturu man nākas daudz gatavot. " +
        "Tāpat man patīk apmeklēt jaunas vietas, kur var garšīgi paēst un pasūtīt ko tādu, ko vēlāk varētu mēģināt atdarināt un ieviest savā ēdienkartē.",
    ],
  },
  {
    title: "Draugu satikšana",
    image: "/images/relax-friends.jpeg",
    imagePosition: "object-center",
    imageSize: "large",
    description: [
      "Nedēļa nebūtu pilnīga bez laika, ko pavadu kopā ar draugiem. " +
        "Lai gan satiekamies universitātē, kur kopā pavadām daudz laika, cenšamies satikties arī pēc iespējas biežāk ārpus studijām.",
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

          <p className="mt-8 max-w-2xl text-base leading-[1.6] text-[var(--color-muted)] indent-8">
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
                    className={`overflow-hidden rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_10px_28px_rgba(31,39,71,0.05)] ${imageWidthClass} ${imageAlignClass}`}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${hobby.image}`}
                      alt={`${hobby.title} attēls`}
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
