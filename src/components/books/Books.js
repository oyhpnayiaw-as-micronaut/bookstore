import React from 'react';
import { useSelector } from 'react-redux';
import { selectBookList } from 'src/redux/books/booksSlice';

import BookFilter from './BookFilter';
import BookItem from './BookItem';
import BookNewForm from './BookNewForm';

function Books() {
  const books = useSelector(selectBookList);

  return (
    <div>
      <BookFilter />
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <BookNewForm />
    </div>
  );
}

export default Books;
