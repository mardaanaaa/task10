import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddAdForm from '../components/AddAdForm.js';

const mockStore = configureStore([]);

test('renders AddAdForm component', () => {
    const store = mockStore({

    });

    const { getByText } = render(
        <Provider store={store}>
            <AddAdForm />
        </Provider>
    );

});
