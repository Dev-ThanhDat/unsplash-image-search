import axios from './axios';

const fetchDataImages = (query, page, perPage) => {
  return axios.get(
    `/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${
      import.meta.env.VITE_API_KEY
    }`
  );
};

export { fetchDataImages };
