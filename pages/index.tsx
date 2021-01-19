import { css, cx } from "@emotion/css"
import { NextPage } from "next"
import Head from "next/head"
import Title from "@components/elements/title"
import Card from "@components/card/card"
import Fade from "@components/animated/fade"
import { useToggle } from "@hooks/toggle"
import { Button } from "@styles/button"
import { randomNumber } from "@utils/helpers"
// import { useWindowScrollPosition } from "@hooks/window-scroll-pos"

const styles = () => css`
  .show-btn {
    display: block;
    margin: 2rem auto;
  }
`

const titleStyles = css`
  & {
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    margin: 2rem 0;
  }
`

const HomePage: NextPage = () => {
  const { on, toggle } = useToggle()
  const exitOptions = { x: on ? `${randomNumber(100)}%` : 0 }
  const initialOptions = { x: on ? 0 : `${randomNumber(100)}%` }
  // const { scrollX, scrollY } = useWindowScrollPosition()
  // console.log(scrollX, scrollY)

  return (
    <div className={cx(styles())}>
      <Head>
        <title>reactive animations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title
        mainTitle="welcome to"
        subTitle="reactive animations"
        className={titleStyles}
        animatedOptions={{
          initial: { opacity: 0, y: "-100%" },
          animate: {
            opacity: 1,
            y: 0,
          },
        }}
      />
      <Button className="show-btn" onClick={toggle}>
        {on ? "Hide" : "Show"}
      </Button>
      <Fade
        isAnimated={on}
        exitOptions={exitOptions}
        initialOptions={initialOptions}
      >
        <Card />
      </Fade>
    </div>
  )
}

export default HomePage
