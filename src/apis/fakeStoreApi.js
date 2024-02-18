import { axios } from "axios";

const url = "https://fakestoreapi.com";

export default axios.create({
  baseUrl: url,
});
