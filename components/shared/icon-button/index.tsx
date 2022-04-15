import React from 'react';
import { Color } from '../../../styles/theme';
import IconProps from '../icon';
import { IconButtonContainer, IconContainer } from './style';

interface Props {
	themeColor: Color;
	icon: {
		component: React.FC<IconProps>;
		props: IconProps;
	};
	width?: string;
	height?: string;
}

const IconButton: React.FC<Props> = ({
	width = '340px',
	height = '60px',
	themeColor,
	icon: {
		component,
		props: { color, sizeMultiplier, width: iconWidth, height: iconHeight },
	},
}: Props) => {
	return (
		<IconButtonContainer
			{...{
				width,
				height,
				themeColor,
			}}
		>
			<IconContainer {...{ themeColor }}>
				{component({
					color: color ?? themeColor.default,
					sizeMultiplier,
					width: iconWidth,
					height: iconHeight,
				})}
			</IconContainer>
			Marque sua consulta
		</IconButtonContainer>
	);
};

export default IconButton;
