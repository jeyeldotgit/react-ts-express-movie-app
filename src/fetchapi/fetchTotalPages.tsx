import BASE_URL from "../utils/BaseURL";

export const fetchTotalPages = async (): Promise<number> => {
  try {
    const response = await fetch(`${BASE_URL}/getmovies`);
    const data = await response.json();
    const totalPage = data.total_pages as number;

    return totalPage;
  } catch (error) {
    console.error("Error fetching total pages:", error);
    throw error;
  }
};
