import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovie from "../components/AddMovie/AddMovie";
import data from "../utils/constants/data";
import Button from "../components/UI/Button/Index";

function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <Button variant="primary" style={{ flex: 1 }}>Lihat</Button>
      </div>
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovie movies={movies} setMovies={setMovies} />
    </main>
  );
}

export default Home;