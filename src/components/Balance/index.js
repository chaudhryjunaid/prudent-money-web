import React from 'react';
import { formatBalance } from '../../utils';
import './Balance.scss';

export default (props) => {
  const { amount = 0 } = props;
  const { currency = 'USD' } = props;
  const { debt = false } = props;
  const shownAmount = debt ? -amount : amount;
  return (
    <span className="balance">
      <span className={`amount ${amount >= 0 ? 'positive' : 'negative'}`}>{formatBalance(shownAmount, currency)}</span>
    </span>
  );
}