import { movie } from "../types/movie";

export const fetchMovies = async (page: number): Promise<movie[]> => {
  try {
    const response = await fetch(
      "http://localhost:3001/getmovies?page=" + page
    );
    const data = await response.json();
    const movies = data.results as movie[];
    console.log(movies);
    return movies;
  } catch (error) {
    console.error("Error fetching movies: " + error);
    throw error;
  }
};
