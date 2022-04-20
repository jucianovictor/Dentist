import Image from 'next/image';
import { DefaultTheme } from 'styled-components';
import dentistaLosango from '../../../public/images/aline-losango.png';
import {
	Article,
	ArticleSpanTitle,
	Aside,
	Container,
	SubTitle,
	Title,
} from './style';

interface Props {
	theme: DefaultTheme;
}

const AboutMe: React.FC<Props> = ({ theme }: Props) => (
	<Container>
		<Article>
			<Title>Sobre mim</Title>
			<ArticleSpanTitle color={theme.colors.secondary.light}>
				Quem é a
				<br />
			</ArticleSpanTitle>
			<ArticleSpanTitle color={theme.colors.primary.default}>
				Dra. Aline Rossi?
			</ArticleSpanTitle>
			<SubTitle>Dentista</SubTitle>
			is simply dummy text of the printing and typesetting industry. Lorem Ipsum
			has been the standard dummy text ever since the 1500s.Lorem Ipsum has been
			the standard dummy text ever since the 1500s.
		</Article>
		<Aside>
			<Image
				src={dentistaLosango}
				width={829}
				height={829}
				layout={'responsive'}
				sizes={'829px'}
				alt="dentista-aline"
			/>
		</Aside>
	</Container>
);

export default AboutMe;
