import styled, { css } from 'styled-components';
import BREAKPOINTS from '../../../styles/utils/breakpoints';

const FooterContainer = styled.footer`
	width: 100%;
	height: 484px;
	display: grid;
	background: linear-gradient(
		45.02deg,
		#1a00ff -234.24%,
		rgba(26, 0, 255, 0) 54.85%
	);
`;

const FooterContent = styled.section`
	width: 100%;
	min-width: 400px;
	max-width: 1470px;
	height: min-content;
	display: grid;
	grid-template-columns: repeat(4, max-content);
	grid-template-rows: repeat(2, min-content);
	justify-self: center;
	place-content: space-between;
	margin-top: 90px;
	padding: 0 30px;

	@media (max-width: ${BREAKPOINTS.large}px) {
		grid-template-columns: max-content;
		grid-template-rows: 1fr;
		justify-content: center;

		& article:nth-child(n + 2) {
			display: none;
		}
	}
`;

const LogoTipo = styled.h1`
	min-width: max-content;
	font-style: normal;
	font-weight: 700;
	font-size: 50px;
	line-height: 75px;
`;

const CategoryContainer = styled.article`
	display: grid;
	grid-template-columns: minmax(min-content, max-content);
	grid-template-rows: 75px min-content;
	row-gap: 28px;
`;

const CategoryTitle = styled.h1`
	min-width: max-content;
	color: ${({ theme }) => theme.colors.secondary.dark};
	font-weight: 700;
	font-size: 24px;
	line-height: 36px;
	align-self: center;
`;

const Links = styled.div<{ onlyIcons?: boolean }>`
	display: grid;
	${({ onlyIcons }) =>
		onlyIcons &&
		css`
			grid-template-columns: repeat(3, max-content);
		`};
	grid-auto-rows: min-content;
	column-gap: 20px;
	row-gap: 17px;
`;

const Link = styled.a<{ withIcons?: boolean }>`
	display: grid;
	${({ withIcons }) =>
		withIcons &&
		css`
			column-gap: 8px;
			grid-template-columns: min-content 326px;
		`};
	text-decoration: none;
	color: ${({ theme }) => theme.colors.secondary.light};
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 27px;
	cursor: pointer;
`;

export {
	FooterContainer,
	FooterContent,
	LogoTipo,
	Links,
	CategoryContainer,
	CategoryTitle,
	Link,
};
