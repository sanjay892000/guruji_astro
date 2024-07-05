import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function PageTwo(props) {

    const { nextStep, prevStep, formData, setFormData } = props;

    const formik = useFormik({
        initialValues: formData,
        validationSchema: Yup.object({
          address1: Yup.string().required('required').trim(),
          address2: Yup.string().trim(),
          city: Yup.string().required('required').trim(),
          state: Yup.string().required('required').trim(),
          zip: Yup.string().required('please enter zip code.').matches(/^[0-9]+$/, "please enter a valid zip code").min(6).max(6)
        }),
        onSubmit: (values) => {
          setFormData(values);
          nextStep();
        },
      });

  return (
    <div className="container">
       <form onSubmit={formik.handleSubmit}>
      <h1>Application Form</h1>
      <div className='form-page'>
      <div className="labeltext">
        <label>Address Line 1<span>*</span></label>
        <input
          type="text"
          name="address1"
          onChange={formik.handleChange}
          value={formik.values.address1}
        />
        </div>
        {formik.errors.address1 ? <div>{formik.errors.address1}</div> : null}
      </div>
      <div className='form-page'>
      <div className="labeltext">
        <label>Address Line 2</label>
        <input
          type="text"
          name="address2"
          onChange={formik.handleChange}
          value={formik.values.address2}
        />
        </div>
        {formik.errors.address2 ? <div>{formik.errors.address2}</div> : null}
      </div>
      <div className='form-page'>
      <div className="labeltext">
        <label>City<span>*</span></label>
        <input
          type="text"
          name="city"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        </div>
        {formik.errors.city ? <div>{formik.errors.city}</div> : null}
      </div>
      <div className='form-page'>
      <div className="labeltext">
        <label>State<span>*</span></label>
        <input
          type="text"
          name="state"
          onChange={formik.handleChange}
          value={formik.values.state}
        />
        </div>
        {formik.errors.state ? <div>{formik.errors.state}</div> : null}
      </div>
      <div className='form-page'>
      <div className="labeltext">
        <label>Zip Code<span>*</span></label>
        <input
          type="text"
          name="zip"
          onChange={formik.handleChange}
          value={formik.values.zip}
        />
        </div>
        {formik.errors.zip ? <div>{formik.errors.zip}</div> : null}
      </div>
      <div className="button">
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
      </div>
    </form>
    </div>
  )
}

export default PageTwo
