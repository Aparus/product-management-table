export const product = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_PRODUCT':
      if (state.id !== action.id) return state;
      return {
        ...state,
        completed: !state.completed,
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
