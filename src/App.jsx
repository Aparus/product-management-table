import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
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
