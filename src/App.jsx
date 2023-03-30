import { useState, useEffect, createContext } from "react";
import ButtonFilters from "./components/ButtonFilters";
import Movies from "./components/Movies";

// Create Context
export const MovieContext = createContext();

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);

  const fetchPopularMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=6cb58f5c37660b569aaa773b2dabc325&language=en-US&page=1`
    );
    const movies = await response.json();
    setPopularMovies(movies.results);
    setFilteredMovie(movies.results);
  };

  useEffect(() => {
    fetchPopularMovie();
  }, []);

  const value = {
    popularMovies,
    filteredMovie,
    setFilteredMovie,
  };

  return (
    <MovieContext.Provider value={value}>
      <div className="app">
        <ButtonFilters />
        <div className="image-container">
          <Movies />
        </div>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
