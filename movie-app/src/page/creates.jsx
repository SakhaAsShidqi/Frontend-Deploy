import React, { useState } from "react";
import "./../components/AddMovie/AddMovie.css";

function Creates() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre || !year || !poster) {
      setMessage("Semua field wajib diisi!");
      return;
    }
    // Simulasi penambahan movie (bisa diganti dengan API call)
    setMessage("Movie berhasil ditambahkan!");
    setTitle("");
    setGenre("");
    setYear("");
    setPoster("");
  };

  return (
    <div className="container">
      <h2>Tambah Movie Baru</h2>
      {message && <div style={{ marginBottom: "1rem", color: "#b5179e" }}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          className="input_form"
          type="text"
          placeholder="Judul Movie"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input_form"
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          className="input_form"
          type="number"
          placeholder="Tahun"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          className="input_form"
          type="text"
          placeholder="URL Poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <button className="button_form" type="submit">
          Tambah Movie
        </button>
      </form>
    </div>
  );
}

export default Creates;