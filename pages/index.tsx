import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useTheme } from 'styled-components';
import Header from '../components/header';
import IconButton from '../components/icon-button';
import WhatsappIcon from '../components/whatsapp-icon';
import dentistaBanner from '../public/images/dentista_banner.png';
import {
	FirstSection,
	FirstSectionAside,
	FirstSectionPicture,
	MainPage,
	MainTitle,
	PictureParralaxIcon,
	PictureParralaxSolid,
	Text,
} from '../styles/pages/index/style';
import Span from '../styles/template/shared/span';

const LandingPage: React.FC = () => {
	const theme = useTheme();
	return (
		<>
			<Head>
				<title>Aline Rossi</title>
				<meta name="description" content="Landing Page"></meta>
			</Head>
			<MainPage>
				<Header />
				<FirstSection>
					<FirstSectionPicture>
						<Image
							src={dentistaBanner}
							width="602"
							height="924"
							alt="dentist"
						/>
						<PictureParralaxSolid left={1} top={20} size={493} />
						<PictureParralaxIcon left={74} top={28} size={136} />
						<PictureParralaxIcon left={9} top={25} size={81} />
					</FirstSectionPicture>
					<FirstSectionAside>
						<MainTitle>
							<Span color={theme.colors.primary.default}>Lorem</Span> Ipsum is
							simply dummy
							<Span color={theme.colors.primary.default}>.</Span>
						</MainTitle>
						<Text>
							is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry&apos;s standard dummy text ever
							since the 1500s,
						</Text>
						<IconButton
							themeColor={theme.colors.accent}
							icon={{
								component: WhatsappIcon,
								props: {
									color: theme.colors.accent.default,
								},
							}}
						/>
					</FirstSectionAside>
				</FirstSection>
			</MainPage>
		</>
	);
};

export default LandingPage;
