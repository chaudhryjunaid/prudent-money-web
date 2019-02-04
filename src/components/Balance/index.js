import React from 'react';
import './Balance.scss';

export default (props) => {
  const { amount = 0 } = props;
  const { currency = 'USD' } = props;
  return (
    <span className="balance">
      <span className="amount">{amount}</span>
      <span className="currency">{currency}</span>
    </span>
  );
}