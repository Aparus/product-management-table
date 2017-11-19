import React from 'react';
import { connect } from 'react-redux';
import { toggleProduct } from '../actions';

const getVisibleProducts = (products, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return products;
    case 'SHOW_SELECTED':
      return products.filter(p => p.selected);
    case 'SHOW_NONSELECTED':
      return products.filter(p => !p.selected);
    default:
      return products;
  }
};

// Product is a purely presentational component and doesn't specify any behavior. 
// But it knows how to render product.
const Product = ({
  onClick, selected, SKUNumber, name,
}) => (
  <li onClick={onClick} className={selected ? 'selected' : 'nonSelected'}>
    {SKUNumber} - {name}
  </li>
);

const ProductList = ({ products, onProductClick }) => (
  <ul>
    {products.map(product => (
      <Product
        key={product.SKUNumber}
        {...product}
        onClick={() => onProductClick(product.SKUNumber)}
      />
    ))}
  </ul>
);

const mapStateToProductListProps = state => ({
  products: getVisibleProducts(state.products, state.visibilityFilter),
});

const mapDispatchToProductListProps = dispatch => ({
  onProductClick: (id) => {
    dispatch(toggleProduct(id));
  },
});
const VisibleProductList = connect(mapStateToProductListProps, mapDispatchToProductListProps)(ProductList);

export default VisibleProductList;
