import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectBookList,
  selectBookFetchingState,
} from 'src/redux/books/booksSlice';

import BookItem from './BookItem';
import BookNewForm from './BookNewForm';
import styles from './Books.module.css';

function Books() {
  const books = useSelector(selectBookList);
  const isFetching = useSelector(selectBookFetchingState);

  if (isFetching) {
    return <p>Fetching books</p>;
  }

  return (
    <div>
      <div className={styles.bookList}>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      <BookNewForm />
    </div>
  );
}

export default Books;
