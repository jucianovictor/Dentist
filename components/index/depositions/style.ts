import styled from 'styled-components';
import BREAKPOINTS from '../../../styles/utils/breakpoints';
import adjustLightness from '../../../styles/utils/color-functions';

const Container = styled.section`
	display: grid;
	place-self: center;
	position: relative;
	width: 1440px;
	height: 550px;
	margin-bottom: 380px;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-template-rows: min-content min-content;
		row-gap: 80px;
		height: min-content;
		width: min-content;
		justify-content: center;
	}
`;

const SubContainer = styled.section`
	display: grid;
	width: 100%;
	height: 550px;
	grid-template-rows: 1fr 326px;
	padding: 50px 50px;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-template-rows: min-content 1fr;
		grid-template-columns: 1fr;
		text-align: center;
		height: 100%;
	}
`;

const ShadowContainer = styled.section`
	top: 26%;
	position: absolute;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	height: 285px;

	article:nth-child(n) {
		justify-self: center;
		position: relative;
	}

	article:nth-child(1) {
		position: absolute;
		left: 0;
		opacity: 0;
		background-color: #eeecfe;
		transform: translate(-204px, 0px) scale(0.1, 0.4);
	}

	article:nth-child(2) {
		grid-column: 1;
		top: 45%;
	}

	article:nth-child(3) {
		grid-column: 2;
		top: 60%;
	}

	article:nth-child(4) {
		grid-column: 3;
		top: 45%;
	}

	article:nth-child(5) {
		position: absolute;
		right: 0;
		opacity: 0;
		background-color: #eeecfe;
		transform: translate(204px, 0px) scale(0.1, 0.4);
	}

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		display: grid;
		align-self: end;
		position: initial;
		height: min-content;
		width: min-content;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr;
		align-items: end;
		row-gap: 100px;

		article:nth-child(n) {
			display: grid;
			position: initial !important;
		}

		article:nth-child(1) {
			display: none;
		}

		article:nth-child(2) {
			grid-column: 1 !important;
		}

		article:nth-child(3) {
			grid-column: 1 !important;
		}

		article:nth-child(4) {
			grid-column: 1 !important;
		}

		article:nth-child(5) {
			display: none;
		}
	}
`;

const Background = styled.div`
	grid-column: 1/3;
	grid-row: 2/3;
	width: 100%;
	height: 230px;
	background: linear-gradient(
		93.76deg,
		${({ theme }) => theme.colors.primary.default} 12.51%,
		rgba(168, 157, 255, 0.59) 115.4%
	);
	border-radius: 10px;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		display: none;
	}
`;

const ButtonContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 30px;
	grid-column: 2;
	width: fit-content;
	height: min-content;
	align-self: center;
	justify-self: end;

	button:nth-child(1) {
		svg:nth-child(1) {
			transform: rotate(180deg);
		}
	}

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		display: none;
	}
`;

const Button = styled.button`
	all: unset;
	display: grid;
	place-items: center;
	width: 58px;
	height: 58px;
	background: ${({ theme }) => adjustLightness(theme.colors.accent.light, 23)};
	box-shadow: 0px 4px 10px 0px rgb(53 49 86 / 28%);
	border-radius: 10px;
	cursor: pointer;
`;

const H2 = styled.h2`
	color: ${({ theme }) => theme.colors.primary.default};
	font-weight: 700;
	font-size: 50px;
	line-height: 60px;
`;

export {
	Container,
	SubContainer,
	H2,
	Background,
	ShadowContainer,
	ButtonContainer,
	Button,
};
