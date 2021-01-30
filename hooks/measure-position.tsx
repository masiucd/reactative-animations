import { Offset } from "@utils/types"
import { MutableRefObject, useEffect, useRef } from "react"

type UpdateFn = (record: Offset) => void

function useMeasurePosition<T extends HTMLElement>(updateHandler: UpdateFn) {
  const ref: MutableRefObject<null | T> = useRef(null)
  useEffect(() => {
    if (ref.current) {
      updateHandler({
        height: ref.current.offsetHeight,
        top: ref.current.offsetTop,
      })
    }
  })

  return ref
}

export { useMeasurePosition }
