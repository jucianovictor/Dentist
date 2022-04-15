import { render, screen } from '@testing-library/react';
import GlobalStyleAndAllProviders from '../../../test/utils';
import LabelledInput, { LabelledInputProps } from './index';

describe('<LabelledInput />', () => {
	it('should hold the props from text type', () => {
		const props: LabelledInputProps = {
			label: 'Username:',
			type: 'text',
			id: 'username',
		};

		render(
			<GlobalStyleAndAllProviders>
				<LabelledInput {...props} />
			</GlobalStyleAndAllProviders>
		);
		const label = screen.getByText(props.label);
		const input = screen.getByLabelText(props.label);

		expect(input).toBeInTheDocument();
		expect(label).toBeInTheDocument();
		expect(input.id).toBe(props.id);
	});

	it('should hold the props from email type', () => {
		const props: LabelledInputProps = {
			label: 'Email:',
			type: 'email',
			id: 'email',
		};

		render(
			<GlobalStyleAndAllProviders>
				<LabelledInput {...props} />
			</GlobalStyleAndAllProviders>
		);
		const label = screen.getByText(props.label);
		const input = screen.getByLabelText(props.label);

		expect(input).toBeInTheDocument();
		expect(label).toBeInTheDocument();
		expect(input.id).toBe(props.id);
	});

	it('should hold the props from password type', () => {
		const props: LabelledInputProps = {
			label: 'Password:',
			type: 'password',
			id: 'password',
		};

		render(
			<GlobalStyleAndAllProviders>
				<LabelledInput {...props} />
			</GlobalStyleAndAllProviders>
		);
		const label = screen.getByText(props.label);
		const input = screen.getByLabelText(props.label);

		expect(input).toBeInTheDocument();
		expect(label).toBeInTheDocument();
		expect(input.id).toBe(props.id);
	});
});
