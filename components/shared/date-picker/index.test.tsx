import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import DatePicker from '.';
import { getMonthNameFromDate } from '../../../model/utils/date-utils';
import renderWithTheme from '../../../test/utils';

const placeholder = 'Select a date';
const alt = 'Date picker';
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const date = new Date(currentYear, currentMonth, 1);

describe('DatePicker', () => {
	it('should display placeholder', async () => {
		renderWithTheme(<DatePicker value={null} {...{ placeholder, alt }} />);

		const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;
		expect(input).toBeTruthy();
	});

	it('should display nothing', async () => {
		renderWithTheme(<DatePicker value={null} {...{ placeholder, alt }} />);

		const input = screen.getByAltText(alt) as HTMLInputElement;
		expect(input.value).toBe('');
	});

	it('should change and display the correct date from null value', async () => {
		renderWithTheme(<DatePicker value={null} {...{ placeholder, alt }} />);
		const input = screen.getByAltText(alt) as HTMLInputElement;

		fireEvent.click(input);
		fireEvent.click(screen.getByText('20'));

		const monthLabel = (await screen.findByLabelText(
			'month'
		)) as HTMLSpanElement;

		expect(input.value).toBe(
			new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				20
			).toLocaleDateString()
		);
		expect(monthLabel.textContent).toBe(
			getMonthNameFromDate(new Date(currentYear, currentMonth, 20))
		);
	});

	it('should change value by onChange', async () => {
		let changed = false;
		renderWithTheme(
			<DatePicker
				value={date}
				onChange={() => (changed = true)}
				{...{ placeholder, alt }}
			/>
		);
		const input = screen.getByAltText(alt) as HTMLInputElement;

		fireEvent.click(input);
		fireEvent.click(screen.getByText('20'));
		const monthLabel = (await screen.findByLabelText(
			'month'
		)) as HTMLSpanElement;

		expect(input.value).toBe(
			new Date(currentYear, currentMonth, 20).toLocaleDateString()
		);
		expect(monthLabel.textContent).toBe(
			getMonthNameFromDate(new Date(currentYear, currentMonth, 20))
		);
		expect(changed).toBeTruthy();
	});
});