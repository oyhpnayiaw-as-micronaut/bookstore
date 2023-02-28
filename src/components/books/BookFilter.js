import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectBookCategories,
  bookCategoryChanged,
  selectBookCount,
} from 'src/redux/books/booksSlice';
import Button from '../shared/Button';

function BookFilter() {
  const dispatch = useDispatch();
  const categories = useSelector(selectBookCategories);
  const booksCount = useSelector(selectBookCount);

  const [category, setCategory] = useState(() => categories[0]);

  useEffect(() => {
    setCategory(categories[0]);
  }, [booksCount, categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookCategoryChanged({ category }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
      <Button type="submit">Search</Button>
    </form>
  );
}

export default BookFilter;
