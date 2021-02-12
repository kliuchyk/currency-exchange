import { all } from 'redux-saga/effects';

import currenciesRates from './currency/sagas/currenciesRatesSaga';
import convertMoneySaga from './currency/sagas/convertMoneySaga'

export default function* rootSaga() {
  yield all([currenciesRates(), convertMoneySaga()]);
}
