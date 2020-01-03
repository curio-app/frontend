import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://curi0.herokuapp.com/',
    headers: {
      authorization: token,
    },
  });
};

export default axiosWithAuth;
