import Axios from 'axios'

export const axios = Axios.create({
  baseURL: 'http://localhost:5002',
})

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)