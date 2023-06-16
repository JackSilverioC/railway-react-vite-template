import axios from "axios";

const instance = axios.create({
  baseURL: "https://railway-react-vite-template-production.up.railway.app/api",
  withCredentials: true
});

export default instance;
