import React, { FC } from "react"
import styled from "@emotion/styled"
import Image from "next/image"
import { Button } from "@styles/button"
import { Option } from "./option"
import { useToggle } from "@hooks/toggle"
import SideNote from "./side-note"

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

const CardHeaderStyles = styled.div`
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
  p {
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 2px solid var(--background);
    letter-spacing: 0.2rem;
  }
  .small-capture {
    margin-right: 0.5rem;
    color: var(--green);
    text-transform: capitalize;
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

interface CardHeaderProps {
  isLiked: boolean
  toggleLiked: () => void
  userOptions?: {
    name: string
    title: string
    contact: string
  }
}
export const CardHeader: FC<CardHeaderProps> = ({
  isLiked,
  toggleLiked,
  userOptions,
}) => {
  const { on, toggle } = useToggle()
  return (
    <CardHeaderStyles>
      <button className="heart" onClick={toggleLiked}>
        {isLiked ? "❤️" : "♡"}
      </button>

      <ImageContent>
        <div className="img-wrapper">
          <Image
            className="model-img"
            src="/me.jpg"
            alt="profile"
            width="100%"
            height="100%"
          />
        </div>
        <strong>
          {userOptions?.name ? userOptions.name : "Marcell Ciszek Druzunski"}
        </strong>
        <p>{userOptions?.title ? userOptions.title : "developer"}</p>
        <small>
          <span className="small-capture">hey hey</span>
          {userOptions?.contact ? userOptions.contact : "@masiucd"}
        </small>
        <CardButton>contact me</CardButton>
      </ImageContent>

      <Option on={on} toggle={toggle} />
      <SideNote on={on} />
    </CardHeaderStyles>
  )
}
