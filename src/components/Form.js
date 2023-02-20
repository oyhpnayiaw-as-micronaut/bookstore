import React, { useState } from 'react';

function Form() {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={state.value} onChange={handleOnChange} />
      <input name="author" value={state.value} onChange={handleOnChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default Form;
