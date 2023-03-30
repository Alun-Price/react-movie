import React from "react";

const ButtonFilters = () => {
  const genres = ["All", "Actions", "Adventure", "Animation", "Comedy"];

  return (
    <div className="button-wrapper">
      {genres.map((item) => (
        <button>{item}</button>
      ))}
    </div>
  );
};

export default ButtonFilters;
