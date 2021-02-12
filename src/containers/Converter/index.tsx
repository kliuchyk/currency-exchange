import React, { useEffect } from 'react';
import { Form, InputNumber, Button, Select, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRates } from '../../store/currency/actions';
import { TEXTS } from './config';
import {
  selectLoading,
  selectById,
  selectAllIds,
  selectBase
} from '../../store/currency/selectors';
import './styles.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const Converter = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const byId = useSelector(selectById);
  const allIds = useSelector(selectAllIds);
  const base = useSelector(selectBase);

  useEffect(() => {
    dispatch(getAllRates());
  }, [dispatch]);

  return (
    <div className="container">
      <Form layout={'vertical'}>
        <Row>
          <Col span={8}>
            <Form.Item label={TEXTS.FORM_LABELS.INPUT}>
              <InputNumber
                size="large"
                placeholder="input placeholder"
                type="number"
                style={{
                  width: '100%',
                  outline: 'none',
                  borderWidth: '0 0 2px'
                }}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="input currency">
              <Select size="large" defaultValue={base}>
                {[base, ...allIds].map((currency) => (
                  <Select.Option key={currency} value={currency}>
                    {currency}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label={TEXTS.FORM_LABELS.OUTPUT}>
              <InputNumber
                placeholder="input placeholder"
                size="large"
                style={{
                  width: '100%',
                  outline: 'none',
                  borderWidth: '0 0 2px'
                }}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="input currency">
              <Select size="large">
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item> */}
      </Form>
    </div>
  );
};

export default Converter;
