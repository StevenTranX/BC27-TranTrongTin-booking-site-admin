import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://movienew.cybersoft.edu.vn/api/',
  headers: {
    TokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNyIsIkhldEhhblN0cmluZyI6IjI4LzAxLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NDg2NDAwMDAwMCIsIm5iZiI6MTY0NjE1NDAwMCwiZXhwIjoxNjc1MDExNjAwfQ._U4oXWaQKsEr5gGhCmvsV2ebHiN3qSaGVPi71jwnjFU',
  },
});

axiosClient.interceptors.request.use((config) => {
  const { accessToken } = JSON.parse(localStorage.getItem('user')).data.content || {};
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response.data.content;
//   },
//   (error) => {
//     return Promise.reject(error.response?.data.content);
//   }
// );

export default axiosClient;
