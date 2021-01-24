import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import styled from "@emotion/styled"
import { Button } from "@styles/button"

const DrawerWrapper = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: calc(100% - 5rem);
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
              <Button onClick={toggle}>Close Drawer</Button>
              {children}
            </DrawerBox>
          </motion.div>
        </DrawerWrapper>
      )}
    </AnimatePresence>
  )
}
