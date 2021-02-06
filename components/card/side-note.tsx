import Fade from "@components/animated/fade"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"

interface SideNoteProps {
  on: boolean
}

const StyledNote = styled(motion.div)`
  position: absolute;
  top: 3rem;
  right: -10rem;
  width: 14rem;
  height: 8rem;
  background-color: var(--textColor);
  border-radius: var(--border-radius);
  border: 1px solid var(--background);
  overflow-y: scroll;
  p {
    font-size: 0.65rem;
    border: 0;
    letter-spacing: 0.1rem;
    line-height: 1.2rem;
  }
`

const SideNote: React.FC<SideNoteProps> = ({ on }) => {
  return (
    <Fade
      isAnimated={on}
      options={{
        animate: { x: 0, transition: { delay: 0.2 } },
      }}
    >
      <StyledNote>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          expedita magni tempore molestiae ea enim corrupti ipsum unde, eum
          aperiam iusto sint esse dignissimos laborum veritatis harum soluta
          accusamus. Dicta.
        </p>
      </StyledNote>
    </Fade>
  )
}
export default SideNote
