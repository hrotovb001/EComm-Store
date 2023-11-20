import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import CartDetailsPage from './CartDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/cart" element={<CartDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
