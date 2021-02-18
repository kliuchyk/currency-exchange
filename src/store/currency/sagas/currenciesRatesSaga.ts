import { takeEvery, call, put } from 'redux-saga/effects';
import { modifyRateValues } from '../../../utils/modifyRateValues';

import { CURRENCIES_ACTIONS, setAllRates } from './../actions';
import { getCurrenciesRates } from './../../../api';

function* getRatesWorker() {
  try {
    const response = yield call(getCurrenciesRates);
    const modifiedRates = modifyRateValues(response.rates);
    yield put(setAllRates(modifiedRates));
  } catch (error) {
    console.log(error);
  }
}

function* currenciesRatesSaga() {
  yield takeEvery(CURRENCIES_ACTIONS.GET_ALL_RATES, getRatesWorker);
}

export default currenciesRatesSaga;
