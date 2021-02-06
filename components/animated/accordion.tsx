import { cx, css } from "@emotion/css"
import { useClickOutside } from "@hooks/click-outside"
import { useToggle } from "@hooks/toggle"
import { Button } from "@styles/button"
import { motion } from "framer-motion"
import React, { useRef } from "react"
import Fade from "./fade"

const styles = (on: boolean) => css`
  & {
    box-shadow: ${on ? "var(--shadowMd)" : ""};
    border-radius: var(--border-radius);
    padding: 1rem;
    max-width: 35rem;
    margin: 2rem auto;
    button {
      margin: 1rem auto;
    }
    h4 {
      text-align: center;
      margin: 1.5rem auto;
    }
  }
`

export const Accordion = () => {
  const { on: showText, toggle: toggleText, onToFalse: hideText } = useToggle()
  const ref = useRef(null)

  useClickOutside(ref, hideText)

  return (
    <div className={cx(styles(showText))} ref={ref}>
      <Button className="show-text-btn" onClick={toggleText}>
        {showText ? "hide text" : "show text"}
      </Button>
      <Fade isAnimated={showText}>
        {showText && (
          <>
            <motion.h4>post</motion.h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              perspiciatis nulla odio. Enim sint iusto veritatis aut nam tenetur
              inventore illo aspernatur unde, sunt deserunt harum ratione eaque
              quasi soluta. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Similique reiciendis minus voluptates atque corporis
              architecto distinctio? Similique fuga nisi accusamus, consequuntur
              fugit praesentium ipsa doloribus assumenda id facere, quis
              inventore?
            </p>
          </>
        )}
      </Fade>
    </div>
  )
}
