import axios from "axios";
import { data } from "react-router";

const API_KEY = "d0246da72befd85c0054b988cd80d0e7";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDI0NmRhNzJiZWZkODVjMDA1NGI5ODhjZDgwZDBlNyIsIm5iZiI6MTc0MjQ5NDEzMC40ODEsInN1YiI6IjY3ZGM1OWIyMzUwODkxMTQ1MjZiOWZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z6yGcAjjP6NI8ytYiYChsoxj0JsCMBw5tdzMjz3GVBc",
  },
};

export const fetchHomePageMovies = async () => {
  const TRENDING_URL = "https://api.themoviedb.org/3/trending/movie/day";
  try {
    const resp = await axios.get(TRENDING_URL, {
      params: {
        api_key: API_KEY,
      },
    });

    return resp.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const fetchSearchMovies = async (query, page = 1) => {
  const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";
  try {
    const resp = await axios.get(SEARCH_URL, {
      params: {
        query,
        page,
        api_key: API_KEY,
      },
    });

    return resp.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export const fetchMovieById = async (movieId) => {
  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}`;
  try {
    const resp = await axios.get(DETAILS_URL, {
      params: {
        api_key: API_KEY,
      },
    });
    return resp.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const fetchMovieCast = async (movieId) => {
  const CAST_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  try {
    const resp = await axios.get(CAST_URL, {
      params: {
        api_key: API_KEY,
      },
    });
    return resp.data;
  } catch (error) {
    return null;
  }
};

export const fetchMovieReviews = async (movieId) => {
  const REVIEWS_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  try {
    const resp = await axios.get(REVIEWS_URL, {
      params: {
        api_key: API_KEY,
      },
    });

    return resp.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
