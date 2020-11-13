import { CURRENCIES_ACTIONS } from './actions';

export interface CurrencyRate {
  origin: string;
  rate: number;
}

export type CurrencyRatesList = CurrencyRate[] | [];

export interface CurrencyState {
  favorite: string[];
  loading: boolean;
  rates: CurrencyRatesList;
  base: string;
}

const initialCurrencyState = {
  favorite: ['US'],
  base: 'US',
  loading: false,
  rates: []
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
        rates: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default currenciesReducer;
