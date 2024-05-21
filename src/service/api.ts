import axios, { AxiosInstance } from 'axios'
const apiUrl = import.meta.env.VITE_API_URL as string

const baseURL = apiUrl

if (!apiUrl) {
  throw new Error('VITE_API_URL environment variable is not defined')
}

const apiService: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export { apiService }
