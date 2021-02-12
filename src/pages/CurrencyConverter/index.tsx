import React from 'react';
import PromoSection from '../../components/PromoSection';
import Converter from '../../containers/Converter';

export default function CurrencyConverter() {
  return (
    <div className="exchange-page">
      <PromoSection />
      <Converter />
    </div>
  );
}
