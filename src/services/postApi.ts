import { AxiosError } from "axios"
import CONFIG from "../config"
import { GetDataType, PostDataType } from "../types"
import { PostType } from "../types/postTypes"

const throwError = (err: unknown): string => {
  const errMsg = (err as AxiosError).message || "Something went wrong !!!"
  return errMsg
}

const getPosts = async (): Promise<GetDataType<PostType[]>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await CONFIG.postApiClient.get("posts")
      resolve({
        successMsg: "Fetched successful",
        data: res?.data,
        status: 200,
      })
    } catch (error) {
      reject(throwError(error))
    }
  })
}

const getPostByID = async (id: any): Promise<GetDataType<PostType>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await CONFIG.postApiClient.get(`posts/${id?.queryKey?.[1]}`)
      resolve({
        successMsg: "Fetched successful",
        data: res?.data,
        status: 200,
      })
    } catch (error) {
      reject(throwError(error))
    }
  })
}

const createPost = async (
  data: Omit<PostType, "id">
): Promise<PostDataType<any>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await CONFIG.postApiClient.post(
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
      reject(throwError(error))
    }
  })
}

export { getPosts, getPostByID, createPost }
