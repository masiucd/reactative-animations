import React from "react"
import Image from "next/image"
import styled from "@emotion/styled"
import { above } from "@styles/media-query"
import { motion } from "framer-motion"
const images = Array.from({ length: 12 }, (_, i) => i + 1)

const GalleryGrid = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 20px;
  padding: 1rem 0;

  div {
    border: 1px solid var(--dark2);
    box-shadow: var(--shadowLg);
    transition: var(--main-trans);
    opacity: 0.8;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--transparentDark3);
    }
    &:hover {
      transform: scale(1.04);
      box-shadow: var(--shadow2Xl);
      opacity: 1;
    }
  }

  @media ${above.tabletL} {
    div:nth-of-type(1) {
      grid-column: 1/3;
    }
    div:nth-of-type(2) {
      grid-column: 3/5;
      grid-row: span 2;
    }
    div:nth-of-type(6) {
      grid-column: span 3;
      grid-row: span 2;
    }
    div:nth-of-type(9) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
`

const variants = {
  start: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
}

export const Gallery = () => {
  return (
    <GalleryGrid
      initial="start"
      animate="animate"
      exit="exit"
      variants={variants}
      data-testid="gallery-grid"
    >
      {images.map((image) => (
        <Image
          className={`image-${image}`}
          key={image}
          width={1000}
          height={1000}
          src={`/art-${image}.jpg`}
        />
      ))}
    </GalleryGrid>
  )
}

export default Gallery
