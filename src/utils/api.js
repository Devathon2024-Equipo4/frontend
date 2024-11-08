import axios from "axios";

const ApiInstance = axios.create({
  baseURL: `${
    import.meta.env.VITE_APP_API_URL + import.meta.env.VITE_APP_API_NAME
  }`,
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

export default ApiInstance;
