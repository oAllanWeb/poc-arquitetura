import axios from "axios";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  timeout: 3000,
});

export default Api;
