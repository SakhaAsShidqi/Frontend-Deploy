import { useState, useContext } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import MoviesContext from "../../Context/MoviesContext";

const Container = styled.div`
  border-radius: 8px;
  background-color: #f8fafc;
  padding: 28px 24px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 2px 12px rgba(67, 97, 238, 0.08);
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #2d3748;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 18px;
  margin: 10px 0 18px 0;
  display: block;
  border: 1px solid #bfc9d1;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 1rem;
  background: #fff;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4361ee;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #4361ee;
  color: white;
  padding: 14px 0;
  margin: 8px 0 0 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background-color: #274cdb;
  }
`;

function AddMovie() {
  const { movies, setMovies } = useContext(MoviesContext);
  const [formData, setFormData] = useState({
    title: "",
    year: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function addMovie() {
    const newMovie = {
      id: nanoid(),
      title: formData.title,
      year: formData.year,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };
    setMovies([...movies, newMovie]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addMovie();
    setFormData({ title: "", year: "" });
  }

  return (
    <Container>
      <TitleContainer>
        <Title>Add Movie</Title>
      </TitleContainer>

      <form onSubmit={handleSubmit}>
        <Input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Masukkan judul film"
          required
        />
        <Input
          id="year"
          name="year"
          type="text"
          value={formData.year}
          onChange={handleChange}
          placeholder="Masukkan tahun rilis"
          required
        />
        <Button type="submit">Add Movie</Button>
      </form>
    </Container>
  );
}

export default AddMovie;
