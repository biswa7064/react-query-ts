import React, { FC } from "react"
import { PostType } from "../types/postTypes"

interface PostCardPropsType {
  item?: PostType
  onClick?: (id?: number) => void
}
const PostCard: FC<PostCardPropsType> = ({ item, onClick }) => {
  return (
    <span
      onClick={() => {
        onClick && onClick(item?.id)
      }}
    >
      <div className="post-card">
        <h4>{item?.title}</h4>
        <p>{item?.body}</p>
      </div>
    </span>
  )
}

export default PostCard
