
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

// require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import "normalize.css";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductCreate from './components/ProductCreate';

import { createStore, combineReducers, compose } from 'redux';
import ProductFormReducer from './reducers/ProductFormReducer';

const rootReducer = combineReducers({
    products: ProductFormReducer,
});

const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const myStore = createStore(rootReducer, composeEnhancers());


class Main extends React.Component {
    render() {
        return (
            <Provider store={myStore}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div className="contentPanel">
                            <Route exact path='/' component={Home}/>
                            <Route path='/productList' component={ProductList}/>
                            <Route path='/productCreate' component={ProductCreate}/>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root" */
if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}
