import styled from "@emotion/styled"
import { resetButtonStyles } from "@styles/button"

export const StyledForm = styled.form``

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  color: var(--textColor);
  span {
    padding: 0 0.5rem;
  }
`

export const Input = styled.input`
  height: 3rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadowLg);
  padding: 0 0.5rem;
`
export const SubmitButton = styled.button`
  /* ${resetButtonStyles} */
  padding: 0.5rem;
  font-size: 1.2rem;
  background-color: var(--green);
  color: var(--textColor);
  border-radius: var(--border-radius);
  border: 2px solid var(--textColor);
  box-shadow: var(--shadowLg);
  cursor: pointer;
  width: 12rem;
  margin: 1rem auto;
  display: block;
  transition: var(--main-trans);
  outline: 0;
  &:hover {
    background-color: var(--red);
    color: var(--background);
  }
`
