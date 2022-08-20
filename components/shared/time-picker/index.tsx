import moment, { Moment } from 'moment';
import React, { useEffect } from 'react';
import {
	Container,
	Dropdown,
	InputLabel,
	Option,
	Selector,
	SelectorsContainer,
} from './style';

interface Props {
	value: Moment;
	onChange?: (value: Moment) => void;
	minuteStep?: number;
	placeholder?: string;
	alt?: string;
}

const TimePicker: React.FC<Props> = ({
	value,
	onChange,
	minuteStep = 1,
	placeholder,
	alt,
}: Props) => {
	const selectorsContainerRef = React.useRef<HTMLDivElement>(null);
	const containerRef = React.useRef<HTMLDivElement>(null);

	const hourSelectorRef = React.useRef<HTMLDivElement>(null);
	const minuteSelectorRef = React.useRef<HTMLDivElement>(null);
	const shiftRef = React.useRef<HTMLDivElement>(null);

	const [selectedTime, selectTime] = React.useState<Moment>(value);
	const [toggledDropdown, toggleDropdown] = React.useState(false);

	const addOnBlur = () =>
		window.addEventListener('mousedown', ({ target }: MouseEvent) => {
			if (
				[
					containerRef,
					selectorsContainerRef,
					hourSelectorRef,
					minuteSelectorRef,
					shiftRef,
				]
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

	const handleTimeChange = (time: Moment) =>
		!+selectTime(time) && onChange && onChange(time);

	const buildSelectors = () => {
		const until12 = [...Array(12).keys()].map(i => i + 1);
		const until59 = [...Array(60 / minuteStep).keys()].map(
			minute => minute * minuteStep
		);
		const ampm = ['AM', 'PM'];

		return (
			<SelectorsContainer ref={selectorsContainerRef}>
				<Selector ref={hourSelectorRef} column={1}>
					{until12.map(hour => (
						<Option
							key={hour}
							aria-label={`${hour} hour`}
							onClick={() =>
								handleTimeChange(
									moment(
										`${hour}${(selectedTime || moment()).format(':mm A')}`,
										'h:mm a'
									)
								)
							}
						>
							{hour}
						</Option>
					))}
				</Selector>
				<Selector ref={minuteSelectorRef} column={2}>
					{until59.map(minute => (
						<Option
							key={minute}
							aria-label={`${minute} minute`}
							onClick={() =>
								handleTimeChange(
									(selectedTime || moment()).clone().set('minute', minute)
								)
							}
						>
							{minute < 10 ? `0${minute}` : minute}
						</Option>
					))}
				</Selector>
				<Selector ref={shiftRef} column={3}>
					{ampm.map(shift => (
						<Option
							key={shift}
							aria-label={shift}
							onClick={() => {
								handleTimeChange(
									moment(
										`${(selectedTime || moment()).format('h:mm')} ${shift}`,
										'h:mm a'
									)
								);
							}}
						>
							{shift}
						</Option>
					))}
				</Selector>
			</SelectorsContainer>
		);
	};
	return (
		<Container ref={containerRef}>
			<InputLabel
				type={'text'}
				placeholder={placeholder || 'hh:mm'}
				value={selectedTime?.format('LT') || ''}
				readOnly={true}
				alt={alt || 'Time picker'}
				onClick={() => toggleDropdown(!toggledDropdown)}
			/>
			<Dropdown toggle={toggledDropdown}>{buildSelectors()}</Dropdown>
		</Container>
	);
};

export default TimePicker;
