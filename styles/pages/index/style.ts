import styled from 'styled-components';

const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  padding: 0px 15px 0px 0px;
  color: ${props => props.theme.colors.secondary.default};
`;

const MainPage = styled.main`
  width: 100%;
  height: max-content;
  display: grid;
  grid-auto-rows: min-content;
  background: linear-gradient(131.08deg, rgba(54, 34, 255, 0.12) 0.39%, rgba(245, 244, 255, 0) 60.82%);
`;

const FirstSection = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(40px, 90px) 1fr;
  grid-template-rows: 100%;
  height: max-content;
  width: 100%;
  padding: 0 50px;
`;

const FirstSectionAside = styled.aside`
  grid-column: 3/4;
  max-width: 34.875em;
  align-self: center;
  display: grid;
  row-gap: 40px;
`;

const FirstSectionImage = styled.img`
  height: 924px;
  width: 602px;
  justify-self: center;
  align-self: center;
`;

const MainTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 65px;
  line-height: 80px;
  color: ${props => props.theme.colors.secondary.light};
`;

const SecondaryPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
`;

export {
  Text,
  MainPage,
  FirstSection,
  FirstSectionAside,
  FirstSectionImage,
  MainTitle,
  SecondaryPage,
};
