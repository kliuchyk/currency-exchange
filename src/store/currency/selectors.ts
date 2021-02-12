import { createSelector } from 'reselect';

import { CurrencyState } from './reducer';
import { AppState } from './../configureStore';

const selectCurrencies = (state: AppState) => state.currencies;

export const selectById = createSelector(
  selectCurrencies,
  (currency: CurrencyState) => currency.byId
);

export const selectAllIds = createSelector(
  selectCurrencies,
  (currency: CurrencyState) => currency.allIds
);

export const selectLoading = createSelector(
  selectCurrencies,
  (currency: CurrencyState) => currency.loading
);

export const selectBase = createSelector(
  selectCurrencies,
  (currency: CurrencyState) => currency.base
);
