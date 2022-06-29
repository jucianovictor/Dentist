import Image from 'next/image';
import styled from 'styled-components';
import BREAKPOINTS from '../../../styles/utils/breakpoints';

const Title = styled.h2`
	margin-top: 100px;
	place-self: center;
	color: ${({ theme }) => theme.colors.primary.default};
	font-weight: 700;
	font-size: 50px;
	line-height: 60px;
`;

const Company = styled(Image)``;

const Container = styled.section`
	display: grid;
	height: min-content;
	column-gap: 50px;
	row-gap: 50px;
	grid-template-columns: repeat(3, 300px);
	grid-template-rows: repeat(2, 100px);
	place-self: center;
	text-align: center;
	margin: 60px 0;
	padding: 0 50px;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: ${BREAKPOINTS.large}px) {
		grid-template-columns: 1fr;
	}
`;

export { Title, Container, Company };
