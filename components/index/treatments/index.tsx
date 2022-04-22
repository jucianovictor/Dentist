import { DefaultTheme } from 'styled-components';
import Span from '../../../styles/template/span/span';
import THEME from '../../../styles/theme';
import Button from '../../shared/button';
import { IImage } from '../interfaces';
import {
	Card,
	CardFigure,
	CardImage,
	CardsContainer,
	CardSubTitle,
	CardTextContainer,
	CardTitle,
	Container,
	Title,
} from './style';

interface Props {
	theme: DefaultTheme;
	cards: Array<IImage & { subtitle: string }>;
}

const changeWordsColor = (text: string, theme: DefaultTheme) => {
	return text.split(' ').map((word, key) => (
		<Span
			key={key}
			color={
				theme
					? theme.colors[key % 2 ? 'secondary' : 'primary'].default
					: THEME.colors.primary.default
			}
		>
			{word}
			<br />
		</Span>
	));
};

const Treatments: React.FC<Props> = ({ theme, cards }: Props) => {
	return (
		<Container>
			<Title>Nossos Tratamentos</Title>
			<CardsContainer>
				{cards?.map((card, key) => (
					<Card key={key}>
						<CardFigure>
							{card.src && (
								<CardImage
									src={card.src}
									alt={card.title}
									layout={'fill'}
									objectFit={'fill'}
									quality={100}
								/>
							)}
						</CardFigure>
						<CardTextContainer>
							<CardTitle>{changeWordsColor(card.title, theme)}</CardTitle>
							<CardSubTitle>{card.subtitle}</CardSubTitle>
						</CardTextContainer>
					</Card>
				))}
			</CardsContainer>
			<Button
				{...{
					text: 'Marque sua consulta',
					width: '373px',
					height: '66px',
					themeColor: theme.colors.accent,
				}}
			/>
		</Container>
	);
};

export default Treatments;
