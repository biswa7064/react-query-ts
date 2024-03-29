import "./App.css"
import { useQuery } from "react-query"
import { GetDataType } from "./types"
import { PostType } from "./types/postTypes"
import { getPostByID, getPosts } from "./services/postApi"
import { useState } from "react"
import PostCard from "./components/PostCard"
import AddPost from "./components/AddPost"

function App() {
  const [selectID, setSelectID] = useState<number | undefined>(undefined)
  const { data, isFetching, error } = useQuery<GetDataType<PostType[]>>(
    "allPosts",
    getPosts,
    {
      initialData: {},
    }
  )

  const { data: selectedPost, isFetching: isLoadingPost } = useQuery<
    GetDataType<PostType>
  >(["selectedPost", selectID], getPostByID, {
    initialData: {},
    enabled: Boolean(selectID),
  })

  return (
    <div className="root-container">
      {selectID ? (
        <div className="single-post">
          {isLoadingPost ? (
            <p>Loading....</p>
          ) : (
            <>
              <PostCard
                key={selectedPost?.data?.id}
                item={selectedPost?.data}
              />
              <button
                className="btn-primary"
                type="button"
                onClick={() => {
                  setSelectID(undefined)
                }}
              >
                CLOSE
              </button>
            </>
          )}
        </div>
      ) : (
        <>
          <AddPost />
          {!error && (
            <>
              {isFetching ? (
                <p>Loading....</p>
              ) : (
                <div className="container">
                  {data?.data?.map((item) => (
                    <PostCard
                      key={item?.id}
                      item={item}
                      onClick={(id) => setSelectID(id)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default App
