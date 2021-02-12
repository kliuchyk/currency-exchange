export const CURRENCIES_ACTIONS = {
  GET_ALL_RATES: 'GET_ALL_RATES',
  SET_ALL_RATES: 'SET_ALL_RATES',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE'
};

export const getAllRates = () => ({
  type: CURRENCIES_ACTIONS.GET_ALL_RATES
});

export const setAllRates = (payload: any) => ({
  type: CURRENCIES_ACTIONS.SET_ALL_RATES,
  payload
});

export const toggleFavorite = (payload: string) => ({
  type: CURRENCIES_ACTIONS.TOGGLE_FAVORITE,
  payload
});

export const GET_RATES_BY_CURRENCY = {
  START: 'GET_ALL_RATES',
  SUCCESS: 'GET_RATES_BY_CURRENCY_SUCCESS',
  ERROR: 'GET_RATES_BY_CURRENCY_ERROR'
};

export const getRatesByCurrencyStart = (payload: { base: string, convertTo: string}) => ({
  type: GET_RATES_BY_CURRENCY.START,
  payload
});

export const getRatesByCurrencySuccess = (payload: any) => ({
  type: GET_RATES_BY_CURRENCY.SUCCESS,
  payload
});

export const getRatesByCurrencyError = () => ({
  type: GET_RATES_BY_CURRENCY.ERROR
});
