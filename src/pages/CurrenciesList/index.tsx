import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import Spinner from '../../components/Spinner';
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
    return <Spinner />;
  }

  return (
    <div>
      <Title>Currencies Rates</Title>
      <RatesList>
        {allIds.map((id) => {
          const currency = byId[id];
          const { origin, rate, isFavorite } = currency;
          return (
            <ListItem>
              <CurrencyItem key={origin}>
                <div className="item-desc">
                  <p>{origin}</p>
                  <span>{rate}</span>
                </div>
                <span
                  className="star"
                  onClick={() =>
                    dispatch(toggleFavorite((origin as unknown) as string))
                  }
                >
                  {isFavorite ? <StarFilled /> : <StarOutlined />}
                </span>
              </CurrencyItem>
            </ListItem>
          );
        })}
      </RatesList>
    </div>
  );
}

const Title = styled.h2`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 28px;
  color: #fff;
`;

const RatesList = styled.ul`
  padding: 0;
  height: 600px;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  font-family: 'Poppins', sans-serif;
`;

const ListItem = styled.div`
  display: inline-block;
`;

const CurrencyItem = styled.div`
  margin-bottom: 15px;
  padding: 0;
  margin: 10px auto;
  padding-right: 30px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: #fff;

  p {
    margin: 0;
    font-weight: bold;
  }

  button {
    display: none;
  }

  .item-desc {
    width: 150px;
  }
`;
