import React from "react"
import styled from "@emotion/styled"
import { useToggle } from "@hooks/toggle"

interface OptionStylesProps {
  on: number
}
const OptionStyles = styled.button<OptionStylesProps>`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  display: block;
  background: none;
  border: none;
  outline: none;
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

export const Option = () => {
  const { on, toggle } = useToggle()
  return (
    <OptionStyles onClick={toggle} on={on ? 1 : 0}>
      <span></span>
      <span></span>
      <span></span>
    </OptionStyles>
  )
}
