import { FC } from "react"
import GlobalStyles from "../../styles/global-styles"
import styled from "@emotion/styled"
import Header from "./header"
import Footer from "./footer"

const Main = styled.main`
  max-width: var(--max-width);
  margin: 2.125rem auto;
  flex: 1 1 auto;
  min-height: 72vh;
`

const Layout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
export default Layout
