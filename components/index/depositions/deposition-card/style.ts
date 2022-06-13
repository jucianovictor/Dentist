import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import { DepositionCardAnimation as DepositionCardAnimations } from '..';
import BREAKPOINTS from '../../../../styles/utils/breakpoints';

const cardW = 450;

const leftNext = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(-204px, -128.1px) scale(0.1, 0.4);
		opacity: 0;
  }
`;

const middleNext = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(-473.4px, -42.8px);
	}
`;

const rightNext = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(-473.4px, 42.8px);
  }
`;

const rightNextAux = keyframes`
	0% {
		transform: translate(204px, 0px) scale(0.1, 0.4);
  }

	100% {
		transform: translate(-12px, 128.1px) scale(1);
		opacity: 1;
  }
`;

const leftPrev = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(473.4px, 42.8px);
	}
`;

const middlePrev = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(473.4px, -42.8px);
	}
`;

const rightPrev = keyframes`
	0% {
		transform: translate(0, 0);
  }

	100% {
		transform: translate(204px, -128.1px) scale(0.1, 0.4);
		opacity: 0;
  }
`;

const leftPrevAux = keyframes`
	0% {
		transform: translate(-204px, 0px) scale(0.1, 0.4);
  }

	100% {
		transform: translate(12px, 128.1px) scale(1);
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
	display: grid;
	grid-template-rows: calc(131px / 2) min-content min-content 10px min-content;
	width: ${cardW}px;
	height: ${cardW / 2}px;
	background-color: rgb(245, 244, 255);
	border-radius: 20px;
	padding: 10px 40px;
	animation: ${({ animation }) => chooseAnimation(animation)} 1s ease-in-out;

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		text-align: center;
	}
`;

const ProfileCircle = styled.div`
	width: 131px;
	height: 131px;
	background-color: #c4c4c4;
	transform: translate(10px, -70px);
	border-radius: 50%;
	border: solid 10px rgb(245, 244, 255);

	@media (max-width: ${BREAKPOINTS.extraLarge}px) {
		transform: translate(0, -40px);
		place-self: center;
	}
`;

const ProfileImg = styled(Image)`
	border-radius: 50%;
	display: grid;
	place-self: center;
`;

const ProfileName = styled.h3`
	all: unset;
	font-weight: 700;
	font-size: 25px;
	line-height: 28px;
	color: ${({ theme }) => theme.colors.primary.default};
`;

const ProfileProfession = styled.h4`
	all: unset;
	font-weight: 600;
	font-size: 13px;
	line-height: 28px;
	color: ${({ theme }) => theme.colors.secondary.dark};
`;

const ProfileDeposition = styled.p`
	all: unset;
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	color: ${({ theme }) => theme.colors.secondary.dark};
`;

export {
	Container,
	ProfileCircle,
	ProfileImg,
	ProfileName,
	ProfileProfession,
	ProfileDeposition,
};
