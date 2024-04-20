import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App.js';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js'; // Импортируйте serviceWorkerRegistration

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorkerRegistration.register(); // Активируйте сервисный работник



