import React from 'react';
import { TEXTS } from './config';
import useLogic from './useLogic';
import './styles.css';

const PromoSection = () => {
  const { time, date } = useLogic();
  return (
    <div className="promo-section">
      <div className="promo-text">{TEXTS.PROMO}</div>
      <div className="date-time">
        <span className="date">{date}</span>
        <span className="time">{time}</span>
      </div>
    </div>
  );
};

export default PromoSection;
