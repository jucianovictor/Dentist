import moment from 'moment';
import React, { useEffect } from 'react';
import Flow from '../../../model/utils/flow';
import {
	BtnMonthSwitcher,
	Calendar,
	Container,
	DateColorModifier,
	DayNumber,
	Dropdown,
	InputLabel,
	MonthLabel,
	MonthSwitcher,
} from './style';

interface Props {
	value: Date;
	onChange?: (date: Date) => void;
	placeholder?: string;
	alt?: string;
}

const DatePicker: React.FC<Props> = ({
	value,
	onChange,
	placeholder,
	alt,
}: Props) => {
	const today = new Date();
	const labelInputRef = React.useRef<HTMLInputElement>(null);
	const dropdownRef = React.useRef<HTMLDivElement>(null);
	const calendarRef = React.useRef<HTMLDivElement>(null);
	const monthSwitcherRef = React.useRef<HTMLDivElement>(null);

	const [selectedDate, selectDate] = React.useState<Date>(value);
	const [toggledDropdown, toggleDropdown] = React.useState(false);

	//Talvez seja melhor fazer com 1 useState<Date>()
	const [selectedMonth, selectMonth] = React.useState(
		(value || today).getMonth()
	);
	const [selectedYear, selectYear] = React.useState(
		(value || today).getFullYear()
	);

	const addOnBlur = () =>
		window.addEventListener('mousedown', ({ target }: MouseEvent) => {
			if (
				[labelInputRef, dropdownRef, calendarRef, monthSwitcherRef]
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

	const nextMonth = () =>
		selectMonth(month => {
			if (month == 11) {
				selectYear(year => year + 1);
				return 1;
			}
			return month + 1;
		});

	const prevMonth = () =>
		selectMonth(month => {
			if (month == 0) {
				selectYear(year => year - 1);
				return 11;
			}
			return month - 1;
		});

	const getDateStyle = (selectedDate: Date, day: number): DateColorModifier => {
		if (
			selectedDate &&
			selectedDate.toDateString() === today.toDateString() &&
			day == selectedDate.getDate()
		)
			return 'selected';
		if (
			day == today.getDate() &&
			selectedMonth == today.getMonth() &&
			today.getFullYear() == (selectedDate || today).getFullYear()
		)
			return 'today';
		if (!selectedDate) return 'default';
		if (
			selectedDate.getDate() == day &&
			selectedDate.getMonth() == selectedMonth
		)
			return 'selected';
		return 'default';
	};

	return (
		<Container id="datePicker">
			<InputLabel
				ref={labelInputRef}
				type={'text'}
				placeholder={placeholder || 'dd/mm/yyyy'}
				value={selectedDate?.toLocaleDateString() || ''}
				readOnly={true}
				alt={alt || 'Date picker'}
				onClick={() => toggleDropdown(!toggledDropdown)}
			/>
			<Dropdown ref={dropdownRef} toggle={toggledDropdown}>
				<MonthSwitcher ref={monthSwitcherRef}>
					<BtnMonthSwitcher onClick={prevMonth}>&lsaquo;</BtnMonthSwitcher>
					<MonthLabel aria-label="month">
						{Flow.of(new Date())
							.action(date => date.setMonth(selectedMonth))
							.get()
							.toLocaleDateString('default', {
								month: 'long',
							})}
					</MonthLabel>
					<BtnMonthSwitcher onClick={nextMonth}>&rsaquo;</BtnMonthSwitcher>
				</MonthSwitcher>
				<Calendar ref={calendarRef}>
					{Array(moment(new Date(selectedYear, selectedMonth, 1)).daysInMonth())
						.fill(0)
						.map((_, index) => (
							<DayNumber
								key={index}
								onClick={() =>
									selectDate(() =>
										Flow.of(new Date(selectedYear, selectedMonth, index + 1))
											.action(date => onChange && onChange(date))
											.get()
									)
								}
								dateStyle={getDateStyle(selectedDate, index + 1)}
								aria-label={`day ${index + 1}`}
							>
								{index + 1}
							</DayNumber>
						))}
				</Calendar>
			</Dropdown>
		</Container>
	);
};

export default DatePicker;
