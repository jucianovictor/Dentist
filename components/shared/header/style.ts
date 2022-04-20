import styled from 'styled-components';
import BREAKPOINTS from '../../../styles/utils/breakpoints';

const HeaderContainer = styled.header`
	display: grid;
	grid-template-columns: max-content 1fr;
	padding: 3rem 5rem;

	@media (max-width: ${BREAKPOINTS.large}px) {
		grid-template-columns: max-content;
		justify-content: center;
	}
`;

const LogoTipo = styled.h1`
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	line-height: 45px;

	@media (max-width: ${BREAKPOINTS.large}px) {
		display: none;
	}
`;

const Link = styled.a`
	text-decoration: none;
	color: ${props => props.theme.colors.secondary.default};
`;

const Navigation = styled.nav`
	font-weight: 400;
	font-size: 18px;
	line-height: 27px;
	width: 100%;
	grid-column: 3/4;
	display: grid;
	grid-template-columns: repeat(4, max-content);
	column-gap: 4rem;
	align-self: center;
	align-content: start;

	@media (max-width: ${BREAKPOINTS.large}px) {
		grid-column: 1/2;
	}
`;

export { Link, HeaderContainer, Navigation, LogoTipo };
