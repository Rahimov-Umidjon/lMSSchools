import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {Provider} from "react-redux";
import store from "./store";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
