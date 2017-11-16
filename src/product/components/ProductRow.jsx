import React from "react";

const ProductRow = ({ onClick, active, text }) => (
  <li
    onClick={onClick}
    style={{
      backgroundColor: active ? "#ddd" : "none"
    }}
  >
    {text}
  </li>
);

export default ProductRow;
