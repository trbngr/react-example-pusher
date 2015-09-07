import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

const logger = loggerMiddleware({
    level: 'info',
    collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    logger // neat middleware that logs actions
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(combineReducers(reducers));

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}