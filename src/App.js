import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Root from './Root';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Root />
        <Footer />
      </div>
    );
  }
}

export default App;
