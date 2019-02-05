import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
// import  * as R from 'ramda';
import Balance from '../../components/Balance';
import BalanceInput from '../../components/BalanceInput';

class CurrentBalance extends Component {
  constructor(props) {
    super(props);
    this.setBalance = this.setBalance.bind(this);
    this.state = {
      balance: 0
    };
  }

  setBalance(event) {
    let { target: { value: balance } } = event;
    balance = parseFloat(balance, 10);
    if (isNaN(balance)) {
      balance = 0;
    }
    this.setState({
      balance
    });
  }

  render() {
    const { balance } = this.state;
    return (
      <div className="current-balance">
        <div>
          Enter the current balance in your bank:
        </div>
        <div>
          <Balance amount={balance} />
        </div>
        <div>
          <BalanceInput value={balance.toString()} onChange={this.setBalance} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { push };
export default connect(null, mapDispatchToProps)(CurrentBalance);
