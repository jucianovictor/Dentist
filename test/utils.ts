import { render } from '@testing-library/react';
import React from 'react';
import WithTheme from './utils-components';

export default function renderWithTheme(children: React.ReactNode): void {
	render(WithTheme({ children }));
}
