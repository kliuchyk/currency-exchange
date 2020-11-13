import { createSelector } from 'reselect';

import { CurrencyState } from './reducer';
import { AppState } from './../configureStore';

const selectCurrencies = (state: AppState) => state.currencies;

export const selectAllRates = createSelector(
  selectCurrencies,
  (currency: CurrencyState) => currency.rates
);

export const selectLoading = createSelector(
  selectCurrencies,
  (currency: CurrencyState) => currency.loading
);