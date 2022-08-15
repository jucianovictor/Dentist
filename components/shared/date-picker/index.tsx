import React, { useEffect } from 'react';
import {
	getMonthNameFromDate,
	getNumberOfDaysFromDate,
} from '../../../model/utils/date-utils';
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
	const [selectedDate, selectDate] = React.useState<Date>(value);
	const [toggledDropdown, toggleDropdown] = React.useState(false);
	const [selectedMonth, selectMonth] = React.useState(
		(value || today).getMonth()
	);

	useEffect(() => {
		window.addEventListener('mousedown', (e: MouseEvent) => {
			const calendarElement = dropdownRef.current.querySelector('#calendar');
			const monthSwitcherElement =
				dropdownRef.current.querySelector('#month-switcher');
			if (
				calendarElement !== (e.target as HTMLElement).parentElement &&
				monthSwitcherElement !== (e.target as HTMLElement).parentElement &&
				labelInputRef.current !== (e.target as HTMLElement) &&
				dropdownRef.current !== (e.target as HTMLElement).parentElement &&
				dropdownRef.current !== (e.target as HTMLElement)
			) {
				toggleDropdown(false);
			}
		});
	}, []);

	const nextMonth = () => selectMonth(month => (month == 11 ? 1 : month + 1));
	const prevMonth = () => selectMonth(month => (month == 0 ? 11 : month - 1));

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
				<MonthSwitcher id="month-switcher">
					<BtnMonthSwitcher onClick={prevMonth}>&lsaquo;</BtnMonthSwitcher>
					<MonthLabel aria-label="month">
						{getMonthNameFromDate(
							Flow.of(new Date())
								.action(date => date.setMonth(selectedMonth))
								.get()
						)}
					</MonthLabel>
					<BtnMonthSwitcher onClick={nextMonth}>&rsaquo;</BtnMonthSwitcher>
				</MonthSwitcher>
				<Calendar id="calendar">
					{Array(
						getNumberOfDaysFromDate(
							new Date((selectedDate || today).getFullYear(), selectedMonth, 1)
						)
					)
						.fill(0)
						.map((_, index) => (
							<DayNumber
								key={index}
								onClick={() =>
									selectDate(previousDate =>
										Flow.of(
											new Date(
												(previousDate || today).getFullYear(),
												selectedMonth,
												index + 1
											)
										)
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
