import React from "react"
import {
  Input,
  Label,
  StyledForm,
  SubmitButton,
} from "@components/styled/form-elements"
import { css, cx } from "@emotion/css"
import { FormInput } from "@utils/types"

interface FormProps {
  className?: string
  inputs: Array<FormInput>
  isRegisterForm: boolean
  toggleIsRegisterForm: () => void
}

const formStyles = css`
  display: flex;
  flex-flow: column wrap;
  position: relative;
  padding: 1rem 0.5rem;
`

const switchStyles = css`
  position: absolute;
  right: 0;
  bottom: 0;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: var(--textColor);
  text-shadow: 1px 1px var(--dark2);
  cursor: pointer;
  &::after {
    content: "";
    background-color: var(--green);
    position: absolute;
    width: 100%;
    height: 0.1rem;
    left: 0;
    bottom: -2px;
    transform: rotate(1deg);
    transition: var(--main-trans);
  }
  &:hover {
    &::after {
      transform: rotate(0);
    }
  }
`

const Form: React.FC<FormProps> = ({
  className,
  inputs,
  isRegisterForm,
  toggleIsRegisterForm,
}) => {
  return (
    <StyledForm
      className={cx(formStyles, className)}
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      {inputs.map((input) => (
        <Label htmlFor={input.name} key={input.id} className="form-label">
          <span>{input.name}</span>
          <Input
            type={input.type}
            id={input.name}
            name={input.name}
            placeholder={`Enter your ${input.name}`}
            className={`input-${input.name}-${input.type}`}
          />
        </Label>
      ))}
      <div className="submit-wrapper">
        <SubmitButton>{isRegisterForm ? "sign up" : "login"}</SubmitButton>
      </div>
      <button
        className={cx(switchStyles, "switch-form")}
        onClick={toggleIsRegisterForm}
      >
        {isRegisterForm
          ? "sign in, you know the game"
          : "register like 100000 other devs"}
      </button>
    </StyledForm>
  )
}
export default Form
