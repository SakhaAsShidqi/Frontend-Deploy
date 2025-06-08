import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

function TopRated() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTopRatedMovies() {
      try {
        const response = await axios.get(URL);
        setMovies(response.data.results || []);
      } catch (error) {
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }
    getTopRatedMovies();
  }, [URL]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Top Rated Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default TopRated;