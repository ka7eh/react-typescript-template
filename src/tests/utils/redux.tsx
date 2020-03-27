import React from 'react';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import { render } from '@testing-library/react';

import reducers, { State } from '../../reducers';

interface RenderWithReduxArgs {
    children: React.ReactNode;
    initialState?: State;
    store?: Store;
}
export const renderWithRedux = ({
    children,
    initialState,
    store
}: RenderWithReduxArgs) => {
    let s = store;
    if (!s) {
        if (initialState) {
            s = createStore(combineReducers(reducers), initialState);
        } else {
            s = createStore(combineReducers(reducers));
        }
    }
    return {
        ...render(<Provider store={s}>{children}</Provider>),
        store
    };
};
