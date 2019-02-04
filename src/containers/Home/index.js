import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import  * as R from 'ramda';
import Step from '../../components/Step';

const indexedMap = R.addIndex(R.map);

class Home extends Component {
  getSteps() {
    const { push } = this.props;
    return [{
      text: 'Tell us your current balance',
      action: () => push('/current-balance'),
      completed: false
    }, {
      text: 'Tell us your current balance',
      action: () => {},
      completed: true
    }];
  }

  render() {
    const steps = this.getSteps();
    return (
      <div>
        <div>Complete the following steps to get an insight into your financial position:</div>
        <div>
          {indexedMap((step, idx) => {
            return (
              <Step 
                key={idx}
                idx={idx + 1}
                text={step.text}
                action={step.action}
                completed={step.completed}
              />
            );
          }, steps)}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { push };
export default connect(null, mapDispatchToProps)(Home);
