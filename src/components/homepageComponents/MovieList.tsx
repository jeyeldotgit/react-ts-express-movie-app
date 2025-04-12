import { movie } from "../../types/movie";
import MovieCard from "./MovieCard";

type MovieListProps = {
  movies: movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="p-8 font-roboto md:p-10 ">
      <h1 className="text-text-primary text-2xl">
        Popular <span className="font-russo">Choice</span>
      </h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
