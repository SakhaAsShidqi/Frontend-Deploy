import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

function NowPlaying() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getNowPlayingMovies() {
      try {
        const response = await axios.get(URL);
        setMovies(response.data.results || []);
      } catch (error) {
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }
    getNowPlayingMovies();
  }, [URL]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Now Playing Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default NowPlaying;