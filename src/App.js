import React, { useState } from 'react';
import './App.css';
import useForm from './hooks/useForm';

function App() {
  const submitForm = () => {
    alert(`Form submitted! 
      State: ${inputs.state}
      Office Name: ${inputs.office_name}
      Office Address: ${inputs.office_address}
      Office Email: ${inputs.office_email}
      Office Phone: ${inputs.office_phone}
      Best Contact: ${inputs.best_contact}
      Date: ${inputs.date}`);
      console.log(inputs);
  }
  const { inputs, handleInputChange, /* handleSubmit */ } = useForm(submitForm);

  // const formGuid = process.env.REACT_APP_FORM_GUID;
  // const portalId = process.env.REACT_APP_PORTAL_ID;

  // const handleChange = event => {
  //   setInput(event.target.value);
  // }

  // const postToHubSpot = async () => {
  //   const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;
  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         fields: [
  //           {
  //             name: "email",
  //             value: "test4@tester.com"
  //           },
  //           {
  //             name: "office_name",
  //             value: "Test Office 1"
  //           }
  //         ]
  //       })
  //     });
  //     const json = await response.json();
  //     console.log(json);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const handleSubmit = event => {
    event.preventDefault();
    // postToHubSpot();
    submitForm();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Type of Job Opportunity:</label>
        <select name="job type">
          <option value="Select">Select One:</option>
          <option value="Dental Assistant">Dental Assistant</option>
          <option value="Medical Assistant">Medical Assistant</option>
          <option value="Dental Front Office">Dental Front Office</option>
        </select>
        <br />
        <label htmlFor="state">
          State:
          <input type="text" name="state" value={inputs.state} onChange={handleInputChange} required />
        </label>
        <br />
        <label>School to Hire From:</label>
        <select name="school">
          <option value="Select">Select One:</option>
          <option value="School 1">School 1</option>
          <option value="School 2">School 2</option>
          <option value="School 3">School 3</option>
        </select>
        <br />
        <label htmlFor="office name">
          Office Name:
          <input type="text" name="office_name" value={inputs.office_name} onChange={handleInputChange} required />
        </label>
        <br />
        <label htmlFor="office address">
          Office Address:
          <input type="text" name="office_address" value={inputs.office_address} onChange={handleInputChange} required />
        </label>
        <br />
        <label htmlFor="office email">
          Office Email:
          <input type="text" name="office_email" value={inputs.office_email} onChange={handleInputChange} required />
        </label>
        <br />
        <label htmlFor="office phone">
          Office Phone:
          <input type="number" name="office_phone" value={inputs.office_phone} onChange={handleInputChange} required />
        </label>
        <br />
        <label htmlFor="best contact">
          Best Contact in the Office:
          <input type="text" name="best_contact" value={inputs.best_contact} onChange={handleInputChange} required />
        </label>
        <br />
        <label>How Should Students Apply?</label>
        <select name="how to apply">
          <option value="Select">Select One:</option>
          <option value="by email">Email</option>
          <option value="in person">In person</option>
          <option value="call">Call</option>
        </select>
        <br />
        <label htmlFor="date to fill">
          When are you looking to fill the position?
          <input type="date" name="date" value={inputs.date} onChange={handleInputChange} required />
        </label>
        <br />
        <button>submit!</button>
      </form>
    </div>
  );
}

export default App;
