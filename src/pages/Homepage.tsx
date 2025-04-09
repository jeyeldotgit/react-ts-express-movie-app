import { useState, useEffect } from "react";
import { fetchMovies } from "../fetchapi/fetchmovies";
import { fetchTotalPages } from "../fetchapi/fetchTotalPages";
import { movie } from "../types/movie";
import MovieList from "../components/homepageComponents/MovieList";
import PaginationControls from "../components/homepageComponents/PaginationControls";

const Homepage = () => {
  const [movies, setMovies] = useState<movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMovies(currentPage)
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error: string) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, [currentPage]);

  useEffect(() => {
    fetchTotalPages()
      .then((data) => {
        setTotalPages(data);
      })
      .catch((error: string) => {
        console.error("Error fetching total pages:", error);
      });
  }, []);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      setLoading(true); // Set loading to true when changing pages
    }
  };

  console.log("Total Pages:", totalPages);
  console.log("Current Page:", currentPage);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div>
      <MovieList movies={movies} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Homepage;
