import { movie } from "../types/movie";
import BASE_URL from "../utils/BaseURL";

export const fetchMovies = async (page: number): Promise<movie[]> => {
  try {
    const response = await fetch(`${BASE_URL}/getmovies?page=` + page);
    const data = await response.json();
    const movies = data.results as movie[];

    return movies;
  } catch (error) {
    console.error("Error fetching movies: " + error);
    throw error;
  }
};
