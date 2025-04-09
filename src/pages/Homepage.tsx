import { useState, useEffect } from "react";
import { fetchMovies } from "../fetchapi/fetchmovies";
import { movie } from "../types/movie";
import MovieList from "../components/MovieList";

const Homepage = () => {
  const [movies, setMovies] = useState<movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMovies()
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error: string) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Homepage;
