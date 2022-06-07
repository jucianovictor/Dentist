import React, { useEffect, useRef, useState } from 'react';
import { DepositionCardAnimation } from '..';
import Indirection from '../../../../model/utils/indirection';
import { Container } from './style';

export interface Deposition {
	id: number;
	name: string;
	profession: string;
	text: string;
}

export interface Props {
	deposition: Deposition;
	animation: DepositionCardAnimation;
	canHandle: Indirection<boolean>;
}

const DepositionCard: React.FC<Props> = ({
	deposition,
	animation,
	canHandle,
}: Props) => {
	const [old, setOld] = useState(deposition);

	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		ref.current.onanimationstart = () => (canHandle.value = false);
		ref.current.onanimationend = () => {
			canHandle.value = true;
			setOld(deposition);
		};
	}, [deposition, canHandle]);

	return (
		<Container ref={ref} key={deposition.id} animation={animation}>
			<h1>{old.id}</h1>
		</Container>
	);
};

export default DepositionCard;
