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
    title: "ORACLE praktiskie",
    time: "10:30–12:10",
    start: 10.5,
    end: 12.16,
  },
  {
    day: "Otrdiena",
    title: "Skriešana",
    time: "09:00–10:00",
    start: 9,
    end: 10,
  },
  {
    day: "Otrdiena",
    title: "Algoritmu teorija",
    time: "14:30–16:10",
    start: 14.5,
    end: 16.16,
  },
  {
    day: "Otrdiena",
    title: "OOP praktiskie / konsultācijas",
    time: "16:30–18:05",
    start: 16.5,
    end: 18.08,
  },
  {
    day: "Trešdiena",
    title: "Tīmekļa dizaina pamati",
    time: "08:30–10:10",
    start: 8.5,
    end: 10.16,
  },
  {
    day: "Trešdiena",
    title: "Kombinatorika",
    time: "10:30–12:10",
    start: 10.5,
    end: 12.16,
  },
  {
    day: "Trešdiena",
    title: "Datoru grafika",
    time: "14:30–16:10",
    start: 14.5,
    end: 16.16,
  },
  {
    day: "Trešdiena",
    title: "Tīmekļa dizaina pamati (praktiskie)",
    time: "16:30–18:10",
    start: 16.5,
    end: 18.16,
  },
  {
    day: "Ceturtdiena",
    title: "Skriešana",
    time: "09:00–10:00",
    start: 9,
    end: 10,
  },
  {
    day: "Ceturtdiena",
    title: "Privātstunda",
    time: "15:00–16:00",
    start: 15,
    end: 16,
  },
  {
    day: "Ceturtdiena",
    title: "OOP",
    time: "16:30–19:50",
    start: 16.5,
    end: 19.83,
  },
  {
    day: "Piektdiena",
    title: "Sports un aktivitātes",
    time: "08:30–10:00",
    start: 8.5,
    end: 10,
  },
  {
    day: "Piektdiena",
    title: "Vācu valoda",
    time: "14:30–16:10",
    start: 14.5,
    end: 16.16,
  },
  {
    day: "Svētdiena",
    title: "Skriešana",
    time: "09:00–11:00",
    start: 9,
    end: 11,
  },
];

const startHour = 8;
const endHour = 20;
const hourHeight = 72;

function getEventStyle(start: number, end: number) {
  return {
    top: `${(start - startHour) * hourHeight}px`,
    height: `${(end - start) * hourHeight}px`,
  };
}

export function ScheduleSection() {
  return (
    <section id="schedule" className="section section-divider">
      <div className="container">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Grafiks
          </p>

          <h2 className="display-heading text-5xl font-bold leading-none text-[var(--color-primary)] md:text-7xl">
            Mans nedēļas ritms
          </h2>

          <p className="text-lg leading-8 text-[var(--color-muted)]">
            Nedēļa nav tikai lekciju saraksts — tajā ir arī praktiskie darbi,
            privātstundas, valodas nodarbības un laiks kustībai.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-sm">
          <div className="min-w-[980px]">
            <div className="grid grid-cols-[72px_repeat(7,1fr)]">
              <div />
              {days.map((day) => (
                <div
                  key={day}
                  className="border-b border-[var(--color-border)] px-3 py-4 text-center text-sm font-extrabold uppercase tracking-wide"
                >
                  {day}
                </div>
              ))}
            </div>

            <div
              className="relative grid grid-cols-[72px_repeat(7,1fr)]"
              style={{ height: `${(endHour - startHour) * hourHeight + 32}px` }}
            >
              <div className="relative border-r border-[var(--color-border)]">
                {Array.from({ length: endHour - startHour + 1 }, (_, index) => {
                  const hour = startHour + index;

                  return (
                    <div
                      key={hour}
                      className="absolute left-0 flex w-full -translate-y-1/2  justify-center text-xs font-semibold text-[var(--color-muted)]"
                      style={{ top: `${index * hourHeight}px` }}
                    >
                      {hour}:00
                    </div>
                  );
                })}
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
                        className="absolute left-2 right-2 rounded-2xl bg-[var(--color-blue)] p-3 text-sm shadow-sm"
                        style={getEventStyle(event.start, event.end)}
                      >
                        <h3 className="font-extrabold leading-tight">
                          {event.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold">
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
    </section>
  );
}
