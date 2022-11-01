import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3000/";
//2 hours debugging !!!
//catch JSON parse error
try {
  axios.defaults.headers.common = {
    Authorization: `bearer ${
      localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token") || null)
        : null
    }`,
  };
} catch (err) {}
export default axios;
