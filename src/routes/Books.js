import React from 'react';

import Form from 'components/Form';
import Book from 'components/Book';

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
        <Book key={e.id} title={e.title} author={e.author} />
      ))}
      <Form />
    </div>
  );
}

export default Books;
