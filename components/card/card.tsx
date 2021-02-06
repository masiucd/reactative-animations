import { css, cx } from "@emotion/css"
import React from "react"
import styled from "@emotion/styled"
import { CardHeader } from "./card-header"
import { useToggle } from "@hooks/toggle"
import CardFooter from "./card-footer"
interface CardProps {
  className?: string
  userOptions?: {
    name: string
    title: string
    contact: string
  }
}

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

  .model-img {
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

const Card: React.FC<CardProps> = ({ className, userOptions }) => {
  const { on: isLiked, toggle } = useToggle()
  return (
    <StyledCard className={cx(styles, className)}>
      <CardHeader
        isLiked={isLiked}
        toggleLiked={toggle}
        userOptions={userOptions}
      />
      <hr />
      <CardFooter />
    </StyledCard>
  )
}
export default Card
