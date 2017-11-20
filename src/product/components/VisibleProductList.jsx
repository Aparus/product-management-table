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
const ProductRow = ({
  onClick,
  selected,
  SKUNumber,
  name,
  type,
  status,
  activeDate,
  measurement,
  rate,
}) => (
  <tr onClick={onClick} className={selected ? 'selected' : 'nonSelected'}>
    <td>{SKUNumber}</td>
    <td>{name}</td>
    <td>{type}</td>
    <td>{status}</td>
    <td>{activeDate}</td>
    <td>{measurement}</td>
    <td>{rate}</td>
  </tr>
);

const ProductList = ({ products, onProductClick }) => (
  <table className="productTable">
    <thead>
      <tr>
        <th>SKU Number</th>
        <th>Product Name</th>
        <th>Type</th>
        <th>Status</th>
        <th>Active Date</th>
        <th>Measurement</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>
      {products.map(product => (
        <ProductRow
          key={product.SKUNumber}
          {...product}
          onClick={() => onProductClick(product.SKUNumber)}
        />
      ))}
    </tbody>
  </table>
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
