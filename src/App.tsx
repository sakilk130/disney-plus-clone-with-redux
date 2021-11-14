import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
