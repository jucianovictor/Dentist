import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import { MainPage } from '../styles/pages/index/style';

const LandingPage: React.FC = () => (
  <>
    <Head>
      <title>Aline Rossi</title>
      <meta name="description" content="Landing Page"></meta>
    </Head>
    <MainPage>
      <Header></Header>
    </MainPage>
  </>
);

export default LandingPage;
