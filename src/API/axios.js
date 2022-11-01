import axios from "axios";

axios.defaults.baseURL = "https://helpdesk-api-v4.herokuapp.com/";
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
