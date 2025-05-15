import React from 'react';
import { Routes, Route } from "react-router-dom";

import Dashboard from './Pages/Dashboard';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
  );
}

export default App;
