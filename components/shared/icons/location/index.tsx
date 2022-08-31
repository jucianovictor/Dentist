import React from 'react';
import IconProps from '../../interface/icon';

const LocationIcon: React.FC<IconProps> = ({
	color = 'black',
	sizeMultiplier = 1,
	width = 24,
	height = 24,
}: IconProps): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width * sizeMultiplier}
		height={height * sizeMultiplier}
		viewBox="0 0 24 24"
	>
		<g transform="translate(0, 24) scale(0.1,-0.1)">
			<path
				fill={color}
				d="M72 197 c-12 -13 -22 -34 -22 -48 0 -28 54 -119 70 -119 17 0 70 91
				   70 120 0 33 -38 70 -71 70 -14 0 -35 -10 -47 -23z m68 -47 c0 -13 -7 -20 -20
				   -20 -13 0 -20 7 -20 20 0 13 7 20 20 20 13 0 20 -7 20 -20z"
			/>
		</g>
	</svg>
);

export default LocationIcon;
