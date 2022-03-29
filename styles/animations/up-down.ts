import { Keyframes, keyframes } from 'styled-components';

const upDownAnimation = (initial: number, increment: number, unit: string): Keyframes => keyframes`
  0% { top: ${initial + unit}; }
  50% { top: ${(initial + increment) + unit}; }
  100% { top: ${initial + unit}; }
`;

export default upDownAnimation;
