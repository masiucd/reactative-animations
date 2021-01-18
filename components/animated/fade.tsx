import { AnimatePresence, motion } from "framer-motion"
import React from "react"

// Animate components on render and when we want to un render our component

interface FadeProps {
  isAnimated: boolean
  initialOptions?: Record<string, number | string>
  exitOptions?: Record<string, number | string>
  transitionOptions?: Record<string, number | string>
}

const Fade: React.FC<FadeProps> = ({
  children,
  isAnimated,
  exitOptions,
  initialOptions,
  transitionOptions,
}) => {
  return (
    <AnimatePresence>
      {isAnimated && (
        <motion.section
          initial={{ opacity: 0, ...initialOptions }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, ...exitOptions }}
          transition={{ ...transitionOptions }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
export default Fade
