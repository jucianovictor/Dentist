import React, { useEffect } from 'react';
import { Container, Dropdown, InputLabel, Option, Selector } from './style';

interface Props<T> {
	options: T[];
	getLabel: (value: T | undefined | null) => string;
	initialValue?: T;
	onChange?: (value: T) => void;
	placeholder?: string;
	alt?: string;
}

function Select<T>({
	options,
	getLabel,
	initialValue,
	onChange,
	placeholder,
	alt,
}: Props<T> & { children?: React.ReactNode }): React.ReactElement {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const selectorRef = React.useRef<HTMLDivElement>(null);

	const [selectedValue, selectValue] = React.useState<T>(initialValue);
	const [toggledDropdown, toggleDropdown] = React.useState(false);

	const addOnBlur = () =>
		window.addEventListener('mousedown', ({ target }: MouseEvent) => {
			if (
				[containerRef, selectorRef]
					.map(ref => ref.current)
					.every(
						element =>
							!(
								element === target ||
								element === (target as HTMLElement).parentElement
							)
					)
			) {
				toggleDropdown(false);
			}
		});

	useEffect(addOnBlur, []);

	const handleValueChange = (value: T) =>
		!+selectValue(value) && onChange && onChange(value);

	const buildSelector = () => {
		return (
			<Selector id="options-container" ref={selectorRef}>
				{options.map((value, i) => (
					<Option
						key={i}
						aria-label={getLabel(value) || ''}
						onClick={() => handleValueChange(value)}
					>
						{getLabel(value)}
					</Option>
				))}
			</Selector>
		);
	};
	return (
		<Container ref={containerRef}>
			<InputLabel
				type={'text'}
				placeholder={placeholder || 'Placeholder'}
				value={selectedValue ? getLabel(selectedValue) : ''}
				readOnly={true}
				alt={alt || 'Selector'}
				onClick={() => toggleDropdown(!toggledDropdown)}
			/>
			<Dropdown toggle={toggledDropdown}>{buildSelector()}</Dropdown>
		</Container>
	);
}

export default Select;
