import axios from "axios";
const apiKey = import.meta.env.VITE_APIKEY;
const apiEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&`;
export const fetchMovieFromApi = async (str) => {
  try {
    const url = apiEndPoint + "query=" + str;
    const response = await axios.get(url);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
export const fetchMovieDetailsFromApi = async (id) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchTrendingMovieFromApi = async () => {
  try {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
export const fetchMovieVideos = async (id) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
