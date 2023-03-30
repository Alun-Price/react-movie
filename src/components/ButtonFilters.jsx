import React, { useState, useContext } from "react";
import { MovieContext } from "../App";
import { genres } from "./Utils";

const ButtonFilters = () => {
  const [tabActive, setTabActive] = useState(0);
  const { popularMovies, setFilteredMovie } = useContext(MovieContext);

  const handleClickFilter = (id) => {
    setTabActive(id);
    const filteredMovie = popularMovies.filter((movie) =>
      movie.genre_ids.includes(id)
    );
    if (id === 1) {
      setFilteredMovie(popularMovies);
    } else {
      setFilteredMovie(filteredMovie);
    }
  };

  return (
    <div className="button-wrapper">
      {genres.map((item) => (
        <button
          key={item.id}
          className={tabActive === item.id ? "active" : undefined}
          onClick={() => handleClickFilter(item.id)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilters;
