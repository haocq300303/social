import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "https://backend-socialapp.vercel.app",
});

instance.interceptors.request.use(
  async (config) => {
    // if (AsyncStorage.getItem("accessToken")) {
    //   config.headers.Token = `Bearer ${AsyncStorage.getItem("accessToken")}`;
    // }
    config.headers.Token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4YTBlY2ExMDhiNDI5MjY3MGRkYmQiLCJ1c2VybmFtZSI6ImhhbmhsZTIwMDIiLCJlbWFpbCI6ImhhbmhsaEBnbWFpbC5jb20iLCJhdmF0YXIiOiIiLCJiYWNrZ3JvdW5kIjoiIiwiZm9sbG93ZXJzIjpbXSwiZm9sbG93aW5ncyI6W10sIm5vdGlmaWNhdGlvbiI6W10sImRlc2MiOiIiLCJjaXR5IjoiIiwiZnJvbSI6IiIsImRhdGVfb2ZfYmlydGgiOiIyMDIyLTA5LTA3VDEzOjE4OjIxLjM3MloiLCJnZW5kZXIiOiIiLCJpc0FkbWluIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMi0wOS0wN1QxMzo0NzoyNC4zNDlaIiwidXBkYXRlZEF0IjoiMjAyMi0wOS0wN1QxMzo0NzoyNC4zNDlaIiwiX192IjowLCJpYXQiOjE2OTU4MzY2MzgsImV4cCI6MTY5NTkyMzAzOH0.Ru1Pdp1rrJETgQYImqj_Y33HWTrsM9pe3lc-KxMbAG0`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response && response.data ? response.data : response;
  },
  function (error) {
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);

export default instance;
