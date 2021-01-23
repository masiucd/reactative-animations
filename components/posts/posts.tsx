import { posts } from "@utils/posts"
import React from "react"
import PostItem from "./post-item"
import styled from "@emotion/styled"

const PostList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

export const Posts = () => {
  return (
    <PostList>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </PostList>
  )
}
