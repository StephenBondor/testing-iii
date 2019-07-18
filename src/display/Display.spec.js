// Test away!
import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../Display/Display';

describe('<Display default state', () => {
	const {getByTestId} = render(<Display />);
	const title = getByTestId('locked');
	expect(title).toHaveAttribute('locked');
});
