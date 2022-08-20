import styled, { css } from 'styled-components';
import upDownAnimation from '../../../styles/animations/up-down';
import BaseRectangleInput from '../../../styles/template/base-rectangle-input/style';

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

const SelectorsContainer = styled.div`
	width: 100%;
	height: 90px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
`;

const Selector = styled.div<{ column: number }>`
	grid-column: ${({ column }) => column};
	grid-row: 1;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 100%;
	overflow-y: auto;
`;

const Option = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	align-content: center;
	cursor: pointer;
	border: solid 5px transparent;
	border-radius: 5px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.default};
		color: ${({ theme }) => theme.colors.primary.contrast};
	}
`;

export {
	Container,
	InputLabel,
	Dropdown,
	SelectorsContainer,
	Selector,
	Option,
};
