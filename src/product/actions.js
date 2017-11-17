export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const addProduct = text => ({
  type: 'ADD_PRODUCT',
  id: Date.now(),
  text,
});

export const toggleProduct = id => ({
  type: 'TOGGLE_PRODUCT',
  id,
});
