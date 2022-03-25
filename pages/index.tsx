import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import { FirstSection, MainPage } from '../styles/pages/index/style';
import dentistaBanner from '../assets/dentista_banner.png';

const LandingPage: React.FC = () => (
  <>
    <Head>
      <title>Aline Rossi</title>
      <meta name="description" content="Landing Page"></meta>
    </Head>
    <MainPage>
      <Header />
      <FirstSection>
        <img src={dentistaBanner}></img>
      </FirstSection>
    </MainPage>
  </>
);

export default LandingPage;
