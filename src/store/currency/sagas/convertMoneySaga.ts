import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_RATES_BY_CURRENCY } from './../actions';
import { getRatesByCurrency } from './../../../api';

interface Props {
  type: string;
  base: string;
  convertTo: string;
}

function* convertMoneyWorker({ base, convertTo }: Props) {
  try {
    // TODO: fix errors
    console.log('payload', base, convertTo);
    const response = yield call(getRatesByCurrency, base, convertTo);
  } catch (error) {
    console.log(error);
  }
}

export default function* convertMoneyWatcher() {
  yield takeEvery(GET_RATES_BY_CURRENCY.START, convertMoneyWorker);
}
