import React from 'react';
import Menu from './Menu';
import AddProduct from './AddProduct';
import VisibleProductList from './VisibleProductList';

const ProductApp = () => (
  <div className="productApp">
    <Menu />
    <AddProduct />
    <VisibleProductList />
  </div>
);

export default ProductApp;
