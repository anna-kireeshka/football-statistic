import axios from "axios";

export const HTTP = axios.create({
  baseURL: "https://api.football-data.org/v2",
  headers: {
    "X-Auth-Token": process.env.VUE_APP_KEY,
  },
});
