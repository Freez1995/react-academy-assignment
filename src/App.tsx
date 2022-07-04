/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Configurator } from 'views';

import { styles } from './App.styles';

function App() {
  return (
    <Router>
      <Global styles={styles.global} />
      <Routes>
        <Route path="/" element={<Configurator />} />
      </Routes>
    </Router>
  );
}

export default App;
