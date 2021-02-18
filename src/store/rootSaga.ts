import { all } from 'redux-saga/effects';

import currenciesRates from './currency/sagas/currenciesRatesSaga';

export default function* rootSaga() {
  yield all([currenciesRates()]);
}
