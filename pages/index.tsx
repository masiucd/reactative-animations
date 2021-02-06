import { css, cx } from "@emotion/css"
import { NextPage } from "next"
import Head from "next/head"
import Title from "@components/elements/title"
import { useToggle } from "@hooks/toggle"
import { Button } from "@styles/button"
import { Accordion } from "@components/animated/accordion"
import { LoadingSpinner } from "@components/common/loading-spinner"
import React from "react"
import Showcase from "@components/card/showcase"

const styles = () => css`
  .show-btn,
  .show-text-btn {
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

const loadingStyles = css`
  .stop-loading {
    margin: 0 auto;
    display: block;
  }
`

const HomePage: NextPage = () => {
  const { on: isLoading, onToFalse: setLoadingToFalse } = useToggle(true)

  return isLoading ? (
    <div className={loadingStyles}>
      <LoadingSpinner />
      <Button className="stop-loading" onClick={setLoadingToFalse}>
        Stop Loading
      </Button>
    </div>
  ) : (
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

      <Showcase />

      <Accordion />
    </div>
  )
}

export default HomePage
