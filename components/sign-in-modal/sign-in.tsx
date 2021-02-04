import Fade from "@components/animated/fade"
import { css, cx } from "@emotion/css"
import styled from "@emotion/styled"
import { Button, resetButtonStyles } from "@styles/button"
import React from "react"

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

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;

  div:first-of-type {
    background-color: red;
    grid-column: 1/3;
  }
  div:nth-of-type(2) {
    background-color: red;
    grid-column: 3/5;
  }
  div:nth-of-type(3) {
    background-color: red;
    grid-column: 3/5;
  }

  div:nth-of-type(4) {
    grid-column: span 2;
    grid-row: 2;
  }
`

export const SignIn = ({ on, toggle }: Props) => {
  return (
    <Fade
      isAnimated={on}
      className={modalStyles}
      options={{
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "-100%" },
      }}
    >
      <ModalBody>
        <button
          className={cx(buttonStyles, "close-modal-btn")}
          onClick={toggle}
        >
          <span>X</span>
        </button>
        <h3>Sign In</h3>

        <Form>
          <div className="form-group">
            <label htmlFor="username">username</label>
            <input type="text" id="username" placeholder="Username" />
          </div>

          <div className="form-group">
            <label htmlFor="email">email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="btn-wrapper">
            <Button type="submit">sign in</Button>
          </div>
        </Form>
      </ModalBody>
    </Fade>
  )
}
