import React from "react"
import styled from "@emotion/styled"

interface OptionProps {
  on: boolean
  toggle: () => void
}

interface OptionStylesProps {
  on: number
}
const OptionStyles = styled.button<OptionStylesProps>`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  transition: 400ms ease-in-out all;

  ${({ on }) =>
    on
      ? `
    display: flex;
    width: 3rem;
    justify-content: space-between;
    padding: 1rem 0;
  `
      : `
        dislay:block;
        padding: .4rem 0;
      `}

  span {
    background-color: var(--background);
    border-radius: 50%;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    padding: 0.2rem;
    margin: 0.4rem 0;
    &:first-of-type {
    }
    &:nth-of-type(2) {
    }
    &:nth-of-type(3) {
    }
  }
`

export const Option = ({ on, toggle }: OptionProps) => {
  return (
    <OptionStyles onClick={toggle} on={on ? 1 : 0}>
      <span></span>
      <span></span>
      <span></span>
    </OptionStyles>
  )
}
