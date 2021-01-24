import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import styled from "@emotion/styled"

const DrawerWrapper = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: calc(100% - 7rem);
  bottom: 0;
  left: 0;
  z-index: 10;
`
const DrawerBox = styled.div`
  height: calc(100vh + 400px);
  padding: 2em;
  padding-bottom: 400px;
  background-color: var(--white);
  box-shadow: var(--shadowMd);
  border-radius: var(--border-radius);
  position: relative;
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: -1rem;
    right: 2rem;
    font-size: 1.5rem;
    background-color: var(--red);
    padding: 0.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: var(--shadowMd);
  }
`

const Shadow = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 5;
  cursor: pointer;
`

interface DrawerProps {
  isActive: boolean
  isNotActive: () => void
  toggle: () => void
}

export const Drawer: React.FC<DrawerProps> = ({
  children,
  isActive,
  isNotActive,
  toggle,
}) => {
  return (
    <AnimatePresence>
      {isActive && (
        <>
          <DrawerWrapper
            drag="y"
            dragConstraints={{ top: 10, bottom: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y >= 400) {
                isNotActive()
              }
            }}
          >
            <motion.div
              exit={{ opacity: 0.5, y: "110%" }}
              initial={{ opacity: 0.5, y: "110%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ damping: 25, type: "spring" }}
            >
              <DrawerBox>
                <button onClick={toggle}>&#x2715;</button>
                {children}
              </DrawerBox>
            </motion.div>
          </DrawerWrapper>
          <Shadow
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={isNotActive}
          />
        </>
      )}
    </AnimatePresence>
  )
}
