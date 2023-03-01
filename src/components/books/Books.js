import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectBookList,
  selectBookFetchingState,
} from 'src/redux/books/booksSlice';

import BookItem from './BookItem';
import BookNewForm from './BookNewForm';

function Books() {
  const books = useSelector(selectBookList);
  const isFetching = useSelector(selectBookFetchingState);

  if (isFetching) {
    return <p>Fetching books</p>;
  }

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <BookNewForm />
    </div>
  );
}

export default Books;
