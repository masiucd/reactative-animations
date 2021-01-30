import React, { useState } from "react"
import { Offset, Post } from "@utils/types"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { useMeasurePosition } from "@hooks/measure-position"

interface PostItemProps {
  post: Post
  updateOrder: (i: number, dragOffset: any) => void
  updatePosition: (i: number, offset: any) => number
  index: number
}

const StyledPostItem = styled(motion.li)`
  padding: 1rem;
  strong {
    font-size: 2rem;
  }
  box-shadow: var(--shadowMd);
  border-radius: var(--border-radius);
  margin: 1rem auto;
`

const PostItem: React.FC<PostItemProps> = ({
  post,
  updateOrder,
  updatePosition,
  index,
}) => {
  const [isDragging, setIsDragging] = useState(false)

  const ref = useMeasurePosition<HTMLLIElement>((offset: Offset) => {
    updatePosition(index, offset)
  })

  return (
    <StyledPostItem
      ref={ref}
      drag="y"
      layout
      dragElastic
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      animate={{ scale: isDragging ? 1.045 : 1, zIndex: isDragging ? 1 : 0 }}
      onViewportBoxUpdate={(_, delta) => {
        if (isDragging) {
          updateOrder(index, delta.y.translate)
        }
      }}
    >
      <strong>{post.title + " " + post.id}</strong>
      <p>{post.text}</p>
    </StyledPostItem>
  )
}
export default PostItem
