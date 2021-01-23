import React from "react"
import { Post } from "@utils/types"
import styled from "@emotion/styled"

interface PostItemProps {
  post: Post
}

const StyledPostItem = styled.li`
  padding: 1rem;
  strong {
    font-size: 2rem;
  }
  box-shadow: var(--shadowMd);
  border-radius: var(--border-radius);
  margin: 1rem auto;
`

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <StyledPostItem>
      <strong>{post.title + " " + post.id}</strong>
      <p>{post.text}</p>
    </StyledPostItem>
  )
}
export default PostItem
