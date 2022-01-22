/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Report from './pages/Report';

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/clientList" element={<Main />} />
      <Route exact path="/report" element={<Report />} />
      <Route
            path="*"
            element={(
              <main style={{ padding: '1rem' }}>
                <p>Theres nothing here!</p>
              </main>
              )}
      />
    </Routes>
  );
}

export default routes;
