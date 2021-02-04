import { css, cx } from "@emotion/css"
import { above } from "@styles/media-query"
import { navLinks } from "@utils/initial-data"
import React from "react"
import NavItem from "./nav-item"

const navListStyles = css`
  display: none;

  @media ${above.tablet} {
    width: 20rem;
    justify-content: space-between;
    margin-left: auto;
    flex: 1 1 40%;
    display: flex;
    padding: 0.5rem;
  }
`

const NavList = () => {
  return (
    <ul className={cx(navListStyles)}>
      {navLinks.map((link) => (
        <NavItem key={link.name} link={link} />
      ))}
    </ul>
  )
}
export default NavList
