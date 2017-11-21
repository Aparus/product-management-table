export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const addProduct = product => ({
  type: 'ADD_PRODUCT',
  product,
});

export const toggleProduct = SKUNumber => ({
  type: 'TOGGLE_PRODUCT',
  SKUNumber,
});

/*
product fields:
SKU Number
Product Name
Type
Status
Active Date
Measurement Period
Standard Rate
*/
