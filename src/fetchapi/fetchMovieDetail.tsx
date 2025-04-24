import { movie } from "../types/movie";
import BASE_URL from "../utils/BaseURL";

export const fetchMovieDetail = async (id: string): Promise<movie> => {
  try {
    const response = await fetch(`${BASE_URL}/getmovies?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details: " + error);
    throw error;
  }
};
