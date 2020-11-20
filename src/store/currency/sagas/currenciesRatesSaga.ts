import { takeEvery, call, put } from 'redux-saga/effects';
import { modifyRateValues } from '../../../utils/modifyRateValues';

import { CURRENCIES_ACTIONS, setAllRates } from './../actions';
import { getCurrenciesRates } from './../../../api';

function* getRatesWorker() {
  try {
    const response = yield call(getCurrenciesRates);
    const { rates } = response;
    const modifiedRates = modifyRateValues(rates);
    yield put(setAllRates(modifiedRates));
  } catch (error) {
    console.log(error);
  }
}

export default function* currenciesRatesWatcher() {
  yield takeEvery(CURRENCIES_ACTIONS.GET_ALL_RATES, getRatesWorker);
}
