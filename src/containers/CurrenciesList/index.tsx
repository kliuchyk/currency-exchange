import React, { useEffect, useState } from 'react';
import { getCurrenciesRates } from '../../api';

export default function CurrenciesList() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchRates = async () => {
      const { base, rates } = await getCurrenciesRates();
      console.log(base);
      console.log(Array.isArray(rates));
      setRates(rates);
    };
    fetchRates();
  }, []);

  return (
    <div>
      <h3>Currencies Rates</h3>
      {Object.keys(rates).map((itemKey, idx) => (
        <div key={idx}>{itemKey}</div>
      ))}
    </div>
  );
}
