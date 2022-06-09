import styled from 'styled-components';

const Container = styled.section`
	display: grid;
	place-self: center;
	position: relative;
	width: 1440px;
	height: 550px;
	margin-bottom: 380px;
`;

const SubContainer = styled.section`
	display: grid;
	width: 100%;
	height: 550px;
	grid-template-rows: 1fr 326px;
	padding: 50px 50px;
`;

const ShadowContainer = styled.section`
	top: 20%;
	position: absolute;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	height: 285px;
	z-index: 2;

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
`;

const Background = styled.div`
	grid-row: 2;
	width: 100%;
	height: 230px;
	background: linear-gradient(
		93.76deg,
		${({ theme }) => theme.colors.primary.default} 12.51%,
		rgba(168, 157, 255, 0.59) 115.4%
	);
	border-radius: 10px;
`;

export { Container, SubContainer, Background, ShadowContainer };
