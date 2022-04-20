import styled from 'styled-components';

const PrimaryContent = styled.div`
	width: 100%;
	height: max-content;
	display: grid;
	grid-auto-rows: min-content;
	background: linear-gradient(
		131.08deg,
		rgba(54, 34, 255, 0.12) 0.39%,
		rgba(245, 244, 255, 0) 60.82%
	);
	place-content: center;
`;

const SecondaryContent = styled.section`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-flow: column;
`;

export { PrimaryContent, SecondaryContent };
