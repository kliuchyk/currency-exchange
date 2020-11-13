import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { CurrencyState } from './currency/reducer';

export interface AppState {
  currencies: CurrencyState;
};

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
