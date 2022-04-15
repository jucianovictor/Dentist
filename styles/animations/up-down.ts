import { Keyframes, keyframes } from 'styled-components';

const upDownAnimation = (
	initial: number,
	increment: number,
	unit: string
): Keyframes => keyframes`
  0% { transform: translate(0, ${initial + unit}); }
  50% { transform: translate(0, ${initial + increment + unit}); }
  100% { transform: translate(0, ${initial + unit}); }
`;

export default upDownAnimation;
