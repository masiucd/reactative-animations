import { cx } from "@emotion/css"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

// Animate components on render and when we want to un render our component

interface FadeProps {
  isAnimated: boolean
  className?: string
  options?: {
    initial?: Record<string, number | string>
    animate?: Record<string, number | string>
    exit?: Record<string, number | string>
    transition?: Record<string, number | string>
  }
}

const Fade: React.FC<FadeProps> = ({
  children,
  isAnimated,
  options,
  className,
}) => {
  return (
    <AnimatePresence>
      {isAnimated && (
        <motion.section
          layout
          className={cx(className, "fade")}
          initial={{ opacity: 0, ...options?.initial }}
          animate={{ opacity: 1, ...options?.animate }}
          exit={{ opacity: 0, ...options?.exit }}
          transition={{ ...options?.transition }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
export default Fade
