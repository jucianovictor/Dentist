import styled, { css, DefaultTheme } from 'styled-components';
import upDownAnimation from '../../../styles/animations/up-down';
import BaseRectangleInput from '../../../styles/template/base-rectangle-input/style';
import { adjustLightness } from '../../../styles/utils/color-functions';

export type DateColorModifier = 'today' | 'selected' | 'default';

const getColor = (modifier: DateColorModifier, theme: DefaultTheme) => {
	switch (modifier) {
		case 'today':
			return css`
				color: ${theme.colors.primary.default};
			`;
		case 'selected':
			return css`
				background-color: ${adjustLightness(theme.colors.primary.light, 30)};
				color: ${theme.colors.primary.contrast};
			`;
		default:
			return null;
	}
};

const Container = styled.div`
	width: 100%;
	height: min-content;
	position: relative;
	user-select: none;
`;

const InputLabel = styled(BaseRectangleInput)`
	user-select: none;
	cursor: pointer;
`;

const Dropdown = styled.div<{ toggle: boolean }>`
	width: 100%;
	height: min-content;
	display: grid;
	grid-template-rows: min-content 1fr;
	position: absolute;
	visibility: ${({ toggle }) => (toggle ? 'visible' : 'hidden')};
	margin-top: 5px;
	border-radius: 10px;
	background: #e9e6ff;
	color: #757575;
	box-shadow: inset 0px -4px 4px rgba(255, 255, 255, 0.58),
		inset 0px 4px 4px rgba(0, 0, 0, 0.12);
	padding: 5px;
	animation: ${({ toggle }) =>
		toggle
			? css`
					${upDownAnimation(0, -10, 'px')} 0.5s ease-in-out;
			  `
			: 'none'};
`;

const MonthSwitcher = styled.div`
	width: 100%;
	height: 60px;
	display: grid;
	grid-template-columns: 15% 1fr 15%;
	place-items: center;
`;

const MonthLabel = styled.span`
	width: 100%;
	height: min-content;
	color: ${({ theme }) => theme.colors.primary.light};
	font-weight: 300;
	font-size: 17px;
	line-height: 28px;
`;

const BtnMonthSwitcher = styled.div`
	all: unset;
	width: 35px;
	height: min-content;
	font-size: 2rem;
	border-radius: 5px;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.accent.light};

	&:hover {
		background-color: ${({ theme }) => theme.colors.accent.light};
		color: ${({ theme }) => theme.colors.accent.contrast};
	}
`;

const Calendar = styled.div`
	display: grid;
	grid-row: 2;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: repeat(5, min-content);
`;

const DayNumber = styled.span<{ dateStyle: DateColorModifier }>`
	padding: 5px;
	border-radius: 5px;
	cursor: pointer;
	${({ dateStyle: colorModifier, theme }) => getColor(colorModifier, theme)};

	&:hover {
		background-color: ${({ theme }) => theme.colors.accent.light};
		color: ${({ theme }) => theme.colors.accent.contrast};
	}
`;

export {
	Container,
	InputLabel,
	Dropdown,
	MonthSwitcher,
	MonthLabel,
	BtnMonthSwitcher,
	Calendar,
	DayNumber,
};
