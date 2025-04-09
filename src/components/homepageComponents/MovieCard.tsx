import { movie } from "../../types/movie";
import { Link } from "react-router-dom";

type MovieCardProps = {
  movie: movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <h1>{movie.title}</h1>
        <p>{new Date(movie.release_date).getFullYear()}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
