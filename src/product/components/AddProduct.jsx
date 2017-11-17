import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions';

/* AddTodo не совсем контейнер, он просто вызывает диспатч,
  ему не нужен стор, поэтому мы можем создать коннект коротким путем:
  AddTodo = connect()(AddTodo); */
let AddProduct = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addProduct(input.value));
          input.value = '';
        }}
      >
        Add Product
      </button>
    </div>
  );
};
AddProduct = connect()(AddProduct);

export default AddProduct;
