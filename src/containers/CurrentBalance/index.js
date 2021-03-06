import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
// import  * as R from 'ramda';
import Balance from '../../components/Balance';
import BalanceInput from '../../components/BalanceInput';
import { setBalance } from '../../redux/currentBalanceReducer';
import './CurrentBalance.scss';

class CurrentBalance extends Component {
  constructor(props) {
    super(props);
    this.setBalance = this.setBalance.bind(this);
  }

  setBalance(event) {
    const { setBalance } = this.props;
    let { target: { value: balance } } = event;
    balance = parseFloat(balance, 10);
    if (isNaN(balance)) {
      balance = 0;
    }
    setBalance({
      balance
    });
  }

  render() {
    const { balance } = this.props;
    const { push } = this.props;

    const value = balance && balance.toString() || '';

    return (
      <div className="currentBalance">
        <div>
          Enter the current balance in your bank:
        </div>
        <div>
          <Balance amount={balance} />
        </div>
        <div>
          <BalanceInput value={value} onChange={this.setBalance} />
        </div>
        <div>
          <button 
            className="backBtn"
            onClick={() => push('/')}
          >
            Back
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  balance: state.balance
});

const mapDispatchToProps = {
  push,
  setBalance
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentBalance);
