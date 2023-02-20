import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <div>{title}</div>
      <div>{author}</div>
      <button type="button">Delete</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
