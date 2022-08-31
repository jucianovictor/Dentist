import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { useTheme } from 'styled-components';
import AboutMe from '../components/index/about-me';
import ClinicStructure from '../components/index/clinic-structure';
import Depositions from '../components/index/depositions';
import CompanyHealth from '../components/index/health-insurance';
import Main from '../components/index/main';
import MedicalApointment from '../components/index/medical-appointment';
import Schedules from '../components/index/schedules';
import { PrimaryContent, SecondaryContent } from '../components/index/style';
import Treatments from '../components/index/treatments';
import { WhyChooseUs } from '../components/index/why-choose-us';
import Header from '../components/shared/header';
import { IImage } from '../components/shared/interface/image';

interface Props {
	cards: Array<IImage & { subtitle: string }>;
	clinicStructurePictures: IImage[];
	companyImages: IImage[];
}

const LandingPage: React.FC<Props> = ({
	cards,
	clinicStructurePictures,
	companyImages,
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
				<Depositions theme={theme} />
				<Schedules theme={theme} />
				<CompanyHealth companyImages={companyImages} />
				<MedicalApointment theme={theme} />
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

	const companyImages: IImage[] = [
		{
			src: '/images/convenio-1.png',
			title: 'Convênio 1',
		},
		{
			src: '/images/convenio-2.png',
			title: 'Convênio 2',
		},
		{
			src: '/images/convenio-3.png',
			title: 'Convênio 3',
		},
		{
			src: '/images/convenio-4.png',
			title: 'Convênio 4',
		},
		{
			src: '/images/convenio-5.png',
			title: 'Convênio 5',
		},
		{
			src: '/images/convenio-6.png',
			title: 'Convênio 6',
		},
	];

	return {
		props: { cards, clinicStructurePictures, companyImages },
	};
};

export default LandingPage;
