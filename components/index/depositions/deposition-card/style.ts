import styled, { keyframes } from 'styled-components';
import { DepositionCardAnimation as DepositionCardAnimations } from '..';

const cardW = 450;

const leftNext = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(-204px, -127px) scale(0.1, 0.4);
		opacity: 0;
  }
`;

const middleNext = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(-479px, -43px);
	}
`;

const rightNext = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(-479px, 43px);
  }
`;

const rightNextAux = keyframes`
	0% {
		transform: translate(204px, 0px) scale(0.1, 0.4);
  }

	100% {
		transform: translate(-15px, 127px) scale(1);
		opacity: 1;
  }
`;

const leftPrev = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(479px, 43px);
	}
`;

const middlePrev = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(479px, -43px);
	}
`;

const rightPrev = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(204px, -127px) scale(0.1, 0.4);
		opacity: 0;
  }
`;

const leftPrevAux = keyframes`
	0% {
		transform: translate(-204px, 0px) scale(0.1, 0.4);
  }

	100% {
		transform: translate(15px, 127px) scale(1);
		opacity: 1;
  }
`;

const reloadAux = keyframes`
	0% {

		background: red;
  }

	100% {
		background: blue;
  }
`;

const chooseAnimation = (animation: DepositionCardAnimations): string => {
	let choosed;
	switch (animation) {
		case DepositionCardAnimations.LEFT_PREV:
			choosed = leftPrev;
			break;
		case DepositionCardAnimations.MIDDLE_PREV:
			choosed = middlePrev;
			break;
		case DepositionCardAnimations.RIGHT_PREV:
			choosed = rightPrev;
			break;
		case DepositionCardAnimations.LEFT_PREV_AUX:
			choosed = leftPrevAux;
			break;
		case DepositionCardAnimations.RIGHT_PREV_AUX:
			choosed = reloadAux;
			break;
		case DepositionCardAnimations.LEFT_NEXT:
			choosed = leftNext;
			break;
		case DepositionCardAnimations.MIDDLE_NEXT:
			choosed = middleNext;
			break;
		case DepositionCardAnimations.RIGHT_NEXT:
			choosed = rightNext;
			break;
		case DepositionCardAnimations.RIGHT_NEXT_AUX:
			choosed = rightNextAux;
			break;
		case DepositionCardAnimations.LEFT_NEXT_AUX:
			choosed = reloadAux;
			break;
		default:
			choosed = 'none';
			break;
	}
	return choosed;
};

const Container = styled.article<{ animation: DepositionCardAnimations }>`
	width: ${cardW}px;
	height: ${cardW / 2}px;
	background-color: #eeecfe;
	border-radius: 20px;
	padding: 5px;
	animation: ${({ animation }) => chooseAnimation(animation)} 1s ease-in-out;
`;

export { Container };
