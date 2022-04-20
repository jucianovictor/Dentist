import React from 'react';
import { Color } from '../../../styles/theme';
import IconProps from '../icon';
import { ButtonContainer, IconContainer } from './style';

interface Props {
	text: string;
	themeColor: Color;
	icon?: {
		component: React.FC<IconProps>;
		props?: IconProps;
	};
	width?: string;
	height?: string;
}

const Button: React.FC<Props> = ({
	text,
	width = '340px',
	height = '60px',
	themeColor,
	icon,
}: Props) => {
	return (
		<ButtonContainer
			{...{
				hasIcon: !!icon,
				width,
				height,
				themeColor,
			}}
		>
			{icon && (
				<IconContainer {...{ themeColor }}>
					{icon.component && icon.props
						? icon.component({
								color: icon.props.color ?? themeColor.default,
								sizeMultiplier: icon.props.sizeMultiplier ?? 1,
								width: icon.props.width,
								height: icon.props.height,
						  })
						: icon.component({})}
				</IconContainer>
			)}
			{text}
		</ButtonContainer>
	);
};

export default Button;
