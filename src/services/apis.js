import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const updateData = async (url) => {
  return await instance
    .put(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return null;
    });
};

export const saveData = async (url, payload) => {
  return await instance
    .post(url, payload)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => {
      return null;
    });
};

export const getData = async (url) => {
  return await instance
    .get(url)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => {
      const { data } = null;
      return data;
    });
};

export const deleteData = async (url) => {
  return await instance
    .delete(url)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
