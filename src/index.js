import React from 'react';
import App from './components/App.jsx';
import { Provider } from 'react-redux';

import configureStore from './data/configureStore.js';

const store = configureStore();

React.render(
    <Provider store={store}>
        {() =>
            <App />

        }
    </Provider>,

    document.getElementById('app'));