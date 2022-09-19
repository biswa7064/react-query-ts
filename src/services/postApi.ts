import axios from "axios"
import { GetDataType } from "../types"
import { PostType } from "../types/postTypes"

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "content-type": "application/json",
  },
})

const getPosts = async (): Promise<GetDataType<PostType[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await apiClient.get("posts")
      resolve({
        successMsg: "Fetched successful",
        data: res?.data,
        status: 200,
      })
    } catch (error) {
      reject((error as Error).message ?? "Something went wrong !!!")
    }
  })
}

const getPostByID = async (id: any): Promise<GetDataType<PostType>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await apiClient.get(`posts/${id?.queryKey?.[1]}`)
      resolve({
        successMsg: "Fetched successful",
        data: res?.data,
        status: 200,
      })
    } catch (error) {
      reject((error as Error).message ?? "Something went wrong !!!")
    }
  })
}

export { getPosts, getPostByID }
