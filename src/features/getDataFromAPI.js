import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "1a89c6b78383e65e62937e5f4ffe7915";

export const getPopularMovies = async () => {
  const response = await axios.get(
    `${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};

export const getGenres = async () => {
  const response = await axios.get(
    `${URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data.genres;
};
