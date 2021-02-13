import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"
import Fade from "./fade"

const Box = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  background-color: var(--green);
  box-shadow: var(--shadowMd);
`

interface RepeatedBoxProps {
  showAnnoyingBox: boolean
}

const RepeatedBox = ({ showAnnoyingBox }: RepeatedBoxProps) => {
  return (
    <Fade isAnimated={showAnnoyingBox}>
      <Box
        data-testid="repeated-box"
        initial={{ x: 0 }}
        className="box"
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
    </Fade>
  )
}
export default RepeatedBox
