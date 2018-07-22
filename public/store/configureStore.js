import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import rootReducer from '../reducers';
import getData from '../middleWare/getData';

export const history = createHistory();
const middleware = routerMiddleware(history);

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleware, getData),
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
