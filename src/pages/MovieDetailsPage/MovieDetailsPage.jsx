import { Suspense, useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router";
import { fetchMovieById } from "../../movieService";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieCard from "../../components/MovieCard/MovieCard";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css";

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>

      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MovieCard {...movie} />}

      <ul className={css.linkBox}>
        <li>
          <NavLink to="cast" className={getLinkStyles}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={getLinkStyles}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
