import React, { useContext } from "react";
import Movie from "../movie/Movie";
import styles from "./Movies.module.css";
import MoviesContext from "../../Context/MoviesContext";

function Movies({ title }) {
  const { movies } = useContext(MoviesContext);

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>{title}</h2>
          <div className={styles.movie__container}>
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Movies;
