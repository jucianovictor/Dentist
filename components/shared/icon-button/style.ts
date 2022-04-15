import styled from 'styled-components';
import ButtonBase from '../../../styles/template/button-base/style';
import { Color } from '../../../styles/theme';

const IconButtonContainer = styled.div<{
	themeColor: Color;
	width: string;
	height: string;
}>`
	${ButtonBase};
	width: ${props => props.width};
	height: ${props => props.height};
	padding: 0 5px;
	color: ${props => props.themeColor.contrast};
	background: linear-gradient(
		90deg,
		${props => props.themeColor.default} 4.2%,
		${props => props.themeColor.light} 91.6%
	);
	box-shadow: 0px 10px 50px 3px rgba(255, 6, 6, 0.25);
	display: grid;
	grid-template-columns: 60px 1fr;
	justify-items: center;
	align-items: center;
`;

const IconContainer = styled.div<{ themeColor: Color }>`
	border: solid 2px ${props => props.themeColor.contrast};
	width: 47.67px;
	height: 47.67px;
	border-radius: 50%;
	background: linear-gradient(180deg, #d2cef1 0%, rgb(245 245 245) 75%);
	color: red;
	box-shadow: 7px 0px 29px rgba(114, 8, 65, 0.56);
	display: grid;
	place-content: center;
`;

export { IconButtonContainer, IconContainer };
