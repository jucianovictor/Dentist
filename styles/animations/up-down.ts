import { Keyframes, keyframes } from 'styled-components';

const upDownAnimation = (
	initial: number,
	increment: number,
	unit: string
): Keyframes => keyframes`
  0% { transform: translateY(${initial + unit}); }
  50% { transform: translateY(${initial + increment + unit}); }
  100% { transform: translateY(${initial + unit}); }
`;

export default upDownAnimation;
