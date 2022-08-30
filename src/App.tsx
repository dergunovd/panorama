import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { View, Configurator, Landing } from './components';

const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/p/:id" element={<View />} />
      <Route path="/configurator" element={<Configurator />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  </Router>
);

export default App;
