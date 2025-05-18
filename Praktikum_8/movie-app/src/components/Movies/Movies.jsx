import React, { useState } from "react";
import Movie from "../Movie/Movie"; // Pastikan path impor Movie benar
import styles from "./Movies.module.css";
import data from "../../utils/constants/data"; // Pastikan path data benar

function Movies() {
  // Membuat state movies
  const [movies, setMovies] = useState(data);

  function handleClick() {
    const movie = {
      id: "xyz",
      title: "Jigsaw Spiral",
      year: 2021,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    /**
     * Update state movies: setMovies
     * Melakukan teknik spread untuk copy dan merge array
     */
    setMovies([...movies, movie]);
  }

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>Latest Movies</h2>
          <div className={styles.movie__container}>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
          <button onClick={handleClick}>Add Movie</button>
        </section>
      </div>
    </div>
  );
}

export default Movies;
