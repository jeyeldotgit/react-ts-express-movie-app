import { movie } from "../../types/movie";
import { Link } from "react-router-dom";

type MovieCardProps = {
  movie: movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 h-96">
      <Link to={`/movie/${movie.id}`} className="block h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-4/5 object-cover lg:h-4/5 max-h-4/5"
        />
        <div className="p-4 h-1/5 flex flex-col justify-between">
          <h3 className="text-base font-semibold truncate" title={movie.title}>
            {movie.title}
          </h3>
          <p className="text-sm text-gray-400">
            {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
