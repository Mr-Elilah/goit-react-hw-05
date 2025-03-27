import { fetchMovieCast } from "../../movieService";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(({ credit_id, profile_path, name, character }) => (
            <li key={credit_id} className={css.listItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w185${profile_path}`
                    : "https://placehold.co/185x278?text=No+Photo"
                }
                alt={`Photo of ${name}`}
              />
              <h4 className={css.text}>{name}</h4>
              <p className={css.text}>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cast list unavailable</p>
      )}
    </div>
  );
}
