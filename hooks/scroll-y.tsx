import { ScrollPos } from "@utils/types"
import { useCallback, useEffect, useState } from "react"

interface ScrollY {
  y: number
  scrollDirection: ScrollPos
}

const useScrollY = (): ScrollY => {
  const [scrollDirection, setScrollDirection] = useState<ScrollPos>("idle")
  const [prevOffSet, setPrevOffSet] = useState(0)

  const handleScroll = useCallback((): void => {
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0
    if (scrollY === 0) {
      setScrollDirection("idle")
    }
    if (scrollY > prevOffSet) {
      setScrollDirection("down")
    } else if (scrollY < prevOffSet) {
      setScrollDirection("up")
    }
    setPrevOffSet(scrollY)
  }, [prevOffSet])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return { y: prevOffSet, scrollDirection }
}

export { useScrollY }
