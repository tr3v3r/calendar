import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App';
import configureStore, { history } from './store/configureStore';

import './styles/style.css';


const store = configureStore();

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Route path="/" component={App} />
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
    document.getElementById('root'),
  );
};

render();
export default store;
