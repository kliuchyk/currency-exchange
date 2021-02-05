import { useCallback, useMemo, useState, useEffect } from 'react';
import { MONTHS } from './config';

const useLogic = () => {
  const [time, setTime] = useState('');

  const [date, setDate] = useState('');

  const setTimeAndDate = useCallback(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const time = `${hours}:${minutes}`;
    setTime(time);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    const normalizedDate = `${MONTHS[month]} ${day}, ${year}`;
    setDate(normalizedDate);
  }, []);

  useEffect(() => {
    setTimeAndDate();
  }, [setTimeAndDate]);

  return useMemo(
    () => ({
      time,
      date
    }),
    [time, date]
  );
};

export default useLogic;
