import { Link, useLocation } from "react-router";
import css from "./MovieList.module.css";
export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div className={css.contentBox}>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.listItem}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w154${movie.poster_path}`
                    : "https://placehold.co/154x231?text=No+Poster"
                }
                alt={`Poster ${movie.title}`}
              />
              <h3 className={css.title}>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
