import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions';

/* AddTodo не совсем контейнер, он просто вызывает диспатч,
  ему не нужен стор, поэтому мы можем создать коннект коротким путем:
  AddTodo = connect()(AddTodo); */
const AddProduct0 = ({ dispatch }) => {
  let inputSKUNumber;
  let inputProductName;
  return (
    <div>
      <input
        ref={(node) => {
          inputSKUNumber = node;
        }}
        placeholder="SKU Number"
      />
      <input
        ref={(node) => {
          inputProductName = node;
        }}
        placeholder="Product name"
      />
      <button
        onClick={() => {
          dispatch(addProduct({ SKUNumber: inputSKUNumber.value, name: inputProductName.value }));
          inputSKUNumber.value = '';
          inputProductName.value = '';
        }}
      >
        Add Product
      </button>
    </div>
  );
};
const AddProduct = connect()(AddProduct0);

export default AddProduct;
