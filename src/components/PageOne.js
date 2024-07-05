import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/pageone.css'

function PageOne(props) {

  const { nextStep, formData, setFormData } = props;

  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      name: Yup.string().required('required').trim(),
      email: Yup.string().email('Invalid email address').required('required'),
      phone: Yup.string().required('please enter a phone number.').matches(/^[0-9]+$/, "please enter a valid number").min(10)
      .max(10)
    }),
    onSubmit: (values) => {
      setFormData(values);
      nextStep();
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} >
        <h1>Application Form</h1>
        <div className='form-page'>
          <div className="labeltext">
            <label>Name<span>*</span></label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>
        <div className='form-page'>
          <div className="labeltext">
            <label>Email<span>*</span></label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div className='form-page'>
          <div className="labeltext">
            <label>Phone No.<span>*</span></label>
            <input
              type="text"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>
          {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
        </div>
        <div className="buttonm">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>

  )
}

export default PageOne
