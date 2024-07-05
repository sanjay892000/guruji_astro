import React from 'react'
import '../styles/pagethree.css'
function PageThree(props) {
  const { prevStep, formData, handleSubmit } = props;
  return (
    <div className='container'>
      <div className="form-data">
        <h1>Confirm your details</h1>
        <div className="form-page3">
          <p>Name:&nbsp;</p>
          <p>{formData.name}</p>
        </div>
        <div className="form-page3">
          <p>Email:&nbsp;</p>
          <p> {formData.email}</p>
        </div>
        <div className="form-page3">
          <p>Phone:&nbsp;</p>
          <p>{formData.phone}</p>
        </div>
        <div className="form-page3">
          <p>Address Line 1:&nbsp;</p>
          <p>{formData.addline1}</p>
        </div>
        <div className="form-page3">
          <p>Address Line 2:&nbsp;</p>
          <p>{formData.addline2}</p>
        </div>
        <div className="form-page3">
          <p>City:&nbsp;</p>
          <p>{formData.city}</p>
        </div>
        <div className="form-page3">
          <p>State:&nbsp;</p>
          <p>{formData.state}</p>
        </div>
        <div className="form-page3">
          <p>Zip Code:&nbsp;</p>
          <p>{formData.zip}</p>
        </div>
        <div className="button">
          <button type="button" onClick={prevStep}>Back</button>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default PageThree
