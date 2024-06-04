import axios from 'axios';

const apiRequest = axios.create({
  baseURL: 'http://10.0.2.2:3007/api',
  withCredentials: true,
});

export default apiRequest;
