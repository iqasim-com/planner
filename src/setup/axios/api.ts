import axios from "axios";

export const api = axios.create({
  baseURL: 'http://143.198.9.64/', // TODO: Will add from .env
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  }
})