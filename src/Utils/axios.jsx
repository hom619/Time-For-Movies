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