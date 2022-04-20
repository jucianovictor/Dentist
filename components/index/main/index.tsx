import Image from 'next/image';
import { DefaultTheme } from 'styled-components';
import dentistaBanner from '../../../public/images/dentista_banner.png';
import Span from '../../../styles/template/span/span';
import Button from '../../shared/button';
import WhatsappIcon from '../../shared/whatsapp-icon';
import {
	Aside,
	Container,
	Picture,
	PictureParralaxIcon,
	PictureParralaxSolid,
	Title,
} from './style';

interface Props {
	theme: DefaultTheme;
}

const Main: React.FC<Props> = ({ theme }: Props) => (
	<Container>
		<Picture>
			<Image
				src={dentistaBanner}
				width="602"
				height="924"
				priority={true}
				alt="dentist"
			/>
			<PictureParralaxSolid left={1} top={20} size={493} />
			<PictureParralaxIcon left={74} top={28} size={136} />
			<PictureParralaxIcon left={9} top={25} size={81} />
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
						component: WhatsappIcon,
						props: {
							color: theme.colors.accent.default,
						},
					},
				}}
			/>
		</Aside>
	</Container>
);

export default Main;
