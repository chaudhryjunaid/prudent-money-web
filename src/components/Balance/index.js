import React from 'react';
import { formatBalance } from '../../utils';
import './Balance.scss';

export default (props) => {
  const { amount = 0 } = props;
  const { currency = 'USD' } = props;
  return (
    <span className="balance">
      <span className={`amount ${amount >= 0 ? 'positive' : 'negative'}`}>{formatBalance(amount, currency)}</span>
    </span>
  );
}