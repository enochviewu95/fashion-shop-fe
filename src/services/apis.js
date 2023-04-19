import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const instance = axios.create({
    baseURL: BASE_URL,
})

export const add = (url) => {};

export const getData = async (url) => {
  return await instance
    .get(url)
    .then((response) => {
      const {data} =response;
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
