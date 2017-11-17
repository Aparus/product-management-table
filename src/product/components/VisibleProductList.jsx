import React from 'react';
import { connect } from 'react-redux';
import { toggleProduct } from '../actions';

const getVisibleProducts = (products, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return products;
    case 'SHOW_COMPLETED':
      return products.filter(p => p.completed);
    case 'SHOW_ACTIVE':
      return products.filter(p => !p.completed);
    default:
      return products;
  }
};

// a purely presentational component and doesn't specify any behavior. But it knows how to render at to-do.
const Product = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

const ProductList = ({ products, onProductClick }) => (
  <ul>
    {products.map(product => (
      <Product key={product.id} {...product} onClick={() => onProductClick(product.id)} />
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
