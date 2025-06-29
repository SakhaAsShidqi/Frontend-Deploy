import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getDetailMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
      try {
        const response = await axios.get(url);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
        setMovie({});
      }
    }
    getDetailMovie();
  }, [id]);

  return (
    <>
    <StyledDetailMovie>
      <div>
        {movie.poster_path && (
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
        )}
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <button>Watch</button>
      </div>
      <footer/>
      </StyledDetailMovie>
    </>
  );
}

export default DetailMovie;
