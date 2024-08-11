import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ComprarNumeroRifa from './pages/ComprarNumeroRifa';
import UsandoBotao from './pages/UsandoBotao';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/comprarnumerorifa" element={<ComprarNumeroRifa />} />
        <Route path="/usandobotao" element={<UsandoBotao />} />
      </Routes>
    </Router>
  );
}

export default App;
