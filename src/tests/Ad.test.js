import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'; // Импортируйте Provider из react-redux
import store from '../store'; // Предполагая, что ваш store находится в этом файле или по пути './store'
import Ad from '../components/Ad.js';

test('renders ad title and content', () => {
    const ad = {
        id: 1,
        title: 'Test Ad',
        content: 'This is a test ad.',
    };
    const { getByText } = render(
        <Provider store={store}>
            <Ad {...ad} />
        </Provider>
    );
    const titleElement = getByText(/Test Ad/i);
    const contentElement = getByText(/This is a test ad/i);
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
});

// Добавьте больше тестов для редактирования и удаления объявлений, если нужно
