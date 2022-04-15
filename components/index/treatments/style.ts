import Image from 'next/image';
import styled from 'styled-components';

const Title = styled.h1`
	font-weight: 400;
	font-size: 22px;
	line-height: 75px;
	letter-spacing: 0.5em;
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
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
	row-gap: 75px;
	column-gap: 62px;
	height: min-content;
	width: min-content;
	padding: 42px 0;
`;

const Card = styled.article`
	width: 317px;
	height: 465.9px;
	display: grid;
	grid-template-rows: min-content 1fr;
	place-items: center;
	background: #ffffff;
	box-shadow: 0px 10px 100px 20px rgb(74 63 151 / 10%);
	border-radius: 40px;
	padding: 17px;
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

const CardTitle = styled.sub`
	font-weight: 700;
	font-size: 28px;
	line-height: 25px;
`;

export {
	Container,
	Title,
	CardsContainer,
	Card,
	CardFigure,
	CardImage,
	CardTitle,
};
