import deepFreeze from 'deep-freeze';
import { products, visibilityFilter } from './reducers';

test('test add product', () => {
  const stateBefore = [];

  const action = {
    type: 'ADD_PRODUCT',
    product: {
      SKUNumber: '12345678',
      name: 'SIP Connectivity',
    },
  };

  const stateAfter = [
    {
      SKUNumber: '12345678',
      name: 'SIP Connectivity',
      selected: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(products(stateBefore, action)).toEqual(stateAfter);
});

test('test toggle product selection', () => {
  const stateBefore = [
    {
      SKUNumber: '12345678',
      name: 'SIP Connectivity',
      selected: false,
    },
  ];

  const action = {
    type: 'TOGGLE_PRODUCT',
    SKUNumber: '12345678',
  };

  const stateAfter = [
    {
      SKUNumber: '12345678',
      name: 'SIP Connectivity',
      selected: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(products(stateBefore, action)).toEqual(stateAfter);
});

test('test Visibility filter change', () => {
  const stateBefore = 'SHOW_ALL';

  const action = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_SELECTED',
  };

  const stateAfter = 'SHOW_SELECTED';

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
});
