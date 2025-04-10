import { movie } from "../types/movie";

export const searchMovie = async (query: string): Promise<movie[]> => {
  try {
    const response = await fetch("http://localhost:3001/search?query=" + query);
    const data = await response.json();
    const searchResults = data.results as movie[];
    return searchResults;
  } catch (error) {
    console.error("Error searching movies: " + error);
    throw error;
  }
};
