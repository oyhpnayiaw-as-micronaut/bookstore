import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { bookRemoved } from 'src/redux/books/booksSlice';
import Button from '../shared/Button';

function BookItem({ book }) {
  const { id, title, author } = book;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(bookRemoved({ id }));
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <div>{title}</div>
      <div>{author}</div>
      <Button onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
