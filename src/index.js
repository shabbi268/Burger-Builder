import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const app = (
    <BrowserRouter><App></App></BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
