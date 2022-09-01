import React from 'react';
import IconProps from '../../interface/icon';

const LocationIcon: React.FC<IconProps> = (
	iconProps: IconProps
): JSX.Element => {
	switch (iconProps.style) {
		case 'regular':
			return regular(iconProps);
		case 'solid':
			return solid(iconProps);
		default:
			return regular(iconProps);
	}
};

const solid = ({
	color = 'black',
	sizeMultiplier = 1,
	width = 24,
	height = 24,
}: IconProps) => (
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

const regular = ({
	color = 'black',
	sizeMultiplier = 1,
	width = 50,
	height = 50,
}: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width * sizeMultiplier}
		height={height * sizeMultiplier}
		viewBox="0 0 50 50"
		preserveAspectRatio="xMidYMid meet"
	>
		<g transform="translate(0, 50) scale(0.1, -0.1)" fill={color} stroke="none">
			<path
				d="M185 476 c-69 -31 -104 -103 -91 -189 11 -70 127 -277 156 -277 16 0
	118 165 140 227 36 100 19 173 -52 226 -33 25 -113 32 -153 13z m133 -26 c99
	-61 92 -180 -21 -347 -23 -35 -45 -63 -48 -63 -4 0 -25 28 -47 62 -86 132
	-111 235 -73 296 43 68 125 91 189 52z"
			/>
			<path
				d="M202 367 c-28 -30 -28 -68 1 -95 30 -28 68 -28 95 1 28 30 28 68 -1
95 -30 28 -68 28 -95 -1z m82 -13 c31 -30 9 -84 -34 -84 -24 0 -50 26 -50 50
0 24 26 50 50 50 10 0 26 -7 34 -16z"
			/>
		</g>
	</svg>
);

export default LocationIcon;
