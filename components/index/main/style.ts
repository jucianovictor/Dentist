import styled, { css } from 'styled-components';
import moveAnimation from '../../../styles/animations/move';
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
	size?: number;
}>`
	${({ size }) =>
		size &&
		css`
			width: ${size}px;
			height: ${size}px;
		`};
	left: ${({ left }) => left}%;
	top: ${({ top }) => top}%;
	border-radius: 20px;
	position: absolute;
`;

const PictureParralaxContent = styled(PictureParralax)`
	display: grid;
	place-items: center;
	background: linear-gradient(
		135deg,
		rgba(220, 217, 255, 0.41) 0%,
		#f5f4ff 100%
	);
	box-shadow: 20px 50px 100px rgba(112, 97, 238, 0.53);
`;

const PictureParralaxCapsulle = styled(PictureParralax)<{
	width?: number;
	height?: number;
}>`
	${({ width }) => `width: ${width}px`};
	${({ height }) => `height: ${height}px`};
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, max-content);
	place-items: center;
	font-weight: 500;
	font-size: 11px;
	line-height: 10px;
	align-content: center;
	background: linear-gradient(
		135deg,
		rgba(220, 217, 255, 0.41) 0%,
		#f5f4ff 100%
	);
	box-shadow: 20px 50px 100px rgba(112, 97, 238, 0.32);
	animation: ${moveAnimation(0, 20, '%', 'Y')} 4s infinite ease-in-out;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		width: 1px;
		height: 100%;
		background: rgba(78, 76, 92, 0.19);
	}

	& span:nth-child(n) {
		display: grid;
		grid-row: 1;
		grid-template-columns: 100%;
		font-weight: 700;
		font-size: 34px;
		line-height: 60px;
	}

	& span:nth-child(1) {
		grid-column: 1;
	}

	& span:nth-child(2) {
		grid-column: 2;
	}
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

const PictureParralaxIcon = styled(PictureParralaxContent)`
	animation: ${moveAnimation(0, 20, '%')} 4s infinite ease-in-out;
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
	PictureParralax,
	PictureParralaxIcon,
	PictureParralaxSolid,
	PictureParralaxCapsulle,
	Title,
};
