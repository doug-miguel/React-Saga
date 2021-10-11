import axios from 'axios';

const newLocal = 'https://api.github.com';

const api = axios.create({
  baseURL: newLocal
});

export default api;