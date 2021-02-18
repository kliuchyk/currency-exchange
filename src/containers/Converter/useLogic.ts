import { useState, useMemo, useCallback, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import {
  selectById,
  selectAllIds,
  selectBase
} from '../../store/currency/selectors';
import { getExchangeRate } from '../../api';

const useLogic = () => {
  const byId = useSelector(selectById);

  const allIds = useSelector(selectAllIds);

  const base = useSelector(selectBase);

  const [amountToConvert, setAmountToConvert] = useState<number | undefined>();

  const [convertedResult, setConvertedResult] = useState<string | null>(null);

  const [currencyConvertFrom, setCurrencyConvertFrom] = useState(base);

  const [currencyConvertTo, setCurrencyConvertTo] = useState(allIds[0]);

  const [isError, setIsError] = useState(false);

  const getExchangeResult = useCallback(
    async (base: string, convertTo: string) => {
      return await getExchangeRate({
        base,
        convertTo
      });
    },
    []
  );

  const convertMoney = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();

      if (!amountToConvert) {
        setIsError(true);
        return;
      }

      if (base === currencyConvertFrom) {
        const result =
          (amountToConvert as number) * byId[currencyConvertTo].rate;
        setConvertedResult((result.toFixed(3) as unknown) as string);
        return;
      }

      const { rates } = await getExchangeResult(
        currencyConvertFrom,
        currencyConvertTo
      );

      const result = rates ? amountToConvert * rates[currencyConvertTo] : null;

      setConvertedResult(((result as number).toFixed(3) as unknown) as string);
    },
    [
      base,
      currencyConvertFrom,
      byId,
      currencyConvertTo,
      amountToConvert,
      getExchangeResult
    ]
  );

  return useMemo(
    () => ({
      byId,
      allIds,
      base,
      amountToConvert,
      setAmountToConvert,
      convertedResult,
      setConvertedResult,
      currencyConvertFrom,
      setCurrencyConvertFrom,
      currencyConvertTo,
      setCurrencyConvertTo,
      convertMoney,
      isError
    }),
    [
      byId,
      allIds,
      base,
      amountToConvert,
      setAmountToConvert,
      convertedResult,
      setConvertedResult,
      currencyConvertFrom,
      setCurrencyConvertFrom,
      currencyConvertTo,
      setCurrencyConvertTo,
      convertMoney,
      isError
    ]
  );
};

export default useLogic;
