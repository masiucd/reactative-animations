import { css, cx } from "@emotion/css"
import styled from "@emotion/styled"
import { useWindowScrollPosition } from "@hooks/window-scroll-pos"
import { above } from "@styles/media-query"
import { motion } from "framer-motion"
import Link from "next/link"

const NavStyles = styled(motion.nav)`
  background-color: var(--dark2);
  color: var(--background);
  box-shadow: var(--shadowLg);
  padding: 0.5rem;

  display: flex;
  .nav-list {
    display: none;
    @media ${above.tablet} {
      width: 20rem;
      justify-content: space-between;
      margin-left: auto;
      flex: 1 1 40%;
      display: flex;
      padding: 0.5rem;
    }
  }
`

const titleStyles = (isScrolling: boolean) => css`
  & {
    display: flex;

    flex: 2 1 60%;
    justify-content: ${isScrolling ? "flex-end" : "flex-start"};
    strong {
      margin-right: ${isScrolling ? "1rem" : "0"};
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
  const { y } = useWindowScrollPosition()

  const isScrolling = y + 16 > 40

  return (
    <NavStyles>
      <div className={cx("title", titleStyles(isScrolling))}>
        <Link href="/">
          <a>
            <motion.strong layout className={cx(strongStyles)}>
              <span>Reactive</span> animations
            </motion.strong>
          </a>
        </Link>
      </div>
      <ul className="nav-list">
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
      </ul>
    </NavStyles>
  )
}

export default Nav
