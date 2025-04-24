import { useDebounce } from "react-use";
import { useState, useEffect } from "react";
import { fetchMovies } from "../fetchapi/fetchmovies";
import { fetchTotalPages } from "../fetchapi/fetchTotalPages";
import { searchMovie } from "../fetchapi/searchMovie";
import { movie } from "../types/movie";
import MovieList from "../components/homepageComponents/MovieList";
import PaginationControls from "../components/homepageComponents/PaginationControls";
import HeaderWithSearch from "../components/homepageComponents/HeaderWithSearch";
import Hero from "../components/sections/Hero";
import Loading from "../components/loadingComponent/Loading";

const Homepage = () => {
  const [movies, setMovies] = useState<movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState<string>("");

  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  useEffect(() => {
    fetchTotalPages()
      .then((data) => {
        setTotalPages(data);
      })
      .catch((error: string) => {
        console.error("Error fetching total pages:", error);
      });
  }, []);

  useEffect(() => {
    if (debounceSearchTerm) {
      searchMovie(debounceSearchTerm)
        .then((data) => {
          setMovies(data);
          setLoading(false);
        })
        .catch((error: string) => {
          console.error("Error searching movies:", error);
          setLoading(false);
        });
    } else {
      fetchMovies(currentPage)
        .then((data) => {
          setMovies(data);
          setLoading(false);
        })
        .catch((error: string) => {
          console.error("Error fetching movies:", error);
          setLoading(false);
        });
    }
  }, [debounceSearchTerm, currentPage]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      setLoading(true); // Set loading to true when changing pages
    }
  };

  const handleLoading = () => {
    if (loading) {
      return <Loading />;
    }
  };

  return (
    <div className="bg-[linear-gradient(to_right,#06142E,#0A1F44)] w-full">
      <section className="max-h-screen">
        <Hero></Hero>
      </section>
      <section className="min-h-screen">
        <HeaderWithSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        ></HeaderWithSearch>
        {loading ? handleLoading() : <MovieList movies={movies} />}
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
};

export default Homepage;
