import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AdList from '../components/AdList.js';

const mockStore = configureStore([]);

test('renders ad list', () => {
    const initialState = {
        ads: [
            { id: 1, title: 'Ad 1', content: 'Content 1' },
            { id: 2, title: 'Ad 2', content: 'Content 2' },
        ],
    };
    const store = mockStore(initialState);
    const { getByText } = render(
        <Provider store={store}>
            <AdList />
        </Provider>
    );
    const ad1Element = getByText(/Ad 1/i);
    const ad2Element = getByText(/Ad 2/i);
    expect(ad1Element).toBeInTheDocument();
    expect(ad2Element).toBeInTheDocument();
});

// Add more tests as needed

