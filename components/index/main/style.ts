import styled from 'styled-components';
import upDownAnimation from '../../../styles/animations/up-down';
import BREAKPOINTS from '../../../styles/utils/breakpoints';

const Container = styled.main`
	display: grid;
	grid-template-columns: 1fr minmax(40px, 90px) 1fr;
	grid-template-rows: 100%;
	height: max-content;
	width: 100%;
	min-width: max-content;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 28px;
	color: ${props => props.theme.colors.secondary.default};

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, max-content) 50px;
	}
`;

const Aside = styled.aside`
	grid-column: 3/4;
	max-width: 34.875em;
	align-self: center;
	display: grid;
	row-gap: 40px;
	padding: 0 50px;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		grid-column: 1;
		justify-self: center;
		align-self: start;
		justify-items: center;

		& p,
		h1 {
			text-align: center;
		}
	}
`;

const Picture = styled.picture`
	justify-self: end;
	align-self: center;
	position: relative;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		justify-self: center;
	}
`;

const PictureParralax = styled.div<{
	left: number;
	top: number;
	size: number;
}>`
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	left: ${props => props.left}%;
	top: ${props => props.top}%;
	box-shadow: 20px 50px 100px rgba(112, 97, 238, 0.53);
	border-radius: 20px;
	position: absolute;
`;

const PictureParralaxSolid = styled(PictureParralax)`
	background: linear-gradient(
		134.26deg,
		${props => props.theme.colors.primary.default} 3.81%,
		#aa94ff 103.06%
	);
	transform: rotate(45deg);
	z-index: -1;
`;

const PictureParralaxContent = styled(PictureParralax)`
	background: linear-gradient(
		135deg,
		rgba(220, 217, 255, 0.41) 0%,
		#f5f4ff 100%
	);
`;

const PictureParralaxIcon = styled(PictureParralaxContent)`
	animation: ${upDownAnimation(0, 100, '%')} 4s infinite ease-in-out;
`;

const Title = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 65px;
	line-height: 80px;
	color: ${props => props.theme.colors.secondary.light};
`;

export {
	Container,
	Aside,
	Picture,
	PictureParralaxIcon,
	PictureParralaxSolid,
	Title,
};
