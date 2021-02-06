import RepeatedBox from "@components/animated/repeated-box"
import { NextPage } from "next"
import Head from "next/head"
import Title from "@components/elements/title"
import { Button } from "@styles/button"
import { useToggle } from "@hooks/toggle"
import { css } from "@emotion/css"

const buttonStyles = css`
  width: 14rem;
`

const GalleryPage: NextPage = () => {
  const { on: showAnnoyingBox, toggle } = useToggle()
  return (
    <>
      <Head>
        <title>gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title mainTitle="Gallery" />
      <Button className={buttonStyles} onClick={toggle}>
        show annoying box
      </Button>
      {showAnnoyingBox && <RepeatedBox />}
    </>
  )
}

export default GalleryPage
