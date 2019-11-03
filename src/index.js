import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger'
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feelingsReducer = (state = [], action) => {
    //recieves value from Feelings component
    if (action.type === 'GET_FEELINGS') {
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    //recieves value from Understanding component
    if (action.type === 'GET_UNDER') {
        return action.payload;
    }
    return state;
}

const supportReducer = (state = [], action) => {
    //recieves value from Support component
    if (action.type === 'GET_SUPPORT') {
        return action.payload;
    }
    return state;
}

const commentReducer = (state = [], action) => {
    //recieves value from Comment component
    if (action.type === 'GET_COMMENT') {
        return action.payload;
    }
    return state;
}

const fullReducer = (state = [], action) => {
    //recieves all completed feedback form from database
    if (action.type === 'FULL_REVIEW') {
        return action.payload;
    } return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentReducer,
        fullReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
