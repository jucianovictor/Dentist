import Image from 'next/image';
import styled from 'styled-components';
import BREAKPOINTS from '../../../styles/utils/breakpoints';

const Container = styled.section`
	height: min-content;
	width: 100%;
	max-width: 1500px;
	padding: 20px 50px;
	display: grid;
	grid-template-rows: min-content 1fr;
	grid-template-columns: 1fr 726px;
	row-gap: 15px;
	place-self: center;
	place-content: center;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-template-columns: 1fr;
		place-items: center;
		row-gap: 40px;
	}
`;

const Header = styled.header`
	width: max-content;
	display: grid;
	grid-column: 1/2;
	grid-row: 1;
	row-gap: 30px;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-column: 1;
	}
`;

const Title = styled.h1`
	font-style: normal;
	font-weight: 700;
	font-size: 50px;
	line-height: 60px;
`;

const SubTitle = styled.h2`
	max-width: 554px;
	font-weight: 500;
	font-size: 18px;
	line-height: 28px;
	color: ${({ theme }) => theme.colors.secondary.dark};
`;

const ListContainer = styled.section`
	grid-row: 2;
	display: grid;
	height: 564px;
	grid-auto-rows: 1fr;
	grid-auto-flow: row;
	align-items: end;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-column: 1;
		grid-row: 3;
	}
`;

const Item = styled.article`
	display: grid;
	grid-template-columns: min-content 1fr;
	grid-template-rows: min-content 1fr;
	align-items: center;
	width: 544px;
	height: 111px;
	background-color: #f5f4ff;
	box-shadow: 0px 0px 0px 0px rgb(86 79 137 / 11%);
	border-radius: 10px;
`;

const ItemIcon = styled.div`
	grid-row: 1/3;
	background-color: rgba(112, 97, 238, 0.09);
	width: 71px;
	height: 71px;
	margin: 0 20px;
	border-radius: 10px;
`;

const ItemTitle = styled.h1`
	align-self: end;
	font-weight: 700;
	font-size: 20px;
	line-height: 60px;
	color: ${({ theme }) => theme.colors.primary.default};
`;

const ItemContent = styled.p`
	max-width: 374px;
	align-self: start;
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: ${({ theme }) => theme.colors.secondary.dark};
`;

const VideoContainer = styled.aside`
	display: grid;
	height: 100%;
	max-width: 726px;
	grid-row: 1/3;
	grid-column: 2;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
	}
`;

const Video = styled.video`
	width: 100%;
	height: 100%;
`;

const Picture = styled.picture`
	display: grid;
	position: relative;
	height: 664px;
	align-self: end;
`;

const Play = styled.button`
	place-self: center;
	position: absolute;
	background-color: #ffffffab;
	border-radius: 50%;
	width: 180px;
	height: 180px;
	border: none;
	z-index: 1;
	cursor: pointer;
`;

const ReceptionImage = styled(Image)`
	border-radius: 20px;
`;

export {
	Container,
	Header,
	Title,
	ItemTitle,
	ItemIcon,
	ItemContent,
	SubTitle,
	ListContainer,
	Item,
	VideoContainer,
	Video,
	Picture,
	Play,
	ReceptionImage,
};
