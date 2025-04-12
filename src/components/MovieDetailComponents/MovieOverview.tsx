import { movie } from "../../types/movie";

type MovieOverviewProps = {
  movieDetail: movie;
};

const MovieOverview = ({ movieDetail }: MovieOverviewProps) => {
  return (
    <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl p-6 mt-8 flex flex-col md:flex-row gap-6 transition-all duration-300">
      {/* Poster Image */}
      <div className="w-full md:w-1/3 rounded-xl overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Movie Info */}
      <div className="w-full md:w-2/3 flex flex-col justify-between text-white space-y-4">
        <div>
          <h2 className="text-3xl font-extrabold mb-2 font-russo">
            Movie Overview🍿
          </h2>
          <p className="text-white/80 leading-relaxed">
            {movieDetail.overview}
          </p>
        </div>

        <div className="pt-4 space-y-1 text-sm text-white/70 font-roboto">
          <p>
            <span className="font-semibold text-white">Release Date:</span>{" "}
            {movieDetail.release_date}
          </p>
          <p>
            <span className="font-semibold text-white">Rating:</span> ⭐{" "}
            {movieDetail.vote_average}
          </p>
          <p>
            <span className="font-semibold text-white">Votes:</span>{" "}
            {movieDetail.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieOverview;
