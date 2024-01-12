import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store'
import {Provider} from "react-redux";
import App from './App';
import './assets/css/index.css'


const root = ReactDOM.createRoot(
    document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <App/>
        </Provider>
    </>
);
