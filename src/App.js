import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Books from './components/books';
import Categories from './components/categories';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
