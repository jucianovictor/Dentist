import Image from 'next/image';
import { DefaultTheme } from 'styled-components';
import dentistaBanner from '../../../public/images/dentista_banner.png';
import smile from '../../../public/images/smile.png';
import tooth from '../../../public/images/tooth.png';
import Span from '../../../styles/template/span/span';
import Button from '../../shared/button';
import {
	Aside,
	Container,
	Picture,
	PictureParralaxCapsulle,
	PictureParralaxIcon,
	PictureParralaxSolid,
	Title,
} from './style';

interface Props {
	theme: DefaultTheme;
}

const Main: React.FC<Props> = ({ theme }: Props) => (
	<Container id="home">
		<Picture>
			<Image
				src={dentistaBanner}
				width={602}
				height={924}
				layout={'fixed'}
				placeholder="empty"
				priority={true}
				alt="dentist"
			/>
			<PictureParralaxSolid left={1} top={20} size={493} />
			<PictureParralaxIcon left={74} top={28} size={136}>
				<Image src={smile} width={101} height={101} layout="fixed" alt="toot" />
			</PictureParralaxIcon>
			<PictureParralaxIcon left={9} top={25} size={81}>
				<Image src={tooth} width={44} height={44} layout="fixed" alt="smile" />
			</PictureParralaxIcon>
			<PictureParralaxCapsulle left={-16} top={69} width={340} height={110}>
				<Span color={theme.colors.primary.light}>+120</Span>
				pacientes atendidos
				<Span color={theme.colors.primary.light}>90%</Span>
				de aprovação
			</PictureParralaxCapsulle>
		</Picture>
		<Aside>
			<Title>
				<Span color={theme.colors.primary.default}>O melhor</Span> para os seus
				dentes
				<Span color={theme.colors.primary.default}>!</Span>
			</Title>
			Uma das 20 clínicas odontológicas mais recomendadas de Fortaleza, com
			especialização em prótese dentária e recuperação do seu sorriso.
			<Button
				{...{
					text: 'Marque sua consulta',
					themeColor: theme.colors.accent,
					icon: {
						icon: 'whatsapp',
						color: theme.colors.accent.default,
					},
				}}
			/>
		</Aside>
	</Container>
);

export default Main;
