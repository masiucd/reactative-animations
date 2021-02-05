import React from "react"
import Fade from "@components/animated/fade"
import { css, cx } from "@emotion/css"
import styled from "@emotion/styled"
import { resetButtonStyles } from "@styles/button"
import { FormInput } from "@utils/types"
import Form from "@components/elements/form"
import { useToggle } from "@hooks/toggle"

interface Props {
  on: boolean
  toggle: () => void
}

const modalStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--transparentDark4);
  display: grid;
  place-content: center;
`

const ModalBody = styled.div`
  background-color: var(--white);
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
  border-radius: var(--border-radius);
  padding: 1rem;
`

const buttonStyles = css`
  ${resetButtonStyles}
  width: 3rem;
  height: 3rem;
  font-size: 1.2rem;
  border-radius: 50%;
  position: absolute;
  top: -1rem;
  right: -1rem;
  background-color: var(--green);
  &:hover {
    background-color: var(--red);
  }
`

// TODO: handle sign in and sign up form with special animations

const signInFormData: FormInput[] = [
  {
    id: "email-input",
    type: "email",
    name: "email",
  },
  {
    id: "password-input",
    type: "text",
    name: "username",
  },
]
const registerFormData: FormInput[] = [
  {
    id: "username-input",
    type: "text",
    name: "username",
  },
  {
    id: "email-input",
    type: "email",
    name: "email",
  },
  {
    id: "password-input",
    type: "text",
    name: "username",
  },
]

const signInFormStyles = css`
  width: 45rem;
  height: 19rem;
`

export const RegisterSignInForm = ({ on, toggle }: Props) => {
  const { on: isRegisterForm, toggle: toggleIsRegisterForm } = useToggle()
  return (
    <Fade
      isAnimated={on}
      className={modalStyles}
      options={{
        initial: { y: 100 },
        animate: { y: 0 },
        exit: { y: 100 },
        transition: { delay: 0.3 },
      }}
    >
      <ModalBody>
        <button
          className={cx(buttonStyles, "close-modal-btn")}
          onClick={toggle}
        >
          <span>X</span>
        </button>

        <h3>{isRegisterForm ? "sign up" : "sign in"}</h3>

        {isRegisterForm ? (
          <Form
            inputs={registerFormData}
            isRegisterForm={isRegisterForm}
            toggleIsRegisterForm={toggleIsRegisterForm}
          />
        ) : (
          <Form
            inputs={signInFormData}
            isRegisterForm={isRegisterForm}
            className={signInFormStyles}
            toggleIsRegisterForm={toggleIsRegisterForm}
          />
        )}
      </ModalBody>
    </Fade>
  )
}
