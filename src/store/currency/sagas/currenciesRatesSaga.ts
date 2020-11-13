import { takeEvery, call, put } from 'redux-saga/effects';

import { CURRENCIES_ACTIONS, setAllRates } from './../actions';
import { getCurrenciesRates } from './../../../api';

function* getRatesWorker() {
  try {
    const response = yield call(getCurrenciesRates);
    const { rates } = response;
    yield put(setAllRates(rates));
  } catch (error) {
    console.log(error);
  }
}

export default function* currenciesRatesWatcher() {
  yield takeEvery(CURRENCIES_ACTIONS.GET_ALL_RATES, getRatesWorker);
}
