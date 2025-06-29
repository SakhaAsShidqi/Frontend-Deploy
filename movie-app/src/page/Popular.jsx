// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import { useContext, useEffect} from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoints";
import MoviesContext from "../Context/MoviesContext";

function Popular() {
    const {setMovies} = useContext(MoviesContext);

    useEffect(function() {
        async function fetchPopularMovies() {
            const response = await axios(ENDPOINTS.POPULAR);
            setMovies(response.data.results);
        }
        fetchPopularMovies();
    }, [setMovies]);

    return (
        <>
        <Hero />
        <Movies title="Popular Movies" />
        </>
    );
}
export default Popular;