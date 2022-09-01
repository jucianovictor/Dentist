import { Keyframes, keyframes } from 'styled-components';

const moveAnimation = (
	initial: number,
	increment: number,
	unit: string,
	axis?: 'X' | 'Y'
): Keyframes => keyframes`
  0% { transform: translate${axis || 'Y'}(${initial + unit}); }
  50% { transform: translate${axis || 'Y'}(${initial + increment + unit}); }
  100% { transform: translate${axis || 'Y'}(${initial + unit}); }
`;

export default moveAnimation;
