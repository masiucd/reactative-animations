import styled from "@emotion/styled"
import { motion } from "framer-motion"

const Wrapper = styled(motion.div)`
  width: 35rem;
  margin: 0 auto;
  padding: 2rem 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Line = styled(motion.div)`
  width: 12rem;
  height: 1rem;
  background-color: var(--dark2);
  margin: 0.4rem 0;
  &.one {
    background-color: var(--green);
  }
  &.two {
    width: 6rem;
    background-color: var(--red);
  }
  &.three {
    width: 8rem;
    background-color: var(--yellow);
  }
`

export const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Line
        initial={{ x: 0 }}
        animate={{ x: 320 }}
        transition={{ flip: Infinity, duration: 0.5 }}
        className="one"
      />
      <Line
        initial={{ x: 0 }}
        animate={{ x: 370 }}
        transition={{ flip: Infinity, duration: 0.4 }}
        className="two"
      />
      <Line
        initial={{ x: 0 }}
        animate={{ x: 420 }}
        transition={{ flip: Infinity, duration: 0.75 }}
        className="three"
      />
    </Wrapper>
  )
}
