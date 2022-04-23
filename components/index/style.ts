import styled from 'styled-components';

const PrimaryContent = styled.div`
	width: 100%;
	height: max-content;
	display: grid;
	grid-auto-rows: min-content;
	background: linear-gradient(
		54.93deg,
		rgba(112, 97, 238, 0.12) -3.24%,
		rgba(196, 196, 196, 0) 34.83%
	);
	place-content: center;
`;

const SecondaryContent = styled.div`
	width: 100%;
	height: max-content;
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-flow: column;
	background-color: #fff;
`;

export { PrimaryContent, SecondaryContent };
