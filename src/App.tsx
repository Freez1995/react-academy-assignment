import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Configurator } from 'views/configurator/Configurator';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Configurator />} />
      </Routes>
    </Router>
  );
}

export default App;
