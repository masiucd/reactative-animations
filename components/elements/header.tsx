import { css, cx } from "@emotion/css"
import { motion } from "framer-motion"
import React from "react"
import Nav from "./nav"

const headerStyles = css`
  & {
    background-color: var(--textColor);
    color: var(--background);
    padding: 1rem 0.5rem;
    position: sticky;
    top: 0;
    z-index: 2;
  }
`

const Header = () => {
  return (
    <motion.header className={cx(headerStyles)}>
      <Nav />
    </motion.header>
  )
}

export default Header
