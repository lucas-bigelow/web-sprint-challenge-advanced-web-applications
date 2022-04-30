// ✨ implement axiosWithAuth
import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  console.log("HITTTT")

  return axios.create({
    headers: {
      Authorization: token
    }
  })
}