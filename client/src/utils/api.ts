import axios from 'axios';

export default axios.create({
  baseURL:
    `${process.env.REACT_APP_API_END_POINT}:${process.env.REACT_APP_API_PORT}/api` ||
    'http://localhost:3000/api',
  headers: { Accept: 'application/json' },
  withCredentials: true,
});
