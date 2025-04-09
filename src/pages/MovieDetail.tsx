import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { movie } from "../types/movie";
import { fetchMovieDetail } from "../fetchapi/fetchMovieDetail";

const MovieDetail = () => {
  const { id } = useParams(); // Extracts the movie id from the URL
  const [movieDetail, setMovieDetail] = useState<movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        if (id) {
          const fetchedMovie = await fetchMovieDetail(id);
          setMovieDetail(fetchedMovie);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetail();
  }, [id]); // Re-fetch movie details when `id` changes

  if (loading) return <div>Loading movie details...</div>;

  if (!movieDetail) return <div>Movie not found.</div>;

  return (
    <div>
      <h1>{movieDetail.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
        alt={movieDetail.title}
      />
      <p>{movieDetail.overview}</p>
      <p>
        <strong>Release Date:</strong> {movieDetail.release_date}
      </p>

      {/* Display more movie details as needed */}
    </div>
  );
};

export default MovieDetail;
