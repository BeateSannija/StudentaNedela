const playlists = [
  {
    title: "Ceļā",
    label: "Atskaņošanas saraksts 01",
    mood: "Esot ceļā starp universitāti un mājām",
    image: "/images/soundtrack-road.jpeg",
    songs: [
      { title: "Dancing with Myself", artist: "Billy Idol, Generation X" },
      { title: "It Ain't Over 'Til It's Over", artist: "Lenny Kravitz" },
      { title: "Shake It Out", artist: "Florence + The Machine" },
    ],
  },
  {
    title: "Motivācijai",
    label: "Atskaņošanas saraksts 02",
    mood: "Mācības jāmīl :)",
    image: "/images/soundtrack-motivation.jpg",
    songs: [
      { title: "Eye of the Tiger", artist: "Survivor" },
      { title: "Can't Stop", artist: "Red Hot Chili Peppers" },
      { title: "BURN IT DOWN", artist: "Linkin Park" },
    ],
  },
  {
    title: "Skrējienam",
    label: "Atskaņošanas saraksts 03",
    mood: "Kad jāskrien ātri",
    image: "/images/soundtrack-run2.jpg",
    songs: [
      { title: "Song 2", artist: "Blur" },
      { title: "Livin' On A Prayer", artist: "Bon Jovi" },
      { title: "Shots", artist: "Imagine Dragons" },
    ],
  },
  {
    title: "Brīvs",
    label: "Atskaņošanas saraksts 04",
    mood: "Miers pēc garas dienas.",
    image: "/images/soundtrack-rest.jpeg",
    songs: [
      { title: "Free", artist: "Florence + The Machine" },
      { title: "I've Seen It", artist: "Olivia Dean" },
      { title: "Someone New", artist: "Hozier" },
    ],
  },
];

function MusicIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
}

export function SoundtrackSection() {
  return (
    <section id="soundtrack" className="soundtrack-gradient section">
      <div className="container">
        <div className="mb-6 max-w-2xl">
          <div className="relative inline-block">
            <span className="absolute -left-2 top-1/2 h-7 w-[calc(100%+1rem)] -translate-y-1/2 -rotate-1 bg-[var(--color-green)]" />
            <p className="relative text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Mūzika
            </p>
          </div>

          <h2 className="display-heading text-4xl font-bold leading-[1.3] text-[var(--color-primary)] md:text-6xl">
            Nedēļas ritmā
          </h2>

           <p className="mt-8 max-w-2xl text-base leading-[1.6] text-[var(--color-muted)] indent-8">
            Mūzika kā fons dažādiem nedēļas brīžiem — ceļam, fokusam, skrējienam
            un vakaram.
          </p>
        </div>

        <div className="mt-2 grid gap-6 lg:grid-cols-2">
          {playlists.map((playlist) => (
            <article
              key={playlist.title}
              // className="group grid gap-4 rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4 shadow-[0_8px_24px_rgba(31,39,71,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(31,39,71,0.07)] sm:grid-cols-[145px_1fr]"
              className="group grid gap-4 rounded-[18px] border border-white/30 bg-white/35 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/45 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:grid-cols-[145px_1fr]"
            >
              <div className="aspect-square overflow-hidden rounded-[14px]">
                <img
                  src={playlist.image}
                  alt={`${playlist.title} atskaņošanas saraksta noskaņas attēls`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-start">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)]">
                    {playlist.label}
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
                    {playlist.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-muted)]">
                    {playlist.mood}
                  </p>
                </div>

                <div className="mt-3 border-t border-[var(--color-border)] pt-0">
                  {playlist.songs.map((song, index) => (
                    <div
                      key={`${playlist.title}-${index}`}
                      className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] py-2 text-[0.85rem] last:border-b-0"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span className="text-[var(--color-primary)]">
                          <MusicIcon />
                        </span>

                        <span className="truncate font-medium">
                          {song.title}
                        </span>
                      </div>

                      <span className="shrink-0 text-right text-[var(--color-muted)]">
                        {song.artist}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
