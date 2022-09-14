import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/css/App.css'
import Login from './login'
import ListUsers from './listUsers'
import User from './User'
import Random from './Random'
import Nav from '../components/Nav'

function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = localStorage.getItem('token');

  return tokenString;
}

function App() {
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <div className="App">
        {token? <Nav /> :""}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/random" element={<Random />} />
          <Route path="/list" element={<ListUsers />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
