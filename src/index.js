import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import {Provider} from 'react-redux';

import './index.css';
import App from './App.tsx';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
