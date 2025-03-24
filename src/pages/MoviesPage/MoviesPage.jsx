import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useDebounce } from "use-debounce";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovies } from "../../movieService";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import "../../index.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("query") ?? "";
  const [debouncedQuery] = useDebounce(searchTerm, 500);

  const handleSearch = (query) => {
    if (!query.trim()) return;

    setSearchParams({ query });
    setPage(1);
  };

  useEffect(() => {
    if (!debouncedQuery) return;

    async function getMovies() {
      try {
        setError(false);
        setIsLoading(true);
        setNoResults(false);

        const response = await fetchSearchMovies(debouncedQuery, page);
        if (!response.results || response.results.length === 0) {
          setMovies([]);
          setNoResults(true);

          return;
        }

        setMovies((prev) => {
          if (page === 1) {
            return response.results;
          } else {
            return [...prev, ...response.results];
          }
        });

        setNoResults(false);
      } catch {
        setError(true);
        toast.error("An error occurred! Please reload.");
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [debouncedQuery, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {noResults && !isLoading && (
        <p className="no-results">No movies found. Try another search term.</p>
      )}

      {movies.length > 0 && <MovieList movies={movies} />}

      {isLoading && <Loader />}

      {error && <ErrorMessage />}

      <Toaster position="top-right" />
    </>
  );
}
