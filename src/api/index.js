import axios from "axios";

export default axios.create({
  baseURL: process.env.ROOT_API_ROYAL
});
