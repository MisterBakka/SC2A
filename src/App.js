// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Header/Header';
import Home from './Home/Home'; 
import Blog from './Pages/Blog';


import './index.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
