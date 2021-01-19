import { useCallback, useEffect, useState } from "react"

const useWindowScrollPosition = () => {
  const isOnClient = typeof window !== "undefined"
  const [bodyOffset, setBodyOfSet] = useState(
    isOnClient ? document.body.getBoundingClientRect() : { top: 0, left: 0 },
  )
  const [scrollY, setScrollY] = useState(bodyOffset ? bodyOffset.top : 0)
  const [scrollX, setScrollX] = useState(bodyOffset ? bodyOffset.left : 0)

  const listener = useCallback(() => {
    setBodyOfSet(
      isOnClient ? document.body.getBoundingClientRect() : { top: 0, left: 0 },
    )
    // To get a positive value when scrolling down
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
  }, [bodyOffset.left, bodyOffset.top, isOnClient])

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [listener])

  return { scrollY, scrollX }
}

export { useWindowScrollPosition }
