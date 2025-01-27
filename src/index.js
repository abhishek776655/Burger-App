import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import {Provider} from 'react-redux'
import burgerBuilderreducer from './Store/Reducers/burgerBuilder'
import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import App from './App';
import orderReducer from './Store/Reducers/order'
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import AuthReducers from './Store/Reducers/Auth'
const rootReducer = combineReducers({
    burgerBuilder:burgerBuilderreducer,
    order:orderReducer,
    auth:AuthReducers
})
const composeEnhancers = process.env.NODE_ENV==="development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

const app =
    (<Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        </Provider>
    )


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
