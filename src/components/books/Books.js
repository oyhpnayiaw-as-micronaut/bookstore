import React from 'react';

import BookForm from './BookForm';
import BookItem from './BookItem';

function Books() {
  const books = [
    {
      id: crypto.randomUUID(),
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      id: crypto.randomUUID(),
      title: 'Book 2',
      author: 'Author 2',
    },
  ];

  return (
    <div>
      {books.map((e) => (
        <BookItem key={e.id} title={e.title} author={e.author} />
      ))}
      <BookForm />
    </div>
  );
}

export default Books;
