import { css, cx } from "@emotion/css"
import React from "react"
import Nav from "./nav"

const headerStyles = css`
  & {
    background-color: var(--dark2);
    color: var(--background);
    padding: 1rem 0.5rem;
  }
`

const Header = () => {
  return (
    <header className={cx(headerStyles)}>
      <div className="title">
        <h3>Reactive animations</h3>
      </div>
      <Nav />
    </header>
  )
}

export default Header
