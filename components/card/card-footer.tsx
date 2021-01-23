import React from "react"
import styled from "@emotion/styled"
import Image from "next/image"

const CardFooterStyles = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  .box {
    width: 5rem;
    cursor: pointer;
    padding: 1rem;
    img {
      object-fit: cover;
    }
  }
`

const CardFooter = () => {
  return (
    <CardFooterStyles>
      <div className="box box-1">
        <a
          href="https://mobile.twitter.com/MasiuCD"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/icons/twitter.svg"
            width="100%"
            height="100%"
            alt="medium"
          />
        </a>
      </div>
      <div className="box box-2">
        <a href="https://github.com/masiucd" target="_blank" rel="noreferrer">
          <Image
            src="/icons/insta.svg"
            width="100%"
            height="100%"
            alt="medium"
          />
        </a>
      </div>
      <div className="box box-3">
        <a target="_blank" rel="noreferrer" href="https://github.com/masiucd">
          <Image
            src="/icons/github-color.svg"
            width="100%"
            height="100%"
            alt="medium"
          />
        </a>
      </div>
    </CardFooterStyles>
  )
}
export default CardFooter
