import { createAction, handleAction } from 'redux-actions';

const defaultState = null;

export const setBalance = createAction('BALANCE_CHANGED');

export default handleAction(
  setBalance,
  (state, { payload: { balance = 0 } }) => balance,
  defaultState
);
