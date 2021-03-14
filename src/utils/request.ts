import axios from "axios";

export const server = axios.create({
  baseURL: process.env.VUE_APP_VEME_API,
});
