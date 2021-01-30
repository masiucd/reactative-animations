import { posts } from "@utils/posts"
import React from "react"
import PostItem from "./post-item"
import styled from "@emotion/styled"
import { usePositionReorder } from "@hooks/position-reorder"
import { Post } from "@utils/types"

const PostList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

export const Posts = () => {
  const [order, updatePosition, updateOrder] = usePositionReorder<Post>(posts)

  return (
    <PostList>
      {order.map((post, index) => (
        <PostItem
          key={post.id}
          post={post}
          index={index}
          updateOrder={updateOrder}
          updatePosition={updatePosition}
        />
      ))}
    </PostList>
  )
}
