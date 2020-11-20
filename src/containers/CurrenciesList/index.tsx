import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { StarFilled, StarOutlined } from '@ant-design/icons';

import { toggleFavorite, getAllRates } from '../../store/currency/actions';
import {
  selectLoading,
  selectById,
  selectAllIds
} from '../../store/currency/selectors';

export default function CurrenciesList() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const byId = useSelector(selectById);
  const allIds = useSelector(selectAllIds);

  useEffect(() => {
    dispatch(getAllRates());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Currencies Rates</h3>
      <RatesList>
        {allIds.map((id) => {
          const currency = byId[id];
          const { origin, rate, isFavorite } = currency;
          return (
            <CurrencyItem key={origin}>
              <div className="item-desc">
                <p>{origin}</p>
                <span>{rate}</span>
              </div>
              <span className="star"
                onClick={() =>
                  dispatch(toggleFavorite((origin as unknown) as string))
                }
              >
                {isFavorite ? <StarFilled /> : <StarOutlined />}
              </span>
            </CurrencyItem>
          );
        })}
      </RatesList>
    </div>
  );
}

const RatesList = styled.ul`
  padding: 0;
`;

const CurrencyItem = styled.div`
  margin-bottom: 15px;
  padding: 0;
  margin: 10px auto;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  p {
    margin: 0;
    font-weight: bold;
  }

  span {
    color: #888;
  }

  button {
    display: none;
  }

  .item-desc {
    width: 150px;
  }
`;
