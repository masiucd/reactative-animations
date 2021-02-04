import { NavLink } from "@utils/types"
import Link from "next/link"
import React from "react"
import { css, cx } from "@emotion/css"
import { motion } from "framer-motion"

interface NavItemProps {
  link: NavLink
}

const navItemStyles = css`
  text-transform: capitalize;
  transition: var(--main-trans);
  position: relative;
  &::after {
    content: "";
    background-color: var(--green);
    transition: var(--main-trans);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.1rem;
    width: 0;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`

const NavItem: React.FC<NavItemProps> = ({ link }) => {
  return (
    <motion.li className={cx(navItemStyles)} whileHover={{ scale: 1.1125 }}>
      <Link href={link.path}>
        <a>{link.name}</a>
      </Link>
    </motion.li>
  )
}
export default NavItem
