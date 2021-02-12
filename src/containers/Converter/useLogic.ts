import { useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectById,
  selectAllIds,
  selectBase
} from '../../store/currency/selectors';
import { getRatesByCurrencyStart } from '../../store/currency/actions';

const useLogic = () => {
  const dispatch = useDispatch();

  const byId = useSelector(selectById);

  const allIds = useSelector(selectAllIds);

  const base = useSelector(selectBase);

  const [amountToConvert, setAmountToConvert] = useState<number | undefined>();

  const [convertedResult, setConvertedResult] = useState<number | undefined>();

  const [currencyConvertFrom, setCurrencyConvertFrom] = useState(base);

  const [currencyConvertTo, setCurrencyConvertTo] = useState(allIds[0]);

  const convertMoney = useCallback(async () => {
    console.log(currencyConvertFrom, currencyConvertTo, amountToConvert);
    if (!amountToConvert) {
      // show an error msg
      return;
    }

    if (base === currencyConvertFrom) {
      const result = (amountToConvert as number) * byId[currencyConvertTo].rate;
      setConvertedResult(result);
      return;
    }

    dispatch(
      getRatesByCurrencyStart({
        base: currencyConvertFrom,
        convertTo: currencyConvertTo
      })
    );

    // const res = await
  }, [
    base,
    currencyConvertFrom,
    byId,
    currencyConvertTo,
    amountToConvert,
    dispatch
  ]);

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
      convertMoney
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
      convertMoney
    ]
  );
};

export default useLogic;
