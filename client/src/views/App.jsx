import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/css/App.css'
import Login from './login'
import ListUsers from './listUsers'

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
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<ListUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
