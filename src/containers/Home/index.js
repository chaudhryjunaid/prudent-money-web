import React from 'react';
import  * as R from 'ramda';
import Step from '../../components/Step';

const steps = [
  {text: 'Step1', action: function() { console.log('hi') }, completed: false},
  {text: 'Step2', action: function() { console.log('hi') }, completed: true}
];
const indexedMap = R.addIndex(R.map);

const Home = (props) => {
  return (
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
  );
};

export default Home;
