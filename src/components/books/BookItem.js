import React from 'react';
import PropTypes from 'prop-types';

function BookItem({ title, author }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
      <div>{title}</div>
      <div>{author}</div>
      <button type="button">Delete</button>
    </div>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
