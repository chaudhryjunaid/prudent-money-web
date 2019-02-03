import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Root from './Root';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Root />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
