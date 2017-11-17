import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './product/store';
import ProductApp from './product/components/ProductApp';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Product managment</h1>
    </header>
    <Provider store={store}>
      <ProductApp />
    </Provider>
  </div>
);

export default App;
