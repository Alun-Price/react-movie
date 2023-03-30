import { AnimatePresence } from "framer-motion";
import { useState, useEffect, createContext } from "react";
import ButtonFilters from "./components/ButtonFilters";
import Movies from "./components/Movies";
import bgVideo from "../assets/underwater-6061.mp4";

// Create Context
export const MovieContext = createContext();

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);

  const fetchPopularMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
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
      <div>
        <video
          className="bg-video"
          type="video/>mp4"
          src={bgVideo}
          autoPlay
          muted
          loop
        />
        <div className="app">
          <h1>Underwater Movies</h1>
          <ButtonFilters />
          <div className="image-container">
            <AnimatePresence>
              <Movies />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
