import { combineReducers } from 'redux';

import { currenciesReducer } from './currency/reducer';

export default combineReducers({
  currencies: currenciesReducer
});
