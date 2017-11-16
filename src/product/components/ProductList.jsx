import ProductRow from "./ProductRow";

const ProductList = ({ products, onProductRowClick }) => (
  <ul>
    {products.map(product => (
      <ProductRow
        key={product.id}
        {...product}
        onClick={() => onProductRowClick(product.id)}
      />
    ))}
  </ul>
);

export default ProductList;
