import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const instance = axios.create({
  baseURL: BASE_URL,
});

export const saveData = async (url,payload) => {
  return await instance.post(url,payload).then((response) => {
    return response;
  });
};

export const getData = async (url) => {
  return await instance
    .get(url)
    .then((response) => {
      const { data } = response;
      console.log('Data',data)
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
