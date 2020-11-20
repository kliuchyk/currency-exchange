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
