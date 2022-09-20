import axios from "axios"
import { GetDataType, PostDataType } from "../types"
import { PostType } from "../types/postTypes"

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
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

const createPost = async (
  data: Omit<PostType, "id">
): Promise<PostDataType<any>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await apiClient.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      )
      resolve({
        postedData: res?.data,
        successMsg: "Data added successfully",
        error: undefined,
        status: res?.status,
      })
    } catch (error) {
      const err = (error as Error).message
      reject(err)
    }
  })
}

export { getPosts, getPostByID, createPost }
