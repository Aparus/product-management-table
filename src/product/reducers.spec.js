import deepFreeze from 'deep-freeze';
import { product } from './reducers';

test('test add product', () => {
  const stateBefore = [];

  const action = {
    type: 'ADD_PRODUCT',
    payload: {
      SKUNumber: 'A1B1C1',
      ProductName: 'SIP Connectivity',
    },
  };

  const stateAfter = [
    {
      SKUNumber: 'A1B1C1',
      ProductName: 'SIP Connectivity',
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(product(stateBefore, action)).toEqual(stateAfter);
});
