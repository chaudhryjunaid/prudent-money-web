import React, { Component } from 'react';
import Root from './Root';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Root />
        <div>Copyright @ {process.env.REACT_APP_COPYRIGHT}</div>
      </React.Fragment>
    );
  }
}

export default App;
