import { movie } from "../types/movie";
import MovieCard from "./MovieCard";

type MovieListProps = {
  movies: movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
