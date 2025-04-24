import { movie } from "../types/movie";
import BASE_URL from "../utils/BaseURL";

export const searchMovie = async (query: string): Promise<movie[]> => {
  try {
    const response = await fetch(`${BASE_URL}/search?query=` + query);
    const data = await response.json();
    const searchResults = data.results as movie[];
    return searchResults;
  } catch (error) {
    console.error("Error searching movies: " + error);
    throw error;
  }
};
