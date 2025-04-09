import { movie } from "../types/movie";

export const fetchMovieDetail = async (id: string): Promise<movie> => {
  try {
    const response = await fetch(`http://localhost:3001/getmovies?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details: " + error);
    throw error;
  }
};
