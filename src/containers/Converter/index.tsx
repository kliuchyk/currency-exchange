import React, { useCallback } from 'react';
import { Form, InputNumber, Input, Button, Select, Row, Col } from 'antd';
import { TEXTS } from './config';
import useLogic from './useLogic';
import './styles.css';

const Converter = () => {
  const {
    allIds,
    base,
    amountToConvert,
    setAmountToConvert,
    convertedResult,
    currencyConvertFrom,
    setCurrencyConvertFrom,
    currencyConvertTo,
    setCurrencyConvertTo,
    convertMoney
  } = useLogic();

  const renderOptions = useCallback((iterable: string[]) => {
    return iterable.map((currency) => (
      <Select.Option key={currency} value={currency}>
        {currency}
      </Select.Option>
    ));
  }, []);

  return (
    <div className="container">
      <Form layout={'vertical'}>
        <Row>
          <Col span={12} style={{ paddingRight: '30px' }}>
            <Row>
              <Col span={16} style={{ paddingRight: '10px' }}>
                <Form.Item label={TEXTS.FORM_LABELS.INPUT}>
                  <InputNumber
                    bordered={false}
                    size="large"
                    placeholder="input placeholder"
                    type="number"
                    value={amountToConvert}
                    onChange={(newValue) =>
                      setAmountToConvert(newValue as number)
                    }
                    className="input-number"
                  />
                </Form.Item>
              </Col>
              <Col span={8} style={{ paddingLeft: '10px' }}>
                <Form.Item label="input currency">
                  <Select
                    size="large"
                    defaultValue={currencyConvertFrom}
                    onChange={(newValue) => setCurrencyConvertFrom(newValue)}
                  >
                    {renderOptions([base, ...allIds])}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={12} style={{ paddingLeft: '30px' }}>
            <Row>
              <Col span={16} style={{ paddingRight: '10px' }}>
                <Form.Item label={TEXTS.FORM_LABELS.OUTPUT}>
                  <Input
                    placeholder="input placeholder"
                    size="large"
                    value={convertedResult as string}
                    style={{
                      width: '100%',
                      outline: 'none',
                      border: 'solid #d9d9d9',
                      borderWidth: '0 0 2px'
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={8} style={{ paddingLeft: '10px' }}>
                <Form.Item label="input currency">
                  <Select
                    size="large"
                    defaultValue={currencyConvertTo}
                    onChange={(newValue) => setCurrencyConvertTo(newValue)}
                  >
                    {renderOptions([...allIds])}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      <Button
        size="large"
        type="primary"
        className="convert-btn"
        onClick={convertMoney}
      >
        Convert
      </Button>
    </div>
  );
};

export default Converter;
