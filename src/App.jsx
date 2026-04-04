import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<CaseStudyPage />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
