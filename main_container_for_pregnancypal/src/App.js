import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Common components
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';

// Feature components
import Dashboard from './components/features/Dashboard';
import HealthTracker from './components/features/HealthTracker';
import MedicalAdvice from './components/features/MedicalAdvice';
import EmotionalSupport from './components/features/EmotionalSupport';
import Resources from './components/features/Resources';

/**
 * Main App component for PregnancyPal
 * Acts as the container for the entire application
 */
function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <Router>
      <div className="pregnancypal-app">
        <Header />
        
        <div className="main-container">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          
          <main className="content">
            <div className="container">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/health" element={<HealthTracker />} />
                <Route path="/medical" element={<MedicalAdvice />} />
                <Route path="/support" element={<EmotionalSupport />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
