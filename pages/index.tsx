import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { useTheme } from 'styled-components';
import AboutMe from '../components/index/about-me';
import Main from '../components/index/main';
import { PrimaryContent } from '../components/index/style';
import Treatments, { Card } from '../components/index/treatments';
import Header from '../components/shared/header';

interface Props {
	cards: Card[];
}

const LandingPage: React.FC<Props> = ({ cards }: Props) => {
	const theme = useTheme();
	return (
		<>
			<Head>
				<title>Aline Rossi</title>
				<meta name="description" content="Landing Page"></meta>
			</Head>
			<PrimaryContent>
				<Header />
				<Main theme={theme} />
				<Treatments {...{ cards, theme }} />
				<AboutMe theme={theme} />
			</PrimaryContent>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const cards = [
		{
			img: null,
			title: 'Check-up Odontológico',
			subtitle: 'Odontograma',
		},
		{
			img: null,
			title: 'Clareamento Dentário',
			subtitle: 'Clareamento',
		},
		{
			img: null,
			title: 'Exodontias',
			subtitle: 'Subtítulo',
		},
		{
			img: null,
			title: 'Check-up Odontológico',
			subtitle: 'Subtítulo',
		},
		{
			img: null,
			title: 'Clareamento Dentário',
			subtitle: 'Subtítulo',
		},
		{
			img: null,
			title: 'Exodontias',
			subtitle: 'Subtítulo',
		},
	];

	return {
		props: { cards },
	};
};

export default LandingPage;
