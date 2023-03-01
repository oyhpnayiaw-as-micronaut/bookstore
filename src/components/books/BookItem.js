import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from 'src/redux/books/booksSlice';
import styles from './BookItem.module.css';
import Button from '../shared/Button';

function BookItem({ book }) {
  const { id, title, author } = book;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = async () => {
    setLoading(true);
    await dispatch(removeBook(id));
    setLoading(false);
  };

  return (
    <article className={styles.card}>
      <section>
        <p className={styles.category}>Action</p>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.author}>{author}</div>
        <div className={styles.actions}>
          <button type="button">Comments</button>
          <button
            type="button"
            className={styles.removeBtn}
            onClick={handleRemove}
            disabled={loading}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </section>
      <section className={styles.progress}>
        <div className={styles.progressCircle} />
        <div>
          <div className={styles.progressText}>64%</div>
          <div className={styles.progressCompleted}>Completed</div>
        </div>
      </section>
      <section className={styles.chapterSection}>
        <h3>Current Chapter</h3>
        <p>Chapter 17</p>
        <Button>Update progress</Button>
      </section>
    </article>
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
