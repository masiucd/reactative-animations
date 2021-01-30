import styled from "@emotion/styled"

export const Button = styled.button`
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  border: 2px solid var(--textColor);
  box-shadow: var(--shadowLg);
  width: 8em;
  cursor: pointer;
  outline: 0;
  transition: var(--main-trans);
  border-radius: var(--border-radius);
  display: block;
  /* &:active {
    border: 2px solid var(--stroke-color);
    position: relative;
    top: 6px;
    box-shadow: var(--shadowXl);
  } */
  &:hover {
    box-shadow: var(--shadowXl);
    background-color: var(--textColor);
    color: var(--background);
  }
`
