const productsInitialState = [
  {
    SKUNumber: 12345678,
    productName: 'SIP Connectivity',
    type: 'Global',
    status: 'Available',
    activeDate: '10/17/2017',
    measurementPeriod: 'Monthly',
    standardRate: 5,
  },
  {
    SKUNumber: 22345678,
    productName: 'Number of Campaigns',
    type: 'Partner Specific',
    status: 'Not Available',
    activeDate: '10/17/2017',
    measurementPeriod: 'Weekly',
    standardRate: 0.25,
  },
  {
    SKUNumber: 32345678,
    productName: 'Number of Calls',
    type: 'Client Specific',
    status: 'Available',
    activeDate: '10/17/2017',
    measurementPeriod: 'Daily',
    standardRate: 1,
  },
  {
    SKUNumber: 42345678,
    productName: 'Annual Technology Fee',
    type: 'Global',
    status: 'Not Available',
    activeDate: '10/17/2017',
    measurementPeriod: 'Yearly',
    standardRate: 3000,
  },
  {
    SKUNumber: 52345678,
    productName: 'Toll Free Numbers',
    type: 'Global',
    status: 'Available',
    activeDate: '10/17/2017',
    measurementPeriod: 'Usage',
    standardRate: 1.25,
  },
];

export default productsInitialState;
