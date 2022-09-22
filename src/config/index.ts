import axios from "axios"
const postApiClient = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  headers: {
    "content-type": "application/json",
  },
})

const CONFIG = {
  postApiClient,
}

export default CONFIG
