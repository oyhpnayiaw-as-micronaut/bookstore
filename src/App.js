import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Books from 'routes/Books';
import Categories from 'routes/Categories';
import Layout from 'components/Layout';

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
