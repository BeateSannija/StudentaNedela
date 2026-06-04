const days = [
  "Pirmdiena",
  "Otrdiena",
  "Trešdiena",
  "Ceturtdiena",
  "Piektdiena",
  "Sestdiena",
  "Svētdiena",
];

const events = [
  {
    day: "Pirmdiena",
    title: "ORACLE projektēšanas rīki",
    time: "10:30–12:10",
    start: 10.5,
    end: 12.16,
    category: "studies",
  },
  {
    day: "Otrdiena",
    title: "Skriešana (intervālu treniņš)",
    time: "09:00–10:30",
    start: 9,
    end: 10.3,
    category: "sports",
  },
  {
    day: "Otrdiena",
    title: "Algoritmu teorija",
    time: "14:30–16:10",
    start: 14.5,
    end: 16.16,
    category: "studies",
  },
  {
    day: "Otrdiena",
    title: "OOP praktiskie / konsultācijas",
    time: "16:30–18:05",
    start: 16.5,
    end: 18.08,
    category: "studies",
  },
  {
    day: "Trešdiena",
    title: "Tīmekļa dizaina pamati",
    time: "08:30–10:10",
    start: 8.5,
    end: 10.16,
    category: "studies",
  },
  {
    day: "Trešdiena",
    title: "Kombinatorika",
    time: "10:30–12:10",
    start: 10.5,
    end: 12.16,
    category: "studies",
  },
  {
    day: "Trešdiena",
    title: "Datoru grafikas un attēlu apstrādes pamati",
    time: "14:30–16:10",
    start: 14.5,
    end: 16.16,
    category: "studies",
  },
  {
    day: "Trešdiena",
    title: "Tīmekļa dizaina pamati (praktiskie)",
    time: "16:30–18:10",
    start: 16.5,
    end: 18.16,
    category: "studies",
  },
  {
    day: "Ceturtdiena",
    title: "Skriešana (vieglais skrējiens)",
    time: "09:00–10:30",
    start: 9,
    end: 10.3,
    category: "sports",
  },
  {
    day: "Ceturtdiena",
    title: "Privātstunda",
    time: "15:00–16:00",
    start: 15,
    end: 16,
    category: "private",
  },
  {
    day: "Ceturtdiena",
    title: "Objektorientētā programmēšana",
    time: "16:30–19:50",
    start: 16.5,
    end: 19.83,
    category: "studies",
  },
  {
    day: "Piektdiena",
    title: "Sports un aktivitātes",
    time: "08:30–10:00",
    start: 8.5,
    end: 10,
    category: "studies",
  },
  {
    day: "Piektdiena",
    title: "Vācu valoda",
    time: "14:30–16:10",
    start: 14.5,
    end: 16.16,
    category: "studies",
  },
  {
    day: "Svētdiena",
    title: "Skriešana (garā distance)",
    time: "09:00–11:00",
    start: 9,
    end: 11,
    category: "sports",
  },
];

const legendItems = [
  {
    label: "Studijas",
    className: "bg-[#cad68f] dark:bg-[#6f7f38]",
    description:
      "Lekcijas un praktiskie darbi veido lielāko daļu manas akadēmiskās nedēļas. Grafikā redzami šī semestra (2026.gada pavasris) kursi",
  },
  {
    label: "Sports",
    className: "bg-[#c3d6f0] dark:bg-[#4f6682]",
    description:
      'Skriešana ir viens no maniem svarīgākajiem hobijiem ārpus studijām. Regulāri treniņi palīdz uzturēt enerģiju un līdzsvaru starp mācībām un atpūtu. Treniņus cenšos uztvert kā "svētus" - tos nedrīkstu atcelt, ja vien tiešām ir nogurums.',
  },
  {
    label: "Privātstundas",
    className: "bg-[#dfc2c8] dark:bg-[#7a4d55]",
    description:
      "Papildus studijām vadu vācu valodas privātstundas. Tās ir regulāra nedēļas daļa, kas ļauj attīstīt komunikācijas un mācīšanas prasmes.",
  },
];

const startHour = 8;
const endHour = 20;
const hourHeight = 46;

function getEventStyle(start: number, end: number) {
  return {
    top: `${(start - startHour) * hourHeight}px`,
    height: `${(end - start) * hourHeight}px`,
  };
}

function getEventClass(category?: string) {
  if (category === "sports") {
    return "bg-[#c3d6f0] text-[var(--color-text)] dark:bg-[#4f6682] dark:text-[#f4f1eb]";
  }

  if (category === "private") {
    return "bg-[#dfc2c8] text-[var(--color-text)] dark:bg-[#7a4d55] dark:text-[#f4f1eb]";
  }

  return "bg-[#cad68f] text-[var(--color-text)] dark:bg-[#6f7f38] dark:text-[#f4f1eb]";
}

