import styled from 'styled-components';
import BREAKPOINTS from '../../../styles/utils/breakpoints';

const Container = styled.section`
	display: grid;
	column-gap: 160px;
	row-gap: 50px;
	height: min-content;
	max-width: 1420px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(3, min-content);
	place-self: center;
	margin: 30px 0;
	padding: 0 50px;

	article:nth-child(n) {
		grid-column: 1;
	}

	article:nth-child(1) {
		grid-row: 1;
	}

	article:nth-child(2) {
		grid-row: 2;
	}

	article:nth-child(3) {
		grid-row: 3;
	}

	article:nth-child(4) {
		grid-column: 2;
		grid-row: 1;
	}

	article:nth-child(5) {
		grid-column: 2;
		grid-row: 3;
	}

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(5, min-content);
		row-gap: 80px;
		height: min-content;
		width: min-content;
		justify-items: center;

		article:nth-child(n) {
			grid-column: 1;
		}

		article:nth-child(1) {
			grid-row: 2;
		}

		article:nth-child(2) {
			grid-row: 3;
		}

		article:nth-child(3) {
			grid-row: 4;
		}
	}
`;

const ScheduleContainer = styled.article`
	display: grid;
	row-gap: 30px;
	height: min-content;
	width: max-content;
`;

const Label = styled.h2`
	color: ${({ theme }) => theme.colors.primary.light};
	font-weight: 700;
	font-size: 30px;
	line-height: 28px;
`;

const Timetable = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
	background: #f5f4ff;
	color: ${({ theme }) => theme.colors.secondary.light};
	height: 76px;
	border: 1px solid rgba(112, 97, 238, 0.13);
	border-radius: 10px;
	width: 467px;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 28px;
`;

const InfoCardsContainer = styled.section`
	display: grid;
	grid-row: 1/5;
	height: min-content;
	place-self: start;
	row-gap: 70px;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-column: 1;
		grid-row: 1;

		article:nth-child(1) {
			grid-row: 3;
		}

		article:nth-child(2) {
			grid-row: 2;
		}
	}
`;

const InfoCardContainer = styled.article<{ bgColor?: string; color?: string }>`
	justify-content: start;
	align-items: center;
	display: grid;
	height: 220px;
	min-width: 680px;
	width: max-content;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 35px min-content 45px min-content;
	font-weight: 700;
	font-size: 50px;
	line-height: 60px;
	background-color: ${({ bgColor }) => bgColor || 'transparent'};
	border-radius: 20px;
`;

const IconContainer = styled.div<{ bgColor?: string; placeSelf?: string }>`
	place-self: ${({ placeSelf }) => placeSelf || 'end'};
	width: 72px;
	height: 72px;
	margin: 10px 0;
	background-color: ${({ bgColor }) => bgColor || 'rgba(112, 97, 238, 0.21)'};
	border-radius: 10px;
	grid-column: 2;
	grid-row: 1;
`;

const H2 = styled.h2<{ color: string }>`
	align-self: center;
	grid-column: 4;
	color: ${({ color }) => color};
	font-weight: 700;
	font-size: 50px;
	line-height: 70px;
`;

const InfoCardContent = styled.p<{ color: string; alignSelf?: string }>`
	width: 465px;
	grid-row: 2;
	grid-column: 4;
	color: ${({ color }) => color};
	font-weight: 500;
	font-size: 18px;
	line-height: 28px;
	align-self: ${({ alignSelf }) => alignSelf || 'start'};
`;

export {
	Container,
	ScheduleContainer,
	Label,
	Timetable,
	InfoCardsContainer,
	InfoCardContainer,
	InfoCardContent,
	IconContainer,
	H2,
};
