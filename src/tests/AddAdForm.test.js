import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddAdForm from './AddAdForm';

test('adds new ad', () => {
    const handleAddAd = jest.fn();
    const { getByPlaceholderText, getByText } = render(<AddAdForm onAddAd={handleAddAd} />);
    const titleInput = getByPlaceholderText(/Enter title/i);
    const contentInput = getByPlaceholderText(/Enter content/i);
    const addButton = getByText(/Add/i);

    fireEvent.change(titleInput, { target: { value: 'Test Ad' } });
    fireEvent.change(contentInput, { target: { value: 'This is a test ad.' } });
    fireEvent.click(addButton);

    expect(handleAddAd).toHaveBeenCalledWith({ title: 'Test Ad', content: 'This is a test ad.' });
});
