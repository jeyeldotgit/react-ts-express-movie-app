import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { movie } from "../types/movie";
import { fetchMovieDetail } from "../fetchapi/fetchMovieDetail";
import Loading from "../components/loadingComponent/Loading";
import MoviePlayer from "../components/MovieDetailComponents/MoviePlayer";
import MovieOverview from "../components/MovieDetailComponents/MovieOverview";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>(); // Extracts the movie id from the URL
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

  console.log(id);

  if (loading) {
    return <Loading />;
  }

  if (!movieDetail) {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
    return <div>Movie not found.</div>;
  }

  if (!id) {
    return <div>Invalid movie ID</div>;
  }

  const title: string = movieDetail.title;

  return (
    <div className="bg-[linear-gradient(to_right,#06142E,#0A1F44)] w-full min-h-screen p-6">
      {/* Display more movie details as needed */}
      <MoviePlayer id={id} title={title} />

      <MovieOverview movieDetail={movieDetail} />
    </div>
  );
};

export default MovieDetail;
