import { RegisterSignInForm } from "@components/register-sign-in/register-sign-in-form"
import { css, cx } from "@emotion/css"
import styled from "@emotion/styled"
import { useScrollY } from "@hooks/scroll-y"
import { useToggle } from "@hooks/toggle"
import { Button } from "@styles/button"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"
import NavList from "./nav-list"

const NavStyles = styled(motion.nav)`
  background-color: var(--nav-color);
  color: var(--background);
  box-shadow: var(--shadowLg);
  padding: 0.5rem;
  display: flex;
  min-height: 8rem;
  align-items: center;
`

const btnStyles = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: var(--green);
    color: var(--dark2);
  }
`

const titleStyles = (isScrollingDown: boolean) => css`
  & {
    display: flex;

    flex: 2 1 60%;
    justify-content: ${isScrollingDown ? "flex-end" : "flex-start"};
    strong {
      margin-right: ${isScrollingDown ? "1rem" : "0"};
    }
  }
`

const strongStyles = css`
  & {
    font-size: 1.5rem;
    display: inline-block;
    color: var(--lineColor);
    border-bottom: 2px solid var(--background);
    span {
      color: var(--green);
    }
  }
`

const Nav = () => {
  const { scrollDirection } = useScrollY()
  const { on, toggle } = useToggle()

  return (
    <NavStyles>
      <Button className={cx(btnStyles, "nav-sign-in-btn")} onClick={toggle}>
        Sign in
      </Button>
      <div className={cx("title", titleStyles(scrollDirection === "down"))}>
        <Link href="/">
          <a>
            <motion.strong layout className={cx(strongStyles)}>
              <span>Reactive</span> animations
            </motion.strong>
          </a>
        </Link>
      </div>
      <NavList />

      <RegisterSignInForm toggle={toggle} on={on} />
    </NavStyles>
  )
}

export default Nav
