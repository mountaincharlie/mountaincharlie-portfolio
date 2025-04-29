import { useState } from 'react'
import { HashRouter, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import HomePage from './pages/HomePage/HomePage';

// NOTE: BrowserRouter doesnt work with GH Pages but can be reverted back to when deploying to AWS


function App() {

  return (
    <HashRouter>
      <AppProvider>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </AppProvider>
    </HashRouter>
  );
};

export default App;
