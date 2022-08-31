import React from 'react';
import IconProps from '../../interface/icon';

const PhoneIcon: React.FC<IconProps> = ({
	color = 'black',
	sizeMultiplier = 1,
	width = 24,
	height = 24,
}: IconProps): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width * sizeMultiplier}
		height={height * sizeMultiplier}
		viewBox="0 0 50 50"
	>
		<g transform="translate(0, 50) scale(0.1,-0.1)">
			<path
				fill={color}
				d="M64 436 c-19 -19 -34 -42 -34 -52 1 -103 251 -353 353 -354 23 0 87
					 62 87 84 0 9 -25 32 -55 53 -55 36 -56 36 -89 20 l-33 -15 -61 61 -60 62 16
					 32 c15 32 15 33 -21 88 -21 30 -44 55 -53 55 -9 0 -31 -15 -50 -34z"
			/>
		</g>
	</svg>
);

export default PhoneIcon;
