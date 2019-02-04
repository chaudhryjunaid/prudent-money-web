import React from 'react';
import './step.scss';

export default (props) => {
  const { idx, text, action, completed } = props;
  return (
    <div style={{marginRight: '15px', marginLeft: '15px'}}>
      <div className="step row">
        <div className="col-md-1">
          <div className="index-container"><div className="index">{idx}</div></div>
        </div>
        <div className="col-md-7 text">{text}</div>
        <div className="col-md-2">
          <button className="actionBtn" onClick={action}>{ completed ? 'Edit' : 'Start' }</button>
        </div>
        <div className={`col-md-2 ${completed ? 'done' : 'incomplete'}`}>{completed ? 'tick' : 'incomplete'}</div>
      </div>
    </div>
  );
}