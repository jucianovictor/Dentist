import { Dispatch, SetStateAction, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import {
	DCLinkedList,
	DCNode,
} from '../../../model/utils/doubly-cyclic-linked-list';
import Indirection from '../../../model/utils/indirection';
import Icon from '../../shared/icon';
import DepositionCard, { Deposition } from './deposition-card';
import {
	Background,
	Button,
	ButtonContainer,
	Container,
	H2,
	ShadowContainer,
	SubContainer,
} from './style';

interface Props {
	theme: DefaultTheme;
}

export enum DepositionCardAnimation {
	LEFT_PREV,
	MIDDLE_PREV,
	RIGHT_PREV,
	LEFT_PREV_AUX,
	RIGHT_PREV_AUX,

	MIDDLE_NEXT,
	RIGHT_NEXT,
	LEFT_NEXT,
	RIGHT_NEXT_AUX,
	LEFT_NEXT_AUX,
}

export interface DepositionCardAnimations {
	left: DepositionCardAnimation;
	middle: DepositionCardAnimation;
	right: DepositionCardAnimation;
	leftAux: DepositionCardAnimation;
	rightAux: DepositionCardAnimation;
}

const prevDeposition = (
	setSelected: Dispatch<SetStateAction<DCNode<Deposition>>>,
	setAnimations: Dispatch<SetStateAction<DepositionCardAnimations>>,
	canHandle: boolean
) => {
	if (!canHandle) return;
	setSelected(selected => selected.prev);
	setAnimations({
		left: DepositionCardAnimation.LEFT_PREV,
		middle: DepositionCardAnimation.MIDDLE_PREV,
		right: DepositionCardAnimation.RIGHT_PREV,
		leftAux: DepositionCardAnimation.LEFT_PREV_AUX,
		rightAux: DepositionCardAnimation.RIGHT_PREV_AUX,
	});
};

const nextDeposition = (
	setSelected: Dispatch<SetStateAction<DCNode<Deposition>>>,
	setAnimations: Dispatch<SetStateAction<DepositionCardAnimations>>,
	canHandle: boolean
) => {
	if (!canHandle) return;
	setSelected(selected => selected.next);
	setAnimations({
		left: DepositionCardAnimation.LEFT_NEXT,
		middle: DepositionCardAnimation.MIDDLE_NEXT,
		right: DepositionCardAnimation.RIGHT_NEXT,
		leftAux: DepositionCardAnimation.LEFT_NEXT_AUX,
		rightAux: DepositionCardAnimation.RIGHT_NEXT_AUX,
	});
};

const Depositions: React.FC<Props> = ({ theme }) => {
	const carrousel = new DCLinkedList<Deposition>();
	carrousel.append({
		id: 1,
		name: 'Nome Sobrenome 1',
		profession: 'Profissão 1',
		text: '',
	});

	carrousel.append({
		id: 2,
		name: 'Nome Sobrenome 2',
		profession: 'Profissão 2',
		text: '',
	});

	carrousel.append({
		id: 3,
		name: 'Nome Sobrenome 3',
		profession: 'Profissão 3',
		text: '',
	});

	carrousel.append({
		id: 4,
		name: 'Nome Sobrenome 4',
		profession: 'Profissão 4',
		text: '',
	});

	carrousel.append({
		id: 5,
		name: 'Nome Sobrenome 5',
		profession: 'Profissão 5',
		text: '',
	});

	const [selected, setSelected] = useState(carrousel.selected);

	const [animations, setAnimations] = useState<DepositionCardAnimations>({
		leftAux: null,
		left: null,
		middle: null,
		right: null,
		rightAux: null,
	});

	const canHandle = new Indirection(true);

	return (
		<Container id="depositions">
			<SubContainer>
				<H2>Depoimentos</H2>
				<ButtonContainer>
					<Button
						onClick={() =>
							prevDeposition(setSelected, setAnimations, canHandle.value)
						}
						aria-label="prev"
					>
						<Icon
							icon="play"
							color={theme.colors.accent.default}
							sizeMultiplier={2}
						/>
					</Button>
					<Button
						onClick={() =>
							nextDeposition(setSelected, setAnimations, canHandle.value)
						}
						aria-label="next"
					>
						<Icon
							icon="play"
							color={theme.colors.accent.default}
							sizeMultiplier={2}
						/>
					</Button>
				</ButtonContainer>
				<Background />
			</SubContainer>
			<ShadowContainer>
				<DepositionCard
					animation={animations.leftAux}
					deposition={selected.prev.prev.value}
					canHandle={canHandle}
				/>
				<DepositionCard
					animation={animations.left}
					deposition={selected.prev.value}
					canHandle={canHandle}
				/>
				<DepositionCard
					animation={animations.middle}
					deposition={selected.value}
					canHandle={canHandle}
				/>
				<DepositionCard
					animation={animations.right}
					deposition={selected.next.value}
					canHandle={canHandle}
				/>
				<DepositionCard
					animation={animations.rightAux}
					deposition={selected.next.next.value}
					canHandle={canHandle}
				/>
			</ShadowContainer>
		</Container>
	);
};

export default Depositions;
