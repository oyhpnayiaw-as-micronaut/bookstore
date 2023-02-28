import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createBook } from 'src/redux/books/booksSlice';
import Button from '../shared/Button';
import Input from '../shared/Input';

const initialState = { title: '', author: '' };

function BookNewForm() {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { title, author } = state;

      if (!title.trim()) {
        throw new Error('Title cannot be empty.');
      }

      if (!author.trim()) {
        throw new Error('Author cannot be empty.');
      }

      await dispatch(
        createBook({
          title: title.trim(),
          author: author.trim(),
        }),
      );

      setState(initialState);
    } catch (err) {
      if (err.message.includes('Title')) {
        e.target.title.focus();
      } else if (err.message.includes('Author')) {
        e.target.author.focus();
      }

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
        <Button type="submit" disabled={loading}>
          Add Book
        </Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default BookNewForm;
