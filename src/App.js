import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import UserDetail from './pages/UserDetail.js';
import UserForm from './components/UserForm.js';
import './App.css';

const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<UserDetail />} />
        <Route path="/create" element={<UserForm />} />
      </Routes>
    </div>
  </Router>
);

export default App;
