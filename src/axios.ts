import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
})

export default axiosInstance

export const imageApi = axios.create({
  baseURL: 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api',
})
