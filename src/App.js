import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const formGuid = process.env.REACT_APP_FORM_GUID;
  const portalId = process.env.REACT_APP_PORTAL_ID;

  const handleChange = event => {
    setInput(event.target.value);
  }

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
              value: "test@tester.com"
            },
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

  console.log(formGuid, portalId);
  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="name">
          Name:
          <input type="text" name="email" /* onChange={event => handleChange(event)} */ />
        </label>
        <button>submit!</button>
      </form>
    </div>
  );
}

export default App;
