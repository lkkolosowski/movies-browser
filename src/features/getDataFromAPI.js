import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "1a89c6b78383e65e62937e5f4ffe7915";

export const getPopularMovies = async (page) => {
  const response = await axios.get(
    `${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
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

export const getMovieDetails = async ({ movieId }) => {
  const response = await axios.get(
    `${URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};

export const getMovieCredits = async ({ movieId }) => {
  const response = await axios.get(
    `${URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }
  return await response.data;
};

export const getPersonDetails = async ({ personId }) => {
  const response = await axios.get(
    `${URL}/person/${personId}?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};

export const getPersonMovieCredits = async ({ personId }) => {
  const response = await axios.get(
    `${URL}/person/${personId}/combined_credits?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};

export const searchMovie = async ({ query, page }) => {
  const response = await axios.get(
    `${URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};
