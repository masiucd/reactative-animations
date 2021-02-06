import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"

const Box = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  background-color: var(--green);
  box-shadow: var(--shadowMd);
`

const RepeatedBox = () => {
  return (
    <Box
      initial={{ x: 0 }}
      animate={{
        x: 300,
        rotate: 120,
        width: "15rem",
        height: "25rem",
        backgroundColor: "var(--red)",
        borderRadius: "12px",
      }}
      transition={{
        repeat: Infinity,
        type: "spring",
        repeatDelay: 2,
        repeatType: "mirror",
      }}
    />
  )
}
export default RepeatedBox
