import Fade from "@components/animated/fade"
import { useToggle } from "@hooks/toggle"
import { Button } from "@styles/button"
import { randomNumber } from "@utils/helpers"
import React from "react"
import Card from "./card"

const Showcase = () => {
  const { on, toggle } = useToggle()
  const exitOptions = { x: on ? `${randomNumber(100)}%` : 0 }
  const initialOptions = { x: on ? 0 : `${randomNumber(100)}%` }
  return (
    <>
      <Button className="show-btn" onClick={toggle}>
        {on ? "hide card" : "show card"}
      </Button>
      <Fade
        isAnimated={on}
        options={{
          exit: exitOptions,
          initial: initialOptions,
        }}
        exitBeforeEnter
      >
        <Card />
      </Fade>
    </>
  )
}

export default Showcase
