import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions";

let AddProduct = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addProduct({ id: Date.now(), name: input.value }));
          input.value = "";
        }}
      >
        Add Product
      </button>
    </div>
  );
};
AddProduct = connect()(AddProduct);

export default AddProduct;
