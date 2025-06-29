import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoints";
import MoviesContext from "../Context/MoviesContext";

function TopRated() {
  const { movies, setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      const response = await axios(ENDPOINTS.TOP_RATED);
      setMovies(response.data.results);
    }
    fetchTopRatedMovies();
  }, [setMovies]);

  return (
    <>
      <Hero movie={movies[0]} />
      <Movies title="Top Rated Movies" />
    </>
  );
}
export default TopRated;