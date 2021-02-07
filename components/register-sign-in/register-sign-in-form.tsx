import React from "react"
import Fade from "@components/animated/fade"
import { css, cx } from "@emotion/css"
import styled from "@emotion/styled"
import { resetButtonStyles } from "@styles/button"
import Form from "@components/elements/form"
import { useToggle } from "@hooks/toggle"
import { above } from "@styles/media-query"
import { registerFormData, signInFormData } from "@utils/initial-data"
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion"

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

const ModalBody = styled(motion.div)`
  background-color: var(--white);
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
  border-radius: var(--border-radius);
  padding: 1rem;
  .title {
    color: var(--textColor);
    padding-left: 0.5rem;
    border-bottom: 2px solid var(--green);
    display: inline-block;
    font-size: 3rem;
  }
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

const signInFormStyles = css`
  width: 15rem;
  @media ${above.mobileL} {
    width: 25rem;
  }
  @media ${above.tablet} {
    width: 31em;
  }
  @media ${above.tabletL} {
    width: 40rem;
    height: 19rem;
  }
`
const registerFormStyles = css`
  grid-gap: 1rem;
  padding-bottom: 3rem;
  display: flex;
  flex-flow: column wrap;

  @media ${above.mobileL} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    label[for="username"] {
      grid-column: 1/3;
    }
    label[for="email"] {
      grid-column: 3/6;
    }
    label[for="password"] {
      grid-column: 1/3;
    }
    .submit-wrapper {
      grid-column: 3/6;
      padding: 0;
      align-self: center;
      height: 3rem;
    }
  }
`

export const RegisterSignInForm = ({ on, toggle }: Props) => {
  const { on: isRegisterForm, toggle: toggleIsRegisterForm } = useToggle()
  return (
    <AnimateSharedLayout>
      <Fade
        isAnimated={on}
        className={modalStyles}
        exitBeforeEnter
        options={{
          initial: { y: 100 },
          animate: { y: 0 },
          exit: { y: 100 },
        }}
      >
        <ModalBody
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layout
        >
          <button
            className={cx(buttonStyles, "close-modal-btn")}
            onClick={toggle}
          >
            <span>X</span>
          </button>

          <h3 className="title">{isRegisterForm ? "sign up" : "sign in"}</h3>
          <AnimatePresence exitBeforeEnter>
            {isRegisterForm ? (
              <Form
                key="sign"
                inputs={registerFormData}
                isRegisterForm={isRegisterForm}
                toggleIsRegisterForm={toggleIsRegisterForm}
                className={registerFormStyles}
              />
            ) : (
              <Form
                key="signup"
                inputs={signInFormData}
                isRegisterForm={isRegisterForm}
                className={signInFormStyles}
                toggleIsRegisterForm={toggleIsRegisterForm}
              />
            )}
          </AnimatePresence>
        </ModalBody>
      </Fade>
    </AnimateSharedLayout>
  )
}
