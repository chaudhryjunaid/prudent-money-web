import React from 'react';
import './BalanceInput.scss';

export default (props) => {
  const { value, onChange } = props;
  return (
    <input type="number" value={value} onChange={ onChange } />
  );
}