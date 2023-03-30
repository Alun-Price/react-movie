import React, { useContext } from "react";
import { MovieContext } from "../App";

const Movies = () => {
  const { popularMovies } = useContext(MovieContext);

  return popularMovies.map((movie) => (
    <div className="image-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt="{movie.title}"
      />
      <h2>{movie.title}</h2>
    </div>
  ));
};

export default Movies;
