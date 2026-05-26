const playlists = [
  {
    title: 'Ceļā',
    label: 'Atskaņošanas saraksts 01',
    mood: 'Esot ceļā starp universitāti un mājām',
    image: '/images/music-park.jpeg',
    songs: [
      { title: 'Dancing with Myself', artist: 'Billy Idol, Generation X' },
      { title: "It Ain't Over 'Til It's Over", artist: 'Lenny Kravitz' },
      { title: 'Shake It Out', artist: 'Florence + The Machine' },
    ],
  },
  {
    title: 'Motivācijai',
    label: 'Atskaņošanas saraksts 02',
    mood: 'Mācības jāmīl :)',
    image: '/images/music-park.jpeg',
    songs: [
      { title: 'Eye of the Tiger', artist: 'Survivor' },
      { title: "Can't Stop", artist: 'Red Hot Chili Peppers' },
      { title: 'BURN IT DOWN', artist: 'Linkin Park' },
    ],
  },
  {
    title: 'Skrējienam',
    label: 'Atskaņošanas saraksts 03',
    mood: 'Kad jāskrien ātri',
    image: '/images/music-park.jpeg',
    songs: [
      { title: 'Song 2', artist: 'Blur' },
      { title: "Livin' On A Prayer", artist: 'Bon Jovi' },
      { title: 'Shots', artist: 'Imagine Dragons' },
    ],
  },
  {
    title: 'Brīvs',
    label: 'Atskaņošanas saraksts 04',
    mood: 'Miers pēc garas dienas.',
    image: '/images/music-park.jpeg',
    songs: [
      { title: "Knockin' On Heaven's Door nosaukums", artist: 'Bob Dylan' },
      { title: "I've Seen It", artist: 'Olivia Dean' },
      { title: 'Someone New', artist: 'Hozier' },
    ],
  },
]

export function SoundtrackSection() {
  return (
    <section id="soundtrack" className="section section-divider">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Mūzika
          </p>

          <h2 className="display-heading text-5xl font-bold leading-none text-[var(--color-primary)] md:text-7xl">
            Nedēļas ritmā
          </h2>

          <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
            Mūzika kā fons dažādiem nedēļas brīžiem — ceļam, fokusam,
            skrējienam un vakaram.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {playlists.map((playlist) => (
            <article
              key={playlist.title}
              className="grid gap-5 rounded-[2rem] bg-[var(--color-surface)] p-5 shadow-sm sm:grid-cols-[180px_1fr]"
            >
              <img
                src={playlist.image}
                alt={`${playlist.title} atskaņošanas saraksta noskaņas attēls`}
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />

              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                    {playlist.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {playlist.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                    {playlist.mood}
                  </p>
                </div>

                <div className="space-y-3">
                  {playlist.songs.map((song, index) => (
                    <div
                      key={`${playlist.title}-${index}`}
                      className="flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-sm"
                    >
                      <span>{song.title}</span>
                      <span className="text-[var(--color-muted)]">
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
  )
}