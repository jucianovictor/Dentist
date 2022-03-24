import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: max-content 1fr;
  padding: 3rem 5rem;
`;

const LogoTipo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.secondary.dark}
`;

const Navigation = styled.nav`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  height: 40px;
  width: 100%;
  grid-column: 3/4;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  column-gap: 4rem;
  align-self: center;
  align-content: start;
`;

export {
  Link,
  HeaderContainer,
  Navigation,
  LogoTipo,
};
