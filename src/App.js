import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});

  const formGuid = process.env.REACT_APP_FORM_GUID;
  const portalId = process.env.REACT_APP_PORTAL_ID;

  // const handleChange = event => {
  //   setInput(event.target.value);
  // }

  const postToHubSpot = async () => {
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fields: [
            {
              name: "email",
              value: "test1@tester.com"
            },
            {
              name: "firstname",
              value: "Tester1"
            }
          ]
        })
      });
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    postToHubSpot();
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
        <label htmlFor="state" required>
          State:
          <input type="text" name="state" /* onChange={event => handleChange(event)} */ />
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
        <label htmlFor="office name" required>
          Office Name:
          <input type="text" name="office name" /* onChange={event => handleChange(event)} */ />
        </label>
        <br />
        <label htmlFor="office address" required>
          Office Address:
          <input type="text" name="office address" /* onChange={event => handleChange(event)} */ />
        </label>
        <br />
        <label htmlFor="office email" required>
          Office Email:
          <input type="text" name="office email" /* onChange={event => handleChange(event)} */ />
        </label>
        <br />
        <label htmlFor="office phone" required>
          Office Phone:
          <input type="number" name="office phone" /* onChange={event => handleChange(event)} */ />
        </label>
        <br />
        <label htmlFor="best contact" required>
          Best Contact in the Office:
          <input type="text" name="best contact" /* onChange={event => handleChange(event)} */ />
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
        <label htmlFor="date to fill" required>
          When are you looking to fill the position?
          <input type="date" name="date" /* onChange={event => handleChange(event)} */ />
        </label>
        <br />
        <button>submit!</button>
      </form>
    </div>
  );
}

export default App;
