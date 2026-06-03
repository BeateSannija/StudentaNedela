import { useState } from "react";

const snacks = [
  {
    name: "Dateles ar zemesriekstu sviestu",
    note: 'Kad vēlos batoniņu "Snicker".',
    recipe: {
      ingredients: [
        "6 dateles",
        "2 ēd.k. zemesriekstu sviesta",
        "20 g tumšās šokolādes",
        "šķipsniņa sāls",
      ],
      steps: [
        "Dateles pārgriež gareniski un izņem kauliņus.",
        "Katrā datelē iepilda zemesriekstu sviestu.",
        "Pārlej ar izkausētu tumšo šokolādi.",
        "Pārkaisa ar sāli un ieliek ledusskapī uz 15–20 minūtēm.",
      ],
    },
  },
  {
    name: "Banānu pankūkas",
    note: "Prasa mazliet ilgāku gatavošanas laiku.",
    recipe: {
      ingredients: [
        "1 banāns",
        "120g miltu",
        "120 ml augu piena",
        "1 tējk. cepamā pulvera",
        "šķipsniņa kanēļa",
      ],
      steps: [
        "Visas sastāvdaļas samaisa viendabīgā mīklā.",
        "Pannu viegli ieeļļo un uzkarsē.",
        "Cep mazas pankūkas 2–3 minūtes no katras puses.",
        "Pasniedz ar ogām vai kļavu sīrupu.",
      ],
    },
  },
  {
    name: "Mango sorberts",
    note: "Atsvaidzinošs našķis siltākām dienām.",
  },
  {
    name: "Riekstu maisījums",
    note: "Parasti iekļauj indijas riekstus, valriekstus un žāvētas aprikozes.",
  },
];

function SnackItem({
  snack,
  index,
}: {
  snack: (typeof snacks)[number];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const recipeId = `recipe-${index}`;

  return (
    <article className="group grid gap-3 border-b border-[var(--color-border)] py-4 sm:grid-cols-[54px_1fr]">
      <span className="text-sm font-bold tracking-[0.25em] text-[var(--color-primary)]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
  <div>
    <h3 className="text-xl font-extrabold text-[var(--color-text)]">
      {snack.name}
    </h3>

    <p className="mt-1 text-sm leading-[1.6] text-[var(--color-muted)]">
      {snack.note}
    </p>
  </div>

  {snack.recipe && (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-controls={recipeId}
      className="mt-2 w-fit text-[0.7rem] font-extrabold uppercase tracking-[0.32em] text-[var(--color-green)] transition hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] sm:mt-1 sm:shrink-0"
    >
      {isOpen ? "Paslēpt recepti" : "Skatīt recepti"}
    </button>
  )}
</div>

        {snack.recipe && (
          <>
            {isOpen && (
              <div
                id={recipeId}
                className="mt-5 mb-3 ml-10 border-l-2 border-[var(--color-green)] pl-10"
              >
                <h4 className="text-sm font-extrabold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  Sastāvdaļas
                </h4>

                <ul
                  className="mt-4 ml-6 space-y-2 text-sm leading-[1.7] text-[var(--color-muted)]"
                  style={{ listStyleType: "disc" }}
                >
                  {snack.recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>

                <div className="mt-4">
                  <h4 className="text-sm font-extrabold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                    Pagatavošana
                  </h4>

                  <ol
                    className="mt-8 ml-6 space-y-2 text-sm leading-[1.7] text-[var(--color-muted)]"
                    style={{ listStyleType: "decimal" }}
                  >
                    {snack.recipe.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </article>
  );
}

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
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1fr] lg:items-start">
          <div className="relative hidden min-h-[420px] items-center justify-center overflow-visible lg:flex">
            <div className="food-hero-gradient pointer-events-none absolute -left-40 -top-12 h-[760px] w-[900px] blur-3xl" />

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
              studenta dzīves daļa. Es uzturā lietoju tikai augu valsts
              produktus, tāpēc ne vienmēr varu izvēlēties pirmo našķi, kas
              pagadās pa rokai. Šie ir mani mīļākie augu valsts našķi.
            </p>

            {/* <div className="mt-5 border-t border-[var(--color-border)]"> */}
            <div className="mt-5">
              {snacks.map((snack, index) => (
                <SnackItem key={snack.name} snack={snack} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
