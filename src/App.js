import React, { useState, useEffect } from 'react';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import baseURL from './BaseURL';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addline1: '',
    addline2: '',
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
  useEffect(() => {

  }, []);


  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0);
  };
  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    const response = await fetch(`${baseURL}/api/form/formdata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: formData.name, email: formData.email, phone: formData.phone, addline1: formData.addline1, addline2: formData.addline2, city: formData.city, state: formData.state, zip: formData.zip }),
    });
    const note = await response.json();
    if (note) {
      alert('Form submitted!');
      setStep(1)
      setFormData({
        name: '',
        email: '',
        phone: '',
        addline1: '',
        addline2: '',
        city: '',
        state: '',
        zip: ''
      })
    }
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
