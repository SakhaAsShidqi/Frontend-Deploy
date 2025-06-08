import React from "react";

const MovieCard = ({ movie }) => (
  <div className="border rounded p-2 shadow flex flex-col items-center">
    <img
      src={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
          : movie.poster || "https://via.placeholder.com/300x400?text=No+Image"
      }
      alt={movie.title}
      className="mb-2 w-40 h-60 object-cover rounded"
    />
    <h2 className="font-bold text-center">{movie.title}</h2>
    {movie.year && <p className="text-sm text-gray-500">{movie.year}</p>}
    {movie.type && <p className="text-xs text-gray-400">{movie.type}</p>}
    {movie.vote_average && (
      <p className="text-xs text-yellow-600">Rating: {movie.vote_average}</p>
    )}
  </div>
);

export default MovieCard;