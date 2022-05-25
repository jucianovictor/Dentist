import React from 'react';
import { DefaultTheme } from 'styled-components';
import Reception from '../../../public/images/recep.png';
import Span from '../../../styles/template/span/span';
import PlayIcon from '../../shared/play-icon';
import {
	Container,
	Header,
	Item,
	ItemContent,
	ItemIcon,
	ItemTitle,
	ListContainer,
	Picture,
	Play,
	ReceptionImage,
	SubTitle,
	Title,
	Video,
	VideoContainer,
} from './style';

interface Props {
	theme: DefaultTheme;
	src: string;
}

const VideoPlayer: React.FC<{ src: string }> = ({ src }: { src: string }) => (
	<Video src={src} width="300%" height={300} hidden={true} />
);

const WhyChooseUs: React.FC<Props> = ({ theme, src }: Props) => (
	<Container>
		<Header>
			<Title>
				<Span color={theme.colors.secondary.light}>Por que </Span>
				<Span color={theme.colors.primary.default}>nos escolher?</Span>
			</Title>
			<SubTitle>
				is simply dummy text of the printing and typesetting industry. Lorem
				Ipsum has.
			</SubTitle>
		</Header>
		<ListContainer>
			{new Array(4).fill(0).map((_, key) => (
				<Item key={key}>
					<ItemIcon />
					<ItemTitle>Confidential</ItemTitle>
					<ItemContent>
						is simply dummy text of the printing and typesetting industry. Lorem
						Ipsum has.
					</ItemContent>
				</Item>
			))}
		</ListContainer>
		<VideoContainer>
			<Picture>
				<Play>
					<PlayIcon
						color={theme.colors.accent.default}
						width={89}
						height={89}
						sizeMultiplier={1.3}
					/>
				</Play>
				<ReceptionImage
					src={Reception}
					alt={'Recepção'}
					width={556.52}
					height={625.5}
					layout={'responsive'}
				/>
			</Picture>
			<VideoPlayer src={src} />
		</VideoContainer>
	</Container>
);

export { WhyChooseUs };
