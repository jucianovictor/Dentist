import Image from 'next/image';
import styled from 'styled-components';

const cardWidth = 317;
const cardContainerColumnGap = 62;

const Title = styled.h1`
	font-weight: 400;
	font-size: 22px;
	line-height: 75px;
	letter-spacing: 0.5em;
	transform: translate(0.5em, 0px);
	color: ${props => props.theme.colors.primary.default};
`;

const Container = styled.section`
	width: 100%;
	height: min-content;
	display: grid;
	place-items: center;
	grid-template-rows: min-content 1fr;
`;

const CardsContainer = styled.section`
	display: grid;
	width: 100%;
	min-width: ${cardWidth}px;
	max-width: ${cardWidth * 3 + 2 * cardContainerColumnGap}px;
	grid-auto-rows: min-content;
	grid-template-columns: repeat(auto-fit, ${cardWidth}px);
	justify-items: center;
	justify-content: center;
	row-gap: 75px;
	column-gap: ${cardContainerColumnGap}px;
	height: min-content;
	padding: 42px 0;
`;

const Card = styled.article`
	width: ${cardWidth}px;
	height: 465.9px;
	display: grid;
	grid-template-rows: min-content 1fr;
	place-items: center;
	background: #ffffff;
	box-shadow: 0px 10px 100px 20px rgb(74 63 151 / 10%);
	border-radius: 40px;
	padding: 17px;
	position: relative;
`;

const CardImage = styled(Image)`
	border-radius: 40px;
`;

const CardFigure = styled.figure`
	width: 280.5px;
	height: 280.5px;
	box-shadow: 0px 20px 100px rgba(74, 63, 151, 0.19);
	filter: drop-shadow(0px 20px 100px rgba(43, 33, 128, 0.4));
	border-radius: 40px;
	position: relative;
`;

const CardTextContainer = styled.div`
	display: grid;
	row-gap: 10px;
	justify-self: start;
	bottom: 45px;
	left: 50px;
	position: absolute;
`;

const CardTitle = styled.h1`
	font-weight: 700;
	font-size: 28px;
	line-height: 25px;
`;

const CardSubTitle = styled.h2`
	font-weight: 500;
	font-size: 15px;
	line-height: 28px;
	color: ${props => props.theme.colors.secondary.dark};
`;

export {
	Container,
	Title,
	CardsContainer,
	Card,
	CardFigure,
	CardImage,
	CardTextContainer,
	CardTitle,
	CardSubTitle,
};
