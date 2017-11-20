const productsInitialState = [
  {
    SKUNumber: 12345678,
    name: 'SIP Connectivity',
    type: 'Global',
    status: 'Available',
    activeDate: '10/17/2017',
    measurement: 'Monthly',
    rate: 5,
  },
  {
    SKUNumber: 22345678,
    name: 'Number of Campaigns',
    type: 'Partner Specific',
    status: 'Not Available',
    activeDate: '10/17/2017',
    measurement: 'Weekly',
    rate: 0.25,
  },
  {
    SKUNumber: 32345678,
    name: 'Number of Calls',
    type: 'Client Specific',
    status: 'Available',
    activeDate: '10/17/2017',
    measurement: 'Daily',
    rate: 1,
  },
  {
    SKUNumber: 42345678,
    name: 'Annual Technology Fee',
    type: 'Global',
    status: 'Not Available',
    activeDate: '10/17/2017',
    measurement: 'Yearly',
    rate: 3000,
  },
  {
    SKUNumber: 52345678,
    name: 'Toll Free Numbers',
    type: 'Global',
    status: 'Available',
    activeDate: '10/17/2017',
    measurement: 'Usage',
    rate: 1.25,
  },
];

export default productsInitialState;
