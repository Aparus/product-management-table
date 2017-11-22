import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import Yup from 'yup';
import { addProduct } from '../actions';
import './helper.css';

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="SKUNumber">SKU Number</label>
      <input
        id="SKUNumber"
        placeholder="SKU Number"
        type="number"
        value={values.SKUNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.SKUNumber && touched.SKUNumber ? 'text-input error' : 'text-input'}
      />
      <div className="input-feedback">{touched.SKUNumber ? errors.SKUNumber : ''}</div>

      <label htmlFor="productName">Product Name</label>
      <input
        id="productName"
        placeholder="Product Name"
        type="text"
        value={values.productName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.productName && touched.productName ? 'text-input error' : 'text-input'}
      />
      <div className="input-feedback">{touched.productName ? errors.productName : ''}</div>

      <label htmlFor="type">Type</label>
      <select
        id="type"
        value={values.type}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.type && touched.type ? 'text-input error' : 'text-input'}
      >
        <option value="">Select type</option>
        <option value="Global">Global</option>
        <option value="Partner Specific">Partner Specific</option>
        <option value="Client Specific">Client Specific</option>
      </select>
      <div className="input-feedback">{touched.type ? errors.type : ''}</div>

      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={values.status}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.status && touched.status ? 'text-input error' : 'text-input'}
      >
        <option value="">Select status</option>
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>
      <div className="input-feedback">{touched.status ? errors.status : ''}</div>

      <label htmlFor="activeDate">Active Date</label>
      <input
        id="activeDate"
        value={values.activeDate}
        type="date"
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.activeDate && touched.activeDate ? 'text-input error' : 'text-input'}
      />
      <div className="input-feedback">{touched.activeDate ? errors.activeDate : ''}</div>

      <label htmlFor="measurementPeriod">Measurement Period</label>
      <select
        id="measurementPeriod"
        value={values.measurementPeriod}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.measurementPeriod && touched.measurementPeriod ? 'text-input error' : 'text-input'
        }
      >
        <option value="">Select Measurement Period</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
        <option value="Usage">Usage</option>
      </select>
      <div className="input-feedback">
        {touched.measurementPeriod ? errors.measurementPeriod : ''}
      </div>

      <label htmlFor="standardRate">Rate</label>
      <input
        id="standardRate"
        placeholder="Rate"
        type="number"
        step="0.01"
        value={values.standardRate}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.standardRate && touched.standardRate ? 'text-input error' : 'text-input'}
      />
      <div className="input-feedback">{touched.standardRate ? errors.standardRate : ''}</div>

      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      <DisplayFormikState {...props} />
    </form>
  );
};

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    SKUNumber: Date.now()
      .toString()
      .substr(-8),
    productName: 'Default Product',
    type: 'Global',
    status: 'Available',
    activeDate: '2017-11-15',
    measurementPeriod: 'Monthly',
    standardRate: 10,
  }),

  validationSchema: Yup.object().shape({
    SKUNumber: Yup.number()
      .max(99999999, 'SKU Number must be less than 8 digits')
      .required('SKU Number is required!'),

    productName: Yup.string()
      .min(5, 'Product name must be longer than 5 symbols')
      .max(50, 'Product name must be shorter than 50 symbols')
      .required('Product name is required!'),

    type: Yup.string()
      .min(2, 'Type should be selected')
      .required('Type is required!'),

    status: Yup.string()
      .min(2, 'Status should be selected')
      .required('Status is required!'),

    activeDate: Yup.string()
      .min(2, 'Active Date should be selected')
      .required('Active Date is required!'),

    measurementPeriod: Yup.string()
      .min(2, 'Measurement should be selected')
      .required('Measurement is required!'),

    standardRate: Yup.number()
      .min(0.01, 'Rate must be more than 0')
      .max(99999999, 'Rate must be less than 8 digits')
      .required('Rate is required!'),
  }),
  handleSubmit(values, { props, setSubmitting }) {
    props.dispatch(addProduct(values));
    setSubmitting(false);
    // resetForm();
  },
  /*   handleSubmit: (values, { setSubmitting, dispatch }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }, */
  displayName: 'BasicForm', // helps with React DevTools
})(MyInnerForm);

export const DisplayFormikState = props => (
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

const AddProduct = connect()(EnhancedForm);

export default AddProduct;

/* AddProduct не совсем контейнер, он просто вызывает диспатч,
  ему не нужен стор, поэтому мы можем создать коннект коротким путем:
  AddProduct = connect()(AddProduct); */
/*


const AddProduct0 = ({ dispatch }) => {
  let inputSKUNumber;
  let inputProductName;
  return (
    <div>
      <input
        ref={(node) => {
          inputSKUNumber = node;
        }}
        placeholder="SKU Number"
      />
      <input
        ref={(node) => {
          inputProductName = node;
        }}
        placeholder="Product name"
      />
      <button
        onClick={() => {
          dispatch(addProduct({ SKUNumber: inputSKUNumber.value, name: inputProductName.value }));
          inputSKUNumber.value = '';
          inputProductName.value = '';
        }}
      >
        Add Product
      </button>
    </div>
  );
};
const AddProduct = connect()(AddProduct0);

export default AddProduct; */