export function ScheduleSection() {
  return (
    <section id="schedule" className="section">
      <div className="container">
        <div className="mb-6 max-w-3xl">
          <div className="relative inline-block">
            <div className="absolute -left-4 top-0 h-7 w-36 rotate-1 bg-[var(--color-green)]" />
            <p className="relative text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Grafiks
            </p>
          </div>

          <h2 className="display-heading text-4xl font-bold leading-[1.30] text-[var(--color-primary)] md:text-6xl">
            Mans nedēļas režīms
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-[1.6] text-[var(--color-muted)] indent-8">
            Lai gan grafikā redzamas lekcijas, privātstundas un skriešana, liela
            daļa nedēļas paiet arī ārpus šiem blokiem. Brīvajos brīžos pildu
            mājasdarbus, strādāju pie kursa projektiem, lasu grāmatas vai
            gatavoju ēst nākamajām dienām.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {legendItems.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-white/40 bg-white/35 p-5 shadow-[0_14px_35px_rgba(31,39,71,0.07)] backdrop-blur-xl dark:border-white/10 dark:bg-[var(--color-surface)]/55"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 rounded-full ${item.className}`}
                />

                <h3 className="text-sm font-extrabold uppercase tracking-[0.3em] text-[var(--color-text)]">
                  {item.label}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-[1.6] text-[var(--color-muted)] indent-8">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="space-y-8 md:hidden">
          {days.map((day) => {
            const dayEvents = events.filter((event) => event.day === day);

            if (dayEvents.length === 0) {
              return null;
            }

            return (
              <div
                key={day}
                className="rounded-3xl border border-white/30 bg-white/35 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-[var(--color-surface)]/55"
              >
                <h3 className="mb-4 text-lg font-extrabold uppercase">{day}</h3>

                <div className="space-y-3">
                  {dayEvents.map((event) => (
                    <article
                      key={`${event.day}-${event.title}`}
                      className={`rounded-2xl p-4 ${getEventClass(event.category)}`}
                    >
                      <p className="text-sm font-semibold text-[var(--color-muted)]">
                        {event.time}
                      </p>

                      <h4 className="mt-1 font-bold">{event.title}</h4>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden md:block">
          <div className="overflow-x-auto rounded-[1.5rem] border border-white/30 bg-white/35 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-[var(--color-surface)]/55">
            <div className="min-w-[980px]">
              <div className="grid grid-cols-[72px_repeat(7,1fr)]">
                <div aria-hidden="true" />
                {days.map((day) => (
                  <div
                    key={day}
                    className="border-b border-[var(--color-border)] px-3 py-3 text-center text-xs font-extrabold uppercase tracking-wide"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div
                className="relative grid grid-cols-[72px_repeat(7,1fr)]"
                style={{
                  height: `${(endHour - startHour) * hourHeight + 18}px`,
                }}
              >
                <div className="relative border-r border-[var(--color-border)]">
                  {Array.from(
                    { length: endHour - startHour + 1 },
                    (_, index) => {
                      const hour = startHour + index;

                      return (
                        <div
                          key={hour}
                          className="absolute left-0 flex w-full -translate-y-1/2 justify-center text-xs font-semibold text-[var(--color-muted)]"
                          style={{ top: `${index * hourHeight}px` }}
                        >
                          {hour}:00
                        </div>
                      );
                    },
                  )}
                </div>

                {days.map((day) => (
                  <div
                    key={day}
                    className="relative border-r border-[var(--color-border)] last:border-r-0"
                  >
                    {Array.from({ length: endHour - startHour }, (_, index) => (
                      <div
                        key={index}
                        className="border-b border-[var(--color-border)]"
                        style={{ height: `${hourHeight}px` }}
                      />
                    ))}

                    {events
                      .filter((event) => event.day === day)
                      .map((event) => (
                        <article
                          key={`${event.day}-${event.title}-${event.time}`}
                          className={`absolute left-1.5 right-1.5 rounded-xl border border-white/40 p-2 text-xs shadow-[0_6px_16px_rgba(31,39,71,0.06)] dark:border-transparent ${getEventClass(
                            event.category,
                          )}`}
                          style={getEventStyle(event.start, event.end)}
                        >
                          <h3 className="font-extrabold leading-tight">
                            {event.title}
                          </h3>
                          <p className="mt-0.5 text-[0.68rem] font-semibold text-[var(--color-muted)]">
                            {event.time}
                          </p>
                        </article>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
