import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import Select from '.';
import renderWithTheme from '../../../test/utils';

interface Entity {
	id: number;
	description: string;
}

const options: Entity[] = [
	{
		id: 1,
		description: 'Item 1',
	},
	{
		id: 2,
		description: 'Item 2',
	},
	{
		id: 3,
		description: 'Item 3',
	},
];
const placeholder = 'Select a item';
const alt = 'Select your item';
const getLabel = (option: Entity) => option.description;
const initialValue = {
	id: 0,
	description: 'Item 0',
};

describe('Select', () => {
	describe('Accessibility', () => {
		beforeEach(() => {
			renderWithTheme(<Select {...{ getLabel, options, placeholder, alt }} />);
		});

		it('should display placeholder while in default mode', async () =>
			expect(screen.getByPlaceholderText(placeholder)).toBeTruthy());

		it('should display the correct aria-labels', async () => {
			expect(
				(await screen.findAllByLabelText(/Item/)).map(e => e.textContent)
			).toStrictEqual(options.map(getLabel));
		});

		it('should display the correct alt', async () =>
			expect(screen.getByAltText(alt)).toBeTruthy());
	});

	it('should display the initialValue label while in default mode', async () => {
		renderWithTheme(
			<Select {...{ initialValue, getLabel, options, placeholder, alt }} />
		);

		const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;
		expect(input.value).toBe(initialValue.description);
	});

	it('should change and display the selected value', async () => {
		renderWithTheme(<Select {...{ getLabel, options, placeholder, alt }} />);

		const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;
		fireEvent.click(input);

		const selectedOption = options[1];
		(await screen.findByLabelText(selectedOption.description)).click();

		expect(input.value).toBe(selectedOption.description);
	});
});
