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
    <div>
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
        <h2>
          {title} ({year})
        </h2>
        <p>User Score: {score}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres.map((genre) => genre.name).join(" ")}</p>
      </div>
    </div>
  );
}
