import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import {
  ColorPrimarySpan,
  FirstSection, FirstSectionAside, FirstSectionImage, MainPage, MainTitle, Text,
} from '../styles/pages/index/style';
import dentistaBanner from '../assets/dentista_banner.png';
import { AccentButton } from '../styles/template/button/style';

const LandingPage: React.FC = () => (
  <>
    <Head>
      <title>Aline Rossi</title>
      <meta name="description" content="Landing Page"></meta>
    </Head>
    <MainPage>
      <Header />
      <FirstSection>
        <FirstSectionImage src={dentistaBanner} alt="dentist"/>
        <FirstSectionAside>
          <MainTitle>
            <ColorPrimarySpan>Lorem</ColorPrimarySpan> Ipsum is simply dummy
            <ColorPrimarySpan>.</ColorPrimarySpan>
          </MainTitle>
          <Text>
            is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry &apos s
            standard dummy text ever since the 1500s,
          </Text>
          <AccentButton width='340px' height='60.5px'>Marque sua consulta</AccentButton>
        </FirstSectionAside>
      </FirstSection>
    </MainPage>
  </>
);

export default LandingPage;
