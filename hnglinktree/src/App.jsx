import React from 'react';
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;