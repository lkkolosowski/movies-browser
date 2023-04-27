import axios from "axios";

export const getPopularMovies = async () => {
  const response = await axios.get(
    "/movies-browser/exampleDataAPI.json"
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};
