import { FC } from "react"
import GlobalStyles from "../../styles/global-styles"
import styled from "@emotion/styled"
import Header from "./header"

const Main = styled.main`
  max-width: var(--max-width);
  margin: 1.125rem auto;
`

const Layout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
    </>
  )
}
export default Layout
