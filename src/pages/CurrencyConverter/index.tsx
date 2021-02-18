import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PromoSection from '../../components/PromoSection';
import Converter from '../../containers/Converter';
import Spinner from '../../components/Spinner';
import { getAllRates } from '../../store/currency/actions';
import { selectLoading } from '../../store/currency/selectors';

export default function CurrencyConverter() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getAllRates());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="exchange-page">
      <PromoSection />
      <Converter />
    </div>
  );
}
