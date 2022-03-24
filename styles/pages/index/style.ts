import styled from 'styled-components';

const MainPage = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-auto-rows: min-content;
  background: linear-gradient(131.08deg, rgba(54, 34, 255, 0.12) 0.39%, rgba(245, 244, 255, 0) 60.82%);
`;

const SecondaryPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
`;

export {
  MainPage,
  SecondaryPage,
};
