import React, { useState, useEffect } from 'react';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';


function App() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  useEffect(() => {
    const data = localStorage.getItem('formData');
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    // Submit form data to the server or perform other actions
    alert('Form submitted!');
    setStep(1)
    setFormData({name: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '' })

  };


  return (
    <div>
    {step === 1 && <PageOne nextStep={nextStep} formData={formData} setFormData={setFormData} />}
    {step === 2 && <PageTwo nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />}
    {step === 3 && <PageThree prevStep={prevStep} formData={formData} handleSubmit={handleSubmit} />}
  </div>
  );
}

export default App;
