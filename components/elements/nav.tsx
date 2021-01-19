import styled from "@emotion/styled"

const NavStyles = styled.nav`
  background-color: var(--dark2);
  color: var(--background);
  box-shadow: var(--shadowLg);
  padding: 0.5rem;
`

const Nav = () => {
  return (
    <NavStyles>
      <div className="logo"></div>
    </NavStyles>
  )
}

export default Nav
