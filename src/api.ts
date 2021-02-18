const BASE_API = process.env.REACT_APP_EXCHANGE_RATES_BASE_API;

interface GetRatesProps {
  base: string;
  convertTo: string;
}

export const getCurrenciesRates = async (base: string = 'USD') => {
  const response = await fetch(`${BASE_API}/latest?base=${base}`, {
    mode: 'cors'
  });
  return await response.json();
};

export const getExchangeRate = async ({
  base = 'USD',
  convertTo
}: GetRatesProps) => {
  const response = await fetch(
    `${BASE_API}/latest?base=${base}&symbols=${convertTo}`
  );

  return await response.json();
};
