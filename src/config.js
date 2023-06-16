import { config } from "dotenv";

config();

export const API_URL =
  import.meta.VITE_API_URL ||
  "https://railway-react-vite-template-production.up.railway.app/api";
