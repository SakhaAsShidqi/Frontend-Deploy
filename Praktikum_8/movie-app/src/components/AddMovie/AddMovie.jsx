import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddMovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
  });

  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.title) errors.title = "Title is required";
    if (!formData.date) errors.date = "Release year is required";

    setFormError(errors);
    if (Object.keys(errors).length) return;

    const movie = {
      id: uuidv4(),
      title: formData.title,
      year: formData.date,
      type: "Movie",
      poster: "https://picsum.photos/200/300",
    };

    onAddMovie?.(movie);

    setFormData({ title: "", date: "" });
    setFormError({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Movie Title"
        value={formData.title}
        onChange={handleChange}
      />
      {formError.title && <span style={{ color: "red" }}>{formError.title}</span>}

      <input
        id="date"
        name="date"
        type="text"
        placeholder="Release Year"
        value={formData.date}
        onChange={handleChange}
      />
      {formError.date && <span style={{ color: "red" }}>{formError.date}</span>}

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
