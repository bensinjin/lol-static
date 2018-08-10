import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { appReducer } from '../stores/app';
import { MainConnected } from '../components/main/MainConnected';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  applyMiddleware(sagaMiddleware),
);

export const Application: React.StatelessComponent = (): JSX.Element => (
    <Provider store={store}>
        <MainConnected />
    </Provider>
);