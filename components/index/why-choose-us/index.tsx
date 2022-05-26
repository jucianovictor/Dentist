import React, { useEffect, useRef } from 'react';
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

const openVideo = (ref: React.RefObject<HTMLVideoElement>) => {
	ref.current.requestFullscreen().catch(err => console.log('error: ' + err));
};

const VideoPlayer: React.FC<Props> = ({ theme, src }) => {
	const videoRef: React.RefObject<HTMLVideoElement> = useRef();

	useEffect(() => {
		videoRef.current.onfullscreenchange = () => {
			videoRef.current.hidden = !videoRef.current.hidden;
			videoRef.current.currentTime = 0;
			videoRef.current[videoRef.current.hidden ? 'pause' : 'play']();
		};
	}, []);

	return (
		<VideoContainer>
			<Picture>
				<Play aria-label="Play" onClick={() => openVideo(videoRef)}>
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
			<Video ref={videoRef} src={src} width="300%" height={300} hidden={true} />
		</VideoContainer>
	);
};

const WhyChooseUs: React.FC<Props> = ({ theme, src }: Props) => {
	return (
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
							is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has.
						</ItemContent>
					</Item>
				))}
			</ListContainer>
			<VideoPlayer src={src} theme={theme} />
		</Container>
	);
};

export { WhyChooseUs };
