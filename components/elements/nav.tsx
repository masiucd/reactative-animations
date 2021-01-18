import styled from "@emotion/styled"

const NavStyles = styled.nav`
  background: var(--gradient-bg1); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    var(--gradient-bg2),
    var(--gradient-bg3),
    var(--gradient-bg1)
  );
  background: linear-gradient(
    to right,
    var(--gradient-bg2),
    var(--gradient-bg3),
    var(--gradient-bg1)
  );
  box-shadow: var(--shadowLg);
  padding: 0.5rem;
`

const Nav = () => {
  return (
    <NavStyles>
      <div className="logo"></div>
      <h1>hello from nav</h1>
    </NavStyles>
  )
}

export default Nav
