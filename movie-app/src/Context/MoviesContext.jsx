import { createContext } from "react";

const MoviesContext = createContext({
  movies: [],
  setMovies: () => {},
});

export default MoviesContext;