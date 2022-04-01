import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import dentistaBanner from '../assets/dentista_banner.png';
import Header from '../components/header';
import { AccentButton } from '../styles/template/button/style';
import Span from '../styles/template/shared/style';
import theme from '../styles/theme';
import {
	MainPage, FirstSection, FirstSectionPicture, FirstSectionAside,
	MainTitle, Text, PictureParralaxIcon, PictureParralaxSolid,
} from '../styles/pages/index/style';

const LandingPage: React.FC = () => (
	<>
		<Head>
			<title>Aline Rossi</title>
			<meta name="description" content="Landing Page"></meta>
		</Head>
		<MainPage>
			<Header />
			<FirstSection>
				<FirstSectionPicture>
					<Image src={dentistaBanner} width="602" height="924" alt="dentist"/>
					<PictureParralaxSolid left={1} top={20} size={493}/>
					<PictureParralaxIcon left={74} top={28} size={136}/>
					<PictureParralaxIcon left={9} top={25} size={81}/>
				</FirstSectionPicture>
				<FirstSectionAside>
					<MainTitle>
						<Span color={theme.colors.primary.default}>Lorem</Span> Ipsum is simply dummy
						<Span color={theme.colors.primary.default}>.</Span>
					</MainTitle>
					<Text>
            is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s,
					</Text>
					<AccentButton width='340px' height='60.5px'>Marque sua consulta</AccentButton>
				</FirstSectionAside>
			</FirstSection>
		</MainPage>
	</>
);

export default LandingPage;
