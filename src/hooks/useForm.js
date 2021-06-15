import { useState } from 'react';

export default function useForm(callback) {
  const [inputs, setInputs] = useState({});

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}