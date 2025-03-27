import css from "./MovieCard.module.css";

export default function MovieCard({
  title,
  poster_path,
  vote_average,
  overview,
  genres,
  release_date,
}) {
  const score = vote_average ? `${(vote_average * 10).toFixed(0)}%` : "N/A";
  const year = release_date ? release_date.slice(0, 4) : "N/A";

  return (
    <div className={css.movieCard}>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : "https://placehold.co/342x513?text=No+Poster"
          }
          alt="Movie poster"
        />
      </div>
      <div>
        <h2 className={css.title}>
          {title} ({year})
        </h2>
        <p className={css.text}>User Score: {score}</p>
        <h3 className={css.title}>Overview</h3>
        <p className={css.text}>{overview}</p>
        <h4 className={css.title}>Genres</h4>
        <p className={css.text}>
          {genres.map((genre) => genre.name).join(" ")}
        </p>
      </div>
    </div>
  );
}
