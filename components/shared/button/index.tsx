import React from 'react';
import { Color } from '../../../styles/theme';
import Icon, { GlobalIconProps } from '../icon';
import { ButtonContainer, IconContainer } from './style';

interface Props {
	text: string;
	themeColor: Color;
	icon?: GlobalIconProps;
	width?: string;
	height?: string;
	borderRadius?: string;
}

const Button: React.FC<Props> = ({
	text,
	width = '340px',
	height = '60px',
	borderRadius = '5rem',
	themeColor,
	icon,
}: Props) => {
	return (
		<ButtonContainer
			{...{
				borderRadius,
				hasIcon: !!icon,
				width,
				height,
				themeColor,
			}}
		>
			{icon && (
				<IconContainer {...{ themeColor }}>{<Icon {...icon} />}</IconContainer>
			)}
			{text}
		</ButtonContainer>
	);
};

export default Button;
