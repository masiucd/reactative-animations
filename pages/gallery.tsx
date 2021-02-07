import RepeatedBox from "@components/animated/repeated-box"
import { NextPage } from "next"
import Head from "next/head"
import Title from "@components/elements/title"
import { Button } from "@styles/button"
import { useToggle } from "@hooks/toggle"
import { css } from "@emotion/css"
import Gallery from "@components/gallery/gallery"

const buttonStyles = css`
  width: 14rem;
`

const titleStyles = css`
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 4rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url("https://wesbos.com/static/blackgrit-15c168539fb7109ce300574e7b4b0732.png");

    background-repeat: none;
  }
`

const GalleryPage: NextPage = () => {
  const { on: showAnnoyingBox, toggle } = useToggle()
  return (
    <>
      <Head>
        <title>gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title mainTitle="Gallery" className={titleStyles} />
      <Button className={buttonStyles} onClick={toggle}>
        show annoying box
      </Button>
      <RepeatedBox showAnnoyingBox={showAnnoyingBox} />
      <Gallery />
    </>
  )
}

export default GalleryPage
