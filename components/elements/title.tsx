import { cx, css } from "@emotion/css"
import { motion } from "framer-motion"

import React from "react"

const titleStyles = css`
  /*  */
`

interface titleProps {
  mainTitle: string
  className?: string
  subTitle?: string
  animatedOptions?: {
    [key: string]: Record<string, string | number>
  }
}

const title: React.FC<titleProps> = ({
  mainTitle,
  subTitle,
  className,
  animatedOptions,
}) => {
  return (
    <motion.section
      className={cx(titleStyles, className, "main-title")}
      initial={{ opacity: 0, y: "-100%" }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ ease: "anticipate" }}
      {...animatedOptions}
    >
      <h1>{mainTitle}</h1>
      {subTitle && <h3>{subTitle} </h3>}
    </motion.section>
  )
}
export default title
