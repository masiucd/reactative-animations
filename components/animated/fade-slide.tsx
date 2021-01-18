import { AnimatePresence } from "framer-motion"
import React from "react"

interface FadeSlideProps {
  isAnimated: boolean
}

const FadeSlide: React.FC<FadeSlideProps> = ({ children, isAnimated }) => {
  return <AnimatePresence>{isAnimated && { children }}</AnimatePresence>
}
export default FadeSlide
