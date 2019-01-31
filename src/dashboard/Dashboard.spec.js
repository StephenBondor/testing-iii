// Test away
import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from '../dashboard/Dashboard';

describe('<Dashboard /', () => {
	it('shows the display', () => {
		const {getByTestId} = render(<Dashboard />);
		expect(getByTestId('display')).toBeInTheDocument();
	});
	it('shows the controls', () => {
		const {getByTestId} = render(<Dashboard />);
		expect(getByTestId('controls')).toBeInTheDocument();
	});
});
