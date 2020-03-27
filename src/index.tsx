import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import { ThemeProvider } from '@material-ui/styles';

import reducers from './reducers';
import routes from './routes';
import theme from './theme';

const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
        composeWithDevTools({ trace: true })) ||
    compose;
const store = createStore(
    combineReducers(reducers),
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={theme}>
                {Object.entries(routes).map(([path, props]) => (
                    <Route key={path} path={path} {...props} />
                ))}
            </ThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('App')
);
