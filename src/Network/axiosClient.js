import axios from "axios";

const apiUrl = "https://ecommerce.routemisr.com/api/v1/";
const axiosClient = axios.create({
  baseURL: apiUrl,
});

export default axiosClient;
