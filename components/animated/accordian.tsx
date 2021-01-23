import { cx, css } from "@emotion/css"
import { useToggle } from "@hooks/toggle"
import { Button } from "@styles/button"
import { motion } from "framer-motion"

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

export const Accordian = () => {
  const { on, toggle } = useToggle()
  return (
    <div className={cx(styles(on))}>
      <Button onClick={toggle}>{on ? "hide text" : "show text"}</Button>
      <motion.div layout>
        {on && (
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
      </motion.div>
    </div>
  )
}
