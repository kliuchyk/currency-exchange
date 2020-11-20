import { CURRENCIES_ACTIONS } from './actions';

export interface CurrencyRate {
  [key: string]: {
    origin: string;
    rate: number;
    isFavorite: boolean;
  };
}

export type CurrencyRatesList = CurrencyRate[] | {};

export interface CurrencyState {
  loading: boolean;
  base: string;
  allIds: string[];
  byId: CurrencyRatesList;
}

const initialCurrencyState = {
  base: 'US',
  loading: false,
  allIds: [],
  byId: {}
};

const toggleFavorite = (state: CurrencyState, origin: string) => {
  const { byId } = state;

  byId[origin].isFavorite = !byId[origin].isFavorite;

  const favorite = Object.values(byId)
    .filter((currency) => currency.isFavorite)
    .map((item) => item.origin);
  const notFavorite = Object.values(byId)
    .filter((currency) => !currency.isFavorite)
    .map((item) => item.origin);

  return {
    ...state,
    byId,
    allIds: [...favorite, ...notFavorite]
  };
};

export const currenciesReducer = (
  state = initialCurrencyState,
  action: any
) => {
  switch (action.type) {
    case CURRENCIES_ACTIONS.GET_ALL_RATES:
      return {
        ...state,
        loading: true
      };
    case CURRENCIES_ACTIONS.SET_ALL_RATES:
      return {
        ...state,
        byId: action.payload,
        allIds: Object.keys(action.payload),
        loading: false
      };
    case CURRENCIES_ACTIONS.TOGGLE_FAVORITE:
      return toggleFavorite(state, action.payload);
    default:
      return state;
  }
};

export default currenciesReducer;
