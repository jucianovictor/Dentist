import React, { useEffect, useRef, useState } from 'react';
import { DepositionCardAnimation } from '..';
import Indirection from '../../../../model/utils/indirection';
import {
	Container,
	ProfileCircle,
	ProfileDeposition,
	ProfileImg,
	ProfileName,
	ProfileProfession,
} from './style';

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
			<ProfileCircle>
				<ProfileImg
					src={
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
					}
					alt="profile image"
					width={120}
					height={120}
				/>
			</ProfileCircle>
			<ProfileName>
				<strong> {old.name} Nome Sobrenome </strong>
			</ProfileName>
			<ProfileProfession>Profissão</ProfileProfession>
			<br />
			<ProfileDeposition>
				is simply dummy text of the printing and typesetting industry. Lorem
				Ipsum has been the industry&apos;s standard dummy text ever since the
				1500s dummy text ever.
			</ProfileDeposition>
		</Container>
	);
};

export default DepositionCard;
