import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}