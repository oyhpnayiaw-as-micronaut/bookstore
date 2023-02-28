import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { bookAdded } from 'src/redux/books/booksSlice';
import Button from '../shared/Button';
import Input from '../shared/Input';

const initialState = { title: '', author: '' };

function BookNewForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAdded(state));
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="title"
        placeholder="Book Title"
        value={state.title}
        setValue={setState}
        required
      />
      <Input
        name="author"
        placeholder="Author"
        value={state.author}
        setValue={setState}
        required
      />
      <Button type="submit">Add Book</Button>
    </form>
  );
}

export default BookNewForm;
