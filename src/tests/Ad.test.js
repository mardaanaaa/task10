import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Ad from './Ad';

test('renders ad title and content', () => {
    const ad = {
        id: 1,
        title: 'Test Ad',
        content: 'This is a test ad.',
    };
    const { getByText } = render(<Ad {...ad} />);
    const titleElement = getByText(/Test Ad/i);
    const contentElement = getByText(/This is a test ad/i);
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
});

// Add more tests for editing and deleting ads if needed
