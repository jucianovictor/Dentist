import { Dispatch, SetStateAction, useState } from 'react';
import {
	DCLinkedList,
	DCNode,
} from '../../../model/utils/doubly-cyclic-linked-list';
import Indirection from '../../../model/utils/indirection';
import DepositionCard, { Deposition } from './deposition-card';
import { Background, Container, ShadowContainer, SubContainer } from './style';

interface Props {}

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

const Depositions: React.FC<Props> = () => {
	const carrousel = new DCLinkedList<Deposition>();
	carrousel.append({
		id: 1,
		name: '',
		profession: '',
		text: '',
	});

	carrousel.append({
		id: 2,
		name: '',
		profession: '',
		text: '',
	});

	carrousel.append({
		id: 3,
		name: '',
		profession: '',
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
		<Container>
			<SubContainer>
				<div>
					<button
						onClick={() =>
							prevDeposition(setSelected, setAnimations, canHandle.value)
						}
					>
						prev
					</button>
					<button
						onClick={() =>
							nextDeposition(setSelected, setAnimations, canHandle.value)
						}
					>
						next
					</button>
				</div>
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
