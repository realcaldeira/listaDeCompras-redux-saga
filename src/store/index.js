import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import { loadState, saveState } from "./sagas/localStorage";
import reducers from "./reducers";
import sagas from './sagas';

const localStorageState = loadState();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, localStorageState, composeEnhancers(
  applyMiddleware(...middlewares)
));

sagaMiddleware.run(sagas);

store.subscribe(()=> {
  saveState({ list: store.getState().list })
})

export default store;