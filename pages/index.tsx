import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { useTheme } from 'styled-components';
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
				<Treatments cards={cards} />
			</PrimaryContent>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const cards = [
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
			img: 'https://i.ibb.co/BqDfD26/image-4-1.png',
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
