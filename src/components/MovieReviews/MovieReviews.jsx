import { fetchMovieReviews } from "../../movieService";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMovieReviews() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4 className={css.author}>Author: {author}</h4>
              <p className={css.content}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews for this film</p>
      )}
    </div>
  );
}
