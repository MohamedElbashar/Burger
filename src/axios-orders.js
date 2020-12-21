/** @format */

import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-678d9.firebaseio.com",
});

export default instance;
