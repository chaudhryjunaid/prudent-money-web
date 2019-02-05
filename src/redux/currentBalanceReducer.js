import { createAction, handleAction } from 'redux-actions';

const defaultState = 0;

export const setBalance = createAction('BALANCE_CHANGED');

export default handleAction(
  setBalance,
  (state, { payload: { balance = 0 } }) => balance,
  defaultState
);
