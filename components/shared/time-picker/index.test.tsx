import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import moment from 'moment';
import TimePicker from '.';
import renderWithTheme from '../../../test/utils';

const placeholder = 'Select a time';
const alt = 'Time picker';
const time = moment('08:00 AM', 'HH:mm a');

describe('TimePicker', () => {
	it('should display placeholder when null', async () => {
		renderWithTheme(<TimePicker value={null} {...{ placeholder, alt }} />);

		const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;
		expect(input).toBeTruthy();
	});

	it('should be empty', async () => {
		renderWithTheme(<TimePicker value={null} {...{ placeholder, alt }} />);

		const input = screen.getByAltText(alt) as HTMLInputElement;
		expect(input.value).toBe('');
	});

	it('should change and display the correct time from null value', async () => {
		renderWithTheme(<TimePicker value={null} {...{ placeholder, alt }} />);
		const input = screen.getByAltText(alt) as HTMLInputElement;

		fireEvent.click(input);

		const hour = (await screen.findByLabelText('10 hour')) as HTMLDivElement;

		const minute = (await screen.findByLabelText(
			'10 minute'
		)) as HTMLDivElement;

		const shift = (await screen.findByLabelText('AM')) as HTMLDivElement;

		fireEvent.click(hour);
		fireEvent.click(minute);
		fireEvent.click(shift);

		expect(input.value).toBe('10:10 AM');
	});

	it('should change and display the correct time with 15 minute steps', async () => {
		renderWithTheme(
			<TimePicker value={time} minuteStep={15} {...{ placeholder, alt }} />
		);
		const input = screen.getByAltText(alt) as HTMLInputElement;

		fireEvent.click(input);

		const minuteStepsDisplayed = (
			await screen.findAllByLabelText(/minute/)
		).map(minute => minute.textContent);

		expect(minuteStepsDisplayed).toStrictEqual(['00', '15', '30', '45']);
	});

	it('should activate the onChange 3 times by hour, minute and shift', async () => {
		let changed = 0;
		renderWithTheme(
			<TimePicker
				value={time}
				onChange={() => changed++}
				{...{ placeholder, alt }}
			/>
		);
		const input = screen.getByAltText(alt) as HTMLInputElement;

		fireEvent.click(input);

		const hour = (await screen.findByLabelText('10 hour')) as HTMLDivElement;

		const minute = (await screen.findByLabelText(
			'10 minute'
		)) as HTMLDivElement;

		const shift = (await screen.findByLabelText('AM')) as HTMLDivElement;

		fireEvent.click(hour);
		fireEvent.click(minute);
		fireEvent.click(shift);

		expect(changed).toBe(3);
	});
});
