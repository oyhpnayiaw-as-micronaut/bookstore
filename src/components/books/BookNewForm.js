import React from 'react';
import { useDispatch } from 'react-redux';

import { bookAdded } from 'src/redux/books/booksSlice';
import Button from '../shared/Button';

function BookNewForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    dispatch(bookAdded(data));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" required placeholder="Book Title" />
      <input name="author" required placeholder="Author" />
      <Button type="submit">Add Book</Button>
    </form>
  );
}

export default BookNewForm;
