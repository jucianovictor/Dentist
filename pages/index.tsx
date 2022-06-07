import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { useTheme } from 'styled-components';
import AboutMe from '../components/index/about-me';
import ClinicStructure from '../components/index/clinic-structure';
import Depositions from '../components/index/depositions';
import { IImage } from '../components/index/interfaces';
import Main from '../components/index/main';
import { PrimaryContent, SecondaryContent } from '../components/index/style';
import Treatments from '../components/index/treatments';
import { WhyChooseUs } from '../components/index/why-choose-us';
import Header from '../components/shared/header';

interface Props {
	cards: Array<IImage & { subtitle: string }>;
	clinicStructurePictures: IImage[];
}

const LandingPage: React.FC<Props> = ({
	cards,
	clinicStructurePictures,
}: Props) => {
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
			<SecondaryContent>
				<ClinicStructure
					{...{
						pictures: clinicStructurePictures,
						theme,
					}}
				/>
				<WhyChooseUs theme={theme} src={'./video/dentist.mp4'} />
				<Depositions />
			</SecondaryContent>
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

	const clinicStructurePictures: IImage[] = [
		{
			src: 'https://i.ibb.co/sjhK7FR/istockphoto-1349328691-170667a.jpg',
			title: 'Estrutura Clínica',
		},
		{
			src: 'https://i.ibb.co/sjhK7FR/istockphoto-1349328691-170667a.jpg',
			title: 'Estrutura Clínica',
		},
		{
			src: 'https://i.ibb.co/sjhK7FR/istockphoto-1349328691-170667a.jpg',
			title: 'Estrutura Clínica',
		},
	];

	return {
		props: { cards, clinicStructurePictures },
	};
};

export default LandingPage;
