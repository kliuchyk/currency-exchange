import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table } from 'antd';

import { getAllRates } from '../../store/currency/actions';
import { selectAllRates, selectLoading } from '../../store/currency/selectors';

export default function CurrenciesList() {
  const dispatch = useDispatch();
  const allRates = useSelector(selectAllRates);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getAllRates());
  }, [dispatch]);

  const columns = [
    {
      title: 'Currency',
      dataIndex: 'origin'
    },
    {
      title: 'Rate',
      dataIndex: 'rate'
    }
  ];

  const ratesValues = Object.entries(allRates).map(
    ([origin, rate], idx: number) => {
      const rateNumValue = (rate as unknown) as number;

      return {
        key: idx,
        origin,
        rate: rateNumValue.toFixed(4)
      };
    }
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Currencies Rates</h3>
      <Row>
        <Col span={4} offset={10}>
          <Table
            dataSource={ratesValues}
            columns={columns}
            pagination={{
              total: ratesValues.length,
              pageSize: ratesValues.length,
              hideOnSinglePage: true
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
