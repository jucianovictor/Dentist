import React from 'react';
import IconProps from '../../interface/icon';

const ClockIcon: React.FC<IconProps> = ({
	color = 'black',
	sizeMultiplier = 1,
	width = 48,
	height = 48,
}: IconProps): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width * sizeMultiplier}
		height={height * sizeMultiplier}
		viewBox="0 0 48 48"
	>
		<path
			fill={color}
			d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 22.476562 11.978516 A 1.50015 1.50015 0 0 0 21 13.5 L 21 24.5 A 1.50015 1.50015 0 0 0 21.439453 25.560547 L 26.439453 30.560547 A 1.50015 1.50015 0 1 0 28.560547 28.439453 L 24 23.878906 L 24 13.5 A 1.50015 1.50015 0 0 0 22.476562 11.978516 z"
		></path>
	</svg>
);

export default ClockIcon;
