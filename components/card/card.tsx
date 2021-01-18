import { css, cx } from "@emotion/css"
import React, { useState } from "react"
import styled from "@emotion/styled"
import Image from "next/image"
import { Button } from "@styles/button"
interface CardProps {
  className?: string
}

const CardButton = styled(Button)`
  background-image: var(--gradient-bg1); /*fallback for old browsers*/
  background-image: -webkit-linear-gradient(
    to right,
    var(--gradient-bg2),
    var(--gradient-bg3),
    var(--gradient-bg1)
  );
  background-image: linear-gradient(
    to right,
    var(--gradient-bg2),
    var(--gradient-bg3),
    var(--gradient-bg1)
  );

  border-radius: var(--border-radius-XL);
  color: var(--background);
  text-shadow: 2p 2px var(--textColor);
  z-index: 1;

  /* transition for linear-gradient */
  transition: background-image 0.3s ease-in-out;
  position: relative;
  &:before {
    position: absolute;
    border-radius: var(--border-radius-XL);
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to right,
      var(--gradient-bg1),
      var(--gradient-bg2),
      var(--gradient-bg3)
    );
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`

const StyledCard = styled.div`
  border: 2px solid var(--black);
  max-width: 23rem;
  margin: 1rem auto;
  box-shadow: var(--shadowLg);
  border-radius: var(--border-radius);
  min-height: 22rem;
  background-color: var(--textColor);
  color: var(--background);

  hr {
    border: 0;
    height: 0; /* Firefox... */
    box-shadow: 0 0 10px 1px black;
    &::after {
      content: "\\00a0"; /* Prevent margin collapse */
    }
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem 0.5rem;
  .heart {
    position: absolute;
    top: 0.8rem;
    left: 1.5rem;
    font-size: 1.5rem;
    color: var(--background);
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: 0;
    transition: var(--main-trans);
  }
`

const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin: 1rem auto;
  }
`

const styles = css`
  .img-wrapper {
    border-radius: 50%;
    padding: 0;
    position: relative;
    margin: 0.5rem 0;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.3);
    }
    /* the image component has additional wrappers aground it */
    /* to get the expected result */
    div:first-child {
      position: static !important;
    }
  }

  #model-img {
    border-radius: 50%;
    display: block;
    position: relative;
    object-fit: cover;
    opacity: 0.8;
    z-index: 2;
    transition: 400ms ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`

const Option = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  span {
    background-color: var(--background);
    border-radius: 50%;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    padding: 0.2rem;
    margin: 0.2rem 0;
    &:first-of-type {
    }
    &:nth-of-type(2) {
    }
    &:nth-of-type(3) {
    }
  }
`

const CardFooter = styled.section`
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

const Card: React.FC<CardProps> = ({ className }) => {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <StyledCard className={cx(styles, className)}>
      <CardHeader>
        <button className="heart" onClick={() => setIsLiked((prev) => !prev)}>
          {isLiked ? "❤️" : "♡"}
        </button>

        <ImageContent>
          <div className="img-wrapper">
            <Image
              id="model-img"
              src="/model2.jpg"
              alt="profile"
              width="100%"
              height="100%"
            />
          </div>
          <strong>Linda Smith</strong>
          <p>Senior designer</p>
          <small>designs @lindaMas</small>
          <CardButton>hire me</CardButton>
        </ImageContent>

        <Option>
          <span></span>
          <span></span>
          <span></span>
        </Option>
      </CardHeader>
      <hr />
      <CardFooter>
        <div className="box box-1">
          <Image
            src="/icons/twitter.svg"
            width="100%"
            height="100%"
            alt="medium"
          />
        </div>
        <div className="box box-2">
          <Image
            src="/icons/insta.svg"
            width="100%"
            height="100%"
            alt="medium"
          />
        </div>
        <div className="box box-3">
          <Image
            src="/icons/github-color.svg"
            width="100%"
            height="100%"
            alt="medium"
          />
        </div>
      </CardFooter>
    </StyledCard>
  )
}
export default Card
