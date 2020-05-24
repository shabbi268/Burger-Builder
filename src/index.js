import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './Store/reducer';

const store = createStore(reducer);

const app = (
    <Provider store = {store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
