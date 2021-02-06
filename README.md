# reactive-animations

## Table of Contents

- [About](#about)
- [Tools](#tools)
- [Keys](#keys)

## About <a name = "about"></a>

Animations with React and Framer motion

<!-- Exit before enter on AnimatePrescence -->
<!-- fiinsih one animation before doing the next animation -->

## KKeys <a name="keys"></a>

With keys we can help `Framer motion` to keep track of what should be animated or not.
for example without a key prop on our `Form` component we would not be able to animate our component with a nice fade.

```tsx
export const RegisterSignInForm = ({ on, toggle }: Props) => {
  const { on: isRegisterForm, toggle: toggleIsRegisterForm } = useToggle()
  return (
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
  )
}
```

<img src="./nice.gif" />

## Tools <a name="tools"></a>
