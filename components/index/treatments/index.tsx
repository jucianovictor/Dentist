import {
	Card,
	CardFigure,
	CardImage,
	CardsContainer,
	Container,
	Title,
} from './style';

export interface Card {
	img: string;
	title: string;
	subtitle: string;
}

interface Props {
	cards: Card[];
}

const Treatments: React.FC<Props> = ({ cards }: Props) => {
	return (
		<Container>
			<Title>Nossos Tratamentos</Title>
			<CardsContainer>
				{cards?.map((card, key) => (
					<Card key={key}>
						<CardFigure>
							{card.img && (
								<CardImage
									src={card.img}
									alt={card.title}
									layout={'fill'}
									objectFit={'fill'}
									quality={100}
								/>
							)}
						</CardFigure>
					</Card>
				))}
			</CardsContainer>
		</Container>
	);
};

export default Treatments;
