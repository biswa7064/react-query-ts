import React, { useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { preProcessFile } from "typescript"
import { createPost } from "../services/postApi"

interface PostFormType {
  title: string
  body: string
}

const AddPost = () => {
  const client = useQueryClient()
  const [post, setPost] = useState<PostFormType>({
    title: "",
    body: "",
  })
  const { mutate, error, isSuccess, status, data } = useMutation(
    ["addPost"],
    createPost,
    {
      retry: false,
      onSuccess: () => {
        client.invalidateQueries("allPosts")
      },
    }
  )

  const onChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost((pre) => ({
      ...pre,
      [ev.target.name]: ev.target.value,
    }))
  }

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault()
    mutate({ title: post?.title, body: post?.body, userId: Date.now() })
  }

  console.log({ error, isSuccess, status, data })
  return (
    <div className="w-100">
      <form noValidate onSubmit={handleSubmit}>
        <div className="add-post-form">
          <input
            name="title"
            id="title"
            type="text"
            placeholder="Title"
            className="input-box"
            value={post?.title}
            onChange={(ev) => onChange(ev)}
          />
          <textarea
            name="body"
            rows={3}
            placeholder="Description"
            className="input-box"
            value={post.body}
            onChange={(ev) => onChange(ev)}
          />
          <button type="submit" className="btn-submit">
            ADD POST
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPost
