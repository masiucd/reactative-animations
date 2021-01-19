import React from "react"
import styled from "@emotion/styled"

const FooterStyles = styled.footer`
  padding: 1rem 0.5rem;
  background-color: var(--textColor);
  color: var(--background);
  box-shadow: var(--shadowMd);
`

const Footer = () => {
  return (
    <FooterStyles>
      <h1>footer</h1>
    </FooterStyles>
  )
}
export default Footer
