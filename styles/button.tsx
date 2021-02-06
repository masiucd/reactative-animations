import styled from "@emotion/styled"
import { css } from "@emotion/css"

export const resetButtonStyles = css`
  cursor: pointer;
  transition: var(--main-trans);
  border: 2px solid var(--textColor);
`

export const Button = styled.button`
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  border: 2px solid var(--textColor);
  box-shadow: var(--shadowLg);
  width: 8em;
  outline: 0;
  border-radius: var(--border-radius);
  display: block;
  cursor: pointer;
  transition: var(--main-trans);
  border: 2px solid var(--textColor);
  &:hover {
    box-shadow: var(--shadowXl);
    background-color: var(--textColor);
    color: var(--background);
  }
`
