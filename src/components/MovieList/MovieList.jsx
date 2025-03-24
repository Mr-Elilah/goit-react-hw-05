import { Link, useLocation } from "react-router";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
