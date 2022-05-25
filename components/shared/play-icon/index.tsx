import React from 'react';
import IconProps from '../icon';

const PlayIcon: React.FC<IconProps> = ({
	color = 'red',
	sizeMultiplier = 1,
	width = 24,
	height = 24,
}: IconProps): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width * sizeMultiplier}
		height={height * sizeMultiplier}
		viewBox="0 0 500 500"
	>
		<path
			d="M 85.45 34.229 Q 120.013 -28.436 154.576 34.229 L 223.703 159.558 Q 258.266 222.223 189.139 222.223 L 50.887 222.223 Q -18.24 222.223 16.323 159.558 Z"
			fill={color}
			transform="matrix(0, 1, -1, 0, 384.858704, 130.482971)"
		/>
	</svg>
);

export default PlayIcon;
