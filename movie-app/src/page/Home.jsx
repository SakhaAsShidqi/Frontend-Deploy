import React, { useContext, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovie from "../components/AddMovie/AddMovie";
import data from "../utils/constants/data";
import Button from "../components/UI/Button/Index";
import MoviesContext from "../Context/MoviesContext";

function Home() {
  const { setMovies } = useContext(MoviesContext);

  // Set data awal hanya sekali saat komponen pertama kali render
  useEffect(() => {
    setMovies(data);
  }, [setMovies]);

  return (
    <main>
      <Hero />
      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <Button variant="primary" style={{ flex: 1 }}>Lihat</Button>
      </div>
      <Movies title="All Movies" />
      <AddMovie />
    </main>
  );
}

export default Home;