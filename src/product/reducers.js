export const product = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...action.payload,
        selected: false,
      };
    case 'TOGGLE_PRODUCT':
      if (state.SKUNumber !== action.SKUNumber) return {
        ...state, 
        selected: false}
      return {
        ...state,
        selected: !state.selected,
      };
    default:
      return state;
  }
};

export const products = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, product(undefined, action)];
    case 'TOGGLE_PRODUCT':
      return state.map(p => product(p, action));
    default:
      return state;
  }
};

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
