import { useState } from "react";
import MoviesContext from "./MoviesContext";

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}
export default MoviesProvider;